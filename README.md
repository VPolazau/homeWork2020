# homeWork2020

В данном репозитории представлено самостоятельное изучение js.

Все задания в основном взяты с сайта https://learn.javascript.ru/

Так же задачи продублированы в файлах с расширением ".js" в виде комментариев.

## Расшифровка папок

6. Подключение скриптов. Типы данных. Переменные. Преобразование типов. Числа.
7. Строки.
8. Шаблонные строки.
9. Введение в объекты.
10. Логические операторы, if statement.
11. Тернарный оператор. Конструкция switch case.
12. Циклы.
13. Введение в функции.
14. Методы массивов.
15. Функции высшего порядка. Callbacks.
16. Что такое `this`. Контекст вызова функции.
17. Стрелочные функции.
18. Перебирающие методы массивов.
19. Что такое замыкание.
20. Методы объектов про которые часто забывают.
21. Деструктуризация.
22. Object descriptor.
23. Start `DOM`. Объекты обертки. Важные нюансы.
24. Работа с атрибутами элементов.
25. --
26. Манипуляция DOM элементами.
27. Обработка событий.
28. Всплытие и погружение события.
29. Первый проект. Todo List. (Есть возможность выбора темы).
30. --
31. --
32. --
33. --
34. Введение в асинхронность. Event loop. (`setTimeout`).
35. Введение в AJAX.(Создан GET запрос /posts с сайта https://jsonplaceholder.typicode.com).
36. Добавлены "POST" запрос к "35" с реализацией. .setRequestHeader + кнопка с добавлением новых записей
37. Работа c `AJAX`, `Bootstrap`(offcanvas, button, forms, accordion). Получил пользователей (users) от сервера https://jsonplaceholder.typicode.com. Получив ответ от сервера вывел имена пользователей на страницу. При клике на имя пользователя в произвольном месте появляется подробная информация о нем. Создал форму добавления пользователя, состоящую из полей name, email, username, phone, website. При сабмите формы сделал POST запрос на сервер, после ответа от сервера добавил полученного пользователя на страницу.
38. --
39. Обработка ошибок, конструкция `try..catch`, создал общую функцию `http()` для post и get запросов. Object.entries (обьект->массив) для разбиения хедерсов. Всё вышеперечисленное над проектом "36".
40. Проект News App с использованием `Materialize` https://materializecss.com. Новости и api взяты с сайта https://newsapi.org. Имеется выбор страны и строка поиска по новостям.
41. --
42. --
43. Знакомство с promise. Методы `.then()` и `.catch()`.
44. Знакомство с promise на примере AJAX запросов. Как правильно передавать информацию в промисах. Метод `.finally()` и `.all([~,~])`.
45. `fetch`. Конструкции. Частые ошибки.
46. `async`(`await`). Конструкции. Возможности.
47. Введение в ООП. Функции конструкторы. Класс es5. Конструкция.
48. `.prototype` es5. Конструкция.
49. `.create`. Прототипное наследование es5.
50. Классы es6 и их конструкция, а так же `static` методы и их вызовы.
51. Наследование es6. `extends` и `super`.
52. `npm init`. `package.json`(его особенности и использование). `webpack.config.js`(настройка, `path`,`__dirname`) Запуск и сборка проекта.
53. Модули `export/import`(`as` и `default`) на практике.
54. --
55. "Инкапсуляция". Как можно реализовать её в js без TypeScript.
56. "Инкапсуляция" в модулях.
57. Проект Avia Tickets. Реализовал `GET` запрос (`apiConfig.js` и `apiService.js`). Подключил `Materialize` в `/plugins`. Добавил автокомплит для выбора городов, а так же выбор даты. Получил массивы стран и городов сохранил в `/store` с помощью класса `Locations`. Полученные данные, пришедшие в массиве, собрал в новый объект с помощью функций `serialize..` для удобства последующего запроса на сервер. Во `/views/form.js` собираем данные с формы для автокомплита, даты и запроса на сервер. `/views/currency.js` берём валюту из выборки для запроса на сервер.
