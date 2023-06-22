import Modal from "../library/sumbiot/modules/modal/components/modal";

/**
 *  Модальное окно создающиеся программно
 * */
export default class ModalCreate {

  /**
   * Конструктор
   * @param {string} triggerSelector - селектор который открывает модальное окно.
   * @param {string} modalSelector   - селектор модального окна которое мы будем открывать
   * @param {Function} template      - шаблон модального окна
   *
   * @param {Object=}     options                     - конфигурация.
   * @param {string}      [options.title]     - селектор который закрывает модальное окно
   */
  constructor(triggerSelector, modalSelector, template,
              {
                title = "Заголовок"
              } = {}) {

    this.triggerSelector = triggerSelector
    this.modalSelector = modalSelector
    this.template = template

    this.title = title


  }

  /**
   * Инициализация
   * @return {Object}
   */
  init() {

    this._modalAddPage()

    this._modal = new Modal(this.triggerSelector,this.modalSelector, {
      closeClickOverlay: false
    }).init()


    // если положительный ответ активируем ссылку
    this._modal.modal.querySelector('.js-delete-ok').addEventListener('click', e => {
      e.preventDefault()

      let link = document.createElement('a')
      link.href = this._modal._eventTrigger.href

      link.click()
    })
  }

  /**
   * добавляем модальное окно в конец BODY
   * @return {Object}
   */
  _modalAddPage() {
    let modal = this.template(this.title)

    document.querySelector('body').append(modal)
  }


}

