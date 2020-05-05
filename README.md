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
console.info("demo/index.ts" + ":" + 1 + ":" + 1);
for (let i = 0; i < 4; i++) {
    console.info("demo/index.ts" + ":" + 2 + ":" + 3);
    let j = i;
    console.info("demo/index.ts" + ":" + 3 + ":" + 3);
    while (j < 4) {
        console.info("demo/index.ts" + ":" + 4 + ":" + 5);
        j++;
    }
}
```

### codeTimeTransformer

For example, the generated js code is:

```js
"use strict";
const _0 = Date.now();
for (let i = 0; i < 4; i++) {
    const _1 = Date.now();
    let j = i;
    console.info("demo/index.ts" + ":" + 2 + ":" + 3 + ": " + (Date.now() - _1));
    const _2 = Date.now();
    while (j < 4) {
        const _3 = Date.now();
        j++;
        console.info("demo/index.ts" + ":" + 4 + ":" + 5 + ": " + (Date.now() - _3));
    }
    console.info("demo/index.ts" + ":" + 3 + ":" + 3 + ": " + (Date.now() - _2));
}
console.info("demo/index.ts" + ":" + 1 + ":" + 1 + ": " + (Date.now() - _0));
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
    getCustomTransformers: (program) => ({
      before: [executedCodeTransformer]
    })
  }
}
```
