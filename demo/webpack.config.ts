import * as webpack from 'webpack'
import {
  executedCodeTransformer,
  codeTimeTransformer,
  lastExecutingCodeTransformer,
  codeMemoryBrowserTransformer,
  executedCodeCoverageTransformer,
  jsxElementPositionTransformer
} from '../src'

export default {
  mode: 'production',
  entry: './demo/index.tsx',
  output: {
    filename: '../demo/index2.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [
              executedCodeTransformer,
              codeTimeTransformer,
              lastExecutingCodeTransformer,
              codeMemoryBrowserTransformer,
              executedCodeCoverageTransformer,
              jsxElementPositionTransformer,
            ]
          })
        }
      },
    ],
  },
} as webpack.Configuration
