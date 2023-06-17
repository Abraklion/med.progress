import ShowPassword from "./modules/show-password";
import Slider from "./modules/slider"

window.addEventListener('DOMContentLoaded', () => {

  // показать пароль
  new ShowPassword(
    '.js-password-btn',
    '.js-password',
  ).init()

  // слайдер
  new Slider(
    '.slider',
  ).init()

})
