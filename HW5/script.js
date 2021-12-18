// Задание №1. Скрыть элемент по нажатию кнопки
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
//     Содержимое документа index.html:
// <!DOCTYPE HTML>
// <html>
// <head>
// <meta charset="utf-8">
//     </head>
// <body>
// <input type="button" id="hider" value="Нажмите, чтобы спрятать
// текст" />
// <div id="text">Текст</div>
// <script>
//     /* ваш код */
// </script>
// </body>
// </html>

// КОД:
//     let button = document.querySelector("#hider");
//     let elemTxt = document.querySelector("#text");
//     // button.addEventListener("click", ()=>{text.style.display="none"}); //так можно, но плохо читается
//     button.addEventListener("click", ()=>{elemTxt.style.display="none"});


// Задание №2. Какой обработчик запустится?
//     В переменной button находится кнопка. Изначально на ней нет обработчиков.
//     Который из обработчиков запустится? Что будет выведено при клике после выполнения
// кода?
//     button.addEventListener("click", () => alert("1"));
// button.removeEventListener("click", () => alert("1"));
// button.onclick = () => alert(2);

// Ответ: 1 потом 2
// removeEventListener не уберет анонимную фукнцию
// необходимо привязывать функцию с названием, тогда можно убрать
//     function a(){
//         alert("1");
//     }
//     button.addEventListener("click", a);
//     button.removeEventListener("click", a);


// Задание №3. Скопировать и отсортировать массив
// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr
// неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// function copySorted(array) {
//     let res = JSON.parse(JSON.stringify(array));
//     res = res.sort();
//     return res;
// }
//
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без изменений)


// Задание №4. Вычислить факториал
// Факториал натурального числа – это число, умноженное на "себя минус один", затем на
// "себя минус два", и так далее до 1. Факториал n обозначается как n!
//     Определение факториала можно записать как:
//     n! = n * (n - 1) * (n - 2) * ...*1
// Примеры значений для разных n:
//     1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
// alert( factorial(5) ); // 120
// P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6

// function factorial(numb){
//     if (numb!=1) return numb*factorial(numb-1)
//     else return 1;
// }
// console.log(factorial(5));

// Задание №5. Числа Фибоначчи
// Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То
// есть, следующее число получается как сумма двух предыдущих.
//     Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5,
//     8, 13, 21....
// Числа Фибоначчи тесно связаны с золотым сечением и множеством природных
// явлений вокруг нас.
//     Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
//     Пример работы:
//     function fib(n) { /* ваш код */ }
// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757
// P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77)
// должен занимать не более доли секунды.

// function fib(n) {
//     let arr = [1, 1];
//     for (let i = 2; i < n; i++) {
//         elLast = Number(arr.slice(-1));
//         elPreLast = Number(arr.slice(-2, -1));
//         let sum = elPreLast + elLast;
//         arr.push(sum);
//         if (i+1==n) return sum;
//     }
// }
//
// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 55279397008847572
