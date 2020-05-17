import * as webpack from 'webpack'
import { executedCodeTransformer } from '../src/executed-code'

export default {
  entry: './demo/index.ts',
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
            before: [executedCodeTransformer]
          })
        }
      },
    ],
  },
} as webpack.Configuration
