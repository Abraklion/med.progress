import ModalCreate from "./modules/modal-create";
import {modalConfirm} from "./templates/modal-confirm";

import date from "./modules/date";
import mask from "./modules/mask";
import upload from "./modules/upload";
import select2 from "./modules/select2";

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

  // модалка подтвердить удаление страницы
  if(document.querySelector('.js-delete-page')) {
    new ModalCreate(
      '.js-delete-page',
      '.modal--confirm',
      modalConfirm,
      {
        title : 'Вы желаете удалить страницу?'
      }
    ).init()
  }

  // Работы с датой и временем
  date()

  // Маски
  mask()

  // Кастомный input для загрузки файла
  upload('.js-upload')

  // Кастомный выпадающий список
  select2()
})
