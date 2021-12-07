const randomButton = document.querySelector("#buttonRandom");
const  resultNumberField= document.querySelector("#resultNumber");
const  resultTermsField= document.querySelector("#resultTerms");
const  resultDateField= document.querySelector("#resultDate");

randomButton.addEventListener('click', () => {
     let min, max;
     [min, max] = getMinMax ();
     indicateRandom(min, max);
});

function getMinMax (){
let min = document.querySelector("#min").value;
let max = document.querySelector("#max").value;
return [min,max];
}

function indicateRandom(min, max) {
     resultNumberField.innerHTML = "Result: "+Math.floor(Math.random()*max+1-min) ;
     resultTermsField.innerHTML = `Terms: Min = ${min}, Max = ${max}`;
     let currentdate = new Date;
     resultDateField.innerHTML = `Date: ${currentdate.toLocaleString("sk-SK")}`;
}