// Lecture: variables
/*
var name = "John";
console.log(name);

var lastName = "Smith";
console.log(lastName);

var age = 28;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/
//#################################################################
// Lecture: variables 2
/*
var name = "Steven";
var age = 27;

// console.log(name + " " + age);
// console.log(age + age);

var job, isMarried;
// console.log(job);

job = "Programmer";
isMarried = true;

console.log(name + " is a " + age + " year old " + job + ", is he married? " + isMarried + ".");

name = "John";
age = "Twenty Eight";
job = "Coder";
isMarried = false;

console.log(name + " is a " + age + " year old " + job + ", is he married? " + isMarried + ".");

//var lastName = prompt("What is the last name?");
//console.log(lastName);

alert(name + " is a " + age + " year old " + job + ", is he married? " + isMarried + ".")
*/
//#################################################################
// Lecture: Operators
/*
var now = 2018;
var birthYear = now - 27;

birthYear = now - 27 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;


ageJohn ++;
// ageJohn = ageJohn + 1;  <-- This is the same as the one above
ageMark *=2;
//this one takes the ageMark variable and multiplies it by 2

console.log(ageJohn);
console.log(ageMark);
*/
//#################################################################
//lecture: if/else statements
/*
var name = "John";
var age = 27;
var isMarried = "yes";

if (isMarried === "yes"){
    console.log(name + " is married!");
} else {
    console.log(name + " will hopefully marry soon :) ");
};

isMarried = true;

if(isMarried) {
    console.log("YES!");
} else {
    console.log("No!");
};


if(isMarried){
    console.log("YES!");
}
//double equal type cohersion. Replaces the integer with the string
if (23 === "23"){
    console.log("TEST PRINT!");
}
*/

//##########################################################
//Lecture: Boolean logic and switch
/*
var age = 20; 

if (age < 20){
    console.log("John is a teenager");
} else if (age >= 20 && age < 30) {
    console.log("John is a young man");
} else {
    console.log("John is a man.");
}

var job = "Teacher";

job = prompt("What does John do?");
switch (job) {
    case "Teacher":
        console.log("John teaches kids.");
        break;
    case "Driver":
        console.log("John drives a cab in Lisbon.");
        break;
    case "Cop":
        console.log("John helps fight crime.");
        break;
    default: 
        console.log("John does something else.");
};

*/
// Lecture: coding challenge 1
/*
var johnAge = 20;
var johnHeight = 120;

var bobAge = 30;
var bobHeight = 145;

var markAge = 45;
var markHeight = 175;

var johnTotal = (johnAge * 5) + johnHeight;
console.log("John Total: " + johnTotal);

var bobTotal = (bobAge * 5) + bobHeight;
console.log("Bob total: " + bobTotal);

var markTotal = (markAge * 5) + markHeight;
console.log("Mark total: " + markTotal);



// if (johnTotal > bobTotal) {
//     console.log("John Wins!");
// } else if (bobTotal > johnTotal) {
//     console.log("Bob Wins!");
// } else if (johnTotal === bobTotal) {
//     console.log("There is a draw");
// }


var maryAge = 31;
var maryHeight = 158;
var maryTotal = (maryAge * 5) + maryHeight;
console.log("Mary total: " + maryTotal);

if (johnTotal > bobTotal && johnTotal > maryTotal) {
    console.log("John Wins!");

} else if (bobTotal > johnTotal && bobTotal > maryTotal){
    console.log("Bob Wins!");
} else if (maryTotal > johnTotal && maryTotal > bobTotal){
    console.log("Mary wins!");
} else {
    console.log("It's a draw");
}
*/
//########################################################
// Lecture: Functions
/*
function calculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}
var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1969);
var ageMary = calculateAge(1948);



function yearsUntilRetirement(name, year){
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0){
        console.log(name + " retires in " + retirement + " years");
    } else {
        console.log(name + " is already retired.");
    }
    
}

yearsUntilRetirement("John", 1990);
yearsUntilRetirement("Mike", 1969);
yearsUntilRetirement("Mary", 1939);
// console.log(yearsUntilRetirement);
*/
//############################################################
// Lecture: Statements and Expressions
/*
//Expressions -- Produces a value
    3 + 4;
    var x = 3;

//Statements -- Just performs an action
    if (x === 5) {
        //do something
    }
    */
//##############################################################
// Lecture: Arrays
/*
var names = [
    "John", 
    "Jane",
    "Mark"
];

var years = [
    1990,
    1969,
    1948
];

console.log(names[1]);
names[1] = "Ben";
console.log(names);

var john = [
    "John",
    "Smith",
    1990,
    "programmer",
    false
];

john.push("Blue");
john.unshift("Mr.");
john.pop(); //removes the last element from the array
john.shift(); //removes the first element from the array

console.log(john);

if (john.indexOf("teacher") === -1) {
    console.log("John is not a teacher.");
}
*/
//###############################################################
// Lecture: Objects
/*
var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false
};

console.log(john.lastName);
console.log(john["yearOfBirth"]);

var xyz = "job";
console.log(john[xyz]);

john.lastName = "Miller";
john["job"] = "Programmer";

console.log(john);

var jane = new Object();
jane.name = "Jane";
jane.lastName = "Smith";
jane["yearOfBirth"] = 1969;
jane["job"] = "retired";
jane["isMarried"] = true;

console.log(jane);
*/
//##################################################################
// Lecture: Objects and Methods

// V1.0
/*
var john = {
    name: "John",
    lastName: "Smith",
    yearOfBirth: 1990,
    job: "teacher",
    isMarried: false,
    family: ["Jane", "Mark", "Bob"],
    calculateAge: function(yearOfBirth){
        return 2018 - this.yearOfBirth;
    }
};

// console.log(john.calculateAge(1970));
console.log("John is " + john.calculateAge() + " years old.");

var age = john.calculateAge();
john.age = age;

console.log(john);
*/
//V2.0
/*
var mike = {

    yearOfBirth: 1990,

    calculateAge: function(yearOfBirth){
        this.calculateAge = 2018 - this.yearOfBirth;


    }
};

mike.calculateAge();
console.log(mike);
*/

//####################################################################
//Lecture: Loops
/*
for (var i = 0; i < 9; i ++) {
    // console.log(i);
}

var names = [
    "John",
    "Jane",
    "Mary",
    "Mark",
    "Bob"
];

// for loops
for (var i = 0; i < names.length; i ++){
    console.log(names[i]);
}

for (var i = names.length - 1; i >=  0 ; i --) {
    console.log(names[i]);
}

// while loops
var i = 0;
while (i < names.length) {
    console.log(names[i]);
    i++;
}

for (var i = 1; i <= 5; i ++) {
    console.log(i);

    if (i === 3) {
        break;
    }
}

for (var i = 1; i <= 5; i ++) {
    
// continue is a way to skip an object in an array?
    if (i === 3) {
        continue;
    }
    console.log(i);
}
*/
//###########################################################
// Challenge # 2

var years = [
    1990,
    1988,
    1975,
    1944,
    2012
];



function printFullAge(years){
    var ages = [];
    var fullAges = [];
for (var i = 0; i < years.length; i++) {
    ages[i] = 2018 - years[i];

}

for (i = 0; i < ages.length; i++){
    if(ages[i] >= 18){
        console.log("Person is " + ages[i] + " years old, and is of full age.");
        fullAges.push(true);
    } else {console.log("Person is " + ages[i] + " years old, and is NOT of full age.");
        fullAges.push(false);
    }
}
return fullAges;
};

var full_1 = printFullAge(years);
var full_2 = printFullAge([2015, 1915, 1999]);