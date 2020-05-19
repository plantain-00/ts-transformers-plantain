import * as ts from 'typescript'
import * as path from 'path'

/**
 * @public
 */
export const executedCodeTransformer: ts.TransformerFactory<ts.SourceFile> = (context) => sourceFile => {
  const visitor: ts.Visitor = (node) => {
    if (ts.isBlock(node)) {
      transformStatements(sourceFile, node)
    } else if (ts.isArrowFunction(node) && !ts.isBlock(node.body)) {
      const pos = node.body.pos
      const returnStatement = ts.createReturn(node.body)
      node.body = ts.createBlock(
        [
          returnStatement
        ],
        true
      )
      transformStatements(sourceFile, node.body, pos)
    }
    return ts.visitEachChild(node, visitor, context)
  }
  transformStatements(sourceFile, sourceFile)
  return ts.visitNode(sourceFile, visitor)
}

function transformStatements(
  sourceFile: ts.SourceFile,
  node: { statements: ts.NodeArray<ts.Statement> },
  pos?: number,
) {
  const statements: ts.Statement[] = []
  for (const statement of node.statements) {
    if (statement.pos < 0) {
      if (pos === undefined) {
        statements.push(statement)
        continue
      }
    } else {
      pos = statement.getStart(sourceFile)
    }
    const { line, character } = ts.getLineAndCharacterOfPosition(sourceFile, pos)
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
}
