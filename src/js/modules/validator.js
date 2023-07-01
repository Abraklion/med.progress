import $ from 'jquery'
import 'jquery-validation'
import 'jquery-validation/dist/localization/messages_ru'

/**
 * Валидация форм
 */
const validator = () => {

  jQuery.validator.addClassRules("js-required-validate", {
    required: true
  });

  jQuery.validator.addClassRules("js-email-validate", {
    email: true
  });

  jQuery.validator.addClassRules("js-password-validate", {
    equalTo: "#password"
  });

  $('.js-validate').validate({
    debug: false,

    // -> класс добавляется к полю, если оно валидно (по умолчанию: "valid")
    validClass: 'sForm__valid',

    // -> класс добавляется к сообщению и полю, если оно НЕ валидно (по умолчанию: "error")
    errorClass: 'sForm__invalid-all',

    // -> тэг который будет создаваться, в него записываться сообщения (по умолчанию: "label")
    errorElement: 'span',

    // отмены изменений, сделанных опцией highlight
    unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass(errorClass).addClass(validClass);

      if(!$(element).val()) {
        $(element).removeClass(validClass);
      }

      if($(element).attr('id') === 'phone') {
        if ($(element).val().search('_') !== -1) {
          $(element).removeClass(validClass);
        }
      }

    },
  })

}

export default validator;
