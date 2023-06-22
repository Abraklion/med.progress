import ModalCreate from "./modules/modal-create";
import {modalConfirm} from "./templates/modal-confirm";

import date from "./modules/date";
import mask from "./modules/mask";

window.addEventListener('DOMContentLoaded', () => {

  // модалка подтвердить удаление пользователя
  if(document.querySelector('.js-delete-user')) {
    new ModalCreate(
      '.js-delete-user',
      '.modal--confirm',
      modalConfirm,
      {
        title : 'Вы желаете удалить пользователя?'
      }
    ).init()
  }

  // модалка подтвердить удаление новости
  if(document.querySelector('.js-delete-news')) {
    new ModalCreate(
      '.js-delete-news',
      '.modal--confirm',
      modalConfirm,
      {
        title : 'Вы желаете удалить новость?'
      }
    ).init()
  }

  // Работы с датой в временем
  date()

  // Маски
  mask()

})
