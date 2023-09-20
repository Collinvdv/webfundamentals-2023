// Init variables for my cars
var car1Position = 0;
var car2Position = 0;

var car1Element = document.querySelector("#car1");
var car2Element = document.querySelector("#car2");

car1Element.addEventListener("click", function() {
    car1Position = car1Position +  20;
    car1Element.style.marginLeft = car1Position + "px";
});

car2Element.addEventListener("click", function() {
    car2Position = car2Position +  20;
    car2Element.style.marginLeft = car2Position + "px";
});

