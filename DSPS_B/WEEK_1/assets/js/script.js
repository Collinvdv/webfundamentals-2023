// var firstname = "collin";
// var lastname = "van der vorst";
// var isMarried = true;
// var age = 32;
// var height = 1.94;
// console.log(firstname.toUpperCase() + " " + lastname);

// height = 1.92;

var buttonElement = document.getElementById("btnChangeStyling");

buttonElement.addEventListener("click", function() {
    document.body.classList.add("blue");
});