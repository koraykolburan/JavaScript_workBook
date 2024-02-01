alert("Koray");

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

