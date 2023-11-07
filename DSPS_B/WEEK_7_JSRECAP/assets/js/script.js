var btnEl = document.querySelector(".js-btnChangeText");
var inputEl = document.querySelector("#input_text");
var titleEl = document.querySelector(".js-title");

btnEl.addEventListener("click", function() {
    titleEl.innerHTML = inputEl.value
});