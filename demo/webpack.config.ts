import * as webpack from 'webpack'
import {
  executedCodeTransformer,
  codeTimeTransformerFactory,
  lastExecutingCodeTransformer,
  codeMemoryBrowserTransformer,
  executedCodeCoverageTransformer,
  jsxElementPositionTransformer,
  safeOptimizationTransformer,
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
              codeTimeTransformerFactory({ threshold: 1000 }),
              lastExecutingCodeTransformer,
              codeMemoryBrowserTransformer,
              executedCodeCoverageTransformer,
              jsxElementPositionTransformer,
              safeOptimizationTransformer,
            ]
          })
        }
      },
    ],
  },
} as webpack.Configuration
