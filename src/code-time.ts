import * as ts from 'typescript'
import { getFunctionName, isDisabled, getPosition, isNotExecutableStatement } from './util'

/**
 * @public
 */
export const codeTimeTransformerFactory: (options?: Partial<CodeTimeTransformerFactoryOptions>) => ts.TransformerFactory<ts.SourceFile> = (options) => (context) => sourceFile => {
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
      transformStatements(sourceFile, node, options, functionName).map((s) => disabledStatements.add(s))
    }
    return ts.visitEachChild(node, (node) => visitor(node, functionName), context)
  }
  transformStatements(sourceFile, sourceFile).map((s) => disabledStatements.add(s), options)
  return ts.visitNode(sourceFile, visitor)
}

/**
 * @public
 */
export interface CodeTimeTransformerFactoryOptions {
  threshold: number
}

/**
 * @public
 */
export const codeTimeTransformer: ts.TransformerFactory<ts.SourceFile> = (context) => sourceFile => {
  return codeTimeTransformerFactory()(context)(sourceFile)
}

let index = 0

function transformStatements(
  sourceFile: ts.SourceFile,
  node: { statements: ts.NodeArray<ts.Statement> },
  options?: Partial<CodeTimeTransformerFactoryOptions>,
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
    if (isDisabled('code-time', false, sourceFile, ranges)) {
      disabledStatements.push(statement)
      if (!isDisabled('code-time', true, sourceFile, ranges)) {
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
    const variableName = '_code_time_' + index++
    const now = ts.createCall(
      ts.createPropertyAccess(
        ts.createIdentifier("Date"),
        ts.createIdentifier("now")
      ),
      undefined,
      []
    )
    const condition = options?.threshold ? ts.createBinary(
      ts.createBinary(
        now,
        ts.createToken(ts.SyntaxKind.MinusToken),
        ts.createIdentifier(variableName)
      ),
      ts.createToken(ts.SyntaxKind.GreaterThanEqualsToken),
      ts.createNumericLiteral(options.threshold.toString())
    ) : ts.createBinary(
      now,
      ts.createToken(ts.SyntaxKind.ExclamationEqualsEqualsToken),
      ts.createIdentifier(variableName)
    )
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
        condition,
        ts.createBlock(
          [ts.createExpressionStatement(ts.createCall(
            ts.createPropertyAccess(
              ts.createIdentifier("console"),
              ts.createIdentifier("debug")
            ),
            undefined,
            [ts.createBinary(
              ts.createBinary(
                ts.createStringLiteral(`[code time]${position}: `),
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
