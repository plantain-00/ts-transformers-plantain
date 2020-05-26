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
/* WEBPACK VAR INJECTION */(function(global, process) {
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
var _code_memory_browser_0 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
_executedCodeLines.add(2);
// last-executing-code:disable
let _lastExecutingCode;
var _code_memory_browser_after_0 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
if (_code_memory_browser_0 !== _code_memory_browser_after_0) {
    console.debug("[code memory browser]demo/index.tsx:2:1: +" + Math.round((_code_memory_browser_after_0 - _code_memory_browser_0) * 100) / 100 + "MB " + (_code_memory_browser_after_0) + "MB");
}
if (Date.now() !== _code_time_0) {
    console.debug("[code time]demo/index.tsx:2:1: " + (Date.now() - _code_time_0) + "ms");
}
console.debug("[executed code]demo/index.tsx:4:1");
var _code_time_1 = Date.now();
_lastExecutingCode = "demo/index.tsx:4:1";
var _code_memory_browser_1 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
_executedCodeLines.add(4);
for (let i = 0; i < 4; i++) {
    console.debug("[executed code]demo/index.tsx:5:3");
    var _code_time_5 = Date.now();
    _lastExecutingCode = "demo/index.tsx:5:3";
    var _code_memory_browser_5 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    _executedCodeLines.add(5);
    let j = i;
    var _code_memory_browser_after_5 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
    if (_code_memory_browser_5 !== _code_memory_browser_after_5) {
        console.debug("[code memory browser]demo/index.tsx:5:3: +" + Math.round((_code_memory_browser_after_5 - _code_memory_browser_5) * 100) / 100 + "MB " + (_code_memory_browser_after_5) + "MB");
    }
    if (Date.now() !== _code_time_5) {
        console.debug("[code time]demo/index.tsx:5:3: " + (Date.now() - _code_time_5) + "ms");
    }
    _lastExecutingCode = "demo/index.tsx:10:3";
    var _code_memory_browser_6 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    _executedCodeLines.add(10);
    /**
     * executed-code:disable
     * code-time:disable
     */
    while (j < 4) {
        _lastExecutingCode = "demo/index.tsx:11:5";
        var _code_memory_browser_7 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
        _executedCodeLines.add(11);
        j++;
        var _code_memory_browser_after_7 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
        if (_code_memory_browser_7 !== _code_memory_browser_after_7) {
            console.debug("[code memory browser]demo/index.tsx:11:5: +" + Math.round((_code_memory_browser_after_7 - _code_memory_browser_7) * 100) / 100 + "MB " + (_code_memory_browser_after_7) + "MB");
        }
    }
    var _code_memory_browser_after_6 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
    if (_code_memory_browser_6 !== _code_memory_browser_after_6) {
        console.debug("[code memory browser]demo/index.tsx:10:3: +" + Math.round((_code_memory_browser_after_6 - _code_memory_browser_6) * 100) / 100 + "MB " + (_code_memory_browser_after_6) + "MB");
    }
}
var _code_memory_browser_after_1 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
if (_code_memory_browser_1 !== _code_memory_browser_after_1) {
    console.debug("[code memory browser]demo/index.tsx:4:1: +" + Math.round((_code_memory_browser_after_1 - _code_memory_browser_1) * 100) / 100 + "MB " + (_code_memory_browser_after_1) + "MB");
}
if (Date.now() !== _code_time_1) {
    console.debug("[code time]demo/index.tsx:4:1: " + (Date.now() - _code_time_1) + "ms");
}
console.debug("[executed code]demo/index.tsx:15:1");
var _code_time_2 = Date.now();
_lastExecutingCode = "demo/index.tsx:15:1";
var _code_memory_browser_2 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
_executedCodeLines.add(15);
try {
    console.debug("[executed code]demo/index.tsx:16:3");
    var _code_time_6 = Date.now();
    _lastExecutingCode = "demo/index.tsx:16:3";
    var _code_memory_browser_8 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    _executedCodeLines.add(16);
    throw 1;
    var _code_memory_browser_after_8 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
    if (_code_memory_browser_8 !== _code_memory_browser_after_8) {
        console.debug("[code memory browser]demo/index.tsx:16:3: +" + Math.round((_code_memory_browser_after_8 - _code_memory_browser_8) * 100) / 100 + "MB " + (_code_memory_browser_after_8) + "MB");
    }
    if (Date.now() !== _code_time_6) {
        console.debug("[code time]demo/index.tsx:16:3: " + (Date.now() - _code_time_6) + "ms");
    }
}
catch {
    console.debug("[executed code]demo/index.tsx:19:3");
    var _code_time_7 = Date.now();
    var _code_memory_browser_9 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    _executedCodeLines.add(19);
    // last-executing-code:disable
    console.info(_lastExecutingCode);
    var _code_memory_browser_after_9 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
    if (_code_memory_browser_9 !== _code_memory_browser_after_9) {
        console.debug("[code memory browser]demo/index.tsx:19:3: +" + Math.round((_code_memory_browser_after_9 - _code_memory_browser_9) * 100) / 100 + "MB " + (_code_memory_browser_after_9) + "MB");
    }
    if (Date.now() !== _code_time_7) {
        console.debug("[code time]demo/index.tsx:19:3: " + (Date.now() - _code_time_7) + "ms");
    }
}
var _code_memory_browser_after_2 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
if (_code_memory_browser_2 !== _code_memory_browser_after_2) {
    console.debug("[code memory browser]demo/index.tsx:15:1: +" + Math.round((_code_memory_browser_after_2 - _code_memory_browser_2) * 100) / 100 + "MB " + (_code_memory_browser_after_2) + "MB");
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
    var _code_memory_browser_10 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    _executedCodeLines.add(27);
    console.info(1);
    var _code_memory_browser_after_10 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
    if (_code_memory_browser_10 !== _code_memory_browser_after_10) {
        console.debug("[code memory browser]demo/index.tsx:27:3 foo: +" + Math.round((_code_memory_browser_after_10 - _code_memory_browser_10) * 100) / 100 + "MB " + (_code_memory_browser_after_10) + "MB");
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
        var _code_memory_browser_12 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
        _executedCodeLines.add(32);
        console.info(2);
        var _code_memory_browser_after_12 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
        if (_code_memory_browser_12 !== _code_memory_browser_after_12) {
            console.debug("[code memory browser]demo/index.tsx:32:5 baz: +" + Math.round((_code_memory_browser_after_12 - _code_memory_browser_12) * 100) / 100 + "MB " + (_code_memory_browser_after_12) + "MB");
        }
        if (Date.now() !== _code_time_9) {
            console.debug("[code time]demo/index.tsx:32:5 baz: " + (Date.now() - _code_time_9) + "ms");
        }
    }
    console.debug("[executed code]demo/index.tsx:34:3 bar");
    var _code_time_8 = Date.now();
    _lastExecutingCode = "demo/index.tsx:34:3 bar";
    var _code_memory_browser_11 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
    _executedCodeLines.add(34);
    console.info(baz);
    var _code_memory_browser_after_11 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
    if (_code_memory_browser_11 !== _code_memory_browser_after_11) {
        console.debug("[code memory browser]demo/index.tsx:34:3 bar: +" + Math.round((_code_memory_browser_after_11 - _code_memory_browser_11) * 100) / 100 + "MB " + (_code_memory_browser_after_11) + "MB");
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
        var _code_memory_browser_13 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
        _executedCodeLines.add(39);
        console.info(1);
        var _code_memory_browser_after_13 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
        if (_code_memory_browser_13 !== _code_memory_browser_after_13) {
            console.debug("[code memory browser]demo/index.tsx:39:5 A.b: +" + Math.round((_code_memory_browser_after_13 - _code_memory_browser_13) * 100) / 100 + "MB " + (_code_memory_browser_after_13) + "MB");
        }
        if (Date.now() !== _code_time_10) {
            console.debug("[code time]demo/index.tsx:39:5 A.b: " + (Date.now() - _code_time_10) + "ms");
        }
    }
    constructor() {
        console.debug("[executed code]demo/index.tsx:42:5 A.constructor");
        var _code_time_11 = Date.now();
        _lastExecutingCode = "demo/index.tsx:42:5 A.constructor";
        var _code_memory_browser_14 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
        _executedCodeLines.add(42);
        console.info(2);
        var _code_memory_browser_after_14 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
        if (_code_memory_browser_14 !== _code_memory_browser_after_14) {
            console.debug("[code memory browser]demo/index.tsx:42:5 A.constructor: +" + Math.round((_code_memory_browser_after_14 - _code_memory_browser_14) * 100) / 100 + "MB " + (_code_memory_browser_after_14) + "MB");
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
        var _code_memory_browser_15 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
        _executedCodeLines.add(48);
        console.info(value);
        var _code_memory_browser_after_15 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
        if (_code_memory_browser_15 !== _code_memory_browser_after_15) {
            console.debug("[code memory browser]demo/index.tsx:48:5 A.c: +" + Math.round((_code_memory_browser_after_15 - _code_memory_browser_15) * 100) / 100 + "MB " + (_code_memory_browser_after_15) + "MB");
        }
        if (Date.now() !== _code_time_12) {
            console.debug("[code time]demo/index.tsx:48:5 A.c: " + (Date.now() - _code_time_12) + "ms");
        }
    }
}
console.debug("[executed code]demo/index.tsx:53:1");
var _code_time_3 = Date.now();
_lastExecutingCode = "demo/index.tsx:53:1";
var _code_memory_browser_3 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
_executedCodeLines.add(53);
_showCodeCoverage();
var _code_memory_browser_after_3 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
if (_code_memory_browser_3 !== _code_memory_browser_after_3) {
    console.debug("[code memory browser]demo/index.tsx:53:1: +" + Math.round((_code_memory_browser_after_3 - _code_memory_browser_3) * 100) / 100 + "MB " + (_code_memory_browser_after_3) + "MB");
}
if (Date.now() !== _code_time_3) {
    console.debug("[code time]demo/index.tsx:53:1: " + (Date.now() - _code_time_3) + "ms");
}
console.debug("[executed code]demo/index.tsx:55:1");
var _code_time_4 = Date.now();
_lastExecutingCode = "demo/index.tsx:55:1";
var _code_memory_browser_4 = Math.round(process.memoryUsage().heapUsed / 10485.76) / 100;
_executedCodeLines.add(55);
React.createElement("button", { onClick: () => {
        console.debug("[executed code]demo/index.tsx:55:24");
        return console.info(1);
    } });
var _code_memory_browser_after_4 = Math.round(performance.memory.usedJSHeapSize / 10485.76) / 100;
if (_code_memory_browser_4 !== _code_memory_browser_after_4) {
    console.debug("[code memory browser]demo/index.tsx:55:1: +" + Math.round((_code_memory_browser_after_4 - _code_memory_browser_4) * 100) / 100 + "MB " + (_code_memory_browser_after_4) + "MB");
}
if (Date.now() !== _code_time_4) {
    console.debug("[code time]demo/index.tsx:55:1: " + (Date.now() - _code_time_4) + "ms");
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(1), __webpack_require__(2)))

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


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
/******/ ]);