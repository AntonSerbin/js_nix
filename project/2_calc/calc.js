let string = "";
let action = "";
let number1 = 0, afterAction = true;
let lastActionEqual = false;


//назначаем переменные и привязываем к ним события
for (let numb = 0; numb <= 9; numb++) {
    window["button" + numb] = document.querySelector(`#button${numb}`);
    window["button" + numb].addEventListener("click", () => func_button(numb));
}
;
let stringCalc = document.querySelector("#stringCalc");
const buttonPercent = document.querySelector("#buttonPercent");
const buttonDiv = document.querySelector("#buttonDiv");
const buttonMult = document.querySelector("#buttonMult");
const buttonMinus = document.querySelector("#buttonMinus");
const buttonReset = document.querySelector("#buttonReset");
const buttonPlus = document.querySelector("#buttonPlus");
const buttonEqual = document.querySelector("#buttonEqual");
const buttonDot = document.querySelector("#buttonDot");

buttonPercent.addEventListener("click", () => func_button("%"));
buttonPlus.addEventListener("click", () => func_button("+"));
buttonMinus.addEventListener("click", () => func_button("-"));
buttonDiv.addEventListener("click", () => func_button("/"));
buttonMult.addEventListener("click", () => func_button("*"));
buttonEqual.addEventListener("click", () => func_button("="));
buttonDot.addEventListener("click", () => func_button("."));
buttonReset.addEventListener("click", () => func_button("C"));

//функция нажатия клавиши
function func_button(el) {

    if (lastActionEqual&&(el <= 9 && el >= 0)) action="";
    if (el!="=") lastActionEqual=false;
    
    //если обычное нажатие цифры - добавляем цифру в строку
    if ((el <= 9) && (el >= 0) && (afterAction == false)) {
        string = string + el;
    }
    ;

    //если после вычисления - убираем строку и добавляем знак
    if ((el <= 9) && (el >= 1) && (afterAction == true)) {
        string = "" + el;
        afterAction = false;
    }
    ;

    //если добавляем точку после вычисления - добавляем "0."
    if (el == ".") {
        if (string == "") string = "0.";
        if (string.slice(-1) != ".") string = string + el;
        afterAction = false;

    }
    ;

    if ((el == "=") && (afterAction == true)) {
        number1 = Number(string);
        if (action == "+") string = (number1 + number2).toString();
        if (action == "-") string = (number1 - number2).toString();
        if (action == "*") string = (number1 * number2).toString();
        if (action == "/") string = (number1 / number2).toString();
        afterAction = true;
    }
    ;

    if ((el == "%") && (afterAction == false)) {

        number2 = Number(string);

        if (action == "+") string = (number1 + number1 * number2 / 100).toString();
        if (action == "-") string = (number1 - number1 * number2 / 100).toString();
        if (action == "*") string = (number1 * number2 / 100).toString();
        if (action == "/") string = (number1 / number2 * 100).toString();

        afterAction = true;
    }
    ;

    if ((el == "=" || el == "*" || el == "/" || el == "+" || el == "-") && afterAction == false) {
        number2 = Number(string);

        if (action == "+") string = (number1 + number2).toString();
        if (action == "-") string = (number1 - number2).toString();
        if (action == "*") string = (number1 * number2).toString();
        if ((action == "/") && (number2 != 0) && (number1 != 0)) string = (number1 / number2).toString();
        if ((action == "/") && (number2 == 0)) string = "ERROR";
        if (string == false) string = "0";
        if (el=="=") lastActionEqual = true
            else lastActionEqual = false;
        afterAction = true;
    }
    ;

    //проверка если маленькое число - чтоб не уходило в формат 1е-10
    if (string.includes("e-")) {
        string = Number(string).toFixed(16) + "";
    }

    //проверка очень маленькое число - округляем до 0
    if (string.includes("0.0000000000000")) {
        number1 = 0;
        number2 = 0;
        action = "";
        string = "0";
        afterAction = true;
    }
    ;

    //округляем неточности вычисления JS
    if (string.length >= 17 && string.includes(".")) {
        string = string.slice(0, -1);

        //если неточность уменьшает расчет, добавляем малеьное число
        if (string[string.length - 1] == "9") string = +string + 1e-19;

        string = Number(string).toFixed(15) + "";
        for (let i = string.length; i >= 1; i--) {
            if (string[i - 1] == "0") string = string.slice(0, -1)
            else break;
        }
    }


    //вывод строки на экран в этом месте , чтоб не убирать цифру при нажатии клавиши действия
    indicateTable(string);

    //проверка очень большое число - выдаем ошибку
    if ((Number(string) > 1e16) || (Number(string) < -1e16)) {
        indicateTable("Error, too big numb")
        stringCalc.innerHTML = "Error, too big numb";
        number1 = 0;
        number2 = 0;
        action = "";
        string = "";
        afterAction = true;
    }

    if (el == "C") {
        number1 = 0;
        number2 = 0;
        action = "";
        string = "";
        afterAction = true;
        stringCalc.innerHTML = "";
    }

    if (el == "+") {
        number1 = Number(string);
        // string = "";
        action = "+";
        afterAction = true;
    }
    ;

    if (el == "-") {
        number1 = Number(string);
        // string = "";
        action = "-";
        afterAction = true;
    }
    ;
    if (el == "*") {
        number1 = Number(string);
        // string = "";
        action = "*";
        afterAction = true;
        number2 = Number(string);

    }
    ;
    if (el == "/") {
        number1 = Number(string);
        // string = "";
        action = "/";
        afterAction = true;
        number2 = Number(string);

    }
    ;
};

function indicateTable(elem) {
    if (elem.length <= 16) stringCalc.innerHTML = elem
    else stringCalc.innerHTML = elem.slice(0, 16);
}