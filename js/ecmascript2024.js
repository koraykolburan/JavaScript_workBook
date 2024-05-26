let demo68 = document.getElementById("demo68");
demo68.innerHTML =
"<hr> <br>" +
"<h1>ECMAScript2024</h1>" +
"<h3>Object.groupBy()</h3>" +
"The <b>Object.groupBy()</b> method groups elements of an object according to string values returned from a callback function. <br>" +
"The <b>Object.groupBy()</b> method does not change the original object. <br>" +
"<br>";

//Example of Object.groupBy()
const veggies2 = [
     {name:"broccoli", quantity:150},
     {name:"artichoke", quantity:550},
     {name:"pepper", quantity:200},
     {name:"Zucchini", quantity:350},
]

function myCallback ({ quantity }) {
     return quantity > 200 ? "enough" : "low";
}

const result = Object.groupBy(veggies2, myCallback);

let text123 = "These veggies are enough: <br>";
for (let [x,y] of result.enough.entries()) {
     text123 += y.name + " " + y.quantity + "<br>";
}

text123 += "<br>These veggies are low: <br>";
for (let [x,y] of result.low.entries()) {
     text123 += y.name + " " + y.quantity + "<br>";
}

document.getElementById("demo69").innerHTML = text123;


//Example of Map.groupBy()
const veggies3 = [
     {name:"broccoli", quantity:150},
     {name:"artichoke", quantity:550},
     {name:"pepper", quantity:200},
     {name:"Zucchini", quantity:350},
]

function myCallback2 ({ quantity }) {
     return quantity > 200 ? "enough" : "low";
}

const result2 = Map.groupBy(veggies3, myCallback2);

let text1234 = "These veggies are enough: <br>";
for (let x of result2.get("enough")) {
     text1234 += x.name + " " + x.quantity + "<br>";
}

text1234 += "<br>These veggies are low: <br>";
for (let x of result2.get("low")) {
     text1234 += x.name + " " + x.quantity + "<br>";
}
document.getElementById("demo70").innerHTML = 
"<h3>Map.groupBy()</h3>" +
"The <b>Map.groupBy()</b> method groups elements of an object according to string values returned from a callback function. <br>" +
"It does not change the original object. <br> <br>" +
text1234 +
"<br> <br>" +
"The difference between <b>Object.groupBy()</b> and <b>Map.groupBy()</b> is: <br>" +
"<b>Object.groupBy()</b> groups elements into a JS object. <br>" +
"<b>Map.groupBy()</b> groups elements into a Map object. <br>";


//The PlainDate(), the PlainTime(), Temporal.PlainMonthDay(), Temporal.YearMonth()
let dateText = 
"<b>const date = new Temporal.PlainDate(2024, 25, 1);</b> lets us to create a date with no time. <br>" +
"<b>const date2 = new Temporal.PlainTime(10, 30);</b> <br>" +
"<b>const date3 = new Temporal.PlainMonthDay(5, 1);</b> <br>" +
"<b>const date3 = new Temporal.PlainMonthDay(5, 1);</b> <br>";

//const date2 = new Temporal.PlainDate(2024, 25, 1);
//const date3 = new Temporal.PlainTime(10, 30);
//const date4 = new Temporal.PlainMonthDay(5, 1);


document.getElementById("demo71").innerHTML = 
dateText + ", "; // date2 + date3 + date4;

let demo72 = document.getElementById("demo72");

//Example
const personT = {
     firstName: "Tommy",
     lastName: "H.",
     age: 59
};

//Destructuring
let {firstName, lastName, country = "US"} = personT;

//Destructuring on Strings
let name5 = 'ABCDEF';
let [a1, a2, a3, a4, a5] = name5;

//Destructuring on Arrays
const name4 = ["bike1", "bike2", "bike3"];
let [firstOne, secondOne, thirdOne] = name4;


demo72.innerHTML =
"<h2>Object Destructuring</h2>" +
"<b>Destructuring</b> assignment is a syntax that unpacks objects into variables: <br>" +
"const personT = { <br>" +
     "firstName: 'Tommy',<br>" +
     "lastName: 'H.' ,<br>" +
     "age: 59 <br>" +
"}; <br>" +
"<b>let {firstName, lastName, country = 'US'} = personT;</b> <br>" +
"typeof firstName + ' ' + typeof lastName + typeof country: <br>" +
typeof firstName + " " + typeof lastName + " " + typeof country + "<br>" +
"Destructuring is not destructive. It doesn't change the original object. <br>" +
"It can be change like this: let {lastName: name} = personT <br>" +
"<h2>String Destructuring</h2>" +
"let name = 'ABCDEF'; let [a1, a2, a3, a4, a5] = name; console.log(a1 + a2 + a3); the output is gonna be: A. <br>" +
a1 + a2 + a3 + "<br>" +
"<h2>Array Destructuring</h2>" +
"Also, we can use on this Arrays: const person = ['Tommy', 'H.']; let [firstName, lastName] = person <br>" +
"console.log(firstName + lastName); the output: typeof " + typeof firstOne + " " + typeof secondOne + " " + typeof thirdOne + "<br>" +
"We can <b>skip</b> values using <b>( ,, )</b>: let [firstName, ,age] = person; OR <br> " +
"We can <b>pick up</b> values from specific index locations of an array: const {[0]:firstName ,[1]:lastName} = person.";
