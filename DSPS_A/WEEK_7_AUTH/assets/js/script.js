var inputUserEl = document.querySelector(".js-input-user");
var inputPassEl = document.querySelector(".js-input-pass");
var btnLoginEl = document.querySelector(".js-button-login");
var formEl = document.querySelector(".js-login-form");
var statusEl = document.querySelector(".js-status");
var attempts = 3; 

btnLoginEl.addEventListener("click", function() {
    if (
        inputUserEl.value == "USER123"
        &&
        inputPassEl.value == "PASS123"
    ) {
        formEl.classList.add("hidden");
        document.body.removeChild(formEl);
        statusEl.innerHTML = "WELCOME";
        statusEl.classList.add("green");
    } else {
        attempts--;

        if (attempts == 0) {
            formEl.classList.add("hidden")
            statusEl.innerHTML = "NO ATTEMPTS LEFT";
            statusEl.classList.add("red");
        }
    }
});