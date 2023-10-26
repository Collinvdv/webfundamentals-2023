var firstname = "Collin";
var familyname = "Van der Vorst";
var fullname = firstname + " " + familyname;
var age = 32;
var height = 1.94;
var isAwesome = true;

// (age / 2) + 7
// give me the minimum age
var minimumAge = (age / 2) + 7;
console.log(minimumAge);

var teacher = {
    firstname: "Collin",
    lastname: "Van der Vorst",
    age: 32,
    isAwesome: true,
    height: 1.94,
    goats: [
        {
            name: "T-rex", 
            gender: "m"
        }, 
        {
            name: "Connie", 
            gender: "",
        }
    ],
    car: {
        brand: "Ford",
        type: "Mustang mach e"
    },
    logFullname: function() {
        console.log(this.firstname + " "+ this.lastname);
    }
};


var goat1 = "T-rex";
var goat2 = "Connie";
var goat3 = "Clyde";

var goats = ["T-rex", "Connie", "Clyde"];
goats.push("KDB the goat");

for (var i = 0; i < goats.length; i++) {
    console.log("Goat " + (i + 1) + "is " + goats[i]);
}

// USE A FOR LOOP, THINK C# 
// Goat 1 is T-rex
// Goat 2 is Connie
// Goat 3 is Clyde

var grades = [10, 20, 15, 12, 14, 16];
// GIVE ME THE AVG
var sum  = 0;

for (var i = 0; i < grades.length; i++) {
    sum += grades[i];
}

var avg = sum / grades.length;
console.log(avg);

// 
// if the avg is heigher then 10, you passed the course 
// if not, you didn't pass
// 
if (avg >= 10 ) {
    console.log("YOU PASSED");
} else {
    console.log("YOU FAILED");
}

if (5 === "5") {
    console.log(true)
}

var animals = ["tiger", "cat"];

for (var animalIndex in animals) {
    console.log(animals[animalIndex]);
}

animals.forEach((animal) => {
    console.log(animal);
});