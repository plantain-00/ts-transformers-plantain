import * as ts from 'typescript'
import * as path from 'path'

/**
 * @public
 */
export const executedCodeTransformer: ts.TransformerFactory<ts.SourceFile> = (context) => sourceFile => {
  const disabledStatements = new Set<ts.Node>()
  const visitor: ts.Visitor = (node) => {
    if (disabledStatements.has(node)) {
      return node
    }
    if (ts.isBlock(node)) {
      transformStatements(sourceFile, node).map((s) => disabledStatements.add(s))
    } else if (ts.isArrowFunction(node) && !ts.isBlock(node.body)) {
      const start = node.body.getStart(sourceFile)
      const returnStatement = ts.createReturn(node.body)
      node.body = ts.createBlock(
        [
          returnStatement
        ],
        true
      )
      transformStatements(sourceFile, node.body, start).map((s) => disabledStatements.add(s))
    }
    return ts.visitEachChild(node, visitor, context)
  }
  transformStatements(sourceFile, sourceFile).map((s) => disabledStatements.add(s))
  return ts.visitNode(sourceFile, visitor)
}

function transformStatements(
  sourceFile: ts.SourceFile,
  node: { statements: ts.NodeArray<ts.Statement> },
  start?: number,
) {
  const disabledStatements: ts.Statement[] = []
  const statements: ts.Statement[] = []
  for (const statement of node.statements) {
    if (statement.pos < 0) {
      if (start === undefined) {
        statements.push(statement)
        continue
      }
    } else {
      start = statement.getStart(sourceFile)
    }
    const ranges = ts.getLeadingCommentRanges(sourceFile.text, statement.pos)
    if (ranges && ranges.some((r) => sourceFile.text.substring(r.pos, r.end).includes('executed-code:disable'))) {
      statements.push(statement)
      disabledStatements.push(statement)
      continue
    }
    const { line, character } = ts.getLineAndCharacterOfPosition(sourceFile, start)
    statements.push(
      ts.createExpressionStatement(ts.createCall(
        ts.createPropertyAccess(
          ts.createIdentifier("console"),
          ts.createIdentifier("debug")
        ),
        undefined,
        [
          ts.createStringLiteral(`[executed code]${path.relative(process.cwd(), sourceFile.fileName)}:${line + 1}:${character + 1}`),
        ]
      )),
      statement,
    )
  }
  node.statements = ts.createNodeArray(statements)
  return disabledStatements
}
