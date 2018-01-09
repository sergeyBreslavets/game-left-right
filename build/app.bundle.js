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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/public";
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Контроллер (Controller) интерпретирует действия пользователя, оповещая модель о необходимости изменений[


var ControllerMain = exports.ControllerMain = function () {
    function ControllerMain(view, idleftbnt, idrightbtn) {
        _classCallCheck(this, ControllerMain);

        this.view = view;
        this.idleftbnt = idleftbnt;
        this.idrightbtn = idrightbtn;
        this.nowQuestion = 0; // 0-left 1-right
        self = this;

        self.init();
    }

    _createClass(ControllerMain, [{
        key: "init",
        value: function init() {
            var btnLeft = document.getElementById(this.idleftbnt);
            var btnRight = document.getElementById(this.idrightbtn);

            self.makeQuestion();

            btnLeft.onclick = function (event) {
                self.choiceAnswer(0);
            };
            btnRight.onclick = function (evet) {
                self.choiceAnswer(1);
            };
        }
    }, {
        key: "makeQuestion",
        value: function makeQuestion() {
            this.nowQuestion = Math.floor(Math.random() * 2);
            var text = "Лево";
            if (this.nowQuestion == 1) {
                text = "Право";
            }
            this.view.viewtext(text);
        }
    }, {
        key: "choiceAnswer",
        value: function choiceAnswer(res) {
            console.log(res);
            var text = "Ошибка";
            if (res == this.nowQuestion) {
                text = "Верно";
            }
            this.view.viewRes(text);
            self.next();
        }
    }, {
        key: "next",
        value: function next() {
            self.makeQuestion();
        }
    }]);

    return ControllerMain;
}();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//Модель (Model) предоставляет данные и реагирует на команды контроллера, изменяя свое состояние[1].


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var modelMain = exports.modelMain = function () {
    function modelMain(listall) {
        _classCallCheck(this, modelMain);

        this.listall = listall;
        self = this;
    }

    _createClass(modelMain, [{
        key: "loadData",
        value: function loadData() {
            console.log("loaddata");
            var sObj = localStorage.getItem("todolist");
            if (sObj != null) {
                var datain = JSON.parse(sObj);
                this.listall = datain.slice(0);

                //////////////////////
                // self.veiwAllList();
            }
        }
    }, {
        key: "saveData",
        value: function saveData() {
            console.log("save");
            console.log(this.listall);
            var sObj = JSON.stringify(this.listall);
            localStorage.removeItem("todolist");
            localStorage.setItem("todolist", sObj);
        }
    }]);

    return modelMain;
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//Представление (View) отвечает за отображение данных модели пользователю, реагируя на изменения модели[1].


var viewMain = exports.viewMain = function () {
    function viewMain(idtext, idres, data) {
        _classCallCheck(this, viewMain);

        this.idtext = idtext;
        this.idres = idres;
        this.data = data;
    }

    _createClass(viewMain, [{
        key: "viewtext",
        value: function viewtext(text) {
            var textel = document.getElementById(this.idtext);
            textel.innerHTML = text;
        }
    }, {
        key: "viewRes",
        value: function viewRes(text) {
            var resel = document.getElementById(this.idres);
            resel.innerHTML = text;
        }
    }]);

    return viewMain;
}();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _controller = __webpack_require__(0);

var _model = __webpack_require__(1);

var _view = __webpack_require__(2);

var idtext = "text";
var idleftbnt = "left";
var idrightbtn = "right";
var idresult = "result";
var data = [];

var view = new _view.viewMain(idtext, idresult, data);
view.viewRes("zlo");
var controller = new _controller.ControllerMain(view, idleftbnt, idrightbtn);

/***/ })
/******/ ]);