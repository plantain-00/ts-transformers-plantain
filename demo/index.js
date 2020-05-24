"use strict";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : global;
if (!_global._executedCode) {
    _global._executedCode = new Map();
    _global._allCode = new Map();
    _global._showCodeCoverage = function () {
        var total = 0;
        var totalExecuted = 0;
        _global._allCode.forEach(function (all, file) {
            var set = _global._executedCode.get(file);
            var remain = [];
            for (var j = 0; j < all.length; j++) {
                var e = all[j];
                total++;
                if (set.has(e)) {
                    totalExecuted++;
                }
                else {
                    remain.push(e);
                }
            }
            remain.sort(function (a, b) { return a - b; });
            var percent = Math.floor(10000 * set.size / all.length) / 100;
            var percentString = percent.toFixed(2);
            console.log("[executed code coverage]" + file + ": " + set.size + " / " + all.length + " " + percentString + "% " + remain.join(","));
        });
        var percent = Math.floor(10000 * totalExecuted / total) / 100;
        var percentString = percent.toFixed(2);
        console.log("[executed code coverage]total: " + totalExecuted + " / " + total + " " + percentString + "%");
    };
}
var _executedCodeLines = new Set();
_global._executedCode.set("demo/index.tsx", _executedCodeLines);
_global._allCode.set("demo/index.tsx", [2, 4, 15, 26, 30, 37, 53, 55, 5, 10, 11, 16, 19, 27, 31, 34, 32, 39, 42, 45, 48]);
console.debug("[executed code]demo/index.tsx:2:1");
var _0 = Date.now();
_executedCodeLines.add(2);
// last-executing-code:disable
let _lastExecutingCode;
console.debug("[code memory nodejs]demo/index.tsx:2:1: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
if (Date.now() !== _0) {
    console.debug("[code time]demo/index.tsx:2:1: " + (Date.now() - _0) + "ms");
}
console.debug("[executed code]demo/index.tsx:4:1");
var _1 = Date.now();
_lastExecutingCode = "demo/index.tsx:4:1";
_executedCodeLines.add(4);
for (let i = 0; i < 4; i++) {
    console.debug("[executed code]demo/index.tsx:5:3");
    var _5 = Date.now();
    _lastExecutingCode = "demo/index.tsx:5:3";
    _executedCodeLines.add(5);
    let j = i;
    console.debug("[code memory nodejs]demo/index.tsx:5:3: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
    if (Date.now() !== _5) {
        console.debug("[code time]demo/index.tsx:5:3: " + (Date.now() - _5) + "ms");
    }
    _lastExecutingCode = "demo/index.tsx:10:3";
    _executedCodeLines.add(10);
    /**
     * executed-code:disable
     * code-time:disable
     */
    while (j < 4) {
        _lastExecutingCode = "demo/index.tsx:11:5";
        _executedCodeLines.add(11);
        j++;
        console.debug("[code memory nodejs]demo/index.tsx:11:5: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
    }
    console.debug("[code memory nodejs]demo/index.tsx:10:3: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
}
console.debug("[code memory nodejs]demo/index.tsx:4:1: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
if (Date.now() !== _1) {
    console.debug("[code time]demo/index.tsx:4:1: " + (Date.now() - _1) + "ms");
}
console.debug("[executed code]demo/index.tsx:15:1");
var _2 = Date.now();
_lastExecutingCode = "demo/index.tsx:15:1";
_executedCodeLines.add(15);
try {
    console.debug("[executed code]demo/index.tsx:16:3");
    var _6 = Date.now();
    _lastExecutingCode = "demo/index.tsx:16:3";
    _executedCodeLines.add(16);
    throw 1;
    console.debug("[code memory nodejs]demo/index.tsx:16:3: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
    if (Date.now() !== _6) {
        console.debug("[code time]demo/index.tsx:16:3: " + (Date.now() - _6) + "ms");
    }
}
catch {
    console.debug("[executed code]demo/index.tsx:19:3");
    var _7 = Date.now();
    _executedCodeLines.add(19);
    // last-executing-code:disable
    console.info(_lastExecutingCode);
    console.debug("[code memory nodejs]demo/index.tsx:19:3: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
    if (Date.now() !== _7) {
        console.debug("[code time]demo/index.tsx:19:3: " + (Date.now() - _7) + "ms");
    }
}
console.debug("[code memory nodejs]demo/index.tsx:15:1: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
if (Date.now() !== _2) {
    console.debug("[code time]demo/index.tsx:15:1: " + (Date.now() - _2) + "ms");
}
_lastExecutingCode = "demo/index.tsx:26:1";
_executedCodeLines.add(26);
/**
 * executed-code:disable
 * code-time:disable
 */
function foo() {
    _lastExecutingCode = "demo/index.tsx:27:3 foo";
    _executedCodeLines.add(27);
    console.info(1);
    console.debug("[code memory nodejs]demo/index.tsx:27:3 foo: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
}
console.debug("[executed code]demo/index.tsx:30:1");
_lastExecutingCode = "demo/index.tsx:30:1";
_executedCodeLines.add(30);
function bar() {
    console.debug("[executed code]demo/index.tsx:31:3 bar");
    _lastExecutingCode = "demo/index.tsx:31:3 bar";
    _executedCodeLines.add(31);
    function baz() {
        console.debug("[executed code]demo/index.tsx:32:5 baz");
        var _9 = Date.now();
        _lastExecutingCode = "demo/index.tsx:32:5 baz";
        _executedCodeLines.add(32);
        console.info(2);
        console.debug("[code memory nodejs]demo/index.tsx:32:5 baz: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
        if (Date.now() !== _9) {
            console.debug("[code time]demo/index.tsx:32:5 baz: " + (Date.now() - _9) + "ms");
        }
    }
    console.debug("[executed code]demo/index.tsx:34:3 bar");
    var _8 = Date.now();
    _lastExecutingCode = "demo/index.tsx:34:3 bar";
    _executedCodeLines.add(34);
    console.info(baz);
    console.debug("[code memory nodejs]demo/index.tsx:34:3 bar: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
    if (Date.now() !== _8) {
        console.debug("[code time]demo/index.tsx:34:3 bar: " + (Date.now() - _8) + "ms");
    }
}
console.debug("[executed code]demo/index.tsx:37:1");
_lastExecutingCode = "demo/index.tsx:37:1";
_executedCodeLines.add(37);
class A {
    b() {
        console.debug("[executed code]demo/index.tsx:39:5 A.b");
        var _10 = Date.now();
        _lastExecutingCode = "demo/index.tsx:39:5 A.b";
        _executedCodeLines.add(39);
        console.info(1);
        console.debug("[code memory nodejs]demo/index.tsx:39:5 A.b: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
        if (Date.now() !== _10) {
            console.debug("[code time]demo/index.tsx:39:5 A.b: " + (Date.now() - _10) + "ms");
        }
    }
    constructor() {
        console.debug("[executed code]demo/index.tsx:42:5 A.constructor");
        var _11 = Date.now();
        _lastExecutingCode = "demo/index.tsx:42:5 A.constructor";
        _executedCodeLines.add(42);
        console.info(2);
        console.debug("[code memory nodejs]demo/index.tsx:42:5 A.constructor: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
        if (Date.now() !== _11) {
            console.debug("[code time]demo/index.tsx:42:5 A.constructor: " + (Date.now() - _11) + "ms");
        }
    }
    get c() {
        console.debug("[executed code]demo/index.tsx:45:5 A.c");
        _lastExecutingCode = "demo/index.tsx:45:5 A.c";
        _executedCodeLines.add(45);
        return 1;
    }
    set c(value) {
        console.debug("[executed code]demo/index.tsx:48:5 A.c");
        var _12 = Date.now();
        _lastExecutingCode = "demo/index.tsx:48:5 A.c";
        _executedCodeLines.add(48);
        console.info(value);
        console.debug("[code memory nodejs]demo/index.tsx:48:5 A.c: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
        if (Date.now() !== _12) {
            console.debug("[code time]demo/index.tsx:48:5 A.c: " + (Date.now() - _12) + "ms");
        }
    }
}
console.debug("[executed code]demo/index.tsx:53:1");
var _3 = Date.now();
_lastExecutingCode = "demo/index.tsx:53:1";
_executedCodeLines.add(53);
_showCodeCoverage();
console.debug("[code memory nodejs]demo/index.tsx:53:1: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
if (Date.now() !== _3) {
    console.debug("[code time]demo/index.tsx:53:1: " + (Date.now() - _3) + "ms");
}
console.debug("[executed code]demo/index.tsx:55:1");
var _4 = Date.now();
_lastExecutingCode = "demo/index.tsx:55:1";
_executedCodeLines.add(55);
React.createElement("button", { onClick: () => {
        console.debug("[executed code]demo/index.tsx:55:24");
        return console.info(1);
    } });
console.debug("[code memory nodejs]demo/index.tsx:55:1: " + Math.round(process.memoryUsage().heapUsed / 10485.76) / 100 + "MB");
if (Date.now() !== _4) {
    console.debug("[code time]demo/index.tsx:55:1: " + (Date.now() - _4) + "ms");
}
