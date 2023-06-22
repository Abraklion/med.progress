import ModalBurger from './modules/burger'

window.addEventListener('DOMContentLoaded', () => {

  // бургер меню
  new ModalBurger(
    '.js-burger',
    '.js-menu',
    {
      overflowHidden : true
    }
  ).init()

})

