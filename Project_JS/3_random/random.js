const randomButton = document.querySelector("#buttonRandom");
const resultNumberField = document.querySelector("#resultNumber");
const resultTermsField = document.querySelector("#resultTerms");
const resultDateField = document.querySelector("#resultDate");
const quantity = document.querySelector("#quantity");

logoHome.addEventListener("click", () => window.history.back());

randomButton.addEventListener('click', () => {
    let min, max;
    [min, max] = getMinMax();
    let i = 1;
    let q = Number(quantity.value);
    if (q>1000) {resultNumberField.innerHTML="Quite big quantity of numbers. Please choose less then 1000";
        return}
    while (i <= q) {
        indicateRandom(min, max, i);
        i++;
    }
});

function getMinMax() {
    let min = +document.querySelector("#min").value;
    let max = +document.querySelector("#max").value;
    if (max<min) resultTermsField.style.color = "red"
        else resultTermsField.style.color = "black";
    let minReal = Math.min(min, max);
    let maxReal = Math.max(min, max);
    return [minReal, maxReal];
}

function indicateRandom(min, max, index) {
    if (index == 1) resultNumberField.innerHTML = `<p>${index}. Result: ${Math.floor(min + Math.random() * (max + 1 - min))}</p>`
    else resultNumberField.innerHTML += `<p>${index}. Result: ${Math.floor(min + Math.random() * (max + 1 - min))}</p>`
    resultTermsField.innerHTML = `Terms: Min = ${min}, Max = ${max}`;
    let currentdate = new Date;
    resultDateField.innerHTML = `Date: ${currentdate.toLocaleString("sk-SK")}`;
}
