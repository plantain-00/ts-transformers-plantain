# ts-transformers-plantain

Some custom typescript transformers.

[![Dependency Status](https://david-dm.org/plantain-00/ts-transformers-plantain.svg)](https://david-dm.org/plantain-00/ts-transformers-plantain)
[![devDependency Status](https://david-dm.org/plantain-00/ts-transformers-plantain/dev-status.svg)](https://david-dm.org/plantain-00/ts-transformers-plantain#info=devDependencies)
[![Build Status: Linux](https://travis-ci.org/plantain-00/ts-transformers-plantain.svg?branch=master)](https://travis-ci.org/plantain-00/ts-transformers-plantain)
[![Build Status: Windows](https://ci.appveyor.com/api/projects/status/github/plantain-00/ts-transformers-plantain?branch=master&svg=true)](https://ci.appveyor.com/project/plantain-00/ts-transformers-plantain/branch/master)
[![npm version](https://badge.fury.io/js/ts-transformers-plantain.svg)](https://badge.fury.io/js/ts-transformers-plantain)
[![Downloads](https://img.shields.io/npm/dm/ts-transformers-plantain.svg)](https://www.npmjs.com/package/ts-transformers-plantain)
[![gzip size](https://img.badgesize.io/https://unpkg.com/ts-transformers-plantain?compression=gzip)](https://unpkg.com/ts-transformers-plantain)
[![type-coverage](https://img.shields.io/badge/dynamic/json.svg?label=type-coverage&prefix=%E2%89%A5&suffix=%&query=$.typeCoverage.atLeast&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fplantain-00%2Fts-transformers-plantain%2Fmaster%2Fpackage.json)](https://github.com/plantain-00/ts-transformers-plantain)

## install

`yarn add ts-transformers-plantain`

## features

### executedCodeTransformer

For every statements, prepend a console log of file name and line number, so when the statement is executed, the file name and line number will be logged in console.

for example:

```txt
[executed code]demo/index.tsx:1:1
[executed code]demo/index.tsx:2:3
[executed code]demo/index.tsx:3:3
```

logger can be disabled by `executed-code:disable` in comment.
children logger can be disabled by `executed-code:disable-children` in comment.

### codeTimeTransformer

For example:

```txt
[code time]demo/index.tsx:3:3: 1ms
[code time]demo/index.tsx:3:3: 1ms
[code time]demo/index.tsx:1:1: 16ms
```

logger can be disabled by `code-time:disable` in comment.
children logger can be disabled by `code-time:disable-children` in comment.

### lastExecutingCodeTransformer

It can be used to record last executing code before exception, it's useful for environment without stacktrace or clear error message, eg, ExtendScript.

For example:

```txt
demo/index.tsx:16:3
```

logger can be disabled by `last-executing-code:disable` in comment.
children logger can be disabled by `last-executing-code:disable-children` in comment

### codeMemoryNodeJsTransformer

For example:

```txt
[code memory nodejs]demo/index.tsx:10:3: +0.02MB -> 2.02MB
[code memory nodejs]demo/index.tsx:10:3: +0.01MB -> 2.35MB
[code memory nodejs]demo/index.tsx:10:3: +0.01MB -> 2.62MB
[code memory nodejs]demo/index.tsx:10:3: +0.01MB -> 2.63MB
[code memory nodejs]demo/index.tsx:10:3: +0.01MB -> 2.64MB
[code memory nodejs]demo/index.tsx:10:3: +0.01MB -> 2.65MB
[code memory nodejs]demo/index.tsx:10:3: +0.01MB -> 2.67MB
[code memory nodejs]demo/index.tsx:10:3: +0.01MB -> 2.68MB
[code memory nodejs]demo/index.tsx:4:1: +0.71MB -> 2.71MB
```

logger can be disabled by `code-memory-nodejs:disable` in comment.
children logger can be disabled by `code-memory-nodejs:disable-children` in comment.

### codeMemoryBrowserTransformer

For example:

```txt
[code memory browser]demo/index.tsx:10:3: +0.02MB -> 2.02MB
[code memory browser]demo/index.tsx:10:3: +0.01MB -> 2.35MB
[code memory browser]demo/index.tsx:10:3: +0.01MB -> 2.62MB
[code memory browser]demo/index.tsx:10:3: +0.01MB -> 2.63MB
[code memory browser]demo/index.tsx:10:3: +0.01MB -> 2.64MB
[code memory browser]demo/index.tsx:10:3: +0.01MB -> 2.65MB
[code memory browser]demo/index.tsx:10:3: +0.01MB -> 2.67MB
[code memory browser]demo/index.tsx:10:3: +0.01MB -> 2.68MB
[code memory browser]demo/index.tsx:4:1: +0.71MB -> 2.71MB
```

logger can be disabled by `code-memory-browser:disable` in comment.
children logger can be disabled by `code-memory-browser:disable-children` in comment.

### executedCodeCoverageTransformer

This transformer will collect all executed code line number, `_showCodeCoverage()` will print the result in console, eg:

```txt
[executed code coverage]demo/index.tsx: 12 / 21 57.14% 27,31,32,34,39,42,45,48,55
[executed code coverage]total: 12 / 21 57.14%
```

### jsxElementPositionTransformer

This transformer will add code position in `data-_position` for all jsx elements, for example:

```txt
React.createElement("button", { onClick: () => console.info(1), "data-_position": 'demo/index.tsx:55:1' });
```

## usage

### with ttypescript

```txt
"plugins": [
  {
    "transform": "ts-transformers-plantain",
    "import": "executedCodeTransformer",
    "type": "raw"
  },
]
```

### with ts-loader

```txt
import { executedCodeTransformer } from "ts-transformers-plantain"

{
  test: /\.ts$/,
  loader: 'ts-loader',
  options: {
    transpileOnly: true,
    getCustomTransformers: (program) => ({
      before: [executedCodeTransformer]
    })
  }
}
```
