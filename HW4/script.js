// Задание №1. Дочерние элементы в DOM
// Для страницы:
//     <html>
//     <body>
//     <div>Пользователи:</div>
//     <ul>
//         <li>Джон</li>
//         <li>Пит</li>
//     </ul>
//     </body>
//     </html>
// Как получить:
//     • Напишите код, который получит элемент <div>?
// • Напишите код, который получит <ul>?
// • Напишите код, который получит второй <li> (с именем Пит)?

// let ul = document.querySelector("ul");
// let li = document.querySelectorAll("li")[1];
// console.log(ul);
// console.log(li);

// Задание №2. Выделите ячейки по диагонали
// Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
// Вам нужно получить из таблицы <table> все диагональные <td> и выделить их,
// используя код:
// // в переменной td находится DOM-элемент для тега <td>
// td.style.backgroundColor = 'red';


// let table = document.querySelector("#table");
// let res = "";
// for (let i = 1; i <= 5; i++) {
//     res += "<tr>";
//     for (let j = 1; j <=5; j++) {
//         res += `<td>${i}.${j}</td>`;
//     }
//     res += "</tr>";
// }
// table.innerHTML = res;
//
// let cell = document.querySelectorAll("tr");
// for (let i = 0; i < 5; i++) {
//     cell[i].querySelectorAll("td")[i].style.backgroundColor = 'red';
// }

// Задание №3. Поиск элементов
// Вот документ с таблицей и формой. Как найти?…
// • Таблицу с id="age-table".
// • Все элементы label внутри этой таблицы (их три).
// • Первый td в этой таблице (со словом «Age»).
// • Форму form с именем name="search".
// • Первый input в этой форме.
// • Последний input в этой форме.
// Используйте код файла table.html и браузерные инструменты разработчика:

// console.log(document.querySelector("#age-table"));
// console.log(document.querySelectorAll("label"));
// console.log(document.querySelectorAll("td")[0]);
// console.log(document.querySelector("form [name*='search']"));
// let inputs = document.querySelectorAll("input");
// console.log(inputs[0]);
// console.log(inputs[inputs.length- 1]);

// Задание №4. Очистите элемент
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
// <ol id="elem">
// <li>Привет</li>
// <li>Мир</li>
// </ol>
// <script>
// function clear(elem) {
//     /* ваш код */
// }
//     clear(elem); // очищает список
// </script>

// let elem = document.querySelector("#elem"); //не обязательно, можно не писать, автоматически есть переменная elem
// function clear (elem) {
//     elem.innerHTML="";
// }
// clear(elem);


// Задание №5. Создайте список
// Напишите интерфейс для создания списка.
// Для каждого пункта:
// 1. Запрашивайте содержимое пункта у пользователя с помощью prompt.
// 2. Создавайте элемент <li> и добавляйте его к <ul>.
// 3. Процесс прерывается, когда пользователь нажимает Esc или вводит пустую
// строку.
// Все элементы должны создаваться динамически.
// Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный
// текст.

// let ul = document.querySelector("#task5");
// let str = "";
// do {
//     str = prompt("Введите строку списка", "<b> пример строки </b> " + Math.random().toFixed(1) * 10);
//     if (str) {
//         let newLi = document.createElement(`li`);
//         newLi.innerText = str;
//         ul.appendChild(newLi);
//     }
// }
// while (str) ;

// Задание №6. Вставьте HTML в список
// Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
//     <ul id="ul">
//         <li id="one">1</li>
//         <li id="two">4</li>
//     </ul>
// let ul = document.querySelector("ul");
// let li2 = document.querySelector("#two");
// let newL2 = document.createElement("li");
// newL2.innerHTML = "2";
// let newL3 = document.createElement("li");
// newL3.innerHTML = "3";
// ul.insertBefore(newL2, li2);
// ul.insertBefore(newL3, li2);


//         Задание №7. Создать уведомление
//         Напишите функцию showNotification(options), которая создаёт уведомление: <div
//             class="notification"> с заданным содержимым. Уведомление должно автоматически
//             исчезнуть через 1,5 секунды.
//             Пример объекта options:
//             // показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
//             showNotification({
//                 top: 10, // 10px от верхней границы окна (по умолчанию 0px)
//                 right: 10, // 10px от правого края окна (по умолчанию 0px)
//                 html: "Hello!", // HTML-уведомление
//                 className: "welcome" // дополнительный класс для div (необязательно)
//             });
//             Пример:

// function showNotification(text) {
//     let div = document.querySelector(".parent");
//     let elem = document.createElement('div');
//     elem.classList.add("welcome");
//     elem.innerHTML = text;
//     elem.style.top = 10;
//     elem.style.right = 10;
//     elem.style.position = "absolute";
//     elem.style.background = "indianred";
//     elem.style.border = "1px solid black";
//     elem.style.padding="3px";
//     div.appendChild(elem);
//     setTimeout(() => elem.style.display = "none", 1500);
// };
//
// showNotification("Hello")
