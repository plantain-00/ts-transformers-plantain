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

for example, the source code is:

```ts
for (let i = 0; i < 4; i++) {
  let j = i
  while (j < 4) {
    j++
  }
}
```

then the emitted js file is:

```js
"use strict";
console.debug("[executed code]demo/index.ts:1:1");
for (let i = 0; i < 4; i++) {
    console.debug("[executed code]demo/index.ts:2:3");
    let j = i;
    console.debug("[executed code]demo/index.ts:3:3");
    while (j < 4) {
        console.debug("[executed code]demo/index.ts:4:5");
        j++;
    }
}
```

logger can be disabled by `executed-code:disable` in comment.
children logger can be disabled by `executed-code:disable-children` in comment.

### codeTimeTransformer

For example, the generated js code is:

```js
"use strict";
var _0 = Date.now();
for (let i = 0; i < 4; i++) {
    var _1 = Date.now();
    let j = i;
    if (Date.now() !== _1) {
        console.debug("[code time]demo/index.ts:2:3: " + (Date.now() - _1) + "ms");
    }
    var _2 = Date.now();
    while (j < 4) {
        var _3 = Date.now();
        j++;
        if (Date.now() !== _3) {
            console.debug("[code time]demo/index.ts:4:5: " + (Date.now() - _3) + "ms");
        }
    }
    if (Date.now() !== _2) {
        console.debug("[code time]demo/index.ts:3:3: " + (Date.now() - _2) + "ms");
    }
}
if (Date.now() !== _0) {
    console.debug("[code time]demo/index.ts:1:1: " + (Date.now() - _0) + "ms");
}
```

logger can be disabled by `code-time:disable` in comment.
children logger can be disabled by `code-time:disable-children` in comment.

### lastExecutingCodeTransformer

It can be used to record last executing code before exception, it's useful for environment without stacktrace or clear error message, eg, ExtendScript.

For example, the generated js code is:

```js
_lastExecutingCode = "demo/index.tsx:1:1";
for (let i = 0; i < 4; i++) {
    _lastExecutingCode = "demo/index.tsx:2:3";
    let j = i;
    _lastExecutingCode = "demo/index.tsx:3:3";
    while (j < 4) {
        _lastExecutingCode = "demo/index.tsx:4:5";
        j++;
    }
}
```

logger can be disabled by `last-executing-code:disable` in comment.
children logger can be disabled by `last-executing-code:disable-children` in comment

### codeMemoryNodeJsTransformer

For example, the generated js code is:

```js
"use strict";
for (let i = 0; i < 4; i++) {
    let j = i;
    console.debug("[code memory nodejs]demo/index.tsx:2:3: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
    while (j < 4) {
        j++;
        console.debug("[code memory nodejs]demo/index.tsx:4:5: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
    }
    console.debug("[code memory nodejs]demo/index.tsx:3:3: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
}
console.debug("[code memory nodejs]demo/index.tsx:1:1: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
```

logger can be disabled by `code-memory-nodejs:disable` in comment.
children logger can be disabled by `code-memory-nodejs:disable-children` in comment.

### codeMemoryBrowserTransformer

For example, the generated js code is:

```js
"use strict";
for (let i = 0; i < 4; i++) {
    let j = i;
    console.debug("[code memory browser]demo/index.tsx:2:3: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
    while (j < 4) {
        j++;
        console.debug("[code memory browser]demo/index.tsx:4:5: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
    }
    console.debug("[code memory browser]demo/index.tsx:3:3: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
}
console.debug("[code memory browser]demo/index.tsx:1:1: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
```

logger can be disabled by `code-memory-browser:disable` in comment.
children logger can be disabled by `code-memory-browser:disable-children` in comment.

### executedCodeCoverageTransformer

This transformer will collect all executed code line number, `_showCodeCoverage()` will print the result in console, eg:

```txt
[executed code coverage]demo/index.tsx: 12 / 21 57.14% 27,31,32,34,39,42,45,48,55
[executed code coverage]total: 12 / 21 57.14%
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
