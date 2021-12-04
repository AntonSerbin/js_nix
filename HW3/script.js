// Задание №1. Проверка на пустоту
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств,
// иначе false.

// let menuExample1 = {
//  width: 300,
//  height: 200,
//  title: "Menu"
// };
// let menuExample2 = {};
//
// function isEmpty(object) {
//  let res = true;
//  for (let key in object) {
//   res = false;
//   break;
//  }
//  return res;
// }
//
// console.log(isEmpty(menuExample1));
// console.log(isEmpty(menuExample2));


// Задание №2. Умножаем все числовые свойства на 2
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства
// объекта obj на 2.
// Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует
// напрямую изменять объект.
// P.S. Используйте typeof для проверки, что значение свойства числовое.

// function multiplyNumeric(obj) {
//  let res = 0;
//  for (let numb in obj){
//   if(isFinite(obj[numb])&&obj[numb]!=null) obj[numb]*=2;
//  }
//  return true;
// }
//
// let menuExample1 = {
//  width: undefined,
//  value: Infinity,
//  weight: null,
//  height: 200,
//  title: "Menu"
// };
// console.log(menuExample1);
// multiplyNumeric(menuExample1);
// console.log(menuExample1);

// Задание №3. Ввод числового значения
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения
// до тех пор, пока посетитель его не введёт.
// функция должна возвращать числовое значение.
// Также надо разрешить пользователю остановить процесс ввода, отправив пустую
// строку или нажав «Отмена». В этом случае функция должна вернуть null.

// function readNumber(){
//  let res = prompt("Введите числовое значение, пока не получится! :)");
//  if (isNaN(+res) || res==undefined) readNumber();
//  return +res;
// };
// console.log ("Вы ввели число ", readNumber());


// Задание №4. Случайное число от min до max
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до
// 1 (но не включая 1)
// Напишите функцию random(min, max), которая генерирует случайное число с
// плавающей точкой от min до max (но не включая max).
// Пример работы функции:
// alert( random(1, 5) ); // 1.2345623452
// alert( random(1, 5) ); // 3.7894332423
// alert( random(1, 5) ); // 4.3435234525

//решение 0(включительно ) - 5 (не включительно); 0 не показывает в результате, т.к очень мало шансов на ровно 0
// function random(min, max) {
//  return res = (Math.random() * max + 1) - min;
// }
// min =1 ; max =5;
// arr = []; i = 0;
// do {
//  arr.push(random(min,max));
//  i++;
// }
// while (i < 10000);
// console.log("максимальное число -", Math.max(...arr));
// console.log("минимальное число -", Math.min(...arr));
// alert( random(1, 5) ); // 4.3435234525
//
// console.log( random(1, 5) ); // 1.2345623452
// console.log( random(1, 5) ); // 3.7894332423
// console.log( random(1, 5) ); // 4.3435234525


// Задание №5. Случайное целое число от min до max
// Напишите функцию randomInteger(min, max), которая генерирует случайное целое
// (integer) число от min до max (включительно).
// Любое число из интервала min..max должно появляться с одинаковой вероятностью.
// Пример работы функции:
// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

// function random(min, max) {
//  return res = Math.floor(Math.random() * max + 1 + 1) - min;
//
// }
//
// min = 1;
// max = 5;
// arr = [, 0, 0, 0, 0, 0];
// i = 0;
// do {
//  random(min, max);
//  arr[res]++;
//  i++;
// }
// while (i < 500000);
// console.log("Итого выпали числа в следущем объеме:");
// for (let key in arr) {
//  console.log(`Выпало из 500000 раз: ${key} - ${arr[key]} раз, т.е. ${(arr[key]/500000*100).toFixed(3)}%.`);
// };


// Задание №6. Сделать первый символ заглавным
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым
// символом.
// Например:
// ucFirst("вася") == "Вася";

// function ucFirst(str) {
//  return str[0].toUpperCase()+str.slice(1);
// }
//
// console.log(ucFirst("вася"));


// Задание №7. Проверка на спам
// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или
// 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:
// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

// spamBase=["viagra", "XXX"];
//
// function checkSpam(str) {
//  let res = false;
//  for (let key in spamBase) {
//   let elemUppercase = spamBase[key].toUpperCase();
//   let strUppercase = str.toUpperCase();
//   if (strUppercase.search(elemUppercase) != -1) {
//    res = true;
//    break
//   }
//  }
//  return res;
// }
//
// console.log(checkSpam('buy ViAgRA now'));
// console.log(checkSpam('free xxxxx'));
// console.log(checkSpam("innocent rabbit"));

// Задание №8. Усечение строки
// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если
// она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна
// maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо,
// если необходимо, усечённая строка.
// Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне
// хотело…"
// truncate("Всем привет!", 20) = "Всем привет!"
//
// function truncate (str, maxlength){
//  if (str.length<=maxlength) return str;
//  return str.slice(0,maxlength-1)+"…";
// }
//
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)) ;
// console.log(truncate("Всем привет!", 20));


// Задание №9. Выделить число
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем –
// число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять
// числовое значение и возвращать его.
// Например:
// alert( extractCurrencyValue('$120') === 120 ); // true

// function extractCurrencyValue(str){
//  return +str.slice(1);
// }
// console.log(extractCurrencyValue('$120'));
//

// Задание №10. Сумма введённых чисел
// Напишите функцию sumInput(), которая:
// • Просит пользователя ввести значения, используя prompt и сохраняет их в
// массив.
// • Заканчивает запрашивать значения, когда пользователь введёт не числовое
// значение, пустую строку или нажмёт «Отмена».
// • Подсчитывает и возвращает сумму элементов массива.
// • P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
// function sumInput() {
//  let newArr = [];
//  let strNumb;
//  let res;
//  do {
//   strNumb = prompt("Введите число для суммирования", 1);
//   if (strNumb!=="0") strNumb = parseFloat(strNumb)
//    else strNumb = 0;
//   if (isFinite(strNumb)) newArr.push(strNumb);
//  } while (String(strNumb)!=="NaN");
//  if (newArr[0]!==undefined) return res = newArr.reduce((total,num)=>total+num)
//       else return res =" No data";
// };
//
// console.log(sumInput());

// Задание №11. Подмассив наибольшей суммы
// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Например:
// getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9]) = 6
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна
// «0»:
// getMaxSubSum([-1, -2, -3]) = 0
// Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.

// /**
//  * делаем доп функцию для просчета суммы подмассива
//  * @param firstIndEl начальный элемент массива (начинается с 0)
//  * @param length сколько элементов считать
//  * @param arr массив который суммировать
//  * @returns {number} сумму lenght элементов, начиная с firstIndEl
//  */
// function getSumSubArr(firstIndEl, length, arr) {
//  let sum = 0;
//  let countLoop = 0;
//  for (let key in arr) {
//   if (key < firstIndEl) continue;
//   sum += arr[key];
//   countLoop++;
//   if (countLoop == length) break;
//  }
//  ;
//  return sum;
// }
//
// function getMaxSubSum(arr) {
//  let res = 0;
//  if (Math.max(...arr) <= 0) return res = 0;
//  for (let lenghtSubArr = 1; lenghtSubArr <= arr.length; lenghtSubArr++) {
//   for (let startSubEl = 0; startSubEl < arr.length; startSubEl++) {
//    let sumSubArr = getSumSubArr(startSubEl, lenghtSubArr, arr);
//    if (sumSubArr > res) res = sumSubArr;
//   }
//  }
//  return res;
// }
//
// console.log(getMaxSubSum([1, -2, 3, 4, -9, 6])) //7
// console.log(getMaxSubSum([-1, 2, 3, -9]))//5
// console.log(getMaxSubSum([2, -1, 2, 3, -9])) // 6
// console.log(getMaxSubSum([-1, 2, 3, -9, 11])) // 11
// console.log(getMaxSubSum([-2, -1, 1, 2])) // 3
// console.log(getMaxSubSum([100, -9, 2, -3, 5])) // 100
// console.log(getMaxSubSum([1, 2, 3])) // 6 (берём все))
// console.log(getMaxSubSum([-1, -2, -3])) // 0

// Задание №12. Обязателен ли "else"?
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она запрашивает подтверждение через confirm и возвращает его
// результат:
// function checkAge(age) {
//  if (age > 18) {
//  return true;
//  } else {
//  // ...
//  return confirm('Родители разрешили?');
//  }
// }
// Будет ли эта функция работать как-то иначе, если убрать else?
// function checkAge(age) {
//  if (age > 18) {
//  return true;
//  }
//  // ...
//  return confirm('Родители разрешили?');
// }
// Есть ли хоть одно отличие в поведении этого варианта?

// Можно без else. При выполнении функции, при выполнении return - полностью прерывается вся фунция и код далее не
// выполняется.
// Различии в поведении не будет.


// Задание №13. Перепишите функцию, используя оператор '?' или '||'
// Следующая функция возвращает true, если параметр age больше 18.
// В ином случае она задаёт вопрос confirm и возвращает его результат.
// function checkAge(age) {
//  if (age > 18) {
//  return true;
//  } else {
//  return confirm('Родители разрешили?');
//  }
// }
// Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
// Сделайте два варианта функции checkAge:
// Используя оператор ?
// Используя оператор ||

// let checkAge = (age) => (age > 18) ? true : confirm('Родители разрешили?');
// checkAge(10);

// let checkAge2 = (age) => (age > 18) || confirm('Родители разрешили?');
// checkAge2(10);


// Задание №14. Функция min(a, b)
// Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
// Пример вызовов:
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1
//
// let min = (a,b) =>(a<b)?a:b;
//
// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));

// Задание №15. Функция pow(x,n)
// Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря,
// умножает x на себя n раз и возвращает результат.
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
// Запустить демо
// P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е.
// целые от 1 и выше.
//     let numb = +prompt("Введите число, которое возвести в степень",2);
//     let powNumb = +prompt("В какую степень возвести?",1);
//
//     let pow=(x,n)=>{
//         let res = x;
//         for (let i=1; i<n; i++) res*=x;
//         return res;
//     }
//
//     console.log(pow(numb,powNumb));
//     console.log(pow(3, 2));
//     console.log(pow(3, 3));
//     console.log(pow(1, 100));

// Задание №16. Перепишите с использованием функции-стрелки
// Замените код Function Expression стрелочной функцией:
// function ask(question, yes, no) {
//  if (confirm(question)) yes()
//  else no();
// }
// ask(
//  "Вы согласны?",
//  function() { alert("Вы согласились."); },
//  function() { alert("Вы отменили выполнение."); }
// );

// let ask = (question, yes, no) => confirm(question) ? yes() : no();
//
// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// );

// Задание №17. Робинзон Крузо
// Ваш месячный доход - 3333 попугая. Вы хотите купить пальму за 8000
// попугаев. Вычислите, за какой промежуток времени вы насобираете на
// пальму, при условии что ваши ежемесячные расходы составляют 1750
// попугаев.

    // let incomeMonth = 3333;
    // let costPalm = 8000;
    // let expencesMonth = 1750;
    //
    // console.log( costPalm/(incomeMonth-expencesMonth), " месяцев");


// Задание №18. Вопросы пользователю
// 1. Спросить у пользователя 10 чисел
// 2. Если число
// - положительное —> ничего не делать
// - отрицательная —> получить их сумму
// 3. Вывести сумму отрицательных чисел, которые ввел пользователь
// ВАЖНО: по условиям задачи в вашем коде должен быть только 1 prompt и
// только 1 цикл for

// let strInput = prompt("Введите 10 чисел через пробел", "2 -1 -1 -1 5 -1 0 5 6 -1");
// let arr = strInput.split(" ");
// let sumNegNumbers = null;
// for (let elem of arr) {
//     if (elem<0) sumNegNumbers+=+elem;
// }
// console.log("сумму отрицательных чисел ",sumNegNumbers);


// Задание №19. Скопирован ли массив?
// Что выведет следующий код?
// let fruits = ["Яблоки", "Груша", "Апельсин"];
// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
// // что в fruits?
// alert( fruits.length ); // ? 4 - массив не примитивная переменная, данные храняться по ссылке, при добавлении
//данных в shoppingCart они так же будут отображаться и в Fruits.


// Задание №20. Операции с массивами
// Давайте произведём 5 операций с массивом.

// // Создайте массив styles с элементами «Джаз» и «Блюз».
// let styles = ["Джаз","Блюз"];
// console.log(styles);
//
// // Добавьте «Рок-н-ролл» в конец.
// styles.push("Рок-н-ролл");
// console.log(styles);
//
// // Замените значение в середине на «Классика». Ваш код для поиска значения в
// // середине должен работать для массивов с любой длиной.
// let middleInd = Math.floor(styles.length/2);
// styles[middleInd]="Классика";
// console.log(styles);
//
// // Удалите первый элемент массива и покажите его.
// console.log(styles[0]);
// styles.shift();
// console.log(styles);
//
// // Вставьте «Рэп» и «Регги» в начало массива.
// styles.unshift("Рэп", "Регги");
// console.log(styles);

// Массив по ходу выполнения операций:
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл



// Задание №21. Вызов в контексте массива
// Каков результат? Почему?
// let arr = ["a", "b"];
// arr.push(function() {
//  alert( this );
// })
// arr[2](); // a, b, function() {alert( this );} - выведет массив arr, в который заранее добавили третьим элементом
//безымянную функцию. Метод This выведет объект в котором вызывается this.