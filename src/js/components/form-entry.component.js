import $ from 'jquery'
import 'jquery-validation'
import 'jquery-validation/dist/localization/messages_ru'

import Component from "../core/component";

/**
 *  Вход
 * */
export default class FormEntryComponent extends Component {

  /**
   * Конструктор
   * @param {string} id         - находит компонент.
   * @param {Object=} options   - конфигурация.
   */
  constructor(id,options) {

    super(id,options);

  }

  /**
   * Интерфейс компонента
   * @return {void}
   */
  init() {
    this.form = this._validate()
  }

  /**
   * Настройки валидирования формы
   * @return {Object}
   */
  _validate() {

    jQuery.validator.addClassRules("js-required-validate", {
      required: true
    });

    return $(this.$el).validate({
      // -> включить режим отладки
      debug: false,

      // -> настройка пользовательских сообщений (для валидируемых полей)
      messages: {
        login: {
          required: 'Пожалуйста, укажите логин',
        },
        password: {
          required: 'Пожалуйста, укажите пароль',
        },
      },

      // -> класс добавляется к полю, если оно валидно (по умолчанию: "valid")
      validClass: 'sForm__valid',

      // -> класс добавляется к сообщению и полю, если оно НЕ валидно (по умолчанию: "error")
      errorClass: 'sForm__invalid',

      // -> тэг который будет создаваться, в него записываться сообщения (по умолчанию: "label")
      errorElement: 'span',

      // отмены изменений, сделанных опцией highlight
      unhighlight: function(element, errorClass, validClass) {
        $(element).removeClass(errorClass).addClass(validClass);

        if(!$(element).val()) {
          $(element).removeClass(validClass);
        }
      }
    })
  }
}
