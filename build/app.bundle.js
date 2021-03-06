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
    function ControllerMain(view, idleftbnt, idrightbtn, idresbtn, idbtnstart, model) {
        _classCallCheck(this, ControllerMain);

        this.view = view;
        this.model = model;

        this.idresbtn = idresbtn;
        this.idbtnstart = idbtnstart;
        this.idleftbnt = idleftbnt;
        this.idrightbtn = idrightbtn;
        this.nowQuestion = 0; // 0-left 1-right
        this.nowAnswer = 0;

        self = this;
        this.timer = {};
        self.init();
        this.timeAnswer = 0;
    }

    _createClass(ControllerMain, [{
        key: "init",
        value: function init() {
            var btnLeft = document.getElementById(this.idleftbnt);
            var btnRight = document.getElementById(this.idrightbtn);
            var btnAllres = document.getElementById(this.idresbtn);
            var btnstart = document.getElementById(this.idbtnstart);

            btnLeft.onclick = function (event) {

                self.choiceAnswer(0);
            };
            btnRight.onclick = function (event) {

                self.choiceAnswer(1);
            };
            btnAllres.onclick = function (event) {
                self.allresShow();
            };
            btnstart.onclick = function (event) {
                self.startGame();
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
            // alert(res);
            this.nowAnswer = res;

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
            self.stopTimer();
            self.writeAnswerToData();

            self.makeQuestion();

            self.startTime();
        }
    }, {
        key: "startTime",
        value: function startTime() {
            var time = "00:00";
            // начать повторы с интервалом 2 сек
            var ms = 0;
            var s = 0;
            var m = 0;
            this.timeAnswer = 0;
            this.view.viewTime(time);
            this.timer = setInterval(function () {

                if (ms == 10) {

                    if (s == 60) {
                        m = m + 1;
                        s = 0;
                    }
                    s = s + 1;
                    ms = 0;
                }
                ms = ms + 1;
                var _s = s;
                var _m = m;
                if (m < 10) {
                    _m = "0" + m;
                }
                if (s < 10) {
                    _s = "0" + s;
                }
                time = _m + ":" + _s;
                console.log(time);
                self.view.viewTime(time);
                self.timeAnswer = self.timeAnswer + 1;
            }, 100);
        }
    }, {
        key: "stopTimer",
        value: function stopTimer() {
            clearInterval(this.timer);
        }
    }, {
        key: "writeAnswerToData",
        value: function writeAnswerToData() {
            console.log(this.nowQuestion);

            console.log(this.nowAnswer);

            this.model.data.push({ "id": this.model.data.length, "time": this.timeAnswer, "quest": this.nowQuestion, "answer": this.nowAnswer });
            console.log(this.model.data);
        }
    }, {
        key: "allresShow",
        value: function allresShow() {
            self.stopTimer();
            console.log(this.model.data);
            this.model.data.splice(0, 1);
            console.log(this.model.data);
            var win = 0;
            var lose = 0;
            var allGame = 0;
            var avgtime = 0;
            var maxTime = 0;
            var minTime = this.model.data[0].time;

            this.model.data.forEach(function (element) {
                allGame = allGame + 1;
                if (element.quest == element.answer) {
                    win = win + 1;
                } else {
                    lose = lose + 1;
                }
                avgtime = avgtime + element.time;
                if (minTime > element.time) {
                    minTime = element.time;
                }
                if (maxTime < element.time) {
                    maxTime = element.time;
                }
            });
            avgtime = avgtime / allGame / 10;

            var procWin = win / allGame * 100;
            var recom = "вы невнимательны";
            if (procWin >= 60) {
                recom = "надо стараться";
            }
            if (procWin >= 80) {
                recom = "вы почти четкий";
            }
            if (procWin >= 90) {
                recom = "вы четкий";
            }

            var text = "Среднее время ответа в с = " + avgtime + "<br>" + "всего игр = " + allGame + "<br>" + "Побед = " + win + "<br>" + "Поражений = " + lose + "<br>" + "max time = " + maxTime / 10 + "<br>" + "min time = " + minTime / 10 + "<br>" + " % " + procWin + " " + recom;

            this.view.viewAllres(text);
        }
    }, {
        key: "startGame",
        value: function startGame() {
            self.next();
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
    function modelMain(data) {
        _classCallCheck(this, modelMain);

        this.data = data;
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
    function viewMain(idtext, idres, idresall, idtime) {
        _classCallCheck(this, viewMain);

        this.idtext = idtext;
        this.idres = idres;
        this.idtime = idtime;
        this.idresall = idresall;
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
    }, {
        key: "viewTime",
        value: function viewTime(text) {
            var timeEl = document.getElementById(this.idtime);
            timeEl.innerHTML = text;
        }
    }, {
        key: "viewAllres",
        value: function viewAllres(text) {
            var resallEl = document.getElementById(this.idresall);
            resallEl.innerHTML = text;
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
var idtime = "time";
var idresbtn = "resbtn";
var idresall = "resall";
var idbtnstart = "startbtn";
var data = [];

var model = new _model.modelMain(data);
var view = new _view.viewMain(idtext, idresult, idresall, idtime);
var controller = new _controller.ControllerMain(view, idleftbnt, idrightbtn, idresbtn, idbtnstart, model);

/***/ })
/******/ ]);