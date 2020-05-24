import * as ts from 'typescript'
import { getFunctionName, isDisabled, getPosition, isNotExecutableStatement } from './util'

/**
 * @public
 */
export const lastExecutingCodeTransformer: ts.TransformerFactory<ts.SourceFile> = (context) => sourceFile => {
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
      transformStatements(sourceFile, node, undefined, functionName).map((s) => disabledStatements.add(s))
    } else if (ts.isArrowFunction(node) && !ts.isBlock(node.body)) {
      const start = node.body.getStart(sourceFile)
      const returnStatement = ts.createReturn(node.body)
      node.body = ts.createBlock(
        [
          returnStatement
        ],
        true
      )
      transformStatements(sourceFile, node.body, start, functionName).map((s) => disabledStatements.add(s))
    }
    return ts.visitEachChild(node, (node) => visitor(node, functionName), context)
  }
  transformStatements(sourceFile, sourceFile).map((s) => disabledStatements.add(s))
  return ts.visitNode(sourceFile, visitor)
}

function transformStatements(
  sourceFile: ts.SourceFile,
  node: { statements: ts.NodeArray<ts.Statement> },
  parentStart?: number,
  functionName?: string,
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
    const ranges = ts.getLeadingCommentRanges(sourceFile.text, statement.pos)
    if (isDisabled('last-executing-code', false, sourceFile, ranges)) {
      disabledStatements.push(statement)
      if (!isDisabled('last-executing-code', true, sourceFile, ranges)) {
        statements.push(statement)
        continue
      }
    }
    statements.push(
      ts.createExpressionStatement(ts.createBinary(
        ts.createIdentifier('_lastExecutingCode'),
        ts.createToken(ts.SyntaxKind.EqualsToken),
        ts.createStringLiteral(getPosition(sourceFile, start, functionName)),
      )),
      statement,
    )
  }
  node.statements = ts.createNodeArray(statements)
  return disabledStatements
}
