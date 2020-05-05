import * as ts from 'typescript'
import * as path from 'path'

/**
 * @public
 */
export const executedCodeTransformer: ts.TransformerFactory<ts.SourceFile> = (context) => sourceFile => {
  const visitor: ts.Visitor = (node) => {
    if (ts.isBlock(node)) {
      transformStatements(sourceFile, node)
    }
    return ts.visitEachChild(node, visitor, context)
  }
  transformStatements(sourceFile, sourceFile)
  return ts.visitNode(sourceFile, visitor)
}

function transformStatements(sourceFile: ts.SourceFile,node: { statements: ts.NodeArray<ts.Statement> }) {
  const statements: ts.Statement[] = []
  for (const statement of node.statements) {
    const { line, character } = ts.getLineAndCharacterOfPosition(sourceFile, statement.getStart(sourceFile))
    statements.push(
      ts.createExpressionStatement(ts.createCall(
        ts.createPropertyAccess(
          ts.createIdentifier("console"),
          ts.createIdentifier("info")
        ),
        undefined,
        [
          ts.createBinary(
            ts.createBinary(
              ts.createBinary(
                ts.createBinary(
                  ts.createStringLiteral(path.relative(process.cwd(), sourceFile.fileName)),
                  ts.createToken(ts.SyntaxKind.PlusToken),
                  ts.createStringLiteral(":")
                ),
                ts.createToken(ts.SyntaxKind.PlusToken),
                ts.createNumericLiteral(String(line + 1))
              ),
              ts.createToken(ts.SyntaxKind.PlusToken),
              ts.createStringLiteral(":")
            ),
            ts.createToken(ts.SyntaxKind.PlusToken),
            ts.createNumericLiteral(String(character + 1))
          )
        ]
      )),
      statement,
    )
  }
  node.statements = ts.createNodeArray(statements)
}
