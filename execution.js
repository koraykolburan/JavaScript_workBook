alert("Hello, you can use the console for JavaScript codes.");

/*
 let firstName;
 firstName = "Koray";
*/

// NUMBERS AND STRING --------------------------------------------------------------

/* 
let lastName;
lastName = 'Kolburan';
*/
let age;
age = 28;

let nameAndSurname;
nameAndSurname = 'Koray Kolburan "with" it\'s escape character';

let backslash;
backslash = 'This is a backslash = \\'

// firstName = "This is a tabbed \t text";
// firstName = "Multi string\nsecond line text.";

age = 28 + 1;
age++;

fullName = "Koray " + "Kolburan";

// BOOLEAN ------------------------------------------------------------------------

let newA = true && true; //true
let newB = true && false; //false

let newC = true || false; //true
let newD = false || false; //false

let newE = !true;
let newF = !false;

let isSunny = true;
let isSunday = false;

let isAGoodDay = isSunny && isSunday;

// FUNCTIONS ----------------------------------------------------------------------

function getPercentage(percent, amount) {
    //

    let result
    result = amount * percent / 100;

    return result;
}
// This will work the function getPercentage(){} and it will write on HTML.
document.getElementById("demo").innerHTML = getPercentage(25,100);

function multiplyNumbers(number1, number2){

    let result
    result = number1 * number2;

    return result
}
document.getElementById("demo1").innerHTML = multiplyNumbers(2,100);

// SCOPES OF VARIABLES ----------------------------------------------------------------------

let fName = 'Koray';

function accessGlobalScope() {
    fName = 'The name has been changed!';
}


function localVariableFunction() {
    let lName = 'Kolburan';
    lName = 'this variable is local';
}

function leakingVariable() {
    notPreviouslyDefinedVar = 'this is my value';
}

// OBJECTS ----------------------------------------------------------------------

let user;
user = {
    login: "",
    password: "",
    firstName : "",
    lastName : "",
    "full name" : "",

    getFullName : function() {
        return this.firstName + " " + this.lastName;
    }
};

// THIS Is Variable content COPIED BY VALUE
let middleName = 'John';
let referenceToName = middleName;

// Changing the value of a variable doesn't affect the other one
middleName = "Tommy";


//Variable content copied by reference
let user1 = {
    middleName: "John",
    secondName: "Doe"
} //This is Literal object
let referenceToUser1 = user1;
//Instead of coping everything, this is a time consuming operation  and also operation that consumes memory, the Js engine instead of coping over everything, will just make the second tag(let referenceToUser1) point to the exact BOX. And two tags attach to the box.

//changing the value of the object will reflect on both variables
user1.middleName = 'Koray';
referenceToUser1.secondName = 'Black';

//Also, it can be use call the FUNCTION
function getSecondName() {
    return 'some return value';
}
let referenceToFunction = getSecondName;

// OBJECT LITERAL NOTATION -- Constructor Function(Create an object)---------------------------------------------

//Function used to build ("construct") an object
//As a userable blueprint for creating more than one instance of the same object.
function Car(numberOfDoors, brand) {
    this.numberOfDoors = numberOfDoors;
    this.brand = brand;
}
// How do we create an object with using the function, when you use this way is called the CONSTRUCTOR FUNCTION of the object
//Object creation using the "new" operator on the function call - All of them to the below, they have been created same function constructor
let myNewCar = new Car(4, "Toyota");
let myOldCar = new Car(5, "Nissan");
let luxuryCar = new Car(5, "Mercedes");
let ludicrousCar = new Car(2, "Ferrari");
let batmanCar = new Car(0, "Murcielago");

// This is a literal object.
let literalCar = {
    numberOfDoors: 4,
    brand: "Nissan"
};

// The Function Prototype------------------------------------------------------
function Car2(doors, type, engine){
    this.doors = 5;
    this.type = "SUV";
    this.engine = "stopped";
    //this.start = function(){};
    //this.stop = function(){};
};
Car2.prototype.start = function() {
    this.engine = "started";
};
Car2.prototype.stop = function() {
    this.engine = "stopped";
};

let jeep = new Car2();
let cheapCar = new Car2();
//Let's add a new property to the Car2 function prototype
Car2.prototype.year=2024;

// STRINGS  - Revisit
let sentence = "This is a sentence";
//sentence.charAt(0); this will show first character of the string.

// FUNCTION CALLBACKS 
//let's thinking about create a CALCULATOR
function add(firstNum, secondNum) {
    let result;
    result = firstNum + secondNum; 
    return result;
}

function subtraction(firstNum, secondNum) {
    let result;
    result = firstNum - secondNum; 
    return result;
}

function multiply(firstNum, secondNum) {
    let result;
    result = firstNum * secondNum; 
    return result;
}

function divide(firstNum, secondNum) {
    let result;
    result = firstNum / secondNum; 
    return result;
}

function calculate(firstNum, secondNum, operation) {
    let result;
    result = operation(firstNum, secondNum);
    return result;
}

//----------------------------- ARRAYS -----------------------------------------------
const mixedArray = [10, "I'm a string", true];
const cars = ["Volvo", "BMW", "Volkswagen"]; // Create an Array
cars.push("Audi"); // Add an element
cars[0] = "Toyota"; // Change an element
cars.toString(); // Returns an array as a comma separated string
const size = cars.length;
document.getElementById("cars").innerHTML = size;
document.getElementById("cars1").innerHTML = cars[cars.length - 1]; // Accessing the LAST ARRAY Element
let myObject = {
    name: "Koray"
};
let numericValue = 10;
let mixArray = [numericValue, "I'm a string", true, myObject];
mixArray[3].name = "Elijahu"; //myObject has changed.
mixArray[0] = 20; //numvercValue has changed only in the Array.

// METHODS ------------
const sort = cars.sort(); //The sort() method sorts an array alphabetically.
document.getElementById("sort").innerHTML = sort;
const numberArray = [2,20,1,14,52];
const numberArray1 = numberArray.toSorted(function(a, b){
    return a - b;
});
document.getElementById("numberArray1").innerHTML = numberArray1;

const reverse = cars.reverse();
document.getElementById("reverse").innerHTML = reverse;
const toSorted = cars.toSorted();
document.getElementById("toSorted").innerHTML = toSorted;
const toReversed = cars.toReversed();
document.getElementById("toReversed").innerHTML = toReversed;

const concatenate = cars.concat( mixArray );
document.getElementById("concatenate").innerHTML = concatenate;

const indexOf = cars.indexOf("BMW");
document.getElementById("indexOf").innerHTML = indexOf;

const pop = cars.pop();
document.getElementById("pop").innerHTML = pop;

const shift = cars.shift();
document.getElementById("shift").innerHTML = shift;

const topic = "I can eat avocado all day";
const newTopic = topic.slice(10,17);
document.getElementById("newTopic").innerHTML = newTopic;

const microsoft = document.getElementById("pcBrands").innerHTML;
const apple = microsoft.replace(/Microsoft/g, "Apple");
document.getElementById("pcBrands").innerHTML = apple;

const veganProtein = ["Tofu", "Soy Bean", "Pea Protein", "Bean Proteins"];
veganProtein.splice(2, 4);
document.getElementById("veganProtein").innerHTML = veganProtein;

// IMPLICIT ITERATION ----------------------------------------------
const iteration = ["sedan","coupe", "suv", "van", "hybrid"];
const uppercasedCategories = [];

function uppercaseElement(element, index, array) {
    uppercasedCategories.push(element.toUpperCase() );
};

iteration.forEach(uppercaseElement);
document.getElementById("uppercasedCategories").innerHTML = uppercasedCategories;

// ------------------------------- CONDITIONAL STATEMENTS -------------------------------------

//if today is a sunny day, then I'll go jogging otherwise I'll stay at home
const isSunnyDay = true;

/*
if(isSunnyDay === true) {
    console.log("let's get jog!")
} else {
    console.log("Better stay at home.")
};
*/

// We can put it on a function
function checkIfSunny(isSunny ){
    if(isSunny === true) {
        console.log("let's get jog!");
    } else {
        console.log("Better stay at home.");
    };
}

// -------------------------------------------- EXPLICIT ITERATION -----------------------------------------------------

const webCategories = ["Front end Developer", "Backend Developer", "Fullstack Developer"];
const upperCased = [];


/* ---------------------- THE PROBLEM --------------------
webCategories [4] = "last element"; 
It can cause an error message, if we add this. Index 3 will be created automatically because it was not exist before but it's value will be "UNDEFINED". 
"UNDEFINED" IS NOT AN OBJECT. 
*/

/*  --------------------- THE ANSWER ---------------------
That's why we need to check our loop manually:
(The value of the property we are iterating through is not undefined and only if it's not undefined we can do our job)
if(webCategories[i] !== undefined ){
        upperCased.push(webCategories[i].toUpperCase());
}
*/
webCategories [4] = "last element";

//we want to end the loop when we find a cell with a value that starts with "last"; 
for (let i=0; i < webCategories.length; i=i+1) {
    let value = webCategories[i];
    if( value !== undefined) {
        if(value.indexOf("last") === 0) {
            break; // BREAKING OUT OF LOOP
        }
        upperCased.push(webCategories[i].toUpperCase()); // this code line won't work, if break works
    }
}
// break works like return