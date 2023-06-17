import Modal from '../library/sumbiot/modules/modal/components/modal'

/**
 *  Бургер меню
 * */
export default class ModalBurger extends Modal {

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
  constructor(triggerSelector,modalSelector,options = {}) {

    super(triggerSelector,modalSelector,options);

    this._trigger = document.querySelector(triggerSelector)
  }

  /**
   * Скрывает все модальные окна
   * @param {boolean} group - скрыть только группу, которые относятся к модальному окну, которое мы хотим показать
   * @return {void}
   */
  hideAllModals(group = false) {
    let modals;

    if(group) {
      modals = document.querySelectorAll(`${this._modalGroup.slice(0,this._modalGroup.length - 1)}${this.modal.dataset.sumbiotModal ? `="${this.modal.dataset.sumbiotModal}"` : ''}]`);

      if(!modals.length) {
        modals = document.querySelectorAll(this._modalGroup)
      }
    } else {
      modals = document.querySelectorAll(this._modalGroup)
    }

    modals.forEach(modal => {
      modal.classList.add('animated', 'fadeIn');
      modal.style.display = 'none';
    })

    this._trigger.classList.remove('burger--active')

    this.overflowBody()
  }

  /**
   * Обработчик события клика по элементу который открывает модальное окно
   * @return {void}
   */
  _showHandler() {

    this._trigger.addEventListener('click', (e) => {

      e.preventDefault()
      e.stopPropagation()

      if(this._trigger.classList.contains('burger--active')) {
        this.close()
      } else {
        this.show()
      }

    })

  }

  /**
   * Показать модальное окно
   * @return {void}
   */
  show(){
    this.hideAllModals(true)

    this._modalPosition()

    this._trigger.classList.add('burger--active')

    this.modal.style.display = 'block';
  }

  /**
   * Обработчик события клика по элементу который закрывает модальное окно
   * @return {void}
   */
  _closeHandler() {
    this.modal?.addEventListener('click', (e) => {
      if (e.target) {
        e.stopPropagation()

        this._closeModalOverlay(e)
      }
    })

    window.addEventListener("keydown", (e) => {
      if(e.key === "Escape" || e.keyCode === 27) {

        this.hideAllModals()

      }
    })
  }

  /**
   * Скрыть модальное окно
   * @return {void}
   */
  close() {
    this.overflowBody()

    this._trigger.classList.remove('burger--active')

    this.modal.style.display = "none";
  }

  /**
   * Скрывает модальне окно по клику на подложку
   * @return {void}
   */
  _closeModalOverlay(e) {

    if (e.target === this.modal && this._closeClickOverlay) {
      this.overflowBody()

      this._trigger.classList.remove('burger--active')

      this.modal.style.display = "none";
    }
  }

}
