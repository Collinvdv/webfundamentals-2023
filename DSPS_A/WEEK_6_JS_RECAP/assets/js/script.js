console.log("LINK WITH JS AND HTML");

// var buttonEl = document.getElementById("btn1");
// var buttonEls = document.getElementsByTagName("button");
// var buttonEls2 = document.getElementsByClassName("btn");
// console.log(buttonEl);
// console.log(buttonEls);
// console.log(buttonEls2);

// var buttonEl = document.querySelector("#btn");
// var buttonEls = document.querySelectorAll(".btn");
// console.log(buttonEl);
// console.log(buttonEls);
// <button></button>

var btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function() {
    // you do whatever you want
    btn1.innerHTML = "AUWTCH";
});

document.querySelector("#btn1").addEventListener("click", function() {
    // you do whatever you want
    console.log("AUWTCH");
});;

// click on second button, log YIHAAH
var btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function() {
    btn2.innerHTML = "Yihaah";
});
console.log(btn2);