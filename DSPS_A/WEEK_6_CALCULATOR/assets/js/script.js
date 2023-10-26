// .querySelector
// .addEventListener("click", function() {
//})
// .innerHtml

var number = 0;

var resultEL = document.querySelector("#result");
var btnAdd = document.querySelector("#btnAdd");

btnAdd.addEventListener("click", function() {
    number++;
    resultEL.innerHTML = number;

    if (number % 2 == 0) {
        document.querySelector("body").style.backgroundColor = "green";
    } else {
        document.querySelector("body").style.backgroundColor = "blue";
    }
});

var btnMinus = document.querySelector("#btnMinus");

btnMinus.addEventListener("click", function() {
    if (number > 0) {
        number--;
        resultEL.innerHTML = number;
    }

    if (number % 2 == 0) {
        document.querySelector("body").style.backgroundColor = "green";
    } else {
        document.querySelector("body").style.backgroundColor = "blue";
    }
});
