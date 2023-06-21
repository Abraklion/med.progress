import $ from "jquery";
import "slick-carousel"


/**
 *  Слайдер
 * */
export default class Slider {

  /**
   * Конструктор
   * @param {string} selectorSlider - селектор родителя всех слайдов.
   */
  constructor(selectorSlider) {

    this.$el = $('.slider')
    this.$window = $(window)

    this.isInit = false

  }

  /**
   * Инициализация
   * @return {this|Object}
   */
  init() {
    let options = {
      arrows: false,
      dots: true,
      speed: 500
    }

    if(!this.isInit && this.$el.length && this.$window.outerWidth() >= 992) {

        $('.slider').slick(options)

        this.isInit = true
    }

    this.$window.on('resize', (e) => {

      if(this.$window.outerWidth() < 992 && this.isInit) {
        this.$el.slick('unslick');
        this.isInit = false
      }

      if(this.$window.outerWidth() >= 992 && !this.isInit) {
        this.$el.slick(options);
        this.isInit = true
      }

    })

    return this
  }

}
