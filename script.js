// Задание No1. Переменные
// 1. Объявите две переменные: admin и name.
// 2. Запишите свое имя в переменную name.
// 3. Скопируйте значение из переменной name в admin.
// 4. Выведите на экран значение admin, используя функцию alert.
let admin;
let name;
admin = "AntonS";
name = "Anton";
let tmp = name;
name = admin;
admin = tmp;
console.log(`Задание 1. admin - ${admin}, name - ${name}`);


// Задание No2. Константы
// Есть следующий код:
//     const birthday = '18.04.1982';
// const age = someCode(birthday);
// В нем объявлены константа birthday, а также age, которая вычисляется при помощи
// некоторого кода, используя значение из birthday (в данном случае детали не имеют
// значения, поэтому код не рассматривается).
// Можно ли использовать заглавные буквы для имени birthday? А для age? Или
//     одновременно для обеих переменных?
console.log("Задание 2. Можно для обеих переменных, но не принято; заглавными принято называть только константы");
// const BIRTHDAY = '18.04.1982'; // использовать заглавные буквы?
console.log("Можно const BIRTHDAY = '18.04.1982'");
// const AGE = someCode(BIRTHDAY); // а здесь?
console.log("Можно const AGE = someCode(BIRTHDAY);");

// Задание No3. Строки
// Что выведет этот скрипт:
// 5. let name = "Ilya";
// 6. alert( `hello ${1}` ); // ?
// 7. alert( `hello ${"name"}` ); // ?
// 8. alert( `hello ${name}` ); // ?

console.log('Задание 3. hello 1; hello name; hello Ilya ');


// Задание No4. Преобразования типов
// Какой результат будет у выражений ниже?
console.log("Задание 4");
// "" + 1 + 0  //-> 10
// "" - 1 + 0  //-> -1
// true + false //-> true
// 6 / "3" //-> 2
// "2" * "3" //-> 6
// 4 + 5 + "px" //-> 9px
// "$" + 4 + 5 //-> $45
// "4" - 2 //-> 2
// "4px" - 2 //-> Nan
// 7 / 0 //-> infinity
// " -9 " + 5 //-> -9 5
// " -9 " - 5 //-> -14
// null + 1 //-> 1
// undefined + 1 //-> NaN

// Задание No5. Постфиксная и префиксная формы
// Чему будут равны переменные a, b, c и d в примере ниже?
//     let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1
console.log('Задание 5. let c = ++a; // 2 ');
console.log('let d = b++; // 1 ');


// Задание No6. Результат присваивания
// Чему будут равны переменные a и x в примере ниже?
// let a = 2;
// let x = 1 + (a *= 2); // a = 4; x =5
console.log('Задание 6. a = 4; x =5');

// Задание No7. Операторы сравнения
// Каким будет результат этих выражений?
console.log(`Задание 7.`);
// 5 > 4  // true
// "ананас" > "яблоко" //false
// "2" > "12" /true
// undefined == null //true
// undefined === null //false
// null == "\n0\n" //false
// null === +"\n0\n" //false

// Задание No8. Операторы взаимодействия
// Создайте страницу, которая спрашивает имя у пользователя и выводит его.
name = prompt("Задание 8. Введите имя");
console.log(`Задание 8. ${name}`);

// Задание No9. Условные операторы
// Выведется ли alert?
// if ("0") {
//     alert( 'Привет' );
// }
console.log("Задание 9. Выведется, т.к строка");


// Задание No10. Условные операторы
// Используя конструкцию if..else, напишите код, который будет спрашивать: „Каково
// «официальное» название JavaScript?“
// Если пользователь вводит «ECMAScript», то показать: «Верно!», в противном случае –
// отобразить: «Не знаете? ECMAScript!»
name = prompt("Задание 10. Какое «официальное» название JavaScript?")
if (name==="JavaScript") console.log("Задание 10. «Верно!»")
    else console.log("Задание 10. «Не знаете? ECMAScript!»");

// Задание No11. Покажите знак числа
// Используя конструкцию if..else, напишите код, который получает число через prompt, а
// затем выводит в alert:
//     1, если значение больше нуля,
//     -1, если значение меньше нуля,
//     0, если значение равно нулю.
//     Предполагается, что пользователь вводит только числа.
let num = prompt("Задание 11. Введите число");
if (num>0) alert("Задание11 "+1);
if (num<0) alert("Задание11 "+-1);
if (num==="0") alert("Задание11 "+0);

// Задание No12. ИЛИ
// Что выведет код ниже?
//     alert( null || 2 || undefined );
console.log("Задание 12");
// console.log(null || 2 || undefined); //2 (первый true)

// Задание №13. ИЛИ
// Что выведет код ниже?
//     alert( alert(1) || 2 || alert(3) );
console.log("Задание 13");
// console.log(alert(1) || 2 || alert(3)); //2 (первый true), alert(3) даже не выполнится

// Задание №14. И
// Что выведет код ниже?
//     alert( 1 && null && 2 );
console.log("Задание 14");
// console.log(1 && null && 2 ); //null первый false;

// Задание №15. И
// Что выведет код ниже?
//     alert( alert(1) && alert(2) );
console.log("Задание 15");
// console.log (alert(1) && alert(2)); //alert(1) = т.к. результат выполнения undefined, первый false;

// Задание №16.
// Что выведет код ниже?
//     alert( null || 2 && 3 || 4 );
console.log("Задание 16");
// console.log(null || 2 && 3 || 4 ); //3
// первым обработает И , потом или; (2 && 3->3) потом (null || 3 ->3 ) потом (3 || 4 -> 3)

// Задание №17. Проверка значения из диапазона
// Напишите условие if для проверки, что переменная age находится в диапазоне между
// 14 и 90 включительно.
// «Включительно» означает, что значение переменной age может быть равно 14 или 90.
console.log("Задание 17");
let age = Math.floor(Math.random() * 101); //random 1-100
if (age>=14 && age<90) console.log(`17. Переменная ${age} в диапазоне между 14 и 90 включительно`);

// Задание №18. Проверка значения вне диапазона
// Напишите условие if для проверки, что значение переменной age НЕ находится в
// диапазоне 14 и 90 включительно.
//     Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого
// оператора.
console.log("Задание 18");
if (!(age>=14 && age<90)) console.log(`18. Переменная ${age} не находится в диапазоне между 14 и 90 включительно`);
if (age<14 || age>90) console.log(`18. Переменная ${age} не находится в диапазоне между 14 и 90 включительно`);

//     Задание №19. If Какие из перечисленных ниже alert выполнятся?
//     Какие конкретно значения будут результатами выражений в условиях if(...)?
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' );
console.log("Задание 19");
// if (-1 || 0) alert( 'first' ); //выполнится т.к.-1 это true
// if (-1 && 0) alert( 'second' ); //не выполнится, нужно оба операнда true
// if (null || -1 && 1) alert( 'third' ); //выполнится, первым обработается И , получится 1; потом или null и 1 будет true

// Задание №20. Проверка логина
// Напишите код, который будет спрашивать логин с помощью prompt.
//     Если посетитель вводит «Админ», то prompt запрашивает пароль, если ничего не
// введено или нажата клавиша Esc – показать «Отменено», в противном случае
// отобразить «Я вас не знаю».
// Пароль проверять так:
// 1. Если введён пароль «Я главный», то выводить «Здравствуйте!»,
// 2. Иначе – «Неверный пароль»,
// 3. При отмене – «Отменено».
// Блок-схема:
// Для решения используйте вложенные блоки if. Обращайте внимание на стиль и
// читаемость кода.
//     Подсказка: передача пустого ввода в приглашение prompt возвращает пустую строку ''.
//     Нажатие клавиши Esc во время запроса возвращает null.
console.log("Задание 20");
name = prompt("Введите Ваш логин");
if (name === "" || name === null) {
    console.log("Отменено")
} else if (name === "Админ") {
    let passw = prompt('Введите пароль');
    if (passw === "Я главный") {
        console.log("Здравствуйте!")
    } else if (passw === "" || passw === null) {
        console.log('Отменено')
    } else {
        console.log('Неверный пароль');
    }
} else console.log('Я вас не знаю');


//     Задание №21. Переписать условия "if" на "switch"
// Перепишите код с использованием одной конструкции switch:
//     let a = +prompt('a?', '');
//     if (a == 0) {
//         alert( 0 );
//     }
//     if (a == 1) {
//         alert( 1 );
//     }
//     if (a == 2 || a == 3) {
//         alert( '2,3' );
//     }
console.log("Задание 21");
let a = +prompt('Задание 21. Введите число a (0,1,2,3)', '');
switch (a) {
    case 0:
        console.log('0');
        break;
    case 1:
        console.log('1');
        break;
    case 2:
    case 3:
        console.log('2,3');
        break;
}
//     Задание №22.
//     Дано целое число. Если оно является положительным, то прибавить к нему 1; в
//     противном случае не изменять его. Вывести полученное число.
numb = Math.floor(Math.random() * 21) - 10; //случайное число -10..+10
console.log(`Задание 22. случайное число = ${numb}`);
let res = (numb > 0) ? ++numb : numb;
console.log(` результат = ${res}`);

//         Задание №23.
//     Дано целое число. Если оно является положительным, то прибавить к нему 1; в
//     противном случае вычесть из него 2. Вывести полученное число.
numb = Math.floor(Math.random() * 21) - 10; //случайное число -10..+10
console.log(`Задание 23 случайное число = ${numb}`);
res = (numb >= 0) ? ++numb : numb = numb - 2;
console.log(` результат = ${res}`);

//         Задание №24.
//     Дано целое число. Если оно является положительным, то прибавить к нему 1; если
//     отрицательным, то вычесть из него 2; если нулевым, то заменить его на 10. Вывести
//     полученное число.
numb = Math.floor(Math.random() * 21) - 10; //случайное число -10..+10
console.log(`Задание 24 случайное число = ${numb}`);
if (numb > 0) {
    numb++
} else if (numb < 0) {
    numb = numb - 2
} else numb = 10;
console.log(` результат = ${numb}`);

//         Задание №25.
//     Даны три целых числа. Найти количество положительных чисел в исходном наборе.
let number1 = Math.floor(Math.random() * 21) - 10; //случайное число -10..+10
let number2 = Math.floor(Math.random() * 21) - 10; //случайное число -10..+10
let number3 = Math.floor(Math.random() * 21) - 10; //случайное число -10..+10
res = 0;
console.log(`Задание 25. Изначально А = ${number1} , число В = ${number2}, число C = ${number3}`);
if (number1 > 0) res++;
if (number2 > 0) res++;
if (number3 > 0) res++;

console.log(`положительных чисел: ${res}`);

//         Задание №26. Даны три целых числа. Найти количество положительных и количество
//     отрицательных чисел в исходном наборе.
res = 0;
let resMin = 0;
if (number1 > 0) res++;
if (number2 > 0) res++;
if (number3 > 0) res++;
if (number1 < 0) resMin++;
if (number2 < 0) resMin++;
if (number3 < 0) resMin++;
console.log(`Задание 26 положительных чисел: ${res}, количество отрицательных чисел ${resMin}`);


//     Задание №27.
//     Даны два числа. Вывести большее из них.
number1 = Math.floor(Math.random() * 21) - 10; //случайное число -10..+10
number2 = Math.floor(Math.random() * 21) - 10; //случайное число -10..+10
console.log(`Задание 27. Изначально А = ${number1} , число В = ${number2}`);

if (number1 > number2) {
    console.log(`Число ${number1} больше чем ${number2}`)
} else if (number2 > number1) {
    console.log(`Число ${number2} больше чем ${number1}`)
} else
    console.log("числа равны");


//         Задание №28.
//     Даны два числа. Вывести вначале большее, а затем меньшее из них.
let numberA = Math.floor(Math.random() * 21) - 10; //случайное число -10..+10
let numberB = Math.floor(Math.random() * 21) - 10; //случайное число -10..+10
console.log(`Задание 28. Изначально А = ${numberA} , число В = ${numberB}`);

if (numberA > numberB) {
    console.log(`Число ${numberA} большее чем ${numberB}`)
} else if (numberA < numberB) {
    console.log(`Число ${numberB} больше чем ${numberA}`)
} else console.log("числа равны");

// Задание №29. Даны две переменные вещественного типа: A, B. Перераспределить
//значения данных переменных так, чтобы в A оказалось меньшее из значений, а в B —
//большее. Вывести новые значения переменных A и B.
numberA = Math.floor(Math.random() * 21) - 10; //случайное число -10..+10
numberB = Math.floor(Math.random() * 21) - 10; //случайное число -10..+10
let maxNumber;
let minNumber;

console.log(`Задание 29. Изначально А = ${numberA} , число В = ${numberB}`);

if (numberA > numberB) {
    maxNumber = numberA;
    minNumber = numberB;
} else {
    maxNumber = numberB;
    minNumber = numberA;
}
numberA = minNumber;
numberB = maxNumber;
console.log(`Max числоB = ${numberB} , числоA min = ${numberA}`);

//         Задание №30.
//     Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить
//     каждой переменной сумму этих значений, а если равны, то присвоить переменным
//     нулевые значения. Вывести новые значения переменных A и B.
number1 = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
number2 = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
if (number1 !== number2) {
    numberA = number1 + number2;
    numberB = numberA;
} else {
    numberA = 0;
    numberB = 0;
}
console.log(`Задание 30. Изначально А = ${number1} , число В = ${number2}`);
number1 = numberA;
number2 = numberB;
console.log(`Результат А = ${number1} , число В = ${number2}`);

//         Задание №31.
//     Даны две переменные целого типа: A и B. Если их значения не равны, то присвоить
//     каждой переменной большее из этих значений, а если равны, то присвоить
//     переменным нулевые значения. Вывести новые значения переменных A и B.
numberA = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
numberB = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
if (numberA !== numberB) {
    number1 = (numberA > numberB) ? numberA : numberB;
    number2 = number1;
} else {
    number1 = 0;
    number2 = 0;
}
console.log(`Задание 31. Изначально А = ${numberA} , число В = ${numberB}`);
numberA=number1;
numberB=number2;
console.log(`Результат А = ${numberA} , число В = ${numberB}`);
//         Задание №32.
//     Даны три числа. Найти наименьшее из них.
numberA = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
numberB = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
numberC = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
res=null;
if (numberA<numberB&&numberA<numberC) res =`Самое маленькое число А ${numberA}`;
if (numberB<numberA&&numberB<numberC) res = `Самое маленькое число B ${numberB}`;
if (numberC<numberB&&numberC<numberA) res = `Самое маленькое число C ${numberC}`;

console.log(`Задание 32. Изначально А = ${numberA} , число В = ${numberB}, число C = ${numberC}`);
if (res) console.log(res)
else console.log ('Есть два минимальных числа');

//         Задание №33.
//     Даны три числа. Найти среднее из них (то есть число, расположенное между
//     наименьшим и наибольшим).
numberA = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
numberB = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
numberC = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
res = "";
if (numberA >= numberC && numberA <= numberB) res = numberA;
if (numberA <= numberC && numberA >= numberB) res = numberA;

if (numberB >= numberC && numberB <= numberA) res = numberB;
if (numberB <= numberC && numberB >= numberA) res = numberB;

if (numberC >= numberA && numberC <= numberB) res = numberC;
if (numberC <= numberA && numberC >= numberB) res = numberC;
console.log(`Задание 33. Изначально А = ${numberA} , число В = ${numberB}, число C = ${numberC}`);
console.log(`Среднее число ${res}`)

//     Задание №34.
//     Даны три числа. Вывести вначале наименьшее, а затем наибольшее из данных чисел.
numberA = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
numberB = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
numberC = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5

console.log(`Задание 34. Изначально А = ${numberA} , число В = ${numberB}, число C = ${numberC}`);

if (numberA<numberB&&numberA<numberC) console.log(`Самое маленькое число А = ${numberA}`);
if (numberB<numberA&&numberB<numberC) console.log(`Самое маленькое число B = ${numberB}`);
if (numberC<numberB&&numberC<numberA) console.log(`Самое маленькое число C = ${numberC}`);

if (numberA>numberB&&numberA>numberC) console.log(`Самое больше число А = ${numberA}`);
if (numberB>numberA&&numberB>numberC) console.log(`Самое больше число B = ${numberB}`);
if (numberC>numberB&&numberC>numberA) console.log(`Самое больше число C = ${numberC}`);


//         Задание №35.
//     Даны три числа. Найти сумму двух наибольших из них.
numberA = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
numberB = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
numberC = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5

console.log(`Задание 35. Изначально А = ${numberA} , число В = ${numberB}, число C = ${numberC}`);
if ((numberA <= numberB) && (numberA <= numberC)) res = `Сумма двух наибольших чисел В+С = ` + (numberC + numberB);
if ((numberB <= numberA) && (numberB <= numberC)) res = `Сумма двух наибольших чисел А+С = ` + (numberA + numberC);
if ((numberC <= numberB) && (numberC <= numberA)) res = `Сумма двух наибольших чисел A+B = ` + (numberA + numberB);
console.log(res);

//         Задание №36.
//Даны три целых числа, одно из которых отлично от двух других, равных между собой.
//Определить порядковый номер числа, отличного
do {
    numberA = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
    numberB = Math.floor(Math.random() * 11) - 5; //случайное число -5..+5
} while (numberA === numberB);
numberC = Math.floor(Math.random() * 3) + 1; //случайное число 1..3;

switch (numberC){
    case(1):{
        number1 = numberA;
        number2 = numberB;
        number3 = numberB;
        break;
    }
    case (2):{
        number1 = numberA;
        number2 = numberB;
        number3 = numberA;
        break;

    }    case (3):{
        number1 = numberA;
        number2 = numberA;
        number3 = numberB;
        break;
    }
}
console.log(`Задание 36. Изначально А = ${number1} , число В = ${number2}, число C = ${number3}`);

res = (number1===number2)?"C":res;
res = (number2===number3)?"A":res;
res = (number1===number3)?"B":res;
console.log("Порядковый номер отличного числа = ", res);