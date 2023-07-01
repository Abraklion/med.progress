import FormRegistrationComponent from "./components/form-registration.component";
import FormEntryComponent from "./components/form-entry.component";

window.addEventListener('DOMContentLoaded', () => {

  // Форма регистраии
  if(document.querySelector('#registration')) {
    new FormRegistrationComponent('#registration').init()
  }

  // Форма входа
  if(document.querySelector('#entry')) {
    new FormEntryComponent('#entry').init()
  }

})
