let demo12 = document.getElementById("demo12");
demo12.innerHTML =
"<hr>" +
"<h1>JS Functions</h1>" +
"JS functions are callable objects. We can use a function declaration or a function expression. <br>" +
"Declared functions are not executed immediately, they are <b>saved for later use</b>, and will be executed later, when they are invoked or called. <br>" +
"A JS function can also be defined using an <b>expression</b> like this: <br>" +
"A function expression can be stored in a variable: <br>" +
"<b>const</b> x = <b>function</b> (a, b) { return a * b };<br>"+
"If we console.log(x); we are going to see a function itself. Because we stored the <b>x function</b> in a variable. <br>" +
"After a function expression has been stored in a variable, the variable can be used as a function like this: <br>" +
"<b>const</b> x = <b>function</b> (a, b) { return a * b };<br>"+
"let z = x(7, 4);" +
"<b>z</b> and the result is going to be: <b>16.</b> <br>" +
"This function is function without a name that is an <b>anonymous function.</b> The function stored in variables do not need function <b>names.</b> <br>" +
"<hr>" +
"<h2>The Function() Constructor</h2>" +
"We can write like this with the <b>new</b> keyword: <br>" +
"const myFunction = new Function('a', 'b', 'return a * b'); <br>" +
"let x = myFunction(4,4); 16. <br>" +
"We don't need to use the <b>new</b> keyword. In general, we should avoid using the <b>new</b> keyword in JS. <br>" +
"<h2>Function Hoisting</h2>" +
"JavaScript functions can be called <b>before they are declared</b>: <br>" +
"Because, Hoisting is JavaScript's default behaviour of moving <b>declarations</b> to the <b>top of the current scope.</b> <br>" +
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
"When we can use the <b>typeof</b> operator in JS returns 'functions' for functions. However, JS functions can best be described as objects. <br>" +
"JS functions have both <b>properties and methods.</b> <br>" +
"For ex: argument.length property returns the number of arguments received when the function was invoked. <br>" +
"Likewise, toString() method returns the function as a string: <br>" +
"function myFunction(a, b){ return a * b; } let text = myFunction<b>.toString();</b> <br>" +
"A function defined as the <b>property of an object</b> is called a <b>method to the object.</b><br> "+
"A function designed to <b>create new objects</b> is called <b>an object constructor.</b> <br>" +
"<h2>Arrow Functions</h2>" +
"As we've defined before, in <b>Arrow function</b> we don't need the <b>function</b> keyword, <b>return</b> keyword and <b>curly brackets.</b> <br>" +
"const x = (x, y) => x * y; <br>" +
"x(5, 5); <b>25.</b> <br>" +
"Arrow functions are not well suited for defining <b>object methods.</b> That's why they don't have their own <b>this</b> keyword. <br>" +
"Arrow functions are not hoisted. They <b>must be defined before</b> they are used! <br>" +
"We can throw the <b>return</b> keyword and the <b>curly brackets</b> if the function is a <b>Single Statement.</b> <br>" +
"Therefore, it can be a good idea to we need to keep always them like this: <b>const x = (x, y) => { return x * y };</b>" +
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
"In <b>ES6</b> we can write like this: function myFunction(x, y = 10) { return x + y }; myFunction(5); <b>15.</b> <br>" +
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
"Function <b>arguments</b> are the <b>real values</b> <u>passed</u> to and <u>received</u> by the function. <br>" +
"JS functions have a built-in object called <b>the arguments object.</b> <br>" +
"<b>The Argument object</b> contains <b>an array of the arguments</b> used when the function was called. <br>" +
"If a function is called with too many arguments(more then declared),these arguments can be reached using the <b> arguments object.</b> " +
"<h4>Arguments are Passed by Value</h4>" +
"<b>The parameters, in a function call, are the function's arguments.</b>  myFunction(x,y,z){} <br>" +
"JS arguments are passed by <b>value:</b> The function only gets to know the values, not the argument's locations.<br>" +
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
"function myFunction(a, b){ return a*b; } myFunction(10, 2); will return 20. This function <b>does not belong to any object.</b> <br>" +
"However, in JS there is always a <b>default global object.</b>. <br>" +
"In the <b>HTML</b> the default global object is the <b>HTML page itself,</b> so the function above <b>belongs</b> to the HTML page.<br> " +
"This is the <b>Window Object.</b> It belongs to Window Object. <br>" +
"<b>#NOTE# Global variables, methods or functions can easily create name conflicts and bugs in the global object!</b> <br> " +
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
"The <b>fullName</b> is a method. The function belongs to the object. <b>myObject</b> is the owner of the function.<br>" +
"The <b>this</b> keyword is the object that 'owns' the JS code. In this case the value of <b>this</b> is <b>myObject.</b> <br>" +
"When we invoke like this: <b> fullName() { return this; } </b> <br>" +
"myObject.fullName(); the output is gonna be: <b>[object Object]</b> the owner object. <br>" +
"Invoking a Function as an <b>object method,</b> causes the value of <b>this</b> to be the object itself. <br>" +
"<h4>Invoking a Function with a Function Constructor</h4>" +
"If a function invocation is preceded with the <b>new</b> keyword, it is a constructor invocation. <br>" +
"function myFunction2 (arg1, arg2) {this.firstName = arg1; this.lastName = arg2;} <br>" +
"const myObj2 = new myFunction2('First Name', 'Last Name') <br>" +
"<b>myObj2.firstName + ', ' + myObj2.lastName</b> and the output is gonna be: <b>First Name, Last Name</b> <br>" +
"A constructor invocation creates a new object. The new object <b>inherits</b> the properties and methods from its constructor." +
"The <b>this</b> keyword in the <b>constructor</b> function does not have a <b>value.</b> <br>" +
"<hr>";

function myFunction2 (arg1, arg2) {
     this.firstName = arg1;
     this.lastName = arg2;
}

const myObj2 = new myFunction2("First Name", "Last Name")
console.log("This is for Invoking a Function as an Object Method: " + myObj2.firstName + ", " + myObj2.lastName);

let demo16 = document.getElementById("demo16");
demo16.innerHTML = 
"<h2>JS Function call()</h2>" +
"<h3>All Functions are Methods</h3>" +
"<b>If a function is not a method of a JS object, it is a function of the global object!</b> <br>" +
"<b>call()</b> is pre-defined method. It can be used to invoke a method with an owner object as an argument(parameter) <br>" +
"With <b>call()</b>, an object can use a method belonging to another object. like this: <br>" +
"const person= { <b>fullName: function() { return this.firstName + ', ' + this.lastName; }</b> } <br>" +
"const person1 = { firstName:'Tom', lastName:'Tommy' } <br>" +
"const person2 = { firstName:'John', lastName:'Johnny' } <br>" +
"<b>person.fullName.call(person1);</b> this invoking calls the <b>fullName</b> method, using it on <b>person1.</b> <br>" +
"<b>person.fullName.call(person2);</b> this invoking calls the <b>fullName</b> method, using it on <b>person2. <br>" +
"The call() method accepts arguments as like this: <br>" +
"const person = { fullName: function (city, country){ return this.firstName + ' ' + this.lastName + ', ' + city + ', ' + country ; } } <br>" +
"const person1 = { firstName:'John', lastName:'Johnny' } <br>"+
"<b>person.fullName.call(person1, 'Copenhagen', 'Denmark')</b>" +
"<h2>JS Function apply()</h2>" +
"With the <b>apply()</b> method, we can write a method that can be used on different objects. <br>" +
"The <b>apply()</b> method is similar to the <b>call()</b> method. <br>" +
"The difference is: <br>" +
"The <b>call()</b> method takes arguments <b>separately.</b> <br>" +
"The <b>apply()</b> method takes arguments as an <b>array.</b> <br>" +
"<b>person.fullName.apply(person1, ['Copenhagen', 'Denmark']);</b> <br>" +
"<h4>A good example of apply() Method</h4>" +
"";