import * as ts from 'typescript'

/**
 * @public
 */
export const safeOptimizationTransformer: ts.TransformerFactory<ts.SourceFile> = (context) => sourceFile => {
  const visitor = (node: ts.Node): ts.Node => {
    if (ts.isPropertyAccessExpression(node)) {
      if (ts.isStringLiteral(node.expression)) {
        if (node.name.text === 'length') {
          return ts.createNumericLiteral(node.expression.text.length.toString())
        }
      }
    }
    const newNode = ts.visitEachChild(node, (node) => visitor(node), context)
    if (ts.isBinaryExpression(newNode)) {
      if (ts.isNumericLiteral(newNode.left) && ts.isNumericLiteral(newNode.right)) {
        const left = +newNode.left.text
        const right = +newNode.right.text
        let value: number 
        if (newNode.operatorToken.kind === ts.SyntaxKind.PlusToken) {
          value = left + right
        } else if (newNode.operatorToken.kind === ts.SyntaxKind.MinusToken) {
          value = left + right
        } else if (newNode.operatorToken.kind === ts.SyntaxKind.AsteriskToken) {
          value = left * right
        } else if (newNode.operatorToken.kind === ts.SyntaxKind.SlashToken) {
          value = left / right
        } else if (newNode.operatorToken.kind === ts.SyntaxKind.AsteriskAsteriskToken) {
          value = left ** right
        } else if (newNode.operatorToken.kind === ts.SyntaxKind.PercentToken) {
          value = left % right
        } else {
          return newNode
        }
        return ts.createNumericLiteral(value.toString())
      }
      if ((ts.isStringLiteral(newNode.left) && ts.isStringLiteral(newNode.right))
        || (ts.isNumericLiteral(newNode.left) && ts.isStringLiteral(newNode.right))
        || (ts.isStringLiteral(newNode.left) && ts.isNumericLiteral(newNode.right))) {
        if (newNode.operatorToken.kind === ts.SyntaxKind.PlusToken) {
          return ts.createStringLiteral(newNode.left.text + newNode.right.text)
        }
      }
      return newNode
    }
    return ts.visitEachChild(node, (node) => visitor(node), context)
  }
  return ts.visitNode(sourceFile, visitor)
}
