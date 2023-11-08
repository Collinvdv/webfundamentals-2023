var buttonElement = document.querySelector(".js-button-change");
var inputElement = document.querySelector(".js-input-value");
var titleElement = document.querySelector(".js-title")

buttonElement.addEventListener("click", function() {
    titleElement.innerHTML = inputElement.value;
    inputElement.value = "";
});