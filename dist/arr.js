(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["arrjs"] = factory();
	else
		root["arrjs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return Math.random();
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultSource = __webpack_require__(0);

var _defaultSource2 = _interopRequireDefault(_defaultSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function sourceRandomNormal(source) {
  function randomNormal(mu, sigma) {
    var x, r;
    mu = mu == null ? 0 : +mu;
    sigma = sigma == null ? 1 : +sigma;
    return function () {
      var y;

      // If available, use the second previously-generated uniform random.
      if (x != null) y = x, x = null;

      // Otherwise, generate a new x and y.
      else do {
          x = source() * 2 - 1;
          y = source() * 2 - 1;
          r = x * x + y * y;
        } while (!r || r > 1);

      return mu + sigma * y * Math.sqrt(-2 * Math.log(r) / r);
    };
  }

  randomNormal.source = sourceRandomNormal;

  return randomNormal;
}(_defaultSource2.default);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultSource = __webpack_require__(0);

var _defaultSource2 = _interopRequireDefault(_defaultSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function sourceRandomIrwinHall(source) {
  function randomIrwinHall(n) {
    return function () {
      for (var sum = 0, i = 0; i < n; ++i) {
        sum += source();
      }return sum;
    };
  }

  randomIrwinHall.source = sourceRandomIrwinHall;

  return randomIrwinHall;
}(_defaultSource2.default);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _rnorm = __webpack_require__(4);

var _rnorm2 = _interopRequireDefault(_rnorm);

var _dnorm = __webpack_require__(10);

var _dnorm2 = _interopRequireDefault(_dnorm);

var _mean = __webpack_require__(12);

var _mean2 = _interopRequireDefault(_mean);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  rnorm: _rnorm2.default,
  dnorm: _dnorm2.default,
  mean: _mean2.default
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _d3Random = __webpack_require__(5);

// Generates n normal values
exports.default = function () {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var mu = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var sigma = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

  var gen = (0, _d3Random.randomNormal)(mu, sigma);
  return Array.from(new Array(n), function () {
    return gen();
  });
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _uniform = __webpack_require__(6);

Object.defineProperty(exports, "randomUniform", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_uniform).default;
  }
});

var _normal = __webpack_require__(1);

Object.defineProperty(exports, "randomNormal", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_normal).default;
  }
});

var _logNormal = __webpack_require__(7);

Object.defineProperty(exports, "randomLogNormal", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_logNormal).default;
  }
});

var _bates = __webpack_require__(8);

Object.defineProperty(exports, "randomBates", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_bates).default;
  }
});

var _irwinHall = __webpack_require__(2);

Object.defineProperty(exports, "randomIrwinHall", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_irwinHall).default;
  }
});

var _exponential = __webpack_require__(9);

Object.defineProperty(exports, "randomExponential", {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_exponential).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultSource = __webpack_require__(0);

var _defaultSource2 = _interopRequireDefault(_defaultSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function sourceRandomUniform(source) {
  function randomUniform(min, max) {
    min = min == null ? 0 : +min;
    max = max == null ? 1 : +max;
    if (arguments.length === 1) max = min, min = 0;else max -= min;
    return function () {
      return source() * max + min;
    };
  }

  randomUniform.source = sourceRandomUniform;

  return randomUniform;
}(_defaultSource2.default);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultSource = __webpack_require__(0);

var _defaultSource2 = _interopRequireDefault(_defaultSource);

var _normal = __webpack_require__(1);

var _normal2 = _interopRequireDefault(_normal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function sourceRandomLogNormal(source) {
  function randomLogNormal() {
    var randomNormal = _normal2.default.source(source).apply(this, arguments);
    return function () {
      return Math.exp(randomNormal());
    };
  }

  randomLogNormal.source = sourceRandomLogNormal;

  return randomLogNormal;
}(_defaultSource2.default);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultSource = __webpack_require__(0);

var _defaultSource2 = _interopRequireDefault(_defaultSource);

var _irwinHall = __webpack_require__(2);

var _irwinHall2 = _interopRequireDefault(_irwinHall);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function sourceRandomBates(source) {
  function randomBates(n) {
    var randomIrwinHall = _irwinHall2.default.source(source)(n);
    return function () {
      return randomIrwinHall() / n;
    };
  }

  randomBates.source = sourceRandomBates;

  return randomBates;
}(_defaultSource2.default);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defaultSource = __webpack_require__(0);

var _defaultSource2 = _interopRequireDefault(_defaultSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function sourceRandomExponential(source) {
  function randomExponential(lambda) {
    return function () {
      return -Math.log(1 - source()) / lambda;
    };
  }

  randomExponential.source = sourceRandomExponential;

  return randomExponential;
}(_defaultSource2.default);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _normPdf = __webpack_require__(11);

var _normPdf2 = _interopRequireDefault(_normPdf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// computes pdf for a given x  given
// normal dist w/ given params
exports.default = function (x) {
  var mu = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var sigma = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  return Array.isArray(x) ? x.map(function (d) {
    return (0, _normPdf2.default)(d, mu, sigma);
  }) : (0, _normPdf2.default)(x, mu, sigma);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sqrt = Math.sqrt,
    exp = Math.exp,
    pow = Math.pow,
    pi = Math.PI;

exports.default = function (x, mu, sigma) {
  var variance = pow(sigma, 2);
  return 1 / sqrt(2 * pi * variance) * exp(-pow(x - mu, 2) / (2 * variance));
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (vals) {
  var N = vals.length;
  return vals.reduce(function (total, current) {
    return total + current / N;
  }, 0);
};

/***/ })
/******/ ]);
});
//# sourceMappingURL=arr.js.map