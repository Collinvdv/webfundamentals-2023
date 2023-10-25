// One line commment 

/*
    O
    M
    G
*/
var firstname = "Collin";
var lastname = "Van der Vorst";
var fullname = firstname + " " + lastname;
var age= 32;
var minimumAge = (age / 2) + 7;
var height = 1.93;
var isAwesome = true; 

var teacher = {
    firstname: "Collin",
    lastname: "Van der Vorst",
    age: 32,
    height: 1.93,
    isAwesome: true,
    getMinimumAge: function() {
        return (this.age / 2) + 7;
    },
    car: {
        brand: "Ford",
        model: "Mustang Mach E"
    }
};



var grades = [10, 20, 15, 10, 20, 15, 20, 18, 10, 8];
// Give me the avg of my grades
var sum = 0;


if ("5" === 5) {
    console.log ("JS, are u drunk?")
}

for (var i = 0; i < grades.length; i++) {
    sum += grades[i];
}

var avg = sum / grades.length;
console.log(avg);

var goats = ["T-rex", "Connie", "Clyde"];
for (var goatIndex in goats) {
    console.log(goats[goatIndex]);
}
goats.push("donald");
console.log(goats);

// goat 1: T-rex 
// goat 2: Connie
// goat 3: Clyde
// goat 4: Donald

// count from 0-3
for (var i = 0; i < goats.length; i++) {
    console.log("goat " + (i + 1) + ": " + goats[i]);
}

var goats2 = [
    {
        name: "T-rex",
        gender: "M"
    }, 
    {
        name: "Connie",
        gender: "F"
    },
    {
        name: "Clyde",
        gender: "F"
    }
];

// give me the name of my second goat 
// use goats2
console.log(goats2[1].name);


//
// What is the minimum age a person can date?
// age / 2 + 7
//


console.log(fullname);
console.log(typeof(fullname));