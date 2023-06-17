
/**
 *  Показать пароль
 * */
export default class ShowPassword {

  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который переключает видимость пароля.
   * @param {string} passwordSelector - селектор с паролем.
   */
  constructor(triggerSelector,passwordSelector) {

    this._$trigger = document.querySelector(triggerSelector)
    this._$password = document.querySelector(passwordSelector)

  }

  /**
   * Инициализация
   * @return {this|Object}
   */
  init() {

    if (!this._$trigger && this._$password) {
      console.log("Модуль ShowPassword не подключился!")

      return {}
    }

    this._toggleHandler()

    return this
  }

  /**
   * Обработчик события клика по элементу который скрывает/показывает пароль
   * @return {void}
   */
  _toggleHandler() {

    this._$trigger.addEventListener('click', (e) => {

      e.preventDefault()
      e.stopPropagation()

      this._$password.type = (this._$password.type === 'text') ? 'password' : 'text'
    })

    if(this._$password.form) {
      this._$password.form.addEventListener('submit', (e) => {

        this._$password.type = 'password'
      })
    }

  }

}
