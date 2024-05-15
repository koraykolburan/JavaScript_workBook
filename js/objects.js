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
" this.bikeType = type;<br>"+ 
"this.bikeModels = model;<br>"+ 
"this.bikeColors = color; <br>" + 
"}</span> <br>" +
"<span># NOTE # Bike is <b>Object Constructor function.</b></span> <br>" +
"const myBikes = new Bike( 'Cannondale', 'Road Bike', 2024, 'Carbon Grey' ); <br>" +
"The output is: Cannondale, Road Bike, 2024, Carbon Grey. <b> <br>" +
"This example created one single object.</b><br>" +
"<p>In a constructor function <b>this</b> keyword is a <b>substitute</b> for the new object. <br>" + 
" The value of <b>this</b> will become the new object when a new object is created.</p>" +
"We can add a new property to the Object that we've created before. <br>" +
"However, we <b>cannot add</b> a new property to a constructor like this: <b>Bike.madeIn = 'Germany'</b> <br>" + 
"If we want to add <b>a new Property</b> to Constructor Function, we must add it to the constructor function. <br>" +
"We <b>cannot add</b> a <b>new Method</b> to an Object Constructor. It must be done <b>inside the constructor function</b> <br>" +
"We can add a new Method to an Object.";

function Bike(brand, type, model, color) {
     this.bikeBrand = brand;
     this.bikeType = type;
     this.bikeModel = model;
     this.bikeColor = color;
     this.changeModel = function ( newModel ) {
          this.bikeModel = newModel;
     }
} 

const myFirstBike = new Bike ("Cannondale", "Road Bike", 2018, "Claret Red");
const mySecondBike = new Bike ("Canyon", "Trail Bike", 2022, "Titan Grey");

myFirstBike.madeIn = "Vietnam"; // Adding a new Property to an Object 
mySecondBike.madeIn = "Germany"; 
myFirstBike.changeModel(2017); //This is from this.changeModel = function (newmodel){this.bikeModel = newModel};

myFirstBike.brandAndType = function () {      //Adding a new METHOD to an Object
     return this.bikeBrand + ", " + this.bikeType + ".";
};

let demo6 = document.getElementById("demo6");
demo6.innerHTML = 
"<h3>Object Contructor Function Example:</h3>" +
"My first professional bike's brand is " + myFirstBike.bikeBrand + ". " +
"And type of this is " + myFirstBike.bikeType + ". " + " It's model is " + myFirstBike.bikeModel +
", it made in " + myFirstBike.madeIn + ". " + "At that time, I really liked the " + myFirstBike.bikeColor + " one. <br>" + 
"Also I have a second one to ride on mountains that is " + mySecondBike.bikeBrand + ". " +
"It has these properties, " + mySecondBike.bikeType + ", " + mySecondBike.bikeModel + ", it made in " + mySecondBike.madeIn + ". And it's color is " + mySecondBike.bikeColor + ". <br>" +
"This is for adding a new method: " + myFirstBike.brandAndType() + "<br>" +
"We added a new Method to Object Constructor with a <b>changeModel</b> name and output is here: " + myFirstBike.bikeModel + "<hr>";

let demo7 = document.getElementById("demo7");
demo7.innerHTML = 
" <b># NOTE # </b> If we use all of these with a <b>new</b> keyword, their types are gonna be <b>Object</b>, except function. <br>"+ "new String(); new Number(); new Boolean(); new Object(); new Array(); new RegExp(); new Function(); new Date();" + "That's why, there is no need to use new String(), new Number(), new Boolean(), new Array(), and new RegExp(). <br>" +
"Instead of these with <b>new</b>, we can use <b>literals</b> like: myArray = []... <br>" +
"Math() is a <b>global object</b> it cannot be used with <b>new</b> keyword. <br>" +
"<b>Primitive Values</b> are <u>much faster</u> like: let x1 = 0; or let x2 = 'abc' or let x3 = false... <br> " +
"<h2>Object Prototype Inheritance</h2>" +
"All JavaScript objects inherit properties and methods from a <b>prototype.</b> <br>" +
"For example: Date object inherit from <b>Date.prototype</b> <br>"+
"Or Array object inherit from <b>Array.prototype</b> <br>" + 
"Or Bike object inherit from <b>Bike.prototype</b> <br>" +
"The <b>Object.prototype</b> is on the <b>top</b> of the prototype inheritance chain! <br>" +
"We can <b>ADD new Properties or New Methods</b> to <b>OBJECT CONSTRUCTOR</b> with <b>prototype</b> like these: <br>" +
"Bike.prototype.madeIn = 'Germany'; <b>or</b> <br>" +
"Bike.prototype.twoProp = function() { <br>" + 
"return this.bikeModel + ' ' + this.bikeColor; <br>" +
" } <br>" +
" <b># Warning #</b>  -- Only <b>modify</b> your own prototypes. Never modify the prototypes of standard JavaScript Objects!!!";

Bike.prototype.tires = "700 x 25c";
Bike.prototype.twoProp = function() {
     return this.bikeModel + ", " + this.bikeColor;
}

document.getElementById("demo8").innerHTML = 
"This <b>Method</b> and <b>Property</b> was added via <b>Object Prototype</b> to Object Constructor: <br>" +
"The size of tires of my first bike is " + myFirstBike.tires + 
", also my second bike has more two properties like these: " + mySecondBike.twoProp() + ".";

let demo9 = document.getElementById("demo9");
demo9.innerHTML =
"<ol>" + 
"<li>Object.defineProperty(object, property, descriptor)</li> Adding an object property <br>" +
"<span><b>Add a Property</b> Object.defineProperty(personId3, 'language', {value:'English'})</span> <br>" +
"<span><b>personId3.language </b> : English.</span> <br>" +
"Changing an object property <br>"+
"<span><b>Changing a Property</b> Object.defineProperty(personId3, 'lastName', {value:'Unknown'})</span> <br>" +
"<span><b>personId3.lastName </b> : Unknown.</span> <br>" +
"<li>Object.defineProperties(object, descriptors)</li> Adding or changing object properties <br>" +
"<li>Object.getOwnPropertyDescriptor(object, property)</li> Accessing a Property <br>" +
"<li>Object.getOwnPropertyDescriptors(object)</li> Accessing Properties <br>" +
"<li>Object.getOwnPropertyNames(object)</li> Returns all properties as an <b>Array</b> <br>" +
"With this, we can <b>list</b> object properties Object.getOwnPropertyNames()personId3; <br>" +
"<li>Object.getPrototypeOf(object)</li> Accessing the Prototype <br>" +
"</ol>" +
"<h4>Also we can change the Meta Data doing like these:</h4> <br>" +
"writeable: false // Property value cannot be change. <br>" +
"enumerable: false // Property value cannot be enumerated. <br>" +
"configurable: false // Property value cannot be reconfigured. <br>" +
"<h4>Also Getters and Setters can be changed: </h4>" +
"Defining a Getter: <b>get: function() { return language }</b> <br>" +
"Defining a Setter: <b>set: function(value) { language = value }</b> <br>" +
"We can make language read-only as like this: <b>Object.defineProperty(personId3, 'language', {writable: false}).</b><br>";

const personId3 = {
     firstName: "Tom",
     lastName: "Tom2",
     age: 30
}
Object.defineProperty(personId3, "language", {value:"English"}); //Adding property
Object.defineProperty(personId3, "lastName", {value:"Unknown"}); //Changing property
Object.defineProperty(personId3, "language", {enumerable:false}); //Enumerable: false this property
Object.defineProperty(personId3, "fullName", {                   //Adding a getter
     get: function () { return this.firstName + " " + this.lastName;}
});

document.getElementById("demo10").innerHTML = 
"This <b>list</b> all the properties of an <b>personId3 Object:</b> " + Object.getOwnPropertyNames(personId3) + "<br>" +
"In here, we wrote this: <b>Object.defineProperty(personId3, 'language', {enumerable:false});</b> <br>" +
"The result of this: " + Object.keys(personId3) + "<br>" +
"There is no <b>'language'</b> property, because 'language' property is <b>not</b> enumerable anymore! <br>" +
"<b>The Object.getOwnPropertyNames()</b> method returns all properties. <br>" +
"However, <b>The Object.keys()</b> method returns all enumerable properties. <br>" + 
"Example of defining a Getter and a Setter using Object.defineProperty() <br>" +
personId3.fullName;

//Counter with getters and setters
const obj = { counter : 0 };

Object.defineProperty( obj, "reset", {            //Define reset getter
     get : function () { this.counter = 0; }
});
Object.defineProperty( obj, "increment", {        //Define increment getter
     get : function () { this.counter++; }
} );
Object.defineProperty( obj, "decrement", {
     get : function () { this.counter--; }        //Define decrement getter
} );
Object.defineProperty( obj, "add", {
     set : function (value) { this.counter += value; } //Define add setter
} );
Object.defineProperty( obj, "subtract", {
     set: function (value) { this.counter -= value; }  //Define subtract setter
} );

//We can change the values of counter below:
obj.reset;
obj.add = 15;
obj.subtract = 1;
obj.increment;
obj.decrement;
document.getElementById("demo10").innerHTML =
"We made a counter with increment and decrement, we can change on the line of 277 in object.js folder. <br> " +
"Here is the result: " + obj.counter;


//JS Object Protection

//Examples
//Object.preventExtensions  -- "use strict";
const person2 = {firstName:"nameOne", lastName:"nameTwo"};
Object.preventExtensions(person2);
person2.language = 'EN';
let text = "";
try {
     person2.language = 'EN';
} 
catch (err) {
     text = err;
}

const veggies = [ "Broccoli", "Avocado", "Lettuce" ];
Object.preventExtensions(veggies);
let text2 = "";
try {
     veggies.push("Apple");
}
catch (err) {
     text2 = err;
}

const phone1 = { brand: "Xaomi", model: 2022 };
Object.preventExtensions(phone1);
let check1 = Object.isExtensible(phone1);
let check2 = Object.isExtensible(veggies);

//Object.seal()
const phone2 = [ "apple", "xaomi", "samsung" ];
Object.seal(phone2);
let text3 = "";
try {
     phone2.push("huawei");
}
catch (err) {  
     text3 = err;
}

let check3 = Object.isSealed(phone2);

//Object.freeze()
Object.freeze(phone2);
let text4 = "";
try {
     phone2.push("googlePhone");
}
catch(err) {
     text4 = err;
}

let check4 = Object.isFrozen(phone2);

let demo11 = document.getElementById("demo11");
demo11.innerHTML = 
"<h2>Javascript Object Protection</h2>" +
"<ol>" +
"<li>Using Const</li>" +
"With <b>const</b> we cannot re-assign the object, however we can still <b>change</b> the value of a property, <b>delete</b> or create a new property.<br>" +
"<li>JavaScript Object.preventExtensions()</li>" +
"<b>Object.preventExtensions()</b> method prevents adding properties to an object. <br>" +
"const person = {firstName: 'Tom', lastName: 'Tommy'}; Object.preventExtensions(<b>person</b>); person.language = 'EN';  -- This will throw an error! <br>" + person2.language + ". However, we need to use <b>'use strict'</b>!" +
"<li>Arrays can be prevented from Extensions too:</li>" +
"const veggies = [ 'Avocado', 'Broccoli', 'Lettuce' ]; <br>" +
"Object.preventExtensions(veggies) <br>" +
"veggies.push('Apple'); <br>" +
"<b>" + text2 + "</b>" +
"<li>Object.isExtensible() to check if an object is extensible. It returns <b>true</b> if an object is extensible.</li>" +
"const phone1 = { brand: 'Xaomi', model: 2022 }; <br>" +
"Object.preventExtensions(phone1); <br>" +
"let check1 = Object.isExtensible(phone1); <br>" +
"<b>" + check1 + "</b>" + " & check the veggies Array too " + "<b>" + check2 + "</b>" +
"<li>Object.seal() method prevents additions and deletions of New Properties. Also, makes existing properties non-configurable.</li>" +
"<b> #NOTE# We need to use 'use strict' Mode!</b> <br>" +
"const person = {firstName: 'Tom', lastName: 'Tommy', age: 30}; <br>" +
"Object.seal(person) <br>" +
"<b>delete</b> person.age <br>" +
"<b>TypeError: Cannot delete property 'age' of #</b> <br>" +
"We can use this also on Arrays. <br>" +
"<b>" + text2 + ".</b>" +
"<li>Object.isSealed() can be used to check if an object is sealed. It returns <b>true</b> if an object is sealed.</li>" +
"let check3 = Object.isSealed(phone2); " + "<b>" + check3 + ".</b>" +
"<li>Object.freeze() prevents <b>any changes</b> to an object. Frozen objects <b>read-only.</b></li>" +
"We must use this in <b>'use strict'</b> mode!!! <br>" +
"Object.freeze(person) <br>" +
"person.age = 65; <br>" +
"<b>TypeError: Cannot assign to read only property 'age' of object '#'</b> <br>" +
"We can use on Arrays too. <br>" +
"Object.freeze(phone2)<br>" +
"We can use on Arrays too. <br>" +
"<b>" + text4 + "</b>" +
"<li>Object.isFrozen() can be used to check if an object is frozen. It returns <b>true</b> if an object is frozen.</li>" +
"let check4 = Object.isFrozen(phone2);" + "<b>" + check4 + "</b> <br>" +
"Lastly, we can use Object.isFrozen() on Arrays too." +
"</ol>";

