
/**
 *  Определяет названия файла
 *  @param {string} triggerSelector - селектор input с input type='file'.
 * */
const upload = (triggerSelector) => {

  const uploadFields = document.querySelectorAll(triggerSelector)

  uploadFields.forEach(item => {

    item.addEventListener('input', () => {

      let dots;
      const arr = item.files[0].name.split('.');

      arr[0].length > 15 ? dots = "..." : dots = '.';

      const name = arr[0].substring(0, 15) + dots + arr[1];

      item.parentElement.nextElementSibling.textContent = name;
    });

  });
}

export default upload;
