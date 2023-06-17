"use strict";
(self["webpackChunkgulp_html_scss"] = self["webpackChunkgulp_html_scss"] || []).push([["index"],{

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_show_password__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/show-password */ "./src/js/modules/show-password.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");


window.addEventListener('DOMContentLoaded', () => {
  // показать пароль
  new _modules_show_password__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-password-btn', '.js-password').init();

  // слайдер
  new _modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"]('.slider').init();
});

/***/ }),

/***/ "./src/js/modules/show-password.js":
/*!*****************************************!*\
  !*** ./src/js/modules/show-password.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShowPassword; }
/* harmony export */ });
/**
 *  Показать пароль
 * */
class ShowPassword {
  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который переключает видимость пароля.
   * @param {string} passwordSelector - селектор с паролем.
   */
  constructor(triggerSelector, passwordSelector) {
    this._$trigger = document.querySelector(triggerSelector);
    this._$password = document.querySelector(passwordSelector);
  }

  /**
   * Инициализация
   * @return {this|Object}
   */
  init() {
    if (!this._$trigger && this._$password) {
      console.log("Модуль ShowPassword не подключился!");
      return {};
    }
    this._toggleHandler();
    return this;
  }

  /**
   * Обработчик события клика по элементу который скрывает/показывает пароль
   * @return {void}
   */
  _toggleHandler() {
    this._$trigger.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      this._$password.type = this._$password.type === 'text' ? 'password' : 'text';
    });
    if (this._$password.form) {
      this._$password.form.addEventListener('submit', e => {
        this._$password.type = 'password';
      });
    }
  }
}

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Slider; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);



/**
 *  Слайдер
 * */
class Slider {
  /**
   * Конструктор
   * @param {string} selectorSlider - селектор родителя всех слайдов.
   */
  constructor(selectorSlider) {
    this.$el = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slider');
    this.$window = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window);
    this.isInit = false;
  }

  /**
   * Инициализация
   * @return {this|Object}
   */
  init() {
    let options = {
      arrows: false,
      dots: true,
      speed: 500
    };
    if (!this.isInit && this.$el.length && this.$window.outerWidth() >= 992) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slider').slick(options);
      this.isInit = true;
    }
    this.$window.on('resize', e => {
      console.log(this);
      if (this.$window.outerWidth() < 992 && this.isInit) {
        this.$el.slick('unslick');
        this.isInit = false;
      }
      if (this.$window.outerWidth() >= 992 && !this.isInit) {
        this.$el.slick(options);
        this.isInit = true;
      }
    });
    return this;
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["slick"], function() { return __webpack_exec__("./src/js/index.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map