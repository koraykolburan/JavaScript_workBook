let demo12 = document.getElementById("demo12");
demo12.innerHTML =
"<hr>" +
"<h1>JS Functions</h1>" +
"JS functions are callable objects. We can use a function declaration or a function expression. <br>" +
"Declared functions are not executed immediately, they are <b>saved for later use</b>, and will be executed " + 
" later, when they are invoked or called. <br>" +
"A JS function can also be defined using an <b>expression</b> like this: <br>" +
"A function expression can be stored in a variable: <br>" +
"<b>const</b> x = <b>function</b> (a, b) { return a * b };<br>"+
"If we console.log(x); we are going to see a function itself. Because we stored the <b>x function</b>" + 
" in a variable. <br>" +
"After a function expression has been stored in a variable, the variable can be used as a function like" + 
" this: <br>" +
"<b>const</b> x = <b>function</b> (a, b) { return a * b };<br>"+
"let z = x(7, 4);" +
"<b>z</b> and the result is going to be: <b>16.</b> <br>" +
"This function is function without a name that is an <b>anonymous function.</b> The function stored in " + 
"variables do not need function <b>names.</b> <br>" +
"<hr>" +
"<h2>The Function() Constructor</h2>" +
"We can write like this with the <b>new</b> keyword: <br>" +
"const myFunction = new Function('a', 'b', 'return a * b'); <br>" +
"let x = myFunction(4,4); 16. <br>" +
"We don't need to use the <b>new</b> keyword. In general, we should avoid using the <b>new</b> " + 
" keyword in JS. <br>" +
"<h2>Function Hoisting</h2>" +
"JavaScript functions can be called <b>before they are declared</b>: <br>" +
"Because, Hoisting is JavaScript's default behaviour of moving <b>declarations</b> to the <b>top of " + 
"the current scope.</b> <br>" +
"<b>myfunction(10);</b> <br>" +
"function myFunction(y) { <br> " + 
"return y * y; <br>" +
"}; <br>" +
"<h2>Self-Invoking Functions</h2>" +
"A self-invoking expression is invoked (started) automatically, without being called. <br>" +
"We have to add <b>parentheses</b> around the function to indicate that it is a function expression: <br>" +
"(function () { <br>" +
     "document.getElementById('...').innerHTML = ' I'm a self-invoking Function!!! '; <br>" +
"})();" +
"<h3>JavaScript Functions can be used as values and in expressions</h3>" +
"const myFunction = new Function('a', 'b', 'return a * b'); <br>" +
"let x = myFunction(4,4); 16. <br>" +
"<b>In Expressions:</b> <br>" +
"let x = myFunction(4,4) * 2; 32. <br>";

let demo13 = document.getElementById("demo13");
demo13.innerHTML = 
"<h2>Functions are Objects(callable objects)</h2>" +
"When we can use the <b>typeof</b> operator in JS returns 'functions' for functions. However," +
 " JS functions can best be described as objects. <br>" +
"JS functions have both <b>properties and methods.</b> <br>" +
"For ex: argument.length property returns the number of arguments received when the function was invoked. <br>" +
"Likewise, toString() method returns the function as a string: <br>" +
"function myFunction(a, b){ return a * b; } let text = myFunction<b>.toString();</b> <br>" +
"A function defined as the <b>property of an object</b> is called a <b>method to the object.</b><br> "+
"A function designed to <b>create new objects</b> is called <b>an object constructor.</b> <br>" +
"<h2>Arrow Functions</h2>" +
"As we've defined before, in <b>Arrow function</b> we don't need the <b>function</b> keyword," + 
" <b>return</b> keyword and <b>curly brackets.</b> <br>" +
"const x = (x, y) => x * y; <br>" +
"x(5, 5); <b>25.</b> <br>" +
"Arrow functions are not well suited for defining <b>object methods.</b> That's why they don't" +
 " have their own <b>this</b> keyword. <br>" +
"Arrow functions are not hoisted. They <b>must be defined before</b> they are used! <br>" +
"We can throw the <b>return</b> keyword and the <b>curly brackets</b> if the function is a" + 
" <b>Single Statement.</b> <br>" +
"Therefore, it can be a good idea to we need to keep always them like this: <b>const x = (x, y) =>" + 
" { return x * y };</b>" +
"<h2>JS Function Parameters</h2>" +
"Functions <b>parameters</b> are the <b>names</b> listed in the function definition, like this: <br>" +
"<b>function</b> functionName(parameter1, parameter2, parameter3){ ... } <br>" +
"<h3>Parameter Rules</h3>" +
"JS function definitions <u>do not specify data types for parameters.</u> <br>" +
"JS function <u>do not perform type checking on the passed arguments.</u><br>" +
"JS function <u>do not check the number of arguments received.</u><br>" +
"<h4>Default Parameters</h4>" +
"If a function is called with <b>missing arguments</b>, the missing values are set to <b>undefined</b>. <br>" +
"However, in general, it is better to <b>assign a default value</b> to the parameter, like this: <br>" +
"function myFunction(a, b) { if (b === undefined) { b = 10; } return a * b; } <br>" + 
"myFunction(4); the output is going to be this : <b>40.</b> <br>" +
"In <b>ES6</b> we can write like this: function myFunction(x, y = 10) { return x + y }; myFunction(5);" +
" <b>15.</b> <br>" +
"<h3>The Rest Parameter ( ... )</h3>" +
"It allows a function to treat an indefinite number of arguments as an array: <br>" +
"function sum(...args) { <br>" +
"let sum = 0; <br>" +
"<b>for</b>(let arg of <b>args</b>) sum += arg; <br>" +
"return sum;<br>" +
"}; <br>" +
"let x = sum(5, 10, 15, 25, 35, 100, 65, 75); <br>" +
"The output is going to be: <b>330.</b> <br>";

//The Rest Parameter Example
function sum(...args) {
     let sum = 0;
     for(let arg of args) {
          sum += arg;
     }
     return sum;
}
let x = sum(5, 10, 15, 25, 35, 100, 65, 75);
console.log("This is the Rest Parameter Example's output: " + x);

let demo14 = document.getElementById("demo14");
demo14.innerHTML = 
"<h2>The Arguments Object</h2>" +
"Function <b>arguments</b> are the <b>real values</b> <u>passed</u> to and <u>received</u> by" +
 " the function. <br>" +
"JS functions have a built-in object called <b>the arguments object.</b> <br>" +
"<b>The Argument object</b> contains <b>an array of the arguments</b> used when the function was" +
" called. <br>" +
"If a function is called with too many arguments(more then declared),these arguments can be reached" +
 " using the <b> arguments object.</b> " +
"<h4>Arguments are Passed by Value</h4>" +
"<b>The parameters, in a function call, are the function's arguments.</b>  myFunction(x,y,z){} <br>" +
"JS arguments are passed by <b>value:</b> The function only gets to know the values, not the argument's" + 
" locations.<br>" +
"If a function changes an argument's value, it does not change the parameter's original value. <br>" +
"Changes the arguments <b>are not visible</b> outside of the function." +
"<h4>Objects are Passed by Reference</h4>" +
"In JS, object references are values. Therefore, objects behave like they are passed by <b>reference:</b>" +
"If a function changes an object property, it changes the <b>original value.</b>" +
"Changes to objecs properties <b>are visible</b> outside of the function.";


//Find the highest value in a list of numbers:
function findMax() {
     let max = -Infinity;
     for(let i = 0; i < arguments.length; i++) {
          if (arguments[i] > max) {
               max = arguments[i];
          }
     }
     return max;
}

console.log("This is the finding the highest value in a list of numbers: " + findMax(100, 29, 1050));

//Sum of all Arguments
function sumAll() {
     let sum = 0;
     for(let  i = 0; i < arguments.length; i++) {
          sum += arguments[i];
     }
     return sum;
}

console.log("This is for sum of all arguments : " + sumAll(10, 150, 250, 1050, 855));

let demo15 = document.getElementById("demo15");
demo15.innerHTML = 
"<h3>JS Function Invoking</h3>" +
"The code block inside of a Function is not executed when the function is <b>defined.</b> <br>" +
"It is executed when the function is <b>executed(called or invoked)</b> <br>" +
"It will be executed when <u>'Something'</u> invokes it. <br>" +
"Using the <b>Invoking</b> term better because, a JS Function can be invoked without being called. <br>" +
"function myFunction(a, b){ return a*b; } myFunction(10, 2); will return 20. This function <b>does" +
 " not belong to any object.</b> <br>" +
"However, in JS there is always a <b>default global object.</b>. <br>" +
"In the <b>HTML</b> the default global object is the <b>HTML page itself,</b> so the function above" + 
" <b>belongs</b> to the HTML page.<br> " +
"This is the <b>Window Object.</b> It belongs to Window Object. <br>" +
"<b>#NOTE# Global variables, methods or functions can easily create name conflicts and bugs in the" + 
" global object!</b> <br> " +
"To sum up, <b>myFunction()</b> and <b>window.myFunction()</b> is the <b>same function.</b><br>" + 
"Therefore, we can invoke it like this too: window.myFunction(10, 2). It is the same invoking.<br>" +
"Invoking a function as a <b>global object</b>, causes the value of <b>this</b> to be the global object.<br>" +
"Using the window object as a variable can easily crash our program! <br>" +
"<h4>Using a Function as a Method</h4>" +
"We can define functions as object methods. <br>" +
"const myObject = { <br>" +
"firstName: 'name1',<br>" + 
" lastName: 'name2',<br>" +
" <b>fullname:</b> function () { <br>" + 
" return this.firstName + ' ' + lastName;<br>" + 
"}}<br>" + 
"The <b>fullName</b> is a method. The function belongs to the object. <b>myObject</b> is the" +
 " owner of the function.<br>" +
"The <b>this</b> keyword is the object that 'owns' the JS code. In this case the value of" +
 " <b>this</b> is <b>myObject.</b> <br>" +
"When we invoke like this: <b> fullName() { return this; } </b> <br>" +
"myObject.fullName(); the output is gonna be: <b>[object Object]</b> the owner object. <br>" +
"Invoking a Function as an <b>object method,</b> causes the value of <b>this</b> to be the object itself. <br>" +
"<h4>Invoking a Function with a Function Constructor</h4>" +
"If a function invocation is preceded with the <b>new</b> keyword, it is a constructor invocation. <br>" +
"function myFunction2 (arg1, arg2) {this.firstName = arg1; this.lastName = arg2;} <br>" +
"const myObj2 = new myFunction2('First Name', 'Last Name') <br>" +
"<b>myObj2.firstName + ', ' + myObj2.lastName</b> and the output is gonna be: <b>First Name," + 
" Last Name</b> <br>" +
"A constructor invocation creates a new object. The new object <b>inherits</b> the properties and" +
 " methods from its constructor." +
"The <b>this</b> keyword in the <b>constructor</b> function does not have a <b>value.</b> <br>" +
"<hr>";

function myFunction2 (arg1, arg2) {
     this.firstName = arg1;
     this.lastName = arg2;
}

const myObj2 = new myFunction2("First Name", "Last Name")
console.log("This is for Invoking a Function as an Object Method: " + myObj2.firstName + ", " + myObj2.lastName);


//Examples of apply() and bind() methods
console.log("This is for apply() method: " + Math.max.apply(" ", [1,2,3]));

const person3 = {
     firstName: "name1",
     lastName: "name2",
     fullName: function () {
          return this.firstName + " " + this.lastName;
     }
}

const member = {
     firstName: "First name (of the first member)",
     lastName: "Last name (of the first member)"
}
let fullName = person3.fullName.bind(member);
console.log("This is for bind() method. The member object borrows the fullName method from person object:  " + fullName());

//Using bind() method to prevent to lose the 'this' keyword
const person4 = {
     firstName: "name1",
     lastName: "name2",
     display: function () {
          let x = document.getElementById("demo17");
          x.innerHTML = "Here is the result: " + this.firstName + " " + this.lastName + "<hr>";
     }
}

let display = person4.display.bind(person4);
setTimeout(display, 2000);

let demo16 = document.getElementById("demo16");
demo16.innerHTML = 
"<h2>JS Function call()</h2>" +
"<h3>All Functions are Methods</h3>" +
"<b>If a function is not a method of a JS object, it is a function of the global object!</b> <br>" +
"<b>call()</b> is pre-defined method. It can be used to invoke a method with an owner object as an" + 
" argument(parameter) <br>" +
"With <b>call()</b>, an object can use a method belonging to another object. like this: <br>" +
"const person= { <b>fullName: function() { return this.firstName + ', ' + this.lastName; }</b> } <br>" +
"const person1 = { firstName:'Tom', lastName:'Tommy' } <br>" +
"const person2 = { firstName:'John', lastName:'Johnny' } <br>" +
"<b>person.fullName.call(person1);</b> this invoking calls the <b>fullName</b> method, using it" + 
" on <b>person1.</b> <br>" +
"<b>person.fullName.call(person2);</b> this invoking calls the <b>fullName</b> method, using it on" +
 " <b>person2. </b><br>" +
"The call() method accepts arguments as like this: <br>" +
"const person = { fullName: function (city, country){ return this.firstName + ' ' + this.lastName + '," + 
" ' + city + ', ' + country ; } } <br>" +
"const person1 = { firstName:'John', lastName:'Johnny' } <br>"+
"<b>person.fullName.call(person1, 'Copenhagen', 'Denmark')</b>" +
"<hr>" +
"<h2>JS Function apply()</h2>" +
"With the <b>apply()</b> method, we can write a method that can be used on different objects. <br>" +
"The <b>apply()</b> method is similar to the <b>call()</b> method. <br>" +
"<u>The difference is:</u> <br>" +
"The <b>call()</b> method takes arguments <b>separately.</b> <br>" +
"The <b>apply()</b> method takes arguments as an <b>array.</b> <br>" +
"<b>person.fullName.apply(person1, ['Copenhagen', 'Denmark']);</b> <br>" +
"<h4>A good example of apply() Method</h4>" +
"we can find the highest number in a list of number arguments: <br>" +
"<b>Math.max(1,2,3)</b> And the output is going to be: <b>3.</b> <br>" +
"However, JS Array do not have a <b>max() method</b>. That's why we can use <b>apply</b> and <b>Math.max()</b> method. <br>" +
"<b>Math.max.apply(null, [1,2,3]);</b> that output is going to be: <b>3.</b> (please look at the console) <br>" +
"We can use these <b>' ', 0 or 'Math'</b> instead of 'null', null is does not matter there." +
"<hr>" +
"<h2>JS Function bind()</h2>" +
"Using the <b>bind()</b> method, an object can borrow a method from another object. <br>" +
"const <b>person</b> = { firstName: 'Name1', lastName: 'Name2', fullName: function () { return this.firstName + lastName; } } <br>" +
"const <b>member</b> = { firstName: 'Name3', lastName: 'Name4' } <br>" +
"<b>let fullName = person.fullName.bind(member);</b> <br>" +
"With this, the member object <b>borrows the fullName() method</b> from <b>person.</b> <br>" +
"Sometimes we need to use <b>bind()</b> method to prevent losing <b>this</b>. <br>" +
"const person = { firstName: 'name1', lastName: 'name2', <br>" +  
"display: function(){ let x = document.getElementById('...'); <br>" +
"x.innerHTML = this.firstName + ' ' + this.lastName; <br>" +
" } } <br>" +
"<b>let display = person.display.bind(person);</b> <br>" +
"<b>setTimeout(display, 2000)</b> <br>";


let demo18 = document.getElementById("demo18");
demo18.innerHTML =
"<h2>JS Closures</h2>" +
"JS variables can belong to the <b>local</b> or <b>global</b> scope. <br>" +
"Global variables can be made local(private) with <b>closures.</b> <br>" +
"<h3>Global Variables in Functions</h3>" +
"If a function can <b>access</b> variables defined <b>outside</b> of the functions, it is a <b>global variable.</b> <br>" +
"In a web page, global variables belong to the page. Also it can be used or be changed by <b>all other scripts in the page.</b> <br>" +
"A local variable can only used inside the function where it is defined. This is <b> a local variable: </b> <br>" +
"function myFunction() { <b>let a = 4;</b> return a * a; }} <br>" +
"If a create variables without a declaration key(var, let, const) inside a function, it always be global variable.<br>" +
"This is a global variable without a keyword: <b>function myFunction() { a = 4; }</b> <br>" +
"<h3>Example of Invoking a function more than one time? </h3>" +
"let counter2 = 0; function add() { counter2 += 1; }  add();add();add(); console.log(counter2);<br>" +
"The problem is here, any code onthe page can <b>change</b> the counter, without calling <b>add().</b> <br>" +
"Therefore, the counter2 should be <b>local</b> to the add() function, to prevent other code from changing it: <br>" +
"let counter2 = 0; //We initiate the counter2 <br>" + 
"function add() { let counter = 0; counter2 += 1; } //Localise the variables inside the function <br>" +
"add();add();add();add(); //Call add() 4 times <br> " + 
"console.log(counter2); //and the output <br>" +
"It did not work, because we <b>display the global counter2</b> instead of the <b>local counter2.</b> <br>" +
"We can <b>remove</b> the global variable which is let counter2 = 0; and we can use the <b>return counter2</b> inside of the function <br>" +
"However, the output is going to be: 1; <br>" +
"It did not work too, because reset the <b>local counter2</b> every time when we call the function. <br>" +
"At this point, we need to use <b>JS Nested Functions</b> <br>" +
"Esseintially, in JS all functions have access to the scope <b>'above' them.</b><br>" +
"<b>Nested functions</b> have access to the scope <b>above them.</b> <br>" +
"function add() { let counter2 = 0; function plus() { counter2 += 1;} return counter2; } <br>" +
"But it didn't work again.<br> " + 
"If we could reach the <b>plus()</b> function from the outside and also we need to find a way to execute 'counter2 = 0;' <b>only once.</b> <br>" +
"That's why we need a <b>closure.</b> <br>" +
 " That means: <b>self-invoking functions</b><br>" +
"<br>" +
"const add = (function () { <br>" + 
"let counter2 = 0; <br>" + 
"return function () { counter2 += 1; return counter; } <br>" +
" } ) <b>();</b> <br>" +
"function myFunction() { <br>" +
"document.getElementById(...).innerHTML = add(); <br>" +
"} <br>" +
"For the output click the counter button: " +
"<br>";


//Instead of Invoking a function more than one time, Using self-invoking function
 const add = (function () {
     let counter2 = 0;
     return function () { counter2 += 1; return counter2; }
})();

function myFunction3 () {
     document.getElementById("span1").innerHTML = "<br>" + add() ;
}

//Adding a button
let btn = document.createElement("button");
btn.setAttribute("onclick", "myFunction3()");
btn.innerHTML = "Counter";
document.getElementById("demo18").appendChild(btn);

//Adding a span
let span1 = document.createElement("span");
span1.setAttribute("id", "span1");
document.getElementById("demo18").appendChild(span1);

let demo19 = document.getElementById("demo19");
demo19.innerHTML =
"<h4>Explaining of JS - Closure Function</h4>" +
"<h5>A closure is a function having access to the parent scope, even after the parent function has closed.</h5>" +
"<ol>" +
"<ul>The variable <b>add</b> that is <b>const add</b> is assigned to the return value of a self-invoking function.</ul>" +
"<ul>The self-invoking function only runs once. It sets the counter2 to zero(0), and returns a function expression</ul>" +
"<ul>This way <b>add becomes a function.</b> It can <b>access</b> the counter in the <b>parent scope.</b></ul>" +
"<ul>This is called a JS <b>Closure.</b> It makes it possible for a function to have <b>private</b> variables.</ul>" +
"<ul>The counter is <b>protected by the scope of the anonymous function </b>, and can only be changed using the <b>add</b> function.</ul>" +
"</ol>" +
"<hr>";