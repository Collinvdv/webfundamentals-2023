var car1Element = document.querySelector("#car1");
var car2Element = document.querySelector("#car2");

var car1position = 0;
var car2position = 0;

car1Element.addEventListener("click", function() {
    car1position += 50;
    car1Element.style.marginLeft = car1position + "px";
    
    if (car1position >= 500) {
        alert("car1 has won");
    }
});

car2Element.addEventListener("click", function() {
    car2position += 50;
    car2Element.style.marginLeft = car2position + "px";
    
    if (car2position >= 500) {
        alert("car2 has won");
    }
});