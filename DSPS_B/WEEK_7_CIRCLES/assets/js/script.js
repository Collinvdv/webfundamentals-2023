var inputUserEl = document.querySelector(".js-input-u");
var inputPassEl = document.querySelector(".js-input-p");
var btnEl = document.querySelector(".js-btn-login");
var loginFormEl = document.querySelector(".js-login-form");
var welcomeEl = document.querySelector(".js-welcome");
var forbiddenEl = document.querySelector(".js-forbidden");
var attempts = 3

btnEl.addEventListener("click", function() {
    if (inputUserEl.value == "USER123" && inputPassEl.value == "PASS123") {
        // loginFormEl.classList.add("hidden");
        document.body.removeChild(loginFormEl);
        welcomeEl.classList.remove("hidden");
    } else {
        attempts--;

        if (attempts == 0) {
            loginFormEl.classList.add("hidden");
            forbiddenEl.classList.remove("hidden");
        }
        console.log(attempts);
    }
});