import $ from 'jquery'
import 'jquery-validation'

import Component from "../core/component";

/**
 *  Зарегистрировать пользователя
 * */
export default class FormRegistrationComponent extends Component {
  /**
   *
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

    console.log(this.form)
  }

  /**
   * Настройки валидирования формы
   * @return {Object}
   */
  _validate() {

    return $(this.$el).validate({
      // -> включить режим отладки
      debug: true,

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
          required: 'Пожалуйста, укажите пароль',
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
      highlight: function(element, errorClass, validClass) {
        $(element).addClass(errorClass).removeClass(validClass);
        $(element).next('.sForm__valid-text').removeClass('sForm__valid-text');

        console.log($(element).next('.sForm__valid-text'))
      },

      // отмены изменений, сделанных опцией highlight
      unhighlight: function(element, errorClass, validClass) {
        $(element).removeClass(errorClass).addClass(validClass);
        $(element).next('.sForm__valid-text').text('Заполненно верно')
      },

    })
  }
}
