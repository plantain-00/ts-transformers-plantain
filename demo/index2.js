/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
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
console.debug("[code memory browser]demo/index.tsx:2:1: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
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
    console.debug("[code memory browser]demo/index.tsx:5:3: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
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
        console.debug("[code memory browser]demo/index.tsx:11:5: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
    }
    console.debug("[code memory browser]demo/index.tsx:10:3: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
}
console.debug("[code memory browser]demo/index.tsx:4:1: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
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
    console.debug("[code memory browser]demo/index.tsx:16:3: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
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
    console.debug("[code memory browser]demo/index.tsx:19:3: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
    if (Date.now() !== _7) {
        console.debug("[code time]demo/index.tsx:19:3: " + (Date.now() - _7) + "ms");
    }
}
console.debug("[code memory browser]demo/index.tsx:15:1: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
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
    console.debug("[code memory browser]demo/index.tsx:27:3 foo: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
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
        console.debug("[code memory browser]demo/index.tsx:32:5 baz: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
        if (Date.now() !== _9) {
            console.debug("[code time]demo/index.tsx:32:5 baz: " + (Date.now() - _9) + "ms");
        }
    }
    console.debug("[executed code]demo/index.tsx:34:3 bar");
    var _8 = Date.now();
    _lastExecutingCode = "demo/index.tsx:34:3 bar";
    _executedCodeLines.add(34);
    console.info(baz);
    console.debug("[code memory browser]demo/index.tsx:34:3 bar: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
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
        console.debug("[code memory browser]demo/index.tsx:39:5 A.b: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
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
        console.debug("[code memory browser]demo/index.tsx:42:5 A.constructor: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
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
        console.debug("[code memory browser]demo/index.tsx:48:5 A.c: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
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
console.debug("[code memory browser]demo/index.tsx:53:1: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
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
console.debug("[code memory browser]demo/index.tsx:55:1: " + Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100 + "MB");
if (Date.now() !== _4) {
    console.debug("[code time]demo/index.tsx:55:1: " + (Date.now() - _4) + "ms");
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);