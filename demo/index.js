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
var _code_time_0 = Date.now();
var _code_memory_nodejs_0 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
_executedCodeLines.add(2);
// last-executing-code:disable
let _lastExecutingCode;
var _code_memory_nodejs_after_0 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
if (_code_memory_nodejs_0 !== _code_memory_nodejs_after_0) {
    console.debug("[code memory nodejs]demo/index.tsx:2:1: +" + Math.round((_code_memory_nodejs_after_0 - _code_memory_nodejs_0) * 100) / 100 + "MB " + (_code_memory_nodejs_after_0) + "MB");
}
if (Date.now() !== _code_time_0) {
    console.debug("[code time]demo/index.tsx:2:1: " + (Date.now() - _code_time_0) + "ms");
}
console.debug("[executed code]demo/index.tsx:4:1");
var _code_time_1 = Date.now();
_lastExecutingCode = "demo/index.tsx:4:1";
var _code_memory_nodejs_1 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
_executedCodeLines.add(4);
for (let i = 0; i < 4; i++) {
    console.debug("[executed code]demo/index.tsx:5:3");
    var _code_time_5 = Date.now();
    _lastExecutingCode = "demo/index.tsx:5:3";
    var _code_memory_nodejs_5 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    _executedCodeLines.add(5);
    let j = i;
    var _code_memory_nodejs_after_5 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    if (_code_memory_nodejs_5 !== _code_memory_nodejs_after_5) {
        console.debug("[code memory nodejs]demo/index.tsx:5:3: +" + Math.round((_code_memory_nodejs_after_5 - _code_memory_nodejs_5) * 100) / 100 + "MB " + (_code_memory_nodejs_after_5) + "MB");
    }
    if (Date.now() !== _code_time_5) {
        console.debug("[code time]demo/index.tsx:5:3: " + (Date.now() - _code_time_5) + "ms");
    }
    _lastExecutingCode = "demo/index.tsx:10:3";
    var _code_memory_nodejs_6 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    _executedCodeLines.add(10);
    /**
     * executed-code:disable
     * code-time:disable
     */
    while (j < 4) {
        _lastExecutingCode = "demo/index.tsx:11:5";
        var _code_memory_nodejs_7 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
        _executedCodeLines.add(11);
        j++;
        var _code_memory_nodejs_after_7 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
        if (_code_memory_nodejs_7 !== _code_memory_nodejs_after_7) {
            console.debug("[code memory nodejs]demo/index.tsx:11:5: +" + Math.round((_code_memory_nodejs_after_7 - _code_memory_nodejs_7) * 100) / 100 + "MB " + (_code_memory_nodejs_after_7) + "MB");
        }
    }
    var _code_memory_nodejs_after_6 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    if (_code_memory_nodejs_6 !== _code_memory_nodejs_after_6) {
        console.debug("[code memory nodejs]demo/index.tsx:10:3: +" + Math.round((_code_memory_nodejs_after_6 - _code_memory_nodejs_6) * 100) / 100 + "MB " + (_code_memory_nodejs_after_6) + "MB");
    }
}
var _code_memory_nodejs_after_1 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
if (_code_memory_nodejs_1 !== _code_memory_nodejs_after_1) {
    console.debug("[code memory nodejs]demo/index.tsx:4:1: +" + Math.round((_code_memory_nodejs_after_1 - _code_memory_nodejs_1) * 100) / 100 + "MB " + (_code_memory_nodejs_after_1) + "MB");
}
if (Date.now() !== _code_time_1) {
    console.debug("[code time]demo/index.tsx:4:1: " + (Date.now() - _code_time_1) + "ms");
}
console.debug("[executed code]demo/index.tsx:15:1");
var _code_time_2 = Date.now();
_lastExecutingCode = "demo/index.tsx:15:1";
var _code_memory_nodejs_2 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
_executedCodeLines.add(15);
try {
    console.debug("[executed code]demo/index.tsx:16:3");
    var _code_time_6 = Date.now();
    _lastExecutingCode = "demo/index.tsx:16:3";
    var _code_memory_nodejs_8 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    _executedCodeLines.add(16);
    throw 1;
    var _code_memory_nodejs_after_8 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    if (_code_memory_nodejs_8 !== _code_memory_nodejs_after_8) {
        console.debug("[code memory nodejs]demo/index.tsx:16:3: +" + Math.round((_code_memory_nodejs_after_8 - _code_memory_nodejs_8) * 100) / 100 + "MB " + (_code_memory_nodejs_after_8) + "MB");
    }
    if (Date.now() !== _code_time_6) {
        console.debug("[code time]demo/index.tsx:16:3: " + (Date.now() - _code_time_6) + "ms");
    }
}
catch {
    console.debug("[executed code]demo/index.tsx:19:3");
    var _code_time_7 = Date.now();
    var _code_memory_nodejs_9 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    _executedCodeLines.add(19);
    // last-executing-code:disable
    console.info(_lastExecutingCode);
    var _code_memory_nodejs_after_9 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    if (_code_memory_nodejs_9 !== _code_memory_nodejs_after_9) {
        console.debug("[code memory nodejs]demo/index.tsx:19:3: +" + Math.round((_code_memory_nodejs_after_9 - _code_memory_nodejs_9) * 100) / 100 + "MB " + (_code_memory_nodejs_after_9) + "MB");
    }
    if (Date.now() !== _code_time_7) {
        console.debug("[code time]demo/index.tsx:19:3: " + (Date.now() - _code_time_7) + "ms");
    }
}
var _code_memory_nodejs_after_2 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
if (_code_memory_nodejs_2 !== _code_memory_nodejs_after_2) {
    console.debug("[code memory nodejs]demo/index.tsx:15:1: +" + Math.round((_code_memory_nodejs_after_2 - _code_memory_nodejs_2) * 100) / 100 + "MB " + (_code_memory_nodejs_after_2) + "MB");
}
if (Date.now() !== _code_time_2) {
    console.debug("[code time]demo/index.tsx:15:1: " + (Date.now() - _code_time_2) + "ms");
}
_lastExecutingCode = "demo/index.tsx:26:1";
_executedCodeLines.add(26);
/**
 * executed-code:disable
 * code-time:disable
 */
function foo() {
    _lastExecutingCode = "demo/index.tsx:27:3 foo";
    var _code_memory_nodejs_10 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    _executedCodeLines.add(27);
    console.info(1);
    var _code_memory_nodejs_after_10 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    if (_code_memory_nodejs_10 !== _code_memory_nodejs_after_10) {
        console.debug("[code memory nodejs]demo/index.tsx:27:3 foo: +" + Math.round((_code_memory_nodejs_after_10 - _code_memory_nodejs_10) * 100) / 100 + "MB " + (_code_memory_nodejs_after_10) + "MB");
    }
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
        var _code_time_9 = Date.now();
        _lastExecutingCode = "demo/index.tsx:32:5 baz";
        var _code_memory_nodejs_12 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
        _executedCodeLines.add(32);
        console.info(2);
        var _code_memory_nodejs_after_12 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
        if (_code_memory_nodejs_12 !== _code_memory_nodejs_after_12) {
            console.debug("[code memory nodejs]demo/index.tsx:32:5 baz: +" + Math.round((_code_memory_nodejs_after_12 - _code_memory_nodejs_12) * 100) / 100 + "MB " + (_code_memory_nodejs_after_12) + "MB");
        }
        if (Date.now() !== _code_time_9) {
            console.debug("[code time]demo/index.tsx:32:5 baz: " + (Date.now() - _code_time_9) + "ms");
        }
    }
    console.debug("[executed code]demo/index.tsx:34:3 bar");
    var _code_time_8 = Date.now();
    _lastExecutingCode = "demo/index.tsx:34:3 bar";
    var _code_memory_nodejs_11 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    _executedCodeLines.add(34);
    console.info(baz);
    var _code_memory_nodejs_after_11 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    if (_code_memory_nodejs_11 !== _code_memory_nodejs_after_11) {
        console.debug("[code memory nodejs]demo/index.tsx:34:3 bar: +" + Math.round((_code_memory_nodejs_after_11 - _code_memory_nodejs_11) * 100) / 100 + "MB " + (_code_memory_nodejs_after_11) + "MB");
    }
    if (Date.now() !== _code_time_8) {
        console.debug("[code time]demo/index.tsx:34:3 bar: " + (Date.now() - _code_time_8) + "ms");
    }
}
console.debug("[executed code]demo/index.tsx:37:1");
_lastExecutingCode = "demo/index.tsx:37:1";
_executedCodeLines.add(37);
class A {
    b() {
        console.debug("[executed code]demo/index.tsx:39:5 A.b");
        var _code_time_10 = Date.now();
        _lastExecutingCode = "demo/index.tsx:39:5 A.b";
        var _code_memory_nodejs_13 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
        _executedCodeLines.add(39);
        console.info(1);
        var _code_memory_nodejs_after_13 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
        if (_code_memory_nodejs_13 !== _code_memory_nodejs_after_13) {
            console.debug("[code memory nodejs]demo/index.tsx:39:5 A.b: +" + Math.round((_code_memory_nodejs_after_13 - _code_memory_nodejs_13) * 100) / 100 + "MB " + (_code_memory_nodejs_after_13) + "MB");
        }
        if (Date.now() !== _code_time_10) {
            console.debug("[code time]demo/index.tsx:39:5 A.b: " + (Date.now() - _code_time_10) + "ms");
        }
    }
    constructor() {
        console.debug("[executed code]demo/index.tsx:42:5 A.constructor");
        var _code_time_11 = Date.now();
        _lastExecutingCode = "demo/index.tsx:42:5 A.constructor";
        var _code_memory_nodejs_14 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
        _executedCodeLines.add(42);
        console.info(2);
        var _code_memory_nodejs_after_14 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
        if (_code_memory_nodejs_14 !== _code_memory_nodejs_after_14) {
            console.debug("[code memory nodejs]demo/index.tsx:42:5 A.constructor: +" + Math.round((_code_memory_nodejs_after_14 - _code_memory_nodejs_14) * 100) / 100 + "MB " + (_code_memory_nodejs_after_14) + "MB");
        }
        if (Date.now() !== _code_time_11) {
            console.debug("[code time]demo/index.tsx:42:5 A.constructor: " + (Date.now() - _code_time_11) + "ms");
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
        var _code_time_12 = Date.now();
        _lastExecutingCode = "demo/index.tsx:48:5 A.c";
        var _code_memory_nodejs_15 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
        _executedCodeLines.add(48);
        console.info(value);
        var _code_memory_nodejs_after_15 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
        if (_code_memory_nodejs_15 !== _code_memory_nodejs_after_15) {
            console.debug("[code memory nodejs]demo/index.tsx:48:5 A.c: +" + Math.round((_code_memory_nodejs_after_15 - _code_memory_nodejs_15) * 100) / 100 + "MB " + (_code_memory_nodejs_after_15) + "MB");
        }
        if (Date.now() !== _code_time_12) {
            console.debug("[code time]demo/index.tsx:48:5 A.c: " + (Date.now() - _code_time_12) + "ms");
        }
    }
}
console.debug("[executed code]demo/index.tsx:53:1");
var _code_time_3 = Date.now();
_lastExecutingCode = "demo/index.tsx:53:1";
var _code_memory_nodejs_3 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
_executedCodeLines.add(53);
_showCodeCoverage();
var _code_memory_nodejs_after_3 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
if (_code_memory_nodejs_3 !== _code_memory_nodejs_after_3) {
    console.debug("[code memory nodejs]demo/index.tsx:53:1: +" + Math.round((_code_memory_nodejs_after_3 - _code_memory_nodejs_3) * 100) / 100 + "MB " + (_code_memory_nodejs_after_3) + "MB");
}
if (Date.now() !== _code_time_3) {
    console.debug("[code time]demo/index.tsx:53:1: " + (Date.now() - _code_time_3) + "ms");
}
console.debug("[executed code]demo/index.tsx:55:1");
var _code_time_4 = Date.now();
_lastExecutingCode = "demo/index.tsx:55:1";
var _code_memory_nodejs_4 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
_executedCodeLines.add(55);
React.createElement("button", { onClick: () => {
        console.debug("[executed code]demo/index.tsx:55:24");
        return console.info(1);
    } });
var _code_memory_nodejs_after_4 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
if (_code_memory_nodejs_4 !== _code_memory_nodejs_after_4) {
    console.debug("[code memory nodejs]demo/index.tsx:55:1: +" + Math.round((_code_memory_nodejs_after_4 - _code_memory_nodejs_4) * 100) / 100 + "MB " + (_code_memory_nodejs_after_4) + "MB");
}
if (Date.now() !== _code_time_4) {
    console.debug("[code time]demo/index.tsx:55:1: " + (Date.now() - _code_time_4) + "ms");
}
