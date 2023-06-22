
/**
 *  Модальное окно подтверждения
 *  @param {string} title - заголовок
 *  @return {Node}
 * */
export function modalConfirm(title) {

  // тело элемента
  const $modal = document.createElement('div')
  $modal.classList.add('modal','modal--confirm')
  $modal.dataset.sumbiotModal = ''

  // внутренности элемента
  const htmlInUser = `
    <div class="modal__inner">

      <h2 class="modal__title sFz-14"> ${title}</h2>

      <div class="modal__wrapper-btn">
        <a class="modal__btn btn btn--error js-delete-ok" href="">Удалить</a>
        <a class="modal__btn btn btn--cancel" href="" data-sumbiot-modal-close>Отмена</a>
      </div>
    </div><!--/.modal__inner"-->
  `
  // добавляем в тело элемента внутренности элемента
  $modal.insertAdjacentHTML('afterbegin', htmlInUser)

  return $modal
}
