import * as ts from 'typescript'
import { getPosition, mutable } from './util'

/**
 * @public
 */
export const jsxElementPositionTransformer: ts.TransformerFactory<ts.SourceFile> = (context) => (sourceFile) => {
  const visitor = (node: ts.Node, functionName?: string): ts.Node => {
    if (ts.isJsxOpeningElement(node)) {
      const start = node.getStart(sourceFile)
      const position = getPosition(sourceFile, start)
      mutable(node.attributes).properties = ts.createNodeArray([
        ...node.attributes.properties,
        ts.createJsxAttribute(
          ts.createIdentifier("data-_position"),
          ts.createStringLiteral(position)
        ),
      ])
    }
    return ts.visitEachChild(node, (node) => visitor(node, functionName), context)
  }
  return ts.visitNode(sourceFile, visitor)
}
