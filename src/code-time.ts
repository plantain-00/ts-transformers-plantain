import * as ts from 'typescript'
import * as path from 'path'

/**
 * @public
 */
export const codeTimeTransformer: ts.TransformerFactory<ts.SourceFile> = (context) => sourceFile => {
  const visitor: ts.Visitor = (node) => {
    if (ts.isBlock(node)) {
      transformStatements(sourceFile, node)
    }
    return ts.visitEachChild(node, visitor, context)
  }
  transformStatements(sourceFile, sourceFile)
  return ts.visitNode(sourceFile, visitor)
}

let index = 0

function transformStatements(sourceFile: ts.SourceFile,node: { statements: ts.NodeArray<ts.Statement> }) {
  const statements: ts.Statement[] = []
  for (const statement of node.statements) {
    if (ts.isReturnStatement(statement)
      || ts.isFunctionDeclaration(statement)
      || ts.isClassDeclaration(statement)) {
      statements.push(statement)
      continue
    }
    if (statement.pos < 0) {
      statements.push(statement)
      continue
    }
    const { line, character } = ts.getLineAndCharacterOfPosition(sourceFile, statement.getStart(sourceFile))
    const variableName = '_' + index++
    const timeVariableName = variableName + "_time"
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
      ts.createVariableStatement(
        undefined,
        ts.createVariableDeclarationList(
          [ts.createVariableDeclaration(
            ts.createIdentifier(timeVariableName),
            undefined,
            ts.createBinary(
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
            )
          )],
          ts.NodeFlags.None
        )
      ),
      ts.createIf(
        ts.createBinary(
          ts.createIdentifier(timeVariableName),
          ts.createToken(ts.SyntaxKind.GreaterThanToken),
          ts.createNumericLiteral("0")
        ),
        ts.createBlock(
          [ts.createExpressionStatement(ts.createCall(
            ts.createPropertyAccess(
              ts.createIdentifier("console"),
              ts.createIdentifier("debug")
            ),
            undefined,
            [ts.createBinary(
              ts.createStringLiteral(`[code time]${path.relative(process.cwd(), sourceFile.fileName)}:${line + 1}:${character + 1}: `),
              ts.createToken(ts.SyntaxKind.PlusToken),
              ts.createIdentifier(timeVariableName)
            )]
          ))],
          true
        ),
        undefined
      ),
    )
  }
  node.statements = ts.createNodeArray(statements)
}
