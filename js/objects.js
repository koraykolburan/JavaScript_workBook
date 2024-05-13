let demo1 = document.getElementById("demo1");
demo1.innerHTML = 
"<ul>" + 
"<li>Booleans can be objects (if defined with the new keyword)</li>" + 
"<li>Numbers can be objects (if defined with the new keyword)</li>" + 
"<li>Strings can be objects (if defined with the new keyword)</li>" + 
"<li>Dates are always objects </li>" + 
"<li>Maths are always objects </li>" + 
"<li>RegExp are always objects </li>" + 
"<li>Arrays are always objects </li>" + 
"<li>Functions are always objects </li>" + 
"</ul>" +
"<b>All JavaScript values are objects, except PRIMITIVES.</b>" +
"<hr>" +
"<h2>JavaScript Primitives</h2>" +
"A primitive value is a value that <b>has no properties or methods:</b> 3.14 is a primitive value. <br>"+
"JavaScript defines 7 types of Primitive Data Types: <br>" +
"<ol>" +
"<li>string</li>" +
"<li>number</li>" +
"<li>boolean</li>" +
"<li>null</li>" +
"<li>undefined</li>" +
"<li>symbol</li>" +
"<li>bigint</li>" +
"</ol>" +
"<b>Primitive Values are IMMUTABLE</b> <br>" +
"<b>They are hardcoded and cannot be changed.</b>" +
"<br>"+
"<hr>"+
"<h2>Objects are Variables</h2>" +
"JavaScript variables can contain single or more values.<br>" + 
"<b>Objects are variables too.</b> Objects can contain many values too. <br>" +
"In general, being declared objects with the <b>const</b> keyword. <br>" +
"The named values for instance: <u>firstName</u> or <u>carColor</u> are called <b>properties.</b> <br>" +
"A function inside of the Object is called <b>Method.</b> <br>" +
"<h3>Ways of Creating Object</h3>" +
"<ul>" +
"<li><b>Object Literal:</b> Define and Create an object in one statement. And object definition can span multiple lines.</li>" +
"<li><b>Using the New Keyword:</b> Exactly like literal. There is no need to use new Object(). We need to use Object Literal for readability, simplicity and execution speed.</li>" +
"<li>JavaScript Objects are <b>Mutable</b>, it can be changed.</li>" +
"<li>Define an <b>Object Constructor</b> and then create Objects of the constructed type.</li>" +
"<li>Creating an Object using <b>Object.create().</b></li>" +
"</ul>"+
"We can access JS properties: a) car.color, b) car['color'], c) x = 'color'; car[x] <br>" +
"<hr>"+
"<h3>For/in Loop: statement loops through the properties of an object.</h3>" +
"<b>for</b> (<b>let</b> variable <b>in</b> object) { //code to be executed } like this example: <br>" +
"We can also <b>add properties:</b> car.model = 2024; <br>" +
"We can <b>delete properties:</b> car.model; or delete car['model'] <br>" +
"The <b>delete</b> operator has no Effect on Variables or Functions. <br>" +
"An object can be nested with Objects and with Arrays. <br>" +
"<hr>";

let txt = "";
const myObj = {
     type: "Bike",
     year: 2024,
     bikes: [
          {brand:"Cannondale", models:["Optimo1", "Optimo2", "Optimo3"]},
          {brand:"Canyon", models:["Aeroad CFR", "Aeroad CF SLX", "Aeroad CF SL"]},
          {brand:"Emonda", models:["Emonda SL 6", "Emonda SL 5", "Emonda SL 7 SRAM"]}
     ]
}

for (let x in myObj.bikes) {
     txt += "<h3>" + myObj.bikes[x].brand + "</h3>";
     for (let y in myObj.bikes[x].models) {
          txt += myObj.bikes[x].models[y] + "<br>";
     }
}

document.getElementById("demo2").innerHTML = 
"<h2>Nested JavaScript Objects and Arrays</h2>  Example: " + txt + "<hr>";

let demo3 = document.getElementById("demo3");
demo3.innerHTML = 
"<h2>This keyword</h2>" +
"The <b>this</b> keyword refers to an <b>object.</b> <br>" +
"The <b>this</b> keyword refers to different objects <b>depending on how it is used</b> <br>" +
"<ul>" +
"<li>In an Object Method, <b>this</b> refers to the <b>object.</b></li>" +
"<li>Alone, <b>this</b> refers to the <b>global object.</b></li>" +
"<li>In a function, <b>this</b> refers to the <b>global object.</b></li>" +
"<li>In a function(in strict mode), <b>this</b> is <b>undefined.</b></li>" +
"<li>In an event, <b>this</b> refers to the element that received the event.</li>" +
"<li>Methods like <b>call(), apply() and bind()</b> <b>this</b> can refer to <b>any object</b>.</li>" +
"</ul>" +
"<b>this</b> is not a Variable. It is a keyword. We cannot change the value of <b>this.</b>" +
"<br>" + "<hr>" +
"<b>Methods</b> are functions stored as object properties. <br>" +
"<b>Accessing:</b> name = person.fullName() <br>" +
"<b>Adding</b> an Method to an Object: person.name = function() { return this.firstName + ' ' + this.lastName } <br>" +
"<b>Using Built-In</b> Method: .toUpperCase() & .toLowerCase() <br>" +
"<hr>" +
"<h2>Displaying JS Objects</h2>" +
"When we display the Object with its name, it displays as like this: [object Object]. <br>" +
"<h3>Some Common Solutions to display JS Objects are like these:</h3>" +
"<ul>" +
 "<li>Displaying as a String:</li> " +
 "<span>person.name + ' ' + person.age</span> <br>" +
 "<li>Displaying the Object in a Loop</li>" +
 "<span>for (let x in person) { txt += person[x] + ' ''; };</span>" +
 "<span> If we use <b>person.x</b> it does not work. Because <b>x is a variable.</b> We need to use <b>person[x]</b> in the <b>loop.</b></span>" +
 "<li>Object.values();</li>" +
 "<span>Any JS Object can be converted to an array using with Object.values()</span> <br>" +
 "<span>const person = { name:'name1', ...};  const myArray = Object.values(person)</span> <br>" +
 "<li>JSON.stringify()</li>" +
 "<span>const person = { name:'name1', ...}; let mystring = JSON.stringify(person)</span> <br>" +
 "<li>JSON.stringify() Dates </li>" +
 "<span>It converts dates into strings</span> <br>" +
 "<li>JSON.stringify() does not convert functions into strings</li>" +
 "<span>If we convert the functions into strings before JSON.stringify() like this:</span> <br>" +
 "<span>person.age = person.age.toString();</span>" +
 "<li>Stringify Arrays</li>" +
 "<span>const arr = [ 'name1', 'name2', 'name3' ]; let myString = JSON.stringify(arr);</span>" +
 "</ul>" +
"<h3>JS Accessors - Getters and Setters</h3>" +
"<span>The <b>Getter</b> get keyword. get.lang() { return this.language }</span> <br>" +
"<span>The <b>Setter</b> set keyword. set.lang(value) { this.language = value }</span> <br>" +
"Using getters and setters can secure better <b>data quality</b>. <br>" +
"<b>Object.defineProperty() method can also be used to add Getters and Setters.</b>";

//The Getter Method Example:
const personId = {
     firstName: "Name1",
     lastName: "Name2",
     language: "spanish",
     get lang() {
          return this.language.toUpperCase();
     }
};

const personId2 = {
     firstName: "Name1",
     lastName: "Name2",
     language: "",
     set lang(lang) {
          this.language = lang.toUpperCase();
     }
};
personId2.lang = "greek";

document.getElementById("demo4").innerHTML = "<b>This is getter: </b>" + personId.lang + "<br>" +
"<b>This is setter: </b>" + personId2.language;

let demo5 = document.getElementById("demo5");
demo5.innerHTML = 
"<h2>Object Constructors</h2>" +
"In general, The name constructor functions are upper-case first letter. <br>" +
"<span>function <b>Bike</b>(brand, type, model, color) { <br>"+
" this.bikeBrands = brand;<br>"+ 
"this.bikeModels = model;<br>"+ 
"this.bikeColors = color; <br>" + 
"}</span> <br>" +
"const myBikes = new Bike( 'Cannondale', 'Road Bike', 2024, 'Carbon Grey' ); <br>" +
"The output is: Cannondale, Road Bike, 2024, Carbon Grey. <b>This example created one single object.</b><br>" +
"<p>In a constructor function <b>this</b> keyword is a <b>substitute</b> for the new object. <br>" + 
" The value of <b>this</b> will become the new object when a new object is created.</p>";