import * as ts from 'typescript'
import { getFileName, isNotExecutableStatement, mutable } from './util'

/**
 * @public
 */
export const executedCodeCoverageTransformer: ts.TransformerFactory<ts.SourceFile> = (context) => (sourceFile) => {
  const disabledStatements = new Set<ts.Node>()
  const allCode = new Set<number>()
  const visitor = (node: ts.Node): ts.Node => {
    if (disabledStatements.has(node)) {
      return node
    }
    if (ts.isBlock(node)) {
      transformStatements(sourceFile, node, allCode).map((s) => disabledStatements.add(s))
    } else if (ts.isArrowFunction(node)) {
      const newNode = mutable(node)
      if (!ts.isBlock(newNode.body)) {
        const start = newNode.body.getStart(sourceFile)
        const returnStatement = ts.createReturn(newNode.body)
        newNode.body = ts.createBlock(
          [
            returnStatement
          ],
          true
        )
        transformStatements(sourceFile, newNode.body, allCode, start).map((s) => disabledStatements.add(s))
      }
    }
    return ts.visitEachChild(node, visitor, context)
  }
  transformStatements(sourceFile, sourceFile, allCode).map((s) => disabledStatements.add(s))

  const result = ts.visitNode(sourceFile, visitor)

  const fileName = getFileName(sourceFile)
  mutable(sourceFile).statements = ts.createNodeArray([
    ts.createVariableStatement(
      undefined,
      ts.createVariableDeclarationList(
        [ts.createVariableDeclaration(
          ts.createIdentifier("_global"),
          undefined,
          ts.createConditional(
            ts.createBinary(
              ts.createTypeOf(ts.createIdentifier("globalThis")),
              ts.createToken(ts.SyntaxKind.ExclamationEqualsEqualsToken),
              ts.createStringLiteral("undefined")
            ),
            ts.createIdentifier("globalThis"),
            ts.createConditional(
              ts.createBinary(
                ts.createTypeOf(ts.createIdentifier("window")),
                ts.createToken(ts.SyntaxKind.ExclamationEqualsEqualsToken),
                ts.createStringLiteral("undefined")
              ),
              ts.createIdentifier("window"),
              ts.createIdentifier("global")
            )
          )
        )],
        ts.NodeFlags.Const
      )
    ),
    ts.createIf(
      ts.createPrefix(
        ts.SyntaxKind.ExclamationToken,
        ts.createPropertyAccess(
          ts.createIdentifier("_global"),
          ts.createIdentifier("_executedCode")
        )
      ),
      ts.createBlock(
        [
          ts.createExpressionStatement(ts.createBinary(
            ts.createPropertyAccess(
              ts.createIdentifier("_global"),
              ts.createIdentifier("_executedCode")
            ),
            ts.createToken(ts.SyntaxKind.EqualsToken),
            ts.createNew(
              ts.createIdentifier("Map"),
              undefined,
              []
            )
          )),
          ts.createExpressionStatement(ts.createBinary(
            ts.createPropertyAccess(
              ts.createIdentifier("_global"),
              ts.createIdentifier("_allCode")
            ),
            ts.createToken(ts.SyntaxKind.EqualsToken),
            ts.createNew(
              ts.createIdentifier("Map"),
              undefined,
              []
            )
          )),
          ts.createExpressionStatement(ts.createBinary(
            ts.createPropertyAccess(
              ts.createIdentifier("_global"),
              ts.createIdentifier("_showCodeCoverage")
            ),
            ts.createToken(ts.SyntaxKind.EqualsToken),
            ts.createFunctionExpression(
              undefined,
              undefined,
              undefined,
              undefined,
              [],
              undefined,
              ts.createBlock(
                [
                  ts.createVariableStatement(
                    undefined,
                    ts.createVariableDeclarationList(
                      [ts.createVariableDeclaration(
                        ts.createIdentifier("total"),
                        undefined,
                        ts.createNumericLiteral("0")
                      )],
                      ts.NodeFlags.None
                    )
                  ),
                  ts.createVariableStatement(
                    undefined,
                    ts.createVariableDeclarationList(
                      [ts.createVariableDeclaration(
                        ts.createIdentifier("totalExecuted"),
                        undefined,
                        ts.createNumericLiteral("0")
                      )],
                      ts.NodeFlags.None
                    )
                  ),
                  ts.createExpressionStatement(ts.createCall(
                    ts.createPropertyAccess(
                      ts.createPropertyAccess(
                        ts.createIdentifier("_global"),
                        ts.createIdentifier("_allCode")
                      ),
                      ts.createIdentifier("forEach")
                    ),
                    undefined,
                    [ts.createFunctionExpression(
                      undefined,
                      undefined,
                      undefined,
                      undefined,
                      [
                        ts.createParameter(
                          undefined,
                          undefined,
                          undefined,
                          ts.createIdentifier("all"),
                          undefined,
                          undefined,
                          undefined
                        ),
                        ts.createParameter(
                          undefined,
                          undefined,
                          undefined,
                          ts.createIdentifier("file"),
                          undefined,
                          undefined,
                          undefined
                        )
                      ],
                      undefined,
                      ts.createBlock(
                        [
                          ts.createVariableStatement(
                            undefined,
                            ts.createVariableDeclarationList(
                              [ts.createVariableDeclaration(
                                ts.createIdentifier("set"),
                                undefined,
                                ts.createCall(
                                  ts.createPropertyAccess(
                                    ts.createPropertyAccess(
                                      ts.createIdentifier("_global"),
                                      ts.createIdentifier("_executedCode")
                                    ),
                                    ts.createIdentifier("get")
                                  ),
                                  undefined,
                                  [ts.createIdentifier("file")]
                                )
                              )],
                              ts.NodeFlags.None
                            )
                          ),
                          ts.createVariableStatement(
                            undefined,
                            ts.createVariableDeclarationList(
                              [ts.createVariableDeclaration(
                                ts.createIdentifier("remain"),
                                undefined,
                                ts.createArrayLiteral(
                                  [],
                                  false
                                )
                              )],
                              ts.NodeFlags.None
                            )
                          ),
                          ts.createFor(
                            ts.createVariableDeclarationList(
                              [ts.createVariableDeclaration(
                                ts.createIdentifier("j"),
                                undefined,
                                ts.createNumericLiteral("0")
                              )],
                              ts.NodeFlags.None
                            ),
                            ts.createBinary(
                              ts.createIdentifier("j"),
                              ts.createToken(ts.SyntaxKind.LessThanToken),
                              ts.createPropertyAccess(
                                ts.createIdentifier("all"),
                                ts.createIdentifier("length")
                              )
                            ),
                            ts.createPostfix(
                              ts.createIdentifier("j"),
                              ts.SyntaxKind.PlusPlusToken
                            ),
                            ts.createBlock(
                              [
                                ts.createVariableStatement(
                                  undefined,
                                  ts.createVariableDeclarationList(
                                    [ts.createVariableDeclaration(
                                      ts.createIdentifier("e"),
                                      undefined,
                                      ts.createElementAccess(
                                        ts.createIdentifier("all"),
                                        ts.createIdentifier("j")
                                      )
                                    )],
                                    ts.NodeFlags.None
                                  )
                                ),
                                ts.createExpressionStatement(ts.createPostfix(
                                  ts.createIdentifier("total"),
                                  ts.SyntaxKind.PlusPlusToken
                                )),
                                ts.createIf(
                                  ts.createCall(
                                    ts.createPropertyAccess(
                                      ts.createIdentifier("set"),
                                      ts.createIdentifier("has")
                                    ),
                                    undefined,
                                    [ts.createIdentifier("e")]
                                  ),
                                  ts.createBlock(
                                    [ts.createExpressionStatement(ts.createPostfix(
                                      ts.createIdentifier("totalExecuted"),
                                      ts.SyntaxKind.PlusPlusToken
                                    ))],
                                    true
                                  ),
                                  ts.createBlock(
                                    [ts.createExpressionStatement(ts.createCall(
                                      ts.createPropertyAccess(
                                        ts.createIdentifier("remain"),
                                        ts.createIdentifier("push")
                                      ),
                                      undefined,
                                      [ts.createIdentifier("e")]
                                    ))],
                                    true
                                  )
                                )
                              ],
                              true
                            )
                          ),
                          ts.createExpressionStatement(ts.createCall(
                            ts.createPropertyAccess(
                              ts.createIdentifier("remain"),
                              ts.createIdentifier("sort")
                            ),
                            undefined,
                            [ts.createFunctionExpression(
                              undefined,
                              undefined,
                              undefined,
                              undefined,
                              [
                                ts.createParameter(
                                  undefined,
                                  undefined,
                                  undefined,
                                  ts.createIdentifier("a"),
                                  undefined,
                                  undefined,
                                  undefined
                                ),
                                ts.createParameter(
                                  undefined,
                                  undefined,
                                  undefined,
                                  ts.createIdentifier("b"),
                                  undefined,
                                  undefined,
                                  undefined
                                )
                              ],
                              undefined,
                              ts.createBlock(
                                [ts.createReturn(ts.createBinary(
                                  ts.createIdentifier("a"),
                                  ts.createToken(ts.SyntaxKind.MinusToken),
                                  ts.createIdentifier("b")
                                ))],
                                false
                              )
                            )]
                          )),
                          ts.createVariableStatement(
                            undefined,
                            ts.createVariableDeclarationList(
                              [ts.createVariableDeclaration(
                                ts.createIdentifier("percent"),
                                undefined,
                                ts.createBinary(
                                  ts.createCall(
                                    ts.createPropertyAccess(
                                      ts.createIdentifier("Math"),
                                      ts.createIdentifier("floor")
                                    ),
                                    undefined,
                                    [ts.createBinary(
                                      ts.createBinary(
                                        ts.createNumericLiteral("10000"),
                                        ts.createToken(ts.SyntaxKind.AsteriskToken),
                                        ts.createPropertyAccess(
                                          ts.createIdentifier("set"),
                                          ts.createIdentifier("size")
                                        )
                                      ),
                                      ts.createToken(ts.SyntaxKind.SlashToken),
                                      ts.createPropertyAccess(
                                        ts.createIdentifier("all"),
                                        ts.createIdentifier("length")
                                      )
                                    )]
                                  ),
                                  ts.createToken(ts.SyntaxKind.SlashToken),
                                  ts.createNumericLiteral("100")
                                )
                              )],
                              ts.NodeFlags.None
                            )
                          ),
                          ts.createVariableStatement(
                            undefined,
                            ts.createVariableDeclarationList(
                              [ts.createVariableDeclaration(
                                ts.createIdentifier("percentString"),
                                undefined,
                                ts.createCall(
                                  ts.createPropertyAccess(
                                    ts.createIdentifier("percent"),
                                    ts.createIdentifier("toFixed")
                                  ),
                                  undefined,
                                  [ts.createNumericLiteral("2")]
                                )
                              )],
                              ts.NodeFlags.None
                            )
                          ),
                          ts.createExpressionStatement(ts.createCall(
                            ts.createPropertyAccess(
                              ts.createIdentifier("console"),
                              ts.createIdentifier("log")
                            ),
                            undefined,
                            [ts.createBinary(
                              ts.createBinary(
                                ts.createBinary(
                                  ts.createBinary(
                                    ts.createBinary(
                                      ts.createBinary(
                                        ts.createBinary(
                                          ts.createBinary(
                                            ts.createBinary(
                                              ts.createStringLiteral("[executed code coverage]"),
                                              ts.createToken(ts.SyntaxKind.PlusToken),
                                              ts.createIdentifier("file")
                                            ),
                                            ts.createToken(ts.SyntaxKind.PlusToken),
                                            ts.createStringLiteral(": ")
                                          ),
                                          ts.createToken(ts.SyntaxKind.PlusToken),
                                          ts.createPropertyAccess(
                                            ts.createIdentifier("set"),
                                            ts.createIdentifier("size")
                                          )
                                        ),
                                        ts.createToken(ts.SyntaxKind.PlusToken),
                                        ts.createStringLiteral(" / ")
                                      ),
                                      ts.createToken(ts.SyntaxKind.PlusToken),
                                      ts.createPropertyAccess(
                                        ts.createIdentifier("all"),
                                        ts.createIdentifier("length")
                                      )
                                    ),
                                    ts.createToken(ts.SyntaxKind.PlusToken),
                                    ts.createStringLiteral(" ")
                                  ),
                                  ts.createToken(ts.SyntaxKind.PlusToken),
                                  ts.createIdentifier("percentString")
                                ),
                                ts.createToken(ts.SyntaxKind.PlusToken),
                                ts.createStringLiteral("% ")
                              ),
                              ts.createToken(ts.SyntaxKind.PlusToken),
                              ts.createCall(
                                ts.createPropertyAccess(
                                  ts.createIdentifier("remain"),
                                  ts.createIdentifier("join")
                                ),
                                undefined,
                                [ts.createStringLiteral(",")]
                              )
                            )]
                          ))
                        ],
                        true
                      )
                    )]
                  )),
                  ts.createVariableStatement(
                    undefined,
                    ts.createVariableDeclarationList(
                      [ts.createVariableDeclaration(
                        ts.createIdentifier("percent"),
                        undefined,
                        ts.createBinary(
                          ts.createCall(
                            ts.createPropertyAccess(
                              ts.createIdentifier("Math"),
                              ts.createIdentifier("floor")
                            ),
                            undefined,
                            [ts.createBinary(
                              ts.createBinary(
                                ts.createNumericLiteral("10000"),
                                ts.createToken(ts.SyntaxKind.AsteriskToken),
                                ts.createIdentifier("totalExecuted")
                              ),
                              ts.createToken(ts.SyntaxKind.SlashToken),
                              ts.createIdentifier("total")
                            )]
                          ),
                          ts.createToken(ts.SyntaxKind.SlashToken),
                          ts.createNumericLiteral("100")
                        )
                      )],
                      ts.NodeFlags.None
                    )
                  ),
                  ts.createVariableStatement(
                    undefined,
                    ts.createVariableDeclarationList(
                      [ts.createVariableDeclaration(
                        ts.createIdentifier("percentString"),
                        undefined,
                        ts.createCall(
                          ts.createPropertyAccess(
                            ts.createIdentifier("percent"),
                            ts.createIdentifier("toFixed")
                          ),
                          undefined,
                          [ts.createNumericLiteral("2")]
                        )
                      )],
                      ts.NodeFlags.None
                    )
                  ),
                  ts.createExpressionStatement(ts.createCall(
                    ts.createPropertyAccess(
                      ts.createIdentifier("console"),
                      ts.createIdentifier("log")
                    ),
                    undefined,
                    [ts.createBinary(
                      ts.createBinary(
                        ts.createBinary(
                          ts.createBinary(
                            ts.createBinary(
                              ts.createBinary(
                                ts.createStringLiteral("[executed code coverage]total: "),
                                ts.createToken(ts.SyntaxKind.PlusToken),
                                ts.createIdentifier("totalExecuted")
                              ),
                              ts.createToken(ts.SyntaxKind.PlusToken),
                              ts.createStringLiteral(" / ")
                            ),
                            ts.createToken(ts.SyntaxKind.PlusToken),
                            ts.createIdentifier("total")
                          ),
                          ts.createToken(ts.SyntaxKind.PlusToken),
                          ts.createStringLiteral(" ")
                        ),
                        ts.createToken(ts.SyntaxKind.PlusToken),
                        ts.createIdentifier("percentString")
                      ),
                      ts.createToken(ts.SyntaxKind.PlusToken),
                      ts.createStringLiteral("%")
                    )]
                  ))
                ],
                true
              )
            )
          )),
        ],
        true
      ),
      undefined
    ),
    ts.createVariableStatement(
      undefined,
      ts.createVariableDeclarationList(
        [ts.createVariableDeclaration(
          ts.createIdentifier("_executedCodeLines"),
          undefined,
          ts.createNew(
            ts.createIdentifier("Set"),
            undefined,
            []
          )
        )],
        ts.NodeFlags.None
      )
    ),
    ts.createExpressionStatement(ts.createCall(
      ts.createPropertyAccess(
        ts.createPropertyAccess(
          ts.createIdentifier("_global"),
          ts.createIdentifier("_executedCode")
        ),
        ts.createIdentifier("set")
      ),
      undefined,
      [
        ts.createStringLiteral(fileName),
        ts.createIdentifier("_executedCodeLines")
      ]
    )),
    ts.createExpressionStatement(ts.createCall(
      ts.createPropertyAccess(
        ts.createPropertyAccess(
          ts.createIdentifier("_global"),
          ts.createIdentifier("_allCode")
        ),
        ts.createIdentifier("set")
      ),
      undefined,
      [
        ts.createStringLiteral(fileName),
        ts.createArrayLiteral(
          Array.from(allCode).map((a) => ts.createNumericLiteral(a.toString())),
          false
        )
      ]
    )),
    ...sourceFile.statements,
  ])

  return result
}

function transformStatements(
  sourceFile: ts.SourceFile,
  node: { statements: ts.NodeArray<ts.Statement> },
  allCode: Set<number>,
  parentStart?: number,
) {
  const disabledStatements: ts.Statement[] = []
  const statements: ts.Statement[] = []
  for (const statement of node.statements) {
    if (isNotExecutableStatement(statement)) {
      statements.push(statement)
      continue
    }
    let start = parentStart
    if (statement.pos < 0) {
      if (parentStart === undefined) {
        statements.push(statement)
        continue
      } else {
        start = parentStart
      }
    } else {
      start = statement.getStart(sourceFile)
    }

    const { line } = ts.getLineAndCharacterOfPosition(sourceFile, start)

    allCode.add(line + 1)

    statements.push(
      ts.createExpressionStatement(ts.createCall(
        ts.createPropertyAccess(
          ts.createIdentifier("_executedCodeLines"),
          ts.createIdentifier("add")
        ),
        undefined,
        [ts.createNumericLiteral((line + 1).toString())]
      )),
      statement,
    )
  }
  node.statements = ts.createNodeArray(statements)
  return disabledStatements
}
