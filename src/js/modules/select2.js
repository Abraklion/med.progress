import $ from "jquery";
import 'select2'

/**
 * Кастомный выпадающий список
 */
const select2 = () => {

  /** русификация */
  const lang = {
    searching: function () {
      return "Поиск...";
    },
    noResults: function () {
      return "Совпадений не найдено";
    },

    loadingMore:function(){
      return"Загрузка…";
    },

    errorLoading: function () {
      return "Результаты не удалось загрузить";
    },

    maximumSelected: function(e){
      let str="Вы можете выбрать не более "+ e.maximum +" элемент";
      return str += (e.maximum === 1) ? 'a' : 'ов';
    }
  }

  /** конфигурация однострочного списка */
  const config = {
    debug : false, //-> включить отладочные сообщения в консоли браузера

    disabled: false, //-> значение true, управление выбором будет отключено

    multiple: false, //-> включает режим множественного выбора

    selectOnClose: false, //-> автоматически выбирает пункт при закрытии раскрывающегося списка

    selectionCssClass: 'sSelect', //-> добавляет дополнительные классы CSS в активный список. по умолчанию: ''
    dropdownCssClass: 'sSelect-dropdown', //-> добавляет дополнительные классы CSS в раскрывающийся список. по умолчанию: ''

    theme: 'default', //-> настройка темы. по умолчанию: default

    minimumResultsForSearch: 10, //-> минимальное количество результатов, необходимое для отображения окна поиска. по умолчанию: 0

    // язык оф дока: https://select2.org/i18n
    language: {
      // все названия свойств можно найти в языковый файла в select2
      ...lang
    }
  }

  /** переопредиления параметров по умолчанию перед инициализацией списков */
  $.fn.select2.defaults.set("width", "100%");

  $('.js-select2').select2({
    placeholder: '', // -> текст по умолчанию. по умолчанию: null

    ...config
  })
}

export default select2;
