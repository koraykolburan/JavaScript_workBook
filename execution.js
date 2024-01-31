alert("Koray");

var firstName;
firstName = "Koray";

// NUMBERS AND STRING ----------------------------------------

var lastName;
lastName = 'Kolburan';

var age;
age = 28;

var nameAndSurname;
nameAndSurname = 'Koray Kolburan "with" it\'s escape character';

var backslash;
backslash = 'This is a backslash = \\'

// firstName = "This is a tabbed \t text";
// firstName = "Multi string\nsecond line text.";

age = 28 + 1;
age++;

fullName = "Koray " + "Kolburan";

// BOOLEAN -------------------------------------------------------

var newA = true && true; //true
var newB = true && false; //false

var newC = true || false; //true
var newD = false || false; //false

var newE = !true;
var newF = !false;

var isSunny = true;
var isSunday = false;

var isAGoodDay = isSunny && isSunday;

// FUNCTIONS -------------------------------

function getPercentage(percent, amount) {
    //

    var result
    result = amount * percent / 100;

    return result;
}
// This will work the function getPercentage(){} and it will write on HTML.
document.getElementById("demo").innerHTML = getPercentage(25,100);

function multiplyNumbers(number1, number2){

    var result
    result = number1 * number2;

    return result
}
document.getElementById("demo1").innerHTML = multiplyNumbers(2,100);

// SCOPES OF VARIABLES
var fName = 'Koray';

function accessGlobalScope() {
    fName = 'The name has been changed!';
}