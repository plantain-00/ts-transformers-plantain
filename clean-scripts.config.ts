const tsFiles = `"src/**/*.ts"`

export default {
  build: [
    'rimraf dist/',
    'tsc -p src',
    'ttsc -p demo',
    'webpack --config demo/webpack.config.ts'
  ],
  lint: {
    ts: `eslint --ext .js,.ts ${tsFiles}`,
    export: `no-unused-export ${tsFiles} --strict --need-module tslib`,
    markdown: `markdownlint README.md`,
    typeCoverage: 'type-coverage -p src --strict'
  },
  test: [],
  fix: `eslint --ext .js,.ts ${tsFiles} --fix`
}
