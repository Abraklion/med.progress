(self["webpackChunkgulp_html_scss"] = self["webpackChunkgulp_html_scss"] || []).push([["adminAccount"],{

/***/ "./src/js/adminAccount.js":
/*!********************************!*\
  !*** ./src/js/adminAccount.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modal_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal-create */ "./src/js/modules/modal-create.js");
/* harmony import */ var _templates_modal_confirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./templates/modal-confirm */ "./src/js/templates/modal-confirm.js");
/* harmony import */ var _modules_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/date */ "./src/js/modules/date.js");
/* harmony import */ var _modules_mask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mask */ "./src/js/modules/mask.js");
/* harmony import */ var _modules_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/upload */ "./src/js/modules/upload.js");
/* harmony import */ var _modules_select2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/select2 */ "./src/js/modules/select2.js");






window.addEventListener('DOMContentLoaded', () => {
  // модалка подтвердить удаление пользователя
  if (document.querySelector('.js-delete-user')) {
    new _modules_modal_create__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-delete-user', '.modal--confirm', _templates_modal_confirm__WEBPACK_IMPORTED_MODULE_1__.modalConfirm, {
      title: 'Вы желаете удалить пользователя?'
    }).init();
  }

  // модалка подтвердить удаление новости
  if (document.querySelector('.js-delete-news')) {
    new _modules_modal_create__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-delete-news', '.modal--confirm', _templates_modal_confirm__WEBPACK_IMPORTED_MODULE_1__.modalConfirm, {
      title: 'Вы желаете удалить новость?'
    }).init();
  }

  // модалка подтвердить удаление страницы
  if (document.querySelector('.js-delete-page')) {
    new _modules_modal_create__WEBPACK_IMPORTED_MODULE_0__["default"]('.js-delete-page', '.modal--confirm', _templates_modal_confirm__WEBPACK_IMPORTED_MODULE_1__.modalConfirm, {
      title: 'Вы желаете удалить страницу?'
    }).init();
  }

  // Работы с датой и временем
  (0,_modules_date__WEBPACK_IMPORTED_MODULE_2__["default"])();

  // Маски
  (0,_modules_mask__WEBPACK_IMPORTED_MODULE_3__["default"])();

  // Кастомный input для загрузки файла
  (0,_modules_upload__WEBPACK_IMPORTED_MODULE_4__["default"])('.js-upload');

  // Кастомный выпадающий список
  (0,_modules_select2__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

/***/ }),

/***/ "./src/js/library/sumbiot/core/index.js":
/*!**********************************************!*\
  !*** ./src/js/library/sumbiot/core/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./src/js/modules/date.js":
/*!********************************!*\
  !*** ./src/js/modules/date.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_ui_ui_widgets_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery-ui/ui/widgets/datepicker */ "./node_modules/jquery-ui/ui/widgets/datepicker.js");
/* harmony import */ var jquery_ui_ui_widgets_datepicker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_ui_ui_widgets_datepicker__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Настройки даты и времени
 */
const date = () => {
  function datepicker() {
    (jquery__WEBPACK_IMPORTED_MODULE_0___default().datepicker.regional.ru) = {
      closeText: 'Закрыть',
      prevText: 'Предыдущий',
      nextText: 'Следующий',
      currentText: 'Сегодня',
      monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
      dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
      dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
      dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
      weekHeader: 'Не',
      dateFormat: 'dd.mm.y',
      firstDay: 1,
      isRTL: false,
      showMonthAfterYear: false,
      yearSuffix: ''
    };
    jquery__WEBPACK_IMPORTED_MODULE_0___default().datepicker.setDefaults((jquery__WEBPACK_IMPORTED_MODULE_0___default().datepicker.regional.ru));
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-datepicker").datepicker();
  }
  datepicker();
};
/* harmony default export */ __webpack_exports__["default"] = (date);

/***/ }),

/***/ "./src/js/modules/mask.js":
/*!********************************!*\
  !*** ./src/js/modules/mask.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery_maskedinput_src_jquery_maskedinput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery.maskedinput/src/jquery.maskedinput */ "./node_modules/jquery.maskedinput/src/jquery.maskedinput.js");
/* harmony import */ var jquery_maskedinput_src_jquery_maskedinput__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery_maskedinput_src_jquery_maskedinput__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Настройки масок
 */
const mask = () => {
  // маска для даты
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-datepicker").mask('99.99.99');

  // маска времени
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-time").mask('99:99');

  // маска телефона
  (jquery__WEBPACK_IMPORTED_MODULE_0___default().mask.definitions.h) = "[0|1|3|4|5|6|7|9]";
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(".js-phone").mask('+7 (h99) 999 99 99');
};
/* harmony default export */ __webpack_exports__["default"] = (mask);

/***/ }),

/***/ "./src/js/modules/modal-create.js":
/*!****************************************!*\
  !*** ./src/js/modules/modal-create.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModalCreate; }
/* harmony export */ });
/* harmony import */ var _library_sumbiot_modules_modal_components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../library/sumbiot/modules/modal/components/modal */ "./src/js/library/sumbiot/modules/modal/components/modal.js");


/**
 *  Модальное окно создающиеся программно
 * */
class ModalCreate {
  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который открывает модальное окно.
   * @param {string} modalSelector   - селектор модального окна которое мы будем открывать
   * @param {Function} template      - шаблон модального окна
   *
   * @param {Object=}     options                     - конфигурация.
   * @param {string}      [options.title]     - селектор который закрывает модальное окно
   */
  constructor(triggerSelector, modalSelector, template) {
    let {
      title = "Заголовок"
    } = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    this.triggerSelector = triggerSelector;
    this.modalSelector = modalSelector;
    this.template = template;
    this.title = title;
  }

  /**
   * Инициализация
   * @return {Object}
   */
  init() {
    this._modalAddPage();
    this._modal = new _library_sumbiot_modules_modal_components_modal__WEBPACK_IMPORTED_MODULE_0__["default"](this.triggerSelector, this.modalSelector, {
      closeClickOverlay: false
    }).init();

    // если положительный ответ активируем ссылку
    this._modal.modal.querySelector('.js-delete-ok').addEventListener('click', e => {
      e.preventDefault();
      let link = document.createElement('a');
      link.href = this._modal._eventTrigger.href;
      link.click();
    });
  }

  /**
   * добавляем модальное окно в конец BODY
   * @return {Object}
   */
  _modalAddPage() {
    let modal = this.template(this.title);
    document.querySelector('body').append(modal);
  }
}

/***/ }),

/***/ "./src/js/modules/select2.js":
/*!***********************************!*\
  !*** ./src/js/modules/select2.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! select2 */ "./node_modules/select2/dist/js/select2.js");
/* harmony import */ var select2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(select2__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Кастомный выпадающий список
 */
const select2 = () => {
  /** русификация */
  const lang = {
    searching: function () {
      return "Поиск...";
    },
    noResults: function () {
      return "Совпадений не найдено";
    },
    loadingMore: function () {
      return "Загрузка…";
    },
    errorLoading: function () {
      return "Результаты не удалось загрузить";
    },
    maximumSelected: function (e) {
      let str = "Вы можете выбрать не более " + e.maximum + " элемент";
      return str += e.maximum === 1 ? 'a' : 'ов';
    }
  };

  /** конфигурация однострочного списка */
  const config = {
    debug: false,
    //-> включить отладочные сообщения в консоли браузера

    disabled: false,
    //-> значение true, управление выбором будет отключено

    multiple: false,
    //-> включает режим множественного выбора

    selectOnClose: false,
    //-> автоматически выбирает пункт при закрытии раскрывающегося списка

    selectionCssClass: 'sSelect',
    //-> добавляет дополнительные классы CSS в активный список. по умолчанию: ''
    dropdownCssClass: 'sSelect-dropdown',
    //-> добавляет дополнительные классы CSS в раскрывающийся список. по умолчанию: ''

    theme: 'default',
    //-> настройка темы. по умолчанию: default

    minimumResultsForSearch: 10,
    //-> минимальное количество результатов, необходимое для отображения окна поиска. по умолчанию: 0

    // язык оф дока: https://select2.org/i18n
    language: {
      // все названия свойств можно найти в языковый файла в select2
      ...lang
    }
  };

  /** переопредиления параметров по умолчанию перед инициализацией списков */
  jquery__WEBPACK_IMPORTED_MODULE_0___default().fn.select2.defaults.set("width", "100%");
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.js-select2').select2({
    placeholder: '',
    // -> текст по умолчанию. по умолчанию: null

    ...config
  });
};
/* harmony default export */ __webpack_exports__["default"] = (select2);

/***/ }),

/***/ "./src/js/modules/upload.js":
/*!**********************************!*\
  !*** ./src/js/modules/upload.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 *  Определяет названия файла
 *  @param {string} triggerSelector - селектор input с input type='file'.
 * */
const upload = triggerSelector => {
  const uploadFields = document.querySelectorAll(triggerSelector);
  uploadFields.forEach(item => {
    item.addEventListener('input', () => {
      let dots;
      const arr = item.files[0].name.split('.');
      arr[0].length > 15 ? dots = "..." : dots = '.';
      const name = arr[0].substring(0, 15) + dots + arr[1];
      item.parentElement.nextElementSibling.textContent = name;
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (upload);

/***/ }),

/***/ "./src/js/templates/modal-confirm.js":
/*!*******************************************!*\
  !*** ./src/js/templates/modal-confirm.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modalConfirm": function() { return /* binding */ modalConfirm; }
/* harmony export */ });
/**
 *  Модальное окно подтверждения
 *  @param {string} title - заголовок
 *  @return {Node}
 * */
function modalConfirm(title) {
  // тело элемента
  const $modal = document.createElement('div');
  $modal.classList.add('modal', 'modal--confirm');
  $modal.dataset.sumbiotModal = '';

  // внутренности элемента
  const htmlInUser = `
    <div class="modal__inner">

      <h2 class="modal__title sFz-14"> ${title}</h2>

      <div class="modal__wrapper-btn">
        <a class="modal__btn btn btn--error js-delete-ok" href="">Удалить</a>
        <a class="modal__btn btn btn--cancel" href="" data-sumbiot-modal-close>Отмена</a>
      </div>
    </div><!--/.modal__inner"-->
  `;
  // добавляем в тело элемента внутренности элемента
  $modal.insertAdjacentHTML('afterbegin', htmlInUser);
  return $modal;
}

/***/ }),

/***/ "./node_modules/jquery.maskedinput/src/jquery.maskedinput.js":
/*!*******************************************************************!*\
  !*** ./node_modules/jquery.maskedinput/src/jquery.maskedinput.js ***!
  \*******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (factory) {
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(function ($) {

var ua = navigator.userAgent,
	iPhone = /iphone/i.test(ua),
	chrome = /chrome/i.test(ua),
	android = /android/i.test(ua),
	caretTimeoutId;

$.mask = {
	//Predefined character definitions
	definitions: {
		'9': "[0-9]",
		'a': "[A-Za-z]",
		'*': "[A-Za-z0-9]"
	},
	autoclear: true,
	dataName: "rawMaskFn",
	placeholder: '_'
};

$.fn.extend({
	//Helper Function for Caret positioning
	caret: function(begin, end) {
		var range;

		if (this.length === 0 || this.is(":hidden") || this.get(0) !== document.activeElement) {
			return;
		}

		if (typeof begin == 'number') {
			end = (typeof end === 'number') ? end : begin;
			return this.each(function() {
				if (this.setSelectionRange) {
					this.setSelectionRange(begin, end);
				} else if (this.createTextRange) {
					range = this.createTextRange();
					range.collapse(true);
					range.moveEnd('character', end);
					range.moveStart('character', begin);
					range.select();
				}
			});
		} else {
			if (this[0].setSelectionRange) {
				begin = this[0].selectionStart;
				end = this[0].selectionEnd;
			} else if (document.selection && document.selection.createRange) {
				range = document.selection.createRange();
				begin = 0 - range.duplicate().moveStart('character', -100000);
				end = begin + range.text.length;
			}
			return { begin: begin, end: end };
		}
	},
	unmask: function() {
		return this.trigger("unmask");
	},
	mask: function(mask, settings) {
		var input,
			defs,
			tests,
			partialPosition,
			firstNonMaskPos,
            lastRequiredNonMaskPos,
            len,
            oldVal;

		if (!mask && this.length > 0) {
			input = $(this[0]);
            var fn = input.data($.mask.dataName)
			return fn?fn():undefined;
		}

		settings = $.extend({
			autoclear: $.mask.autoclear,
			placeholder: $.mask.placeholder, // Load default placeholder
			completed: null
		}, settings);


		defs = $.mask.definitions;
		tests = [];
		partialPosition = len = mask.length;
		firstNonMaskPos = null;

		mask = String(mask);

		$.each(mask.split(""), function(i, c) {
			if (c == '?') {
				len--;
				partialPosition = i;
			} else if (defs[c]) {
				tests.push(new RegExp(defs[c]));
				if (firstNonMaskPos === null) {
					firstNonMaskPos = tests.length - 1;
				}
                if(i < partialPosition){
                    lastRequiredNonMaskPos = tests.length - 1;
                }
			} else {
				tests.push(null);
			}
		});

		return this.trigger("unmask").each(function() {
			var input = $(this),
				buffer = $.map(
    				mask.split(""),
    				function(c, i) {
    					if (c != '?') {
    						return defs[c] ? getPlaceholder(i) : c;
    					}
    				}),
				defaultBuffer = buffer.join(''),
				focusText = input.val();

            function tryFireCompleted(){
                if (!settings.completed) {
                    return;
                }

                for (var i = firstNonMaskPos; i <= lastRequiredNonMaskPos; i++) {
                    if (tests[i] && buffer[i] === getPlaceholder(i)) {
                        return;
                    }
                }
                settings.completed.call(input);
            }

            function getPlaceholder(i){
                if(i < settings.placeholder.length)
                    return settings.placeholder.charAt(i);
                return settings.placeholder.charAt(0);
            }

			function seekNext(pos) {
				while (++pos < len && !tests[pos]);
				return pos;
			}

			function seekPrev(pos) {
				while (--pos >= 0 && !tests[pos]);
				return pos;
			}

			function shiftL(begin,end) {
				var i,
					j;

				if (begin<0) {
					return;
				}

				for (i = begin, j = seekNext(end); i < len; i++) {
					if (tests[i]) {
						if (j < len && tests[i].test(buffer[j])) {
							buffer[i] = buffer[j];
							buffer[j] = getPlaceholder(j);
						} else {
							break;
						}

						j = seekNext(j);
					}
				}
				writeBuffer();
				input.caret(Math.max(firstNonMaskPos, begin));
			}

			function shiftR(pos) {
				var i,
					c,
					j,
					t;

				for (i = pos, c = getPlaceholder(pos); i < len; i++) {
					if (tests[i]) {
						j = seekNext(i);
						t = buffer[i];
						buffer[i] = c;
						if (j < len && tests[j].test(t)) {
							c = t;
						} else {
							break;
						}
					}
				}
			}

			function androidInputEvent(e) {
				var curVal = input.val();
				var pos = input.caret();
				if (oldVal && oldVal.length && oldVal.length > curVal.length ) {
					// a deletion or backspace happened
					checkVal(true);
					while (pos.begin > 0 && !tests[pos.begin-1])
						pos.begin--;
					if (pos.begin === 0)
					{
						while (pos.begin < firstNonMaskPos && !tests[pos.begin])
							pos.begin++;
					}
					input.caret(pos.begin,pos.begin);
				} else {
					var pos2 = checkVal(true);
					var lastEnteredValue = curVal.charAt(pos.begin);
					if (pos.begin < len){
						if(!tests[pos.begin]){
							pos.begin++;
							if(tests[pos.begin].test(lastEnteredValue)){
								pos.begin++;
							}
						}else{
							if(tests[pos.begin].test(lastEnteredValue)){
								pos.begin++;
							}
						}
					}
					input.caret(pos.begin,pos.begin);
				}
				tryFireCompleted();
			}


			function blurEvent(e) {
                checkVal();

                if (input.val() != focusText)
                    input.change();
            }

			function keydownEvent(e) {
                if (input.prop("readonly")){
                    return;
                }

				var k = e.which || e.keyCode,
					pos,
					begin,
					end;
                    oldVal = input.val();
				//backspace, delete, and escape get special treatment
				if (k === 8 || k === 46 || (iPhone && k === 127)) {
					pos = input.caret();
					begin = pos.begin;
					end = pos.end;

					if (end - begin === 0) {
						begin=k!==46?seekPrev(begin):(end=seekNext(begin-1));
						end=k===46?seekNext(end):end;
					}
					clearBuffer(begin, end);
					shiftL(begin, end - 1);

					e.preventDefault();
				} else if( k === 13 ) { // enter
					blurEvent.call(this, e);
				} else if (k === 27) { // escape
					input.val(focusText);
					input.caret(0, checkVal());
					e.preventDefault();
				}
			}

			function keypressEvent(e) {
                if (input.prop("readonly")){
                    return;
                }

				var k = e.which || e.keyCode,
					pos = input.caret(),
					p,
					c,
					next;

				if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
					return;
				} else if ( k && k !== 13 ) {
					if (pos.end - pos.begin !== 0){
						clearBuffer(pos.begin, pos.end);
						shiftL(pos.begin, pos.end-1);
					}

					p = seekNext(pos.begin - 1);
					if (p < len) {
						c = String.fromCharCode(k);
						if (tests[p].test(c)) {
							shiftR(p);

							buffer[p] = c;
							writeBuffer();
							next = seekNext(p);

							if(android){
								//Path for CSP Violation on FireFox OS 1.1
								var proxy = function() {
									$.proxy($.fn.caret,input,next)();
								};

								setTimeout(proxy,0);
							}else{
								input.caret(next);
							}
                            if(pos.begin <= lastRequiredNonMaskPos){
		                         tryFireCompleted();
                             }
						}
					}
					e.preventDefault();
				}
			}

			function clearBuffer(start, end) {
				var i;
				for (i = start; i < end && i < len; i++) {
					if (tests[i]) {
						buffer[i] = getPlaceholder(i);
					}
				}
			}

			function writeBuffer() { input.val(buffer.join('')); }

			function checkVal(allow) {
				//try to place characters where they belong
				var test = input.val(),
					lastMatch = -1,
					i,
					c,
					pos;

				for (i = 0, pos = 0; i < len; i++) {
					if (tests[i]) {
						buffer[i] = getPlaceholder(i);
						while (pos++ < test.length) {
							c = test.charAt(pos - 1);
							if (tests[i].test(c)) {
								buffer[i] = c;
								lastMatch = i;
								break;
							}
						}
						if (pos > test.length) {
							clearBuffer(i + 1, len);
							break;
						}
					} else {
                        if (buffer[i] === test.charAt(pos)) {
                            pos++;
                        }
                        if( i < partialPosition){
                            lastMatch = i;
                        }
					}
				}
				if (allow) {
					writeBuffer();
				} else if (lastMatch + 1 < partialPosition) {
					if (settings.autoclear || buffer.join('') === defaultBuffer) {
						// Invalid value. Remove it and replace it with the
						// mask, which is the default behavior.
						if(input.val()) input.val("");
						clearBuffer(0, len);
					} else {
						// Invalid value, but we opt to show the value to the
						// user and allow them to correct their mistake.
						writeBuffer();
					}
				} else {
					writeBuffer();
					input.val(input.val().substring(0, lastMatch + 1));
				}
				return (partialPosition ? i : firstNonMaskPos);
			}

			input.data($.mask.dataName,function(){
				return $.map(buffer, function(c, i) {
					return tests[i]&&c!=getPlaceholder(i) ? c : null;
				}).join('');
			});


			input
				.one("unmask", function() {
					input
						.off(".mask")
						.removeData($.mask.dataName);
				})
				.on("focus.mask", function() {
                    if (input.prop("readonly")){
                        return;
                    }

					clearTimeout(caretTimeoutId);
					var pos;

					focusText = input.val();

					pos = checkVal();

					caretTimeoutId = setTimeout(function(){
                        if(input.get(0) !== document.activeElement){
                            return;
                        }
						writeBuffer();
						if (pos == mask.replace("?","").length) {
							input.caret(0, pos);
						} else {
							input.caret(pos);
						}
					}, 10);
				})
				.on("blur.mask", blurEvent)
				.on("keydown.mask", keydownEvent)
				.on("keypress.mask", keypressEvent)
				.on("input.mask paste.mask", function() {
                    if (input.prop("readonly")){
                        return;
                    }

					setTimeout(function() {
						var pos=checkVal(true);
						input.caret(pos);
                        tryFireCompleted();
					}, 0);
				});
                if (chrome && android)
                {
                    input
                        .off('input.mask')
                        .on('input.mask', androidInputEvent);
                }
				checkVal(); //Perform initial check for existing values
		});
	}
});
}));


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["datepicker","select2"], function() { return __webpack_exec__("./src/js/adminAccount.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=adminAccount.js.map