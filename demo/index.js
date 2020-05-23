"use strict";
console.debug("[executed code]demo/index.tsx:2:1");
var _0 = Date.now();
// last-executing-code:disable
let _lastExecutingCode;
if (Date.now() !== _0) {
    console.debug("[code time]demo/index.tsx:2:1: " + (Date.now() - _0) + "ms");
}
console.debug("[executed code]demo/index.tsx:4:1");
var _1 = Date.now();
_lastExecutingCode = "demo/index.tsx:4:1";
for (let i = 0; i < 4; i++) {
    console.debug("[executed code]demo/index.tsx:5:3");
    var _4 = Date.now();
    _lastExecutingCode = "demo/index.tsx:5:3";
    let j = i;
    if (Date.now() !== _4) {
        console.debug("[code time]demo/index.tsx:5:3: " + (Date.now() - _4) + "ms");
    }
    _lastExecutingCode = "demo/index.tsx:10:3";
    /**
     * executed-code:disable
     * code-time:disable
     */
    while (j < 4) {
        _lastExecutingCode = "demo/index.tsx:11:5";
        j++;
    }
}
if (Date.now() !== _1) {
    console.debug("[code time]demo/index.tsx:4:1: " + (Date.now() - _1) + "ms");
}
console.debug("[executed code]demo/index.tsx:15:1");
var _2 = Date.now();
_lastExecutingCode = "demo/index.tsx:15:1";
try {
    console.debug("[executed code]demo/index.tsx:16:3");
    var _5 = Date.now();
    _lastExecutingCode = "demo/index.tsx:16:3";
    throw 1;
    if (Date.now() !== _5) {
        console.debug("[code time]demo/index.tsx:16:3: " + (Date.now() - _5) + "ms");
    }
}
catch {
    console.debug("[executed code]demo/index.tsx:19:3");
    var _6 = Date.now();
    // last-executing-code:disable
    console.info(_lastExecutingCode);
    if (Date.now() !== _6) {
        console.debug("[code time]demo/index.tsx:19:3: " + (Date.now() - _6) + "ms");
    }
}
if (Date.now() !== _2) {
    console.debug("[code time]demo/index.tsx:15:1: " + (Date.now() - _2) + "ms");
}
_lastExecutingCode = "demo/index.tsx:26:1";
/**
 * executed-code:disable
 * code-time:disable
 */
function foo() {
    _lastExecutingCode = "demo/index.tsx:27:3 foo";
    console.info(1);
}
console.debug("[executed code]demo/index.tsx:30:1");
_lastExecutingCode = "demo/index.tsx:30:1";
function bar() {
    console.debug("[executed code]demo/index.tsx:31:3 bar");
    _lastExecutingCode = "demo/index.tsx:31:3 bar";
    function baz() {
        console.debug("[executed code]demo/index.tsx:32:5 baz");
        var _8 = Date.now();
        _lastExecutingCode = "demo/index.tsx:32:5 baz";
        console.info(2);
        if (Date.now() !== _8) {
            console.debug("[code time]demo/index.tsx:32:5 baz: " + (Date.now() - _8) + "ms");
        }
    }
    console.debug("[executed code]demo/index.tsx:34:3 bar");
    var _7 = Date.now();
    _lastExecutingCode = "demo/index.tsx:34:3 bar";
    console.info(baz);
    if (Date.now() !== _7) {
        console.debug("[code time]demo/index.tsx:34:3 bar: " + (Date.now() - _7) + "ms");
    }
}
console.debug("[executed code]demo/index.tsx:37:1");
var _3 = Date.now();
_lastExecutingCode = "demo/index.tsx:37:1";
React.createElement("button", { onClick: () => {
        console.debug("[executed code]demo/index.tsx:37:24");
        return console.info(1);
    } });
if (Date.now() !== _3) {
    console.debug("[code time]demo/index.tsx:37:1: " + (Date.now() - _3) + "ms");
}
console.debug("[executed code]demo/index.tsx:39:1");
_lastExecutingCode = "demo/index.tsx:39:1";
class A {
    b() {
        console.debug("[executed code]demo/index.tsx:41:5 A.b");
        var _9 = Date.now();
        _lastExecutingCode = "demo/index.tsx:41:5 A.b";
        console.info(1);
        if (Date.now() !== _9) {
            console.debug("[code time]demo/index.tsx:41:5 A.b: " + (Date.now() - _9) + "ms");
        }
    }
    constructor() {
        console.debug("[executed code]demo/index.tsx:44:5 A.constructor");
        var _10 = Date.now();
        _lastExecutingCode = "demo/index.tsx:44:5 A.constructor";
        console.info(2);
        if (Date.now() !== _10) {
            console.debug("[code time]demo/index.tsx:44:5 A.constructor: " + (Date.now() - _10) + "ms");
        }
    }
}
