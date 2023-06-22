import $ from "jquery";
import 'jquery.maskedinput/src/jquery.maskedinput'

/**
 * Настройки масок
 */
const mask = () => {

  // маска для даты
  $(".js-datepicker").mask('99.99.99')

  // маска времени
  $(".js-time").mask('99:99')

  // маска телефона
  $.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
  $(".js-phone").mask('+7 (h99) 999 99 99')

}

export default mask;
