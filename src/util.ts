import * as ts from 'typescript'
import * as path from 'path'

export function getFunctionName(node: ts.Node, sourceFile: ts.SourceFile) {
  if (ts.isFunctionDeclaration(node)) {
    if (node.name) {
      return node.name.text
    }
  }
  if (ts.isMethodDeclaration(node)) {
    if (ts.isClassDeclaration(node.parent)) {
      const className = node.parent.name?.text || 'default'
      return className + '.' + node.name.getText(sourceFile)
    }
    return node.name.getText(sourceFile)
  }
  if (ts.isConstructorDeclaration(node)) {
    const className = node.parent.name?.text || 'default'
    return className + '.constructor'
  }
  return undefined
}

export function isDisabled(
  type: 'code-time' | 'executed-code' | 'last-executing-code' | 'code-memory-nodejs' | 'code-memory-browser',
  childrenOnly: boolean,
  sourceFile: ts.SourceFile,
  ranges?: ts.CommentRange[],
) {
  if (!ranges) {
    return false
  }
  let comment = `${type}:disable`
  if (childrenOnly) {
    comment += '-children'
  }
  return ranges.some((r) => sourceFile.text.substring(r.pos, r.end).includes(comment))
}

export function getPosition(sourceFile: ts.SourceFile, start: number, functionName?: string) {
  const { line, character } = ts.getLineAndCharacterOfPosition(sourceFile, start)
  return `${path.relative(process.cwd(), sourceFile.fileName)}:${line + 1}:${character + 1}${functionName ? ' ' + functionName : ''}`
}

export const memoryUnit = (1024 * 1024 / 100).toString()
