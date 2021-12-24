let bids = ["100", "200", "300", "500", "1.000", "2.000", "4.000", "8.000", "16.000", "32.000",
    "64.000", '125.000', '250.000', '500.000', '1.000.000'];
let numberTask = 1;
let numberInBase = numberTask;
let block = "base1";
let hintSecondChance = false;
let sessionHints = [0, 0, 0, 0];

logoHome.addEventListener("click",()=>window.history.back());

const buttonAnswer = [];
const bidsAside = document.querySelector("#bidsAside");
const questionField = document.querySelector("#questionField");
for (let i = 1; i < 5; i++) {
    buttonAnswer[i] = document.querySelector("#buttonAnswer" + i);
}
const scoreResultSpan = document.querySelector("#scoreResultField");
const scoreResultField = scoreResultSpan.closest(".score");

const hints = [];
hints[1] = document.querySelector("#hint1");
hints[2] = document.querySelector("#hint2");
hints[3] = document.querySelector("#hint3");
hints[4] = document.querySelector("#hint4");


//дополнительно расширяем область кнопки, чтоб клик срабатывал не только на тексте
document.querySelector(".buttonAnswer1").addEventListener("click", () => clickAnswerButton(buttonAnswer[1]));
document.querySelector(".buttonAnswer2").addEventListener("click", () => clickAnswerButton(buttonAnswer[2]));
document.querySelector(".buttonAnswer3").addEventListener("click", () => clickAnswerButton(buttonAnswer[3]));
document.querySelector(".buttonAnswer4").addEventListener("click", () => clickAnswerButton(buttonAnswer[4]));

hints[1].firstElementChild.addEventListener("click", () => doHintCallFriend(numberTask));
hints[2].firstElementChild.addEventListener("click", () => doHintFiftyFifty(numberTask));
hints[3].firstElementChild.addEventListener("click", () => doHintPeopleHelp(numberTask));
hints[4].firstElementChild.addEventListener("click", () => doHintTwoChances(numberTask));
console.log(hints[1].firstElementChild);

function indicateAllBidsAside() {
    for (let i = 14; i >= 0; i--) {
        if (i === 0) {
            bidsAside.innerHTML += `<p class="rowActive asideNumber rowAside${i + 1}">${i + 1} </p>`;
            bidsAside.innerHTML += `<p class="rowActive asideBid rowAside${i + 1}">${bids[i]} </p>`;
        } else {
            bidsAside.innerHTML += `<p class="asideNumber rowAside${i + 1}">${i + 1}</p>`;
            bidsAside.innerHTML += `<p class="asideBid rowAside${i + 1}">${bids[i]}</p>`;
        }
    }
}

function clickAnswerButton(el) {

    //если НЕправильный ответ
    if (+el.id.slice(-1) !== +block[numberInBase]["a"]) {
        el.closest(".btn").classList.add("wrongAnswer");
        if (!hintSecondChance) {
            showResult(numberTask - 1);
            changeTaskAside(1, numberTask);
            numberTask = 1;
            setTimeout(() => {
                fillQuestionField(1);
                resetHintsView();
                resetButtonsView();
                hideResult()
            }, 3200);
        }
    }
    //если правильный ответ
    if (+el.id.slice(-1) === +block[numberInBase]["a"]) {
        if (numberTask===15) showResult(numberTask);
        numberTask++;
        el.closest(".btn").classList.remove("hintedAnswer");
        el.closest(".btn").classList.add("correctAnswer");
        changeTaskAside(numberTask, numberTask - 1);
        setTimeout(() => {
            fillQuestionField(numberTask);
            resetButtonsView();
        }, 1200);
    }
    hintSecondChance = false;

}

function calcBaseTask(numberTask) {

    if (numberTask <= 5) {
        block = base1;
        numberInBase = numberTask;
    }
    if (numberTask <= 10 && numberTask > 5) {
        block = base2;
        numberInBase = numberTask - 5;
    }
    if (numberTask <= 15 && numberTask > 10) {
        block = base3;
        numberInBase = numberTask - 10;
    }

    return [block, numberInBase];
}


function fillQuestionField(numberTask) {

    [block, numberInBase] = calcBaseTask(numberTask)

    questionField.innerHTML = "Вопрос " + numberTask + ". " + block[numberInBase]["q"];
    buttonAnswer[1].innerHTML = "A: " + block[numberInBase][1];
    buttonAnswer[2].innerHTML = "B: " + block[numberInBase][2];
    buttonAnswer[3].innerHTML = "C: " + block[numberInBase][3];
    buttonAnswer[4].innerHTML = "D: " + block[numberInBase][4];

}

function changeTaskAside(markNumber, resetNumb) {
    let lineOld = document.querySelectorAll(`.rowAside${resetNumb}`);
    lineOld.forEach((el) => {
        el.classList.remove("rowActive");
    });
    let line = document.querySelectorAll(`.rowAside${markNumber}`);
    line.forEach((el) => {
        el.classList.add("rowActive");
    });

}

function doHintCallFriend(task) {
    if (sessionHints[1] === true) return;
    dimHintView(1);
    [base, task] = calcBaseTask(task);
    let correctAnswer = base[task]["a"];
    document.querySelector("#buttonAnswer" + correctAnswer).closest(".btn").classList.add("hintedAnswer");
}

function doHintFiftyFifty(task) {
    if (sessionHints[2] === true) return;
    dimHintView(2);
    [base, task] = calcBaseTask(task);
    let correctAnswer = base[task]["a"];
    let res = false;
    let randNumb1, randNumb2;
    do {
        randNumb1 = Math.floor(Math.random() * 4 + 1);
        randNumb2 = Math.floor(Math.random() * 4 + 1);
        res = randNumb1 !== randNumb2 && randNumb1 !== correctAnswer && randNumb2 !== correctAnswer;
    } while (res === false)
    document.querySelector("#buttonAnswer" + randNumb1).closest(".btn").classList.add("wrongAnswer");
    document.querySelector("#buttonAnswer" + randNumb2).closest(".btn").classList.add("wrongAnswer");
    document.querySelector("#buttonAnswer" + randNumb1).closest(".btn").classList.remove("btn_hover");
    document.querySelector("#buttonAnswer" + randNumb2).closest(".btn").classList.remove("btn_hover");

}

function doHintPeopleHelp(taskTotal) {
    if (sessionHints[3] === true) return;
    dimHintView(3);
    [base, task] = calcBaseTask(taskTotal);
    let correctAnswer = base[task]["a"];
    let probabilityArr = {1: 0, 2: 0, 3: 0, 4: 0,};
    let arrAfterFifty = {1: null, 2: null, 3: null, 4: null,};

    let probabilityCorrectAnswer;
    if (taskTotal >= 10) probabilityCorrectAnswer = 8
    else if (taskTotal > 5) probabilityCorrectAnswer = 15
    else probabilityCorrectAnswer = 55;

    for (let key in probabilityArr) {
        arrAfterFifty[key] = !("buttons", document.querySelector("#buttonAnswer" + key).closest(".btn")
            .classList.contains('wrongAnswer'));
    }
    probabilityArr[correctAnswer] = probabilityCorrectAnswer;

    do {
        let randNumb = Math.floor(Math.random() * 4 + 1);
        if (arrAfterFifty[randNumb]) {
            probabilityArr[randNumb]++;
            probabilityCorrectAnswer++;
        }
    } while (probabilityCorrectAnswer < 100)

    for (let key in probabilityArr) {
        buttonAnswer[key].innerHTML += ` (${probabilityArr[key]}%)`;
    }
}

function doHintTwoChances(task) {
    if (sessionHints[4] === true) return;
    dimHintView(4);
    hintSecondChance = true;
}

function resetButtonsView() {
    for (let i = 1; i < 5; i++) {
        document.querySelector("#buttonAnswer" + i).closest(".btn").classList.add("btn_hover");
        document.querySelector("#buttonAnswer" + i).closest(".btn").classList.remove("hintedAnswer");
        buttonAnswer[i].closest(".btn").classList.remove("wrongAnswer");
        buttonAnswer[i].closest(".btn").classList.remove("correctAnswer");
    }
}

function dimHintView(number) {
    hints[number].classList.remove("active");
    hints[number].classList.add("passive");
    sessionHints[number] = 1;
}


function resetHintsView() {
    for (let key in hints) {
        hints[key].classList.remove("passive");
        hints[key].classList.add("active");
    }
    ;
    sessionHints = [0, 0, 0, 0];
};

function showResult(task) {
    console.log(task);

    let sum = 0;
    scoreResultField.classList.remove("hidden");
    scoreResultSpan.closest("div").classList.remove("hidden");
    if (task == 0) {
        sum = 0;
    } else if (task < 5) {
        sum = bids[0]
    } else if (task < 10) {
        sum = bids[4]
    } else if (task < 15) {
        sum = bids[9]
    } else if (task == 15) sum = bids[14];
    scoreResultSpan.innerHTML = sum;
}

function hideResult() {
    scoreResultField.classList.add("hidden");
    scoreResultSpan.closest("div").classList.add("hidden");
}


resetHintsView();
fillQuestionField(1);

//наполняем блок aside начальными ставками
indicateAllBidsAside();
