"use strict";
(self["webpackChunkgulp_html_scss"] = self["webpackChunkgulp_html_scss"] || []).push([["main"],{

/***/ "./src/js/library/sumbiot/core/index.js":
/*!**********************************************!*\
  !*** ./src/js/library/sumbiot/core/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Core; }
/* harmony export */ });
/**
 *  Ядро Sumbiot
 * */
class Core {
  /**
   * Ширина скролла прокрутки
   * @return {number}
   */
  calcScroll() {
    let div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  /**
   * Переполнение document
   * @param {string} overflow - переполнения документа
   * @param {string} marginRight - отступ документа с право
   * @return {void}
   */
  overflowBody() {
    let overflow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    let marginRight = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    if (document.body.offsetHeight > document.documentElement.clientHeight) {
      // проверяем а есть ли скрол вообще
      document.body.style.overflow = overflow;
      document.body.style.marginRight = marginRight ? `${marginRight}px` : '';
    }
  }
}

/***/ }),

/***/ "./src/js/library/sumbiot/modules/modal/components/modal.js":
/*!******************************************************************!*\
  !*** ./src/js/library/sumbiot/modules/modal/components/modal.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Modal; }
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ */ "./src/js/library/sumbiot/modules/modal/index.js");


/**
 *  Модальное окно стандарт
 * */
class Modal extends ___WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который открывает модальное окно.
   * @param {string} modalSelector   - селектор модального окна которое мы будем открывать
   *
   * @param {Object=}     options                     - конфигурация.
   *
   * @param {string}      [options.closeSelector]     - селектор который закрывает модальное окно
   * @param {boolean}     [options.closeClickOverlay] - будет ли закрываться окно по клику по подложки
   *
   * @param {string}      [options.modalGroup]        - группирует модалки в группы
   *
   * @param {null|string} [options.modalParent]       - селектор родитель куда вставляем модальное окно.
   *
   * @param {boolean}     [options.overflowHidden]    - убрать скролл у документа при появлении модального окна
   */
  constructor(triggerSelector, modalSelector) {
    let {
      closeSelector = '[data-sumbiot-modal-close]',
      closeClickOverlay = true,
      modalGroup = '[data-sumbiot-modal]',
      modalParent = null,
      overflowHidden = false
    } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    super();
    this._trigger = triggerSelector;
    this._modalSelector = modalSelector;
    this.modal = document.querySelector(modalSelector);
    this._close = this.modal?.querySelector(closeSelector);
    this._closeClickOverlay = closeClickOverlay || this.modal?.dataset.sumbiotOverlay === 'true' || false;
    this._modalGroup = modalGroup;
    this._modalParent = modalParent || this.modal?.dataset.sumbiotParent || false;
    this._overflowHidden = overflowHidden || this.modal?.dataset.sumbiotOverflow && this.modal?.dataset.sumbiotOverflow === 'true' || false;
  }

  /**
   * Инициализация модального окона
   * @return {this|Object}
   */
  init() {
    if (!this.modal) {
      console.log("Проверте у всех ли модальных окон, заданы корректные ID");
      return {};
    }
    this.hideAllModals();
    this._showHandler();
    this._closeHandler();
    return this;
  }

  /**
   * Скрывает все модальные окна
   * @param {boolean} group - скрыть только группу, которые относятся к модальному окну, которое мы хотим показать
   * @return {void}
   */
  hideAllModals() {
    let group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    let modals;
    if (group) {
      modals = document.querySelectorAll(`${this._modalGroup.slice(0, this._modalGroup.length - 1)}${this.modal.dataset.sumbiotModal ? `="${this.modal.dataset.sumbiotModal}"` : ''}]`);
      if (!modals.length) {
        modals = document.querySelectorAll(this._modalGroup);
      }
    } else {
      modals = document.querySelectorAll(this._modalGroup);
    }
    modals.forEach(modal => {
      modal.classList.add('animated', 'fadeIn');
      modal.style.display = 'none';
    });
    this.overflowBody();
  }

  /**
   * Обработчик события клика по элементу который открывает модальное окно
   * @return {void}
   */
  _showHandler() {
    document.addEventListener('click', e => {
      let target = e.target;
      if (target && target.matches(this._trigger) && target.dataset.sumbiotTarget === this._modalSelector || target && target.parentElement.matches(this._trigger) && target.parentElement.dataset.sumbiotTarget === this._modalSelector) {
        e.preventDefault();
        e.stopPropagation();
        if (target.parentElement.matches(this._trigger)) {
          target = target.parentElement;
        }
        this._eventTrigger = target;
        this.show();
        setTimeout(() => target.blur(), 150);
      }
    }, true);
  }

  /**
   * Показать модальное окно
   * @return {void}
   */
  show() {
    this.hideAllModals(true);
    this._modalPosition();
    this.modal.style.display = 'block';
  }

  /**
   * Позицианирует модальное окно в нужное место
   * @return {void}
   */
  _modalPosition() {
    if (this._overflowHidden) this.overflowBody('hidden', this.calcScroll());
    if (this._modalParent) {
      const modalParent = this._eventTrigger.closest(this._modalParent) || document.querySelector(this._modalParent) || this._eventTrigger.parentElement;
      modalParent.append(this.modal);
    }
  }

  /**
   * Обработчик события клика по элементу который закрывает модальное окно
   * @return {void}
   */
  _closeHandler() {
    this._close?.addEventListener('click', e => {
      if (e.target) {
        e.preventDefault();
        this.close();
      }
    });
    this.modal?.addEventListener('click', e => {
      if (e.target) {
        e.stopPropagation();
        this._closeModalOverlay(e);
      }
    });
    window.addEventListener("keydown", e => {
      if (e.key === "Escape" || e.keyCode === 27) {
        this.hideAllModals();
      }
    });
  }

  /**
   * Скрыть модальное окно
   * @return {void}
   */
  close() {
    this.overflowBody();
    this.modal.style.display = "none";
  }

  /**
   * Скрывает модальне окно по клику на подложку
   * @return {void}
   */
  _closeModalOverlay(e) {
    if (e.target === this.modal && this._closeClickOverlay) {
      this.overflowBody();
      this.modal.style.display = "none";
    }
  }
}

/***/ }),

/***/ "./src/js/library/sumbiot/modules/modal/index.js":
/*!*******************************************************!*\
  !*** ./src/js/library/sumbiot/modules/modal/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModalCore; }
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core */ "./src/js/library/sumbiot/core/index.js");


/**
 *  Модальное окно Ядро
 * */
class ModalCore extends _core__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Добавляет новый метод к модалки, не изменяя исходный код класса(первоначальную реализацию) {паттерн Visitor}
   * @param {Function} visitor - добавляет функционал instanceClass
   * @return {this}
   */
  accept(visitor) {
    visitor(this);
    return this;
  }
}

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");

window.addEventListener('DOMContentLoaded', () => {
  // бургер меню
  new _modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-burger', '.js-menu', {
    overflowHidden: true
  }).init();
});

/***/ }),

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModalBurger; }
/* harmony export */ });
/* harmony import */ var _library_sumbiot_modules_modal_components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/sumbiot/modules/modal/components/modal */ "./src/js/library/sumbiot/modules/modal/components/modal.js");


/**
 *  Бургер меню
 * */
class ModalBurger extends _library_sumbiot_modules_modal_components_modal__WEBPACK_IMPORTED_MODULE_0__["default"] {
  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который открывает модальное окно.
   * @param {string} modalSelector   - селектор модального окна которое мы будем открывать
   *
   * @param {Object=}     options                     - конфигурация.
   *
   * @param {string}      [options.closeSelector]     - селектор который закрывает модальное окно
   * @param {boolean}     [options.closeClickOverlay] - будет ли закрываться окно по клику по подложки
   *
   * @param {string}      [options.modalGroup]        - группирует модалки в группы
   *
   * @param {null|string} [options.modalParent]       - селектор родитель куда вставляем модальное окно.
   *
   * @param {boolean}     [options.overflowHidden]    - убрать скролл у документа при появлении модального окна
   */
  constructor(triggerSelector, modalSelector) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    super(triggerSelector, modalSelector, options);
    this._trigger = document.querySelector(triggerSelector);
  }

  /**
   * Скрывает все модальные окна
   * @param {boolean} group - скрыть только группу, которые относятся к модальному окну, которое мы хотим показать
   * @return {void}
   */
  hideAllModals() {
    let group = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
    let modals;
    if (group) {
      modals = document.querySelectorAll(`${this._modalGroup.slice(0, this._modalGroup.length - 1)}${this.modal.dataset.sumbiotModal ? `="${this.modal.dataset.sumbiotModal}"` : ''}]`);
      if (!modals.length) {
        modals = document.querySelectorAll(this._modalGroup);
      }
    } else {
      modals = document.querySelectorAll(this._modalGroup);
    }
    modals.forEach(modal => {
      modal.classList.add('animated', 'fadeIn');
      modal.style.display = 'none';
    });
    this._trigger.classList.remove('burger--active');
    this.overflowBody();
  }

  /**
   * Обработчик события клика по элементу который открывает модальное окно
   * @return {void}
   */
  _showHandler() {
    this._trigger.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      if (this._trigger.classList.contains('burger--active')) {
        this.close();
      } else {
        this.show();
      }
    });
  }

  /**
   * Показать модальное окно
   * @return {void}
   */
  show() {
    this.hideAllModals(true);
    this._modalPosition();
    this._trigger.classList.add('burger--active');
    this.modal.style.display = 'block';
  }

  /**
   * Обработчик события клика по элементу который закрывает модальное окно
   * @return {void}
   */
  _closeHandler() {
    this.modal?.addEventListener('click', e => {
      if (e.target) {
        e.stopPropagation();
        this._closeModalOverlay(e);
      }
    });
    window.addEventListener("keydown", e => {
      if (e.key === "Escape" || e.keyCode === 27) {
        this.hideAllModals();
      }
    });
  }

  /**
   * Скрыть модальное окно
   * @return {void}
   */
  close() {
    this.overflowBody();
    this._trigger.classList.remove('burger--active');
    this.modal.style.display = "none";
  }

  /**
   * Скрывает модальне окно по клику на подложку
   * @return {void}
   */
  _closeModalOverlay(e) {
    if (e.target === this.modal && this._closeClickOverlay) {
      this.overflowBody();
      this._trigger.classList.remove('burger--active');
      this.modal.style.display = "none";
    }
  }
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/js/main.js"));
/******/ }
]);
//# sourceMappingURL=main.js.map