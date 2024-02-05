alert("Hello, you can use the console for JavaScript codes.");

// let firstName;
// firstName = "Koray";

// NUMBERS AND STRING --------------------------------------------------------------

// let lastName;
// lastName = 'Kolburan';

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
//Instead of coping everythin, this is a time consuming operation  and also operation that consumes memory, the Js engine instead of coping over everything, will just make the second tag(let referenceToUser1) point to the exact BOX. And two tags attach to the box.

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
function Car2(){
    this.doors = 5;
    this.type = "SUV";

    //this.start = function(){};
    //this.stop = function(){};
};
Car2.prototype.start = function() {};
Car2.prototype.stop = function() {};
let jeep = new Car2();
let cheapCar = new Car2();
//Let's add a new property to the Car2 function prototype
Car2.prototype.year=2024;