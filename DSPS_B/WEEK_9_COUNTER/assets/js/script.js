var btnEls = document.querySelectorAll(".js-button")

// This is crappy hardcorded 
// btnEls[0].addEventListener("click", function() {
//     // btnEl.innerHTML = "You have clicked the button";
//     this.innerHTML = "You have clicked the button";
// });

// btnEls[1].addEventListener("click", function() {
//     // btnEl.innerHTML = "You have clicked the button";
//     this.innerHTML = "You have clicked the button";
// });

var counter = 0;

for (var i = 0; i < btnEls.length; i++) {
    btnEls[i].addEventListener("click", function() {
        // Logic for adding 1
        counter += parseInt(this.dataset.points);
        document.querySelector(".js-result").innerHTML = counter;

        // Logic for my logs
        var logEl = document.createElement("li"); // <li></li>
        logEl.innerHTML = mergeWords(new Date().toLocaleDateString(), new Date().toLocaleTimeString());
        document.querySelector(".js-logs").appendChild(logEl);
        console.log(logEl);
    });
}

var btnDelEl = document.querySelector(".js-delete-button");
btnDelEl.addEventListener("click", function() {
    var logEl = document.querySelector(".js-logs");
    document.querySelector("body").removeChild(logEl);
});

var fullname = mergeWords("Collin", "Van der Vorst");

function mergeWords(word1, word2) {
    var output = word1 + " " + word2;

    return output;
}


var goats = [
    "T-rex",
    "Connie",
    "Clyde"
];
console.log(goats);

goats.push("Collin");

console.log(goats);

goats.unshift("Renske");

console.log(goats);

goats.splice(2, 0,"Lisa");

console.log(goats);

goats.splice(2, 1);

console.log(goats);

for(var i in goats) {
    console.log(goats[i]);
}

// goats.forEach((goat, index) => {
//     console.log(goat);
// });

var beautifulPerson = {
    firstname: "Collin",
    lastname: "Van der Vorst",
    getFullname: function() {
        console.log(mergeWords(this.firstname, this.lastname))
    }
}

beautifulPerson.getFullname();

var grade1 = 8.4;
console.log(Math.floor(grade1));
console.log(Math.ceil(grade1));
console.log(Math.round(grade1));

console.log(goats);
console.log(Math.random());

var randomGoatIndex = Math.floor(goats.length * Math.random());
console.log(goats[randomGoatIndex]);

// 5 * 0.25 = 1.25 = 1
// 5 * 0.1 = 0.5 = 0
// 5 * 0.75 = 3.75 = 3
// 5 * 0.9 = 4.5 = 4 