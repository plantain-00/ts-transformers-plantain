import * as webpack from 'webpack'
import { executedCodeTransformer, codeTimeTransformer, lastExecutingCodeTransformer, codeMemoryBrowserTransformer } from '../src'

export default {
  mode: 'development',
  entry: './demo/index.tsx',
  output: {
    filename: '../demo/index2.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
          getCustomTransformers: () => ({
            before: [executedCodeTransformer, codeTimeTransformer, lastExecutingCodeTransformer, codeMemoryBrowserTransformer]
          })
        }
      },
    ],
  },
} as webpack.Configuration
