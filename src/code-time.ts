import * as ts from 'typescript'
import * as path from 'path'

/**
 * @public
 */
export const codeTimeTransformer: ts.TransformerFactory<ts.SourceFile> = (context) => sourceFile => {
  const disabledStatements = new Set<ts.Node>()
  const visitor: ts.Visitor = (node) => {
    if (disabledStatements.has(node)) {
      return node
    }
    if (ts.isBlock(node)) {
      transformStatements(sourceFile, node).map((s) => disabledStatements.add(s))
    }
    return ts.visitEachChild(node, visitor, context)
  }
  transformStatements(sourceFile, sourceFile).map((s) => disabledStatements.add(s))
  return ts.visitNode(sourceFile, visitor)
}

let index = 0

function transformStatements(sourceFile: ts.SourceFile,node: { statements: ts.NodeArray<ts.Statement> }) {
  const disabledStatements: ts.Statement[] = []
  const statements: ts.Statement[] = []
  for (const statement of node.statements) {
    if (statement.pos < 0) {
      statements.push(statement)
      continue
    }
    const ranges = ts.getLeadingCommentRanges(sourceFile.text, statement.pos)
    if (ranges && ranges.some((r) => sourceFile.text.substring(r.pos, r.end).includes('code-time:disable'))) {
      statements.push(statement)
      disabledStatements.push(statement)
      continue
    }
    if (ts.isReturnStatement(statement)
      || ts.isFunctionDeclaration(statement)
      || ts.isClassDeclaration(statement)) {
      statements.push(statement)
      continue
    }
    const { line, character } = ts.getLineAndCharacterOfPosition(sourceFile, statement.getStart(sourceFile))
    const variableName = '_' + index++
    statements.push(
      ts.createVariableStatement(
        undefined,
        ts.createVariableDeclarationList(
          [ts.createVariableDeclaration(
            ts.createIdentifier(variableName),
            undefined,
            ts.createCall(
              ts.createPropertyAccess(
                ts.createIdentifier("Date"),
                ts.createIdentifier("now")
              ),
              undefined,
              []
            )
          )],
          ts.NodeFlags.None
        )
      ),
      statement,
      ts.createIf(
        ts.createBinary(
          ts.createCall(
            ts.createPropertyAccess(
              ts.createIdentifier("Date"),
              ts.createIdentifier("now")
            ),
            undefined,
            []
          ),
          ts.createToken(ts.SyntaxKind.ExclamationEqualsEqualsToken),
          ts.createIdentifier(variableName)
        ),
        ts.createBlock(
          [ts.createExpressionStatement(ts.createCall(
            ts.createPropertyAccess(
              ts.createIdentifier("console"),
              ts.createIdentifier("debug")
            ),
            undefined,
            [ts.createBinary(
              ts.createBinary(
                ts.createStringLiteral(`[code time]${path.relative(process.cwd(), sourceFile.fileName)}:${line + 1}:${character + 1}: `),
                ts.createToken(ts.SyntaxKind.PlusToken),
                ts.createParen(ts.createBinary(
                  ts.createCall(
                    ts.createPropertyAccess(
                      ts.createIdentifier("Date"),
                      ts.createIdentifier("now")
                    ),
                    undefined,
                    []
                  ),
                  ts.createToken(ts.SyntaxKind.MinusToken),
                  ts.createIdentifier(variableName)
                ))
              ),
              ts.createToken(ts.SyntaxKind.PlusToken),
              ts.createStringLiteral("ms")
            )]
          ))],
          true
        ),
        undefined
      ),
    )
  }
  node.statements = ts.createNodeArray(statements)
  return disabledStatements
}
