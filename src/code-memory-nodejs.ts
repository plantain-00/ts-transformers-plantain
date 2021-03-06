import * as ts from 'typescript'
import { getFunctionName, isDisabled, getPosition, memoryUnit, isNotExecutableStatement } from './util'

/**
 * @public
 */
export const codeMemoryNodeJsTransformer: ts.TransformerFactory<ts.SourceFile> = (context) => sourceFile => {
  const disabledStatements = new Set<ts.Node>()
  const visitor = (node: ts.Node, functionName?: string): ts.Node => {
    if (disabledStatements.has(node)) {
      return node
    }
    const newFunctionName = getFunctionName(node, sourceFile)
    if (newFunctionName) {
      functionName = newFunctionName
    }
    if (ts.isBlock(node)) {
      transformStatements(sourceFile, node, functionName).map((s) => disabledStatements.add(s))
    }
    return ts.visitEachChild(node, (node) => visitor(node, functionName), context)
  }
  transformStatements(sourceFile, sourceFile).map((s) => disabledStatements.add(s))
  return ts.visitNode(sourceFile, visitor)
}

let index = 0

function transformStatements(
  sourceFile: ts.SourceFile,
  node: { statements: ts.NodeArray<ts.Statement> },
  functionName?: string,
) {
  const disabledStatements: ts.Statement[] = []
  const statements: ts.Statement[] = []
  for (const statement of node.statements) {
    if (statement.pos < 0) {
      statements.push(statement)
      continue
    }
    if (isNotExecutableStatement(statement)) {
      statements.push(statement)
      continue
    }
    const ranges = ts.getLeadingCommentRanges(sourceFile.text, statement.pos)
    if (isDisabled('code-memory-nodejs', false, sourceFile, ranges)) {
      disabledStatements.push(statement)
      if (!isDisabled('code-memory-nodejs', true, sourceFile, ranges)) {
        statements.push(statement)
        continue
      }
    }
    if (ts.isReturnStatement(statement)
      || ts.isFunctionDeclaration(statement)
      || ts.isClassDeclaration(statement)) {
      statements.push(statement)
      continue
    }
    const position = getPosition(sourceFile, statement.getStart(sourceFile), functionName)
    const variableName = '_code_memory_nodejs_' + index
    const variableNameAfter = '_code_memory_nodejs_after_' + index
    const variableNameChanges = '_code_memory_nodejs_changes_' + index
    index++
    statements.push(
      ts.createVariableStatement(
        undefined,
        ts.createVariableDeclarationList(
          [ts.createVariableDeclaration(
            ts.createIdentifier(variableName),
            undefined,
            ts.createPropertyAccess(
              ts.createCall(
                ts.createPropertyAccess(
                  ts.createIdentifier("process"),
                  ts.createIdentifier("memoryUsage")
                ),
                undefined,
                []
              ),
              ts.createIdentifier("heapUsed")
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
            ts.createIdentifier(variableNameAfter),
            undefined,
            ts.createPropertyAccess(
              ts.createCall(
                ts.createPropertyAccess(
                  ts.createIdentifier("process"),
                  ts.createIdentifier("memoryUsage")
                ),
                undefined,
                []
              ),
              ts.createIdentifier("heapUsed")
            )
          )],
          ts.NodeFlags.None
        )
      ),
      ts.createVariableStatement(
        undefined,
        ts.createVariableDeclarationList(
          [ts.createVariableDeclaration(
            ts.createIdentifier(variableNameChanges),
            undefined,
            ts.createBinary(
              ts.createIdentifier(variableNameAfter),
              ts.createToken(ts.SyntaxKind.MinusToken),
              ts.createIdentifier(variableName)
            )
          )],
          ts.NodeFlags.None
        )
      ),
      ts.createIf(
        ts.createBinary(
          ts.createIdentifier(variableNameChanges),
          ts.createToken(ts.SyntaxKind.GreaterThanToken),
          ts.createNumericLiteral(memoryUnit)
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
                ts.createBinary(
                  ts.createBinary(
                    ts.createStringLiteral(`[code memory nodejs]${position}: +`),
                    ts.createToken(ts.SyntaxKind.PlusToken),
                    ts.createBinary(
                      ts.createCall(
                        ts.createPropertyAccess(
                          ts.createIdentifier("Math"),
                          ts.createIdentifier("round")
                        ),
                        undefined,
                        [ts.createBinary(
                          ts.createIdentifier(variableNameChanges),
                          ts.createToken(ts.SyntaxKind.SlashToken),
                          ts.createNumericLiteral(memoryUnit)
                        )]
                      ),
                      ts.createToken(ts.SyntaxKind.SlashToken),
                      ts.createNumericLiteral("100")
                    )
                  ),
                  ts.createToken(ts.SyntaxKind.PlusToken),
                  ts.createStringLiteral("MB -> ")
                ),
                ts.createToken(ts.SyntaxKind.PlusToken),
                ts.createParen(ts.createBinary(
                  ts.createCall(
                    ts.createPropertyAccess(
                      ts.createIdentifier("Math"),
                      ts.createIdentifier("round")
                    ),
                    undefined,
                    [ts.createBinary(
                      ts.createIdentifier(variableNameAfter),
                      ts.createToken(ts.SyntaxKind.SlashToken),
                      ts.createNumericLiteral(memoryUnit)
                    )]
                  ),
                  ts.createToken(ts.SyntaxKind.SlashToken),
                  ts.createNumericLiteral("100")
                ))
              ),
              ts.createToken(ts.SyntaxKind.PlusToken),
              ts.createStringLiteral("MB")
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
