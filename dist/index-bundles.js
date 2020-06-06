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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code/glwork.mjs":
/*!*****************************!*\
  !*** ./src/code/glwork.mjs ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GLWork; });


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GLWork = /*#__PURE__*/function () {
  function GLWork(canvas) {
    _classCallCheck(this, GLWork);

    try {
      this.gl = canvas.getContext('webgl2');
      this.gl.viewportWidth = canvas.width;
      this.gl.viewportHeight = canvas.height;
    } catch (e) {}

    if (!this.gl) {
      alert('Could not initialize WebGL');
    }

    this.gl.clearColor(0.0, 1.0, 1.0, 1.0);
    this.gl.enable(this.gl.DEPTH_TEST);
  }

  _createClass(GLWork, [{
    key: "initBuffers",
    value: function initBuffers() {
      this.squareVertexPositionBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.squareVertexPositionBuffer);
      var vertices = [1.0, 1.0, 0.0, -1.0, 1.0, 0.0, 1.0, -1.0, 0.0, -1.0, -1.0, 0.0];
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(vertices), this.gl.STATIC_DRAW);
      this.squareVertexPositionBuffer.itemSize = 3;
      this.squareVertexPositionBuffer.numItems = 4;
    }
  }, {
    key: "draw",
    value: function draw() {
      this.gl.drawArrays(this.gl.TRIANGLE_STRIP, 0, this.squareVertexPositionBuffer.numItems);
    }
  }, {
    key: "setUpToDraw",
    value: function setUpToDraw() {
      this.gl.viewport(0, 0, this.gl.viewportWidth, this.gl.viewportHeight);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.squareVertexPositionBuffer);
    }
  }, {
    key: "getGL",
    get: function get() {
      return this.gl;
    }
  }, {
    key: "getSquareVertexPositionBuffer",
    get: function get() {
      return this.squareVertexPositionBuffer;
    }
  }]);

  return GLWork;
}();



/***/ }),

/***/ "./src/code/main.js":
/*!**************************!*\
  !*** ./src/code/main.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shader_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shader.mjs */ "./src/code/shader.mjs");
/* harmony import */ var _glwork_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./glwork.mjs */ "./src/code/glwork.mjs");
/* harmony import */ var _mouse_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mouse.mjs */ "./src/code/mouse.mjs");
/* harmony import */ var _texwork_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./texwork.mjs */ "./src/code/texwork.mjs");
/* harmony import */ var _img_neonflames_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../img/neonflames.png */ "./src/img/neonflames.png");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ "./src/code/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_5__);





 // let timeMs = Date.now();
// const startTime = Date.now();

var gl;
var shdWork;
var glWork;
var mouseWork;
var img1;

function tick() {
  window.requestAnimationFrame(tick); // timeMs = (Date.now() - startTime) / 1000;

  glWork.setUpToDraw();
  shdWork.setUniforms(gl, glWork.getSquareVertexPositionBuffer, {
    name: 'transX',
    type: 'float',
    value: mouseWork.getTransX
  }, {
    name: 'transY',
    type: 'float',
    value: mouseWork.getTransY
  }, {
    name: 'transZ',
    type: 'float',
    value: mouseWork.getTransZ
  }, {
    name: 'range',
    type: 'float',
    value: document.getElementById('range1').value
  }, {
    name: 'Tex0',
    type: 'int',
    value: 0
  });
  img1.drawTex(gl, 0);
  glWork.draw();
}

function webGLStart() {
  var canvas = document.getElementById('webglCanvas');
  mouseWork = new _mouse_mjs__WEBPACK_IMPORTED_MODULE_2__["default"](canvas);
  glWork = new _glwork_mjs__WEBPACK_IMPORTED_MODULE_1__["default"](canvas);
  gl = glWork.getGL;
  shdWork = new _shader_mjs__WEBPACK_IMPORTED_MODULE_0__["default"](gl, 'transX', 'transY', 'transZ', 'range', 'Tex0');
  glWork.initBuffers();
  img1 = new _texwork_mjs__WEBPACK_IMPORTED_MODULE_3__["default"](gl, _img_neonflames_png__WEBPACK_IMPORTED_MODULE_4__["default"]);
  tick();
}

webGLStart();

/***/ }),

/***/ "./src/code/mouse.mjs":
/*!****************************!*\
  !*** ./src/code/mouse.mjs ***!
  \****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MouseWork; });


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MouseWork = /*#__PURE__*/function () {
  function MouseWork(canvas) {
    var _this = this;

    _classCallCheck(this, MouseWork);

    this.transX = 0.0;
    this.transY = 0.0;
    this.transZ = 0.0;
    this.mouseX = 0.0;
    this.mouseY = 0.0;
    var func = this.onWheel.bind(this);
    canvas.addEventListener('wheel', func);
    func = this.onMouseChangePos.bind(this);
    document.addEventListener('mousemove', func);
    func = this.onMouseMove.bind(this);

    canvas.onmousedown = function (event) {
      _this.startPosX = event.pageX;
      _this.startPosY = event.pageY;
      document.addEventListener('mousemove', func);
    };

    window.onmouseup = function () {
      document.removeEventListener('mousemove', func);
    };
  }

  _createClass(MouseWork, [{
    key: "onWheel",
    value: function onWheel(event) {
      this.mouseX = event.offsetX - 500;
      this.mouseY = 500 - event.offsetY;
      this.transX += this.mouseX * (Math.pow(10, this.transZ) - Math.pow(10, this.transZ + event.deltaY * 3 / 10000));
      this.transY -= this.mouseY * (Math.pow(10, this.transZ) - Math.pow(10, this.transZ + event.deltaY * 3 / 10000));
      this.transZ += event.deltaY * 3 / 10000;
      return false;
    }
  }, {
    key: "onMouseMove",
    value: function onMouseMove(event) {
      this.transX += (this.startPosX - event.pageX) * Math.pow(10, this.transZ);
      this.startPosX = event.pageX;
      this.transY += (this.startPosY - event.pageY) * Math.pow(10, this.transZ);
      this.startPosY = event.pageY;
    }
  }, {
    key: "onMouseChangePos",
    value: function onMouseChangePos(event) {
      this.mouseX = event.offsetX;
      this.mouseY = event.offsetY;
    }
  }, {
    key: "getTransX",
    get: function get() {
      return this.transX;
    }
  }, {
    key: "getTransY",
    get: function get() {
      return this.transY;
    }
  }, {
    key: "getTransZ",
    get: function get() {
      return this.transZ;
    }
  }]);

  return MouseWork;
}();



/***/ }),

/***/ "./src/code/shader.mjs":
/*!*****************************!*\
  !*** ./src/code/shader.mjs ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShaderWork; });
/* harmony import */ var _shd_def_fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../shd/def.fs */ "./src/shd/def.fs");
/* harmony import */ var _shd_def_vs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shd/def.vs */ "./src/shd/def.vs");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ShaderWork = /*#__PURE__*/function () {
  function ShaderWork(gl) {
    _classCallCheck(this, ShaderWork);

    var fragmentShader = this.getShader(gl, gl.FRAGMENT_SHADER, _shd_def_fs__WEBPACK_IMPORTED_MODULE_0__["default"]);
    var vertexShader = this.getShader(gl, gl.VERTEX_SHADER, _shd_def_vs__WEBPACK_IMPORTED_MODULE_1__["default"]);
    this.shaderProgram = gl.createProgram();
    gl.attachShader(this.shaderProgram, vertexShader);
    gl.attachShader(this.shaderProgram, fragmentShader);
    gl.linkProgram(this.shaderProgram);

    if (!gl.getProgramParameter(this.shaderProgram, gl.LINK_STATUS)) {
      alert('Could not initialize shaders');
    }

    gl.useProgram(this.shaderProgram);
    this.shaderProgram.vertexPositionAttribute = gl.getAttribLocation(this.shaderProgram, 'aVertexPosition');
    gl.enableVertexAttribArray(this.shaderProgram.vertexPositionAttribute);

    for (var _len = arguments.length, arg = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      arg[_key - 1] = arguments[_key];
    }

    for (var _i = 0, _arg = arg; _i < _arg.length; _i++) {
      var i = _arg[_i];
      this.shaderProgram[i] = gl.getUniformLocation(this.shaderProgram, i);
    }
  }

  _createClass(ShaderWork, [{
    key: "getShader",
    value: function getShader(gl, type, str) {
      var shader = gl.createShader(type);
      gl.shaderSource(shader, str);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert(gl.getShaderInfoLog(shader));
        return null;
      }

      return shader;
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(gl, squareVertexPositionBuffer) {
      gl.vertexAttribPointer(this.shaderProgram.vertexPositionAttribute, squareVertexPositionBuffer.itemSize, gl.FLOAT, false, 0, 0);

      for (var _len2 = arguments.length, arg = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        arg[_key2 - 2] = arguments[_key2];
      }

      for (var _i2 = 0, _arg2 = arg; _i2 < _arg2.length; _i2++) {
        var i = _arg2[_i2];

        switch (i.type) {
          case 'float':
            gl.uniform1f(this.shaderProgram[i.name], i.value);
            break;

          case 'int':
            gl.uniform1i(this.shaderProgram[i.name], i.value);
            break;
        }
      }
    }
  }]);

  return ShaderWork;
}();



/***/ }),

/***/ "./src/code/style.css":
/*!****************************!*\
  !*** ./src/code/style.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/code/texwork.mjs":
/*!******************************!*\
  !*** ./src/code/texwork.mjs ***!
  \******************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TexWork; });


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TexWork = /*#__PURE__*/function () {
  function TexWork(gl, name) {
    _classCallCheck(this, TexWork);

    this.texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    this.image = new window.Image();
    this.image.src = name;

    var func = function func() {
      gl.bindTexture(gl.TEXTURE_2D, this.texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.image);
    };

    this.image.onload = func.bind(this);
  }

  _createClass(TexWork, [{
    key: "drawTex",
    value: function drawTex(gl, num) {
      if (num === 0) {
        gl.activeTexture(gl.TEXTURE0);
      } else {
        gl.activeTexture(gl.TEXTURE1);
      }

      gl.bindTexture(gl.TEXTURE_2D, this.texture);
    }
  }]);

  return TexWork;
}();



/***/ }),

/***/ "./src/img/neonflames.png":
/*!********************************!*\
  !*** ./src/img/neonflames.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c44dc1ba0dab504fb66242e0c998020a.png");

/***/ }),

/***/ "./src/shd/def.fs":
/*!************************!*\
  !*** ./src/shd/def.fs ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nprecision highp float;\r\n\r\nuniform float uTime;\r\nuniform float transX;\r\nuniform float transY;\r\nuniform float transZ;\r\nuniform float range;\r\nuniform sampler2D Tex0;\r\n\r\nin vec3 TexCoord;\r\n\r\nout vec4 oColor;\r\n\r\nvec2 vec2mulvec2(vec2 a, vec2 b)\r\n{\r\n    return vec2(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);\r\n}\r\n\r\nfloat Arg(vec2 a)\r\n{\r\n    if (a.x > 0.0)\r\n      return atan(a.y / a.x);\r\n    if (a.x == 0.0)\r\n      return asin(1.0) * sign(a.y);\r\n    return atan(a.y / a.x) + acos(-1.0) * sign(a.y);\r\n}\r\n\r\nvec2 vec2pow(vec2 a, float b)\r\n{\r\n    float fi = Arg(a);\r\n\r\n    return vec2(cos(fi * b), sin(fi * b)) * pow(length(a), b);\r\n}\r\n\r\nfloat vec2rec(vec2 xy)\r\n{\r\n    vec2 z = xy;\r\n    float i;\r\n\r\n    while (length(z) < 2.0 && i < 500.0)\r\n    {\r\n      i++;\r\n      z = vec2pow(z, range) + xy;\r\n    }\r\n\r\n    return i;\r\n}\r\n\r\nvoid main(void)\r\n{\r\n    vec2 xy = vec2(gl_FragCoord);\r\n    xy -= 500.0;\r\n    xy *= pow(10.0, transZ);\r\n    xy += 500.0;\r\n    xy.x += transX;\r\n    xy.y -= transY;\r\n    xy = xy / 1000.0;\r\n    xy.x -= 0.5;\r\n    xy.y -= 0.5;\r\n    float i = vec2rec(xy);\r\n\r\n    oColor = vec4(texture(Tex0, xy).xyz, i / 500.0);\r\n}\r\n");

/***/ }),

/***/ "./src/shd/def.vs":
/*!************************!*\
  !*** ./src/shd/def.vs ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#version 300 es\r\nin vec3 aVertexPosition;\r\n\r\nvoid main(void)\r\n{\r\n    gl_Position = vec4(aVertexPosition, 1.0);\r\n}\r\n");

/***/ })

/******/ });
//# sourceMappingURL=index-bundles.js.map