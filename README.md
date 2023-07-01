# Сборка MED.PROGRESS

### Адаптивные страницы

**Главная** <br>
index.html

**Регистрация** <br>
registration.html

**Для технических страниц по типу: <br>О нас | Политика конфеденциальности | Платежи через сайт | Публичная оферта** <br>
about.html

**Личный кабинет** <br>
docs/personal-data.html <br>
docs/personal-extract.html <br>
docs/personal-hospital.html <br>
docs/personal-hospitals-list.html <br>
docs/personal-record-confirm.html <br>
docs/personal-record-date.html <br>
docs/personal-record-department.html <br>
docs/personal-record-doctor.html <br>
docs/personal-record-service.html <br>
docs/personal-record-time.html

**Личный кабинет врача** <br>
docs/doctor-data.html <br>
docs/doctor-extract.html <br>
docs/doctor-record-confirm.html <br>
docs/doctor-record-time.html <br>


### Не адаптивные страницы

**Кабинет администратора** <br>
docs/admin-add-news.html <br>
docs/admin-edit-news.html <br>
docs/admin-edit-page.html <br>
docs/admin-edit-user.html <br>
docs/admin-history.html <br>
docs/admin-list-page.html <br>
docs/admin-news.html <br>
docs/admin-users.html <br>

**Кабинет регистратуры** <br>
docs/registry-add-news.html <br>
docs/registry-edit-news.html <br>
docs/registry-edit-page.html <br>
docs/registry-edit-user.html <br>
docs/registry-history.html <br>
docs/registry-list-page.html <br>
docs/registry-news.html <br>
docs/registry-users.html 

 ***
**Настройки для сборки**

>NODE v: 18.13.0
>
>NPM v: 8.19.3 и выше

***

**Компоненты сборки**

> *HTML - используется шаблонизатор Panini.*
> Как пользоваться: [статья](https://get.foundation/sites/docs/panini.html)

> *CSS - препроцессоре SCSS*

> *JS - интегрирован webpack через webpack-stream*

***

**Как запустить сборку:**

>1) Убедитесь что у вас установлена правильная версия NODE (18.13.0).
>
>2) Установите зависимости **npm i**.
>
>3) Запустить в режиме разработки: **npm run dev** или **gulp**
>
>4) Запустить в режиме продакшена: **npm run prod**

***

**Как пользоваться сборкой:**


**HTML:**

>По пути src/template/**partials** - находятся логические блоки **HTML**
>
>По пути src/ - точка входа. Подключение логических блоков

**CSS:**

>По пути src/sass/**components** - находятся логические блоки **CSS**
>
>По пути src/sass/style.scss - точка входа. Подключение логических блоков

**JS:**

>По пути src/gulp/tasks/**scripts.js** - находятся webpack точки входа **JS**
>
>По пути src/js/ - исходники точек входа. Подключение компонентов и модулей

***

### Настройки gulpfile.js

>mode: 'production', - режим сборки webpack | **development** / **production** 
> 
>minHtml: false, - минимизировать HTML   | **true** / **false**
> 
>fullCss: false, - если нужен несжатый CSS  |  **true** / **false**
> 
>resizeImg: true, - минимизировать картинки | **true** / **false**
