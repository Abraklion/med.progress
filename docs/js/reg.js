"use strict";
(self["webpackChunkgulp_html_scss"] = self["webpackChunkgulp_html_scss"] || []).push([["reg"],{

/***/ "./src/js/components/form-registration.component.js":
/*!**********************************************************!*\
  !*** ./src/js/components/form-registration.component.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormRegistrationComponent; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-validation */ "./node_modules/jquery-validation/dist/jquery.validate.js");
/* harmony import */ var jquery_validation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/component */ "./src/js/core/component.js");




/**
 *  Зарегистрировать пользователя
 * */
class FormRegistrationComponent extends _core_component__WEBPACK_IMPORTED_MODULE_2__["default"] {
  /**
   *
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id, options) {
    super(id, options);
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  init() {
    this.form = this._validate();
    console.log(this.form);
  }

  /**
   * Настройки валидирования формы
   * @return {Object}
   */
  _validate() {
    return jquery__WEBPACK_IMPORTED_MODULE_0___default()(this.$el).validate({
      // -> включить режим отладки
      debug: false,
      // -> настройка полей формы (какие поля валидировать)
      rules: {
        email: {
          required: true,
          email: true
        },
        password: {
          required: true
        },
        repeat_password: {
          required: true,
          equalTo: "#password"
        }
      },
      // -> настройка пользовательских сообщений (для валидируемых полей)
      messages: {
        email: {
          required: 'Пожалуйста, укажите Email',
          email: 'Пожалуйста, введите действительный адрес электронной почты'
        },
        password: {
          required: 'Пожалуйста, укажите пароль'
        },
        repeat_password: {
          required: 'Пожалуйста, повторите пароль',
          equalTo: 'Пароли не совпадают'
        }
      },
      // -> класс добавляется к полю, если оно валидно (по умолчанию: "valid")
      validClass: 'sForm__valid',
      // -> класс добавляется к сообщению и полю, если оно НЕ валидно (по умолчанию: "error")
      errorClass: 'sForm__invalid',
      // -> тэг который будет создаваться, в него записываться сообщения (по умолчанию: "label")
      errorElement: 'span',
      success: 'sForm__valid-text',
      // переопределяет стили невалидных полей
      highlight: function (element, errorClass, validClass) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).addClass(errorClass).removeClass(validClass);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).next('.sForm__valid-text').removeClass('sForm__valid-text');
        console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).next('.sForm__valid-text'));
      },
      // отмены изменений, сделанных опцией highlight
      unhighlight: function (element, errorClass, validClass) {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).removeClass(errorClass).addClass(validClass);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).next('.sForm__valid-text').text('Заполненно верно');
      }
    });
  }
}

/***/ }),

/***/ "./src/js/core/component.js":
/*!**********************************!*\
  !*** ./src/js/core/component.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Component; }
/* harmony export */ });
/**
 *  Базовый класс для компонентов
 * */
class Component {
  /**
   * Конструктор
   * @param {string} id         - находит или создает компонент.
   * @param {Object=} options   - конфигурация.
   * @param {string|null} [options.create] - названи тега, генерировать компонент программно(по умолчанию отбирается со страницы)
   * @param {string} [options.display] - тип отображения элемента на странице при показе
   */
  constructor(id) {
    let {
      create = null,
      display = 'block'
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    !create ? this.$el = document.querySelector(id) : this.$el = document.createElement(create);
    this.$el.setAttribute('id', id.slice(1));
    this._display = display;
  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  init() {}

  /**
   * Скрывает компонент
   * @return {void}
   */
  hide() {
    this.$el.style.display = 'none';
    this._onHide(); // -> после скрытия компонента вызываем метод
  }

  /**
   * Показать компонент
   * @return {void}
   */
  show() {
    this.$el.style.display = this._display;
    this._onShow(); // -> после показа компонента вызываем метод
  }

  /**
   * Действия после скрытия компонента (хук)
   * @return {void}
   */
  _onHide() {}

  /**
   * Действия после показа компонента (хук)
   * @return {void}
   */
  _onShow() {}
}

/***/ }),

/***/ "./src/js/reg.js":
/*!***********************!*\
  !*** ./src/js/reg.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_form_registration_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/form-registration.component */ "./src/js/components/form-registration.component.js");

window.addEventListener('DOMContentLoaded', () => {
  // Форма регистраии
  new _components_form_registration_component__WEBPACK_IMPORTED_MODULE_0__["default"]('#registration').init();
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["validation"], function() { return __webpack_exec__("./src/js/reg.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=reg.js.map