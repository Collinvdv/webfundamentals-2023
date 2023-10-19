// // console.log("external is linked");
// /*

// */

// var firstname = "Collin";
// var familyname = "Van der Vorst";
// var fullname = firstname + " " + familyname;
// firstname = "Collina";
// console.log(typeof(firstname));
// console.log(firstname);
// console.log(familyname);

// // O: Collin Van der Vorst 
// console.log(firstname + " " + familyname);
// console.log(firstname, familyname);
// console.log(fullname);

// // ERROR: Collin THE BIG AND BEST TEACHER Van der Vorst
// // O: Collin "THE BIG AND BEST TEACHER" Van der Vorst
// console.log(firstname + ' "THE BIG AND BEST TEACHER" ' + familyname);
// console.log(firstname + " \"THE BIG AND BEST TEACHER\" " + familyname);
// console.log(`${firstname} "THE BIG AND BEST TEACHER" ${familyname} `); // $""


var age = 32;

age++;
age+=1;
age = age + 1;

console.log(age);
console.log(typeof(age));

// var height = 1.94; 

//
// create 2 variables height (m) and weight (kg)
// BMI = weight / (height * height) 
//
// var height = 1.94;
// var weight = 85; 
// var bmi = weight / (height * height);
// console.log(bmi);

// var isAwesome = true;

// console.log(25 + 5 + "collin" + 5 + 25);

// RAISE 1 hand : O: 30collin525
// RAISE 2 hands: O: 30collin30

var height = 1.94;
var weight = 85; 
var bmi = weight / (height * height);

// bmi is heigher or equal than 40, O: YOU'RE FAT 
// bmi is heigher or equal than 35 and lower than 40: YOU'RE OKAY, BUT A BIT OF SPORT WOULD BE NICE
// bmi is lower than 35: O:YOU'RE OKAY
console.log(bmi);

if (bmi >=40) {
    // TRUE LANE
    console.log("YOU'RE FAT");
} else if (bmi >=35) {
    // FALSE LANE
    console.log("YOU'RE OKAY, BUT A BIT OF SPORT WOULD BE NICE");
} else {
    console.log("YOU'RE OKAY");
}

if (bmi >= 40) {
    console.log("FAT");
} else {
    if (bmi >= 35) {
        console.log("FAT, SPORT");
    } else {
        console.log("OKAY");
    }
}

// 15:10


// BOUNCER 
// AGE 
// WHEN THE AGE IS HEIGHER OR EQUAL THAN 18 and they are f, WE WILL LET HEM IN 
// WHEN THEY PAY 100 EUROS I WILL ALWAYS LET THEM IN 
// OTHERWISE KICK THEM OUT

// // local variable age 
// // O: KICK THEM OUT 
// // O: LET THEM IN
// var age = 18; 
// var gender = "f";
// var bribeMoney = 0;

// if ((age >= 18 && gender == "f") || bribeMoney >= 100){
//     console.log("WELCOME");
// } else {
//     console.log("GO AWAY");
// }

// if (age >= 18 && gender == "f"){
//     console.log("WELCOME");
// } 
// else if (bribeMoney >= 100) {
//     console.log("WELCOME");
// }
// else {
//     console.log("GO AWAY");
// }

// //
// // I: 1 
// // O: Monday
// // 0 = sunday, 1 = monday, 2 =tuesday, ..
// //
// var numberOfTheWeek = parseInt(prompt());
// console.log(numberOfTheWeek);

// if (numberOfTheWeek == 1) {
//     console.log("sunday");
// } else if (numberOfTheWeek == 2) {
//     console.log("monday");
// } else if (numberOfTheWeek == 3) {
//     console.log("tuesday");
// } else if (numberOfTheWeek == 4) {
//     console.log("tuesday");
// }

// switch (numberOfTheWeek) {
//     case 1:
//       console.log("sunday");
//       break;
//     case 2:
//       console.log("monday");
//       break;
//     case 3:
//       console.log("tuesday");
//       break;
//     case 4:
//       console.log("wednesday");
//       break;
//     default:
//       // Handle other cases or provide a default action if needed
//       break;
//   }


// FOR LOOP 
// WHEN YOU KNOW THE START AND END 
// COUNT FROM 10 till 20 
// S: var count = 10 
// HOW LONG?: count <= 20
// STEP: count++

// for (var count = 10; count <= 20; count++) {
//     console.log(count);
// }

// I: 8
// O: 8 x 1 = 8
// O: 8 x 2 = 16
// ..
// O: 8 x 11 = 88
//
// var mainNumber = parseInt(prompt()); //8

// for (var counter = 1; counter <= 11; counter++) {
//     var result = counter * mainNumber;
//     console.log(mainNumber + " x " + counter + "="  + result);
// }

// I: WOOP WOOP
// O: SOUND OF THE POLICE 
// I: WOOP
// O: SOUND OF THE POLICE 
// I: stop
// O: end song 
// var userInput = prompt();

// while(userInput != "stop") {
//     // Output
//     if (userInput == "woop woop") {
//         console.log("sound of the police");
//     }

//     // Ask it again
//     userInput = prompt();
// }

// console.log("end song");




// var userInput;

// do {
//     userInput = prompt();

//     // Output
//     if (userInput == "woop woop") {
//         console.log("sound of the police");
//     }

// } while (userInput != "stop");

// console.log("end song");

//
// password: woopwoop
// USE CASE 1 
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

// USE CASE 2 
// O: What is the password? (3 attempts left )
// I: woopwoop 
// O: ENTERRRRRR

// var attempts = 3;
// var correctPassword = "woopwoop";
// var userPassword;

// while (attempts > 0) {
//     userPassword = prompt("What is the password? (" +attempts + " attempts left )");

//     // Check if it is correct, when it is break out of the while
//     if (userPassword == correctPassword) {
//         console.log("ENTER");
//         break;
//     } else {
//         attempts--;
//     }
// }

// if (attempts == 0) {
//     console.log("NOT AUTHENTICATED");
// }

var teacher = {
    firstname: "Collin",
    lastname: "Van der Vorst",
    isMarried: true,
    age: 32,
    kid: {
        firstname: "Renske",
        lastname: "Van der Vorst",
        age: 0.3
    },
    yellYourFullname: function() {
        console.log(this.firstname.toUpperCase() + " " + this.lastname.toUpperCase());
    }
}

console.log(teacher.firstname + " " + teacher.lastname);
console.log(teacher.kid.firstname);

teacher.yellYourFullname();

// document.write("<h2>" + teacher.firstname +"</h2>");

document.querySelector("h1").innerHTML = teacher.firstname;