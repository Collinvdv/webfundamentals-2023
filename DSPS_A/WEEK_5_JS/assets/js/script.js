// console.log("MY FIRST LOG, GHIHIHII");

// ES6
// const firstname = "collin";
// let firstname = "collin";

// ES5 - ecmascript 5 
// Variables + string
// var firstname = "Collin";
// var lastname = "Van der Vorst";
// var familyname = firstname + " " + lastname;
// var age = 32;
// age = age + 1;
// console.log(age);
// age += 1;
// console.log(age);
// age++;
// console.log(age);

// var height = 1.94;
// console.log(typeof(height));

// console.log(firstname + ' "The big one" ' + lastname);
// console.log(firstname + " \"The big one\" " + lastname);
// console.log(`${firstname} "The big one" ${lastname}`); // ES6 way
// console.log(typeof(firstname));
// O: Collin "The big one" Van der Vorst

// declare 2 variables, width and height 
// assign values 
// Calculate BMI 
// BMI = weight (kg) / (height (m) * height (m)) 
// O: 1.2
// var height = 1.94;
// var weight = 85;
// var bmi = weight / (height * height);
// console.log(bmi);

// console.log("collin" + 16 + 4);
// console.log(16 + 4 + "collin" + 16 + 4);
// console.log(16 + 4 + "collin" + (16 + 4));
// raise 1 hand: 20collin20
// rasie 2 hand: 20collin164

// FE: IF bmi is heigher than 40, O:you're fat 
// FE: IF bmi is between 30 and 40, O:it is okay, but sport more.
// FE: IF bmi is lower than 30, O:you're okay
// if (bmi > 40) {
//     // TRUE LANE
//     console.log("You're fat");
// } else if (bmi > 30 && bmi < 40) {
//     console.log("it is okay, but sport more.");
// }  else {
//     // FALSE LANE
//     console.log("You're okay");
// }

// if (bmi > 40) {
//     // TRUE LANE
//     console.log("You're fat");
// }  else {
//     if (bmi > 30) {
//         console.log("You're okay, but do some sport");
//     } else {
//         console.log("You're okay");
//     }
// }

//
// Bouncer for tomorrowland
// ask for the age
// if the age is heigher or equal 18 but they also need to be female then
// The bouncer will always let people in when the bribemoney is heigher than 100
// O: Welcome at the party
// if the age is lower than 18
// O: Go away

// var age = 18;
// var gender = "f"; // m/f
// var bribeMoney = 0;
// if ( (age >= 18 && gender == "f") || bribeMoney > 100) {
//     console.log("welcome");
// } else {
//     console.log("go away");
// }

// if (age >= 18 && gender == "f") {
//     console.log("welcome");
// } else {
//     if (bribeMoney > 100) {
//         console.log("welcome");
//     } else {
//         console.log("go away");
//     }
// }

// i = 5
// o = thursday 
// var dayOfWeek = parseInt(prompt());
// if (dayOfWeek == 0) {
//     console.log("sunday");
// } else if (dayOfWeek == 1) {
//     console.log("monday");
// } else if (dayOfWeek == 2) {
//     console.log("tuesday");
// } else if (dayOfWeek == 3) {
//     console.log("wednesday");
// } else if (dayOfWeek == 4) {
//     console.log("thursday");
// } else if (dayOfWeek == 5) {
//     console.log("friday");
// } else {
//     console.log("not a day of the week");
// }

// switch (dayOfWeek) {
//     case 0:
//         console.log("sunday");
//         break;
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thursday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     default:
//         console.log("not a day of the week number");
// }

// for (startingpos;expression;delimeter)
// for (var number = 10; number <= 20; number+=2) {
//     console.log(number);
// }

// I: 8
// O: 8 x 1 = 8
// O: 8 x 2 = 16
// ..
// O: 8 x 11 = 88
// var mainNumber = parseInt(prompt());

// for (var step = 1; step <= 11; step++) {
//     var result = mainNumber * step;
//     console.log(mainNumber + "x" + step + "=" + result);
// }

//
// I: WOOP WOOP
// O: sound of the police 
// I: collin
// O: no sound of the police 
// I: stop
//

// var input = prompt();

// while (input != "stop") {
//     if (input == "woop woop") {
//         console.log("sound of the police")
//     } else {
//         console.log("no sound of the police");
//     }

//     input = prompt();
// }

// var input = prompt();
// do {
//     if (input == "woop woop") {
//         console.log("sound of the police")
//     } else {
//         console.log("no sound of the police");
//     }

//     input = prompt();
// } while (input != "stop") {

//
// password: woopwoop
// 
// O: What is the password? (3 attempts left )
// I: police 
// O: No, not correct 
// O: What is the password? (2 attempts left)
// I: police 2 
// O: No, not correct 
// O: What is the password? (1 attempts left)
// I: police3
// O: No,  not correct
// O: Forbidden access 


//
// O: What is the password? (3 attempts left )
// I: woopwoop 
// O: sound of the police

// var password = "woopwoop";
// var attempts = 3;
// var inputPassword; 

while (attempts > 0) {
    // Ask the user input 
    inputPassword = prompt("What is the password? (" + attempts + "attempts left )");
    
    // Check if the user is the same as hardcoded 
    if (inputPassword == password) {
        console.log("sound of the police");
        break;
        // attempts = 0;
    } else {
        console.log("No, not correct");
        attempts--;

        /
        if (attempts == 0) {
            console.log(" Forbidden access ");
        }
    }
}

var teacher = {
    firstname : "Collin",
    lastname : "Van der Vorst",
    isAwesome : true,
    age : 32,
    kid: {
        firstname: "Renske",
        lastname: "Van der Vorst"
    },
    getFamilyName: function() {
        return this.firstname + " " + this.lastname
    }
}

teacher.firstname = "collina";

console.log(teacher.age);
console.log(teacher.firstname);
console.log(teacher.kid.firstname);
console.log(teacher.getFamilyName());