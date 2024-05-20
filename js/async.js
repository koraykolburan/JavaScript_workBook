let demo23 = document.getElementById("demo23");
demo23.innerHTML =
"<hr>" +
"<h2>JavaScript Callbacks</h2>" +
"<ol>" + 
"<li>A callback is a function passed as an argument to another function.</li>" +
"<li>This technique allows a function to call another function.</li>" +
"<li>A callback function can run after another function has finished!</li>" +
"</ol>" +
"<h3>Function Sequence</h3>" +
"When we define the JS functions, they are not executed. They are executed in the sequence they are called." +
"Let's define two function a)myFirst(){ myDisplayer('Hallo!') }; and b)mySecond(){ myDisplayer('Tschüss!') }; <br>" +
"If we invoked them as like this: myFirst(); mySecond(); <br>" +
"It returns: <b>Tschüss!</b> <br>" +
"However, if we invoke them as like this: mySecond(); myFirst(); <br>" +
"It returns: <b>Hallo!</b>";

//Example 1--

let demo24 = document.createElement("p");
demo24.setAttribute("id","demo24");
demo23.appendChild(demo24);   
function myDisplayer(some) {
     demo24.textContent = some;
}

function myFirst() {
     myDisplayer("Hallo!");
}

function mySecond() {
     myDisplayer("Tschüss!");
}

myFirst();
mySecond();


//Example 2--


function myCalculator( num1, num2 ) {
     let sum = num1 + num2;
     return sum;
}
myCalculator( 5, 5 );

let demo26 = document.getElementById("demo26");
demo26.innerHTML =
"<h3>Sequence Control</h3>" +
"If we want to create a <b>calculator</b>, we need to control better over function executions like <b>sequence</b> of functions! <br>" +
"function myCalculator(num1,num2) { <br>" + 
"let sum = num1 + num2; <br>" +
"return sum; <br>" +
"} <br>" + 
"The output is going to be: " + "<b>" + myCalculator(20,20) + "</b> <br>" +
"The problem with this example, is that we <b>cannot prevent</b> the calculator function from displaying the result. <br>" +
"Using a <b>callback,</b> we could call the calculator function(myCalculator) with a <b>callback(myCallback).</b> <br>" +
"And let the calculator function run the callback <b>after</b> the calculation is finished: <br>" +
"<br>" +
"let <b>myDisplayer = (sth)</b> => { <br> " +
"document.getEl....innerHTML = sth; }<br> " +
"let <b>myCalculator = (num1, num2, myCallback)</b> => { <br> " +
" let sum = num1 +  num2; <br> " +
" myCallback(sum); } <br> " +
" myCalculator(10, 10, myDisplayer); <br> " +
"In this example above, <b>myDisplayer</b> is called a <u>callback function.</u> <br>" +
"It is passed to <b>myCalculator()</b> as an <u>argument.</u>" +
"The output is gonna: <b>20</b> <br>" +
"Remember: when we pass a function as an <b>argument</b> we don't use <b>parenthesis.</b> <del>myCalculator3(10, 10, myDisplayer());</del><br>";

// Example 3 -- myCalculator with a Callback
let myDisplayer2 = (sth) => {
     document.getElementById("demo27").innerHTML = sth;
}

let myCalculator3 = (num1, num2, myCallback ) => {
     let sum = num1 + num2;
     myCallback(sum);
}
myCalculator3(10, 10, myDisplayer2);


// Example 4 -- with a Callback

const myNums = [5, 8, -10, -91, 3, 2, 1, -1];

const posNums = removeNeg(myNums, (x) => x >= 0); //Call removeNeg with a Callback

console.log("This is for Removing Negative in an Array with Callback: " + posNums);

function removeNeg (numbers, callback) {
     const myArray = [];
     for (const x of numbers) {
          if(callback(x)) {
               myArray.push(x);
          }
     }
     return myArray;
}

// Example 5 - Callback with an Asynchronous Functions

setTimeout(myFunction, 2000);

function myFunction() {
     document.getElementById("demo29").innerHTML = "Hey! It's me! setTimeout(); after 2000 milisecond:)";
}

let demo28 = document.getElementById("demo28");
demo28.innerHTML =
"<h2>Asynchronous JavaScript</h2>" +
"Functions running in <b>parallel</b> with other functions are called <b>asynchronous.</b> <br>" +
"In general, <b>callbacks</b> are most often used with <b>asynchronous functions.</b> <br>" +
"<b>myFunction</b> is used as a callback and is <b>passed to setTimeout()</b> as an <b>argument.</b>" +
"After 2 seconds, <b>myFunction()</b> will be called. <br>" +
"We can always pass a <b>whole function as an argument</b> like this: <br>"+
"setTimeout(function() { myFunction('this is an asynchronous function '); }, 2000); <br>" +
"function myFunction(value) { doc.getEl.... = value; }" +
"The complete function is passed to setTimeout() as an argument.";

let demo30 = document.getElementById("demo30");
demo30.innerHTML = 
"<h3>Using setInterval() with a Clock</h3>" +
"We use the <b>setInterval()</b> to display the time every second. <br>" +
"If we change the value of setInterval as like this: setInterval(myFunction, 3000) <br>" +
"The function of the <b>'display of the clock'</b> will be executed every 3 second. <br>" +
"Therefore, we specified as 1000 milliseconds. <br>" +
"The Clock:";

setInterval(myFunction, 1000);

function myFunction() {
     let d = new Date();
     document.getElementById("demo31").innerHTML =
     "<h1>" + 
     d.getHours() + ":" +
     d.getMinutes() + ":" +
     d.getSeconds() +
     "</h1>";
}

let demo32 = document.getElementById("demo32");
demo32.innerHTML = 
"In this clock example, we used to <b>myFunction</b> as a callback. <br>" +
"<b>myFunction</b> is passed to <b>setInterval()</b> as an argument. <br>" +
"<h2>Callback Alternatives</h2>" +
"The asynchronous programmes are difficult to write and difficult to debug. <br>" +
"Thus, most modern asynchronous JS methods <b>don't use callbacks.</b> <br>" +
"Instead of this, we can use <b>Promises</b> in JS." +
"<h2>JS Promise Object</h2>" +
"A promise contains both <b>the producing code </b> and calls the <b>consuming code:</b>" +
"<b>let myPromise</b> = new Promise(function(myResolve, myReject) { <br>" + 
"<b>'//Producing Code'</b> <br>" +
"myResolve(); // when successful <br>" +
"myReject(); // when error <br>" +
"}); <br>" +
"<b>//Consuming Code</b> (Must wait for a fulfilled Promise) <br>" +
"myPromise.then( <br>" +
" function(value) { // code if successful }, <br>" +
" function(error) { // code if some error } );" +
"<h3>Promise Object Properties</h3>" +
"A JS Promise object can be: <br>" +
"<ul>" + 
"<li>Pending</li>" +
"<li>Fulfilled</li>" +
"<li>Rejected</li>" +
"</ul>" +
"The Promise object supports two properties: <b>state</b> and <b>result.</b> <br>" +
"While a Promise object is <b>'pending'</b>(working), the result is <b>undefined.</b> <br>" +
"While a Promise object is <b>'fulfilled'</b>, the result is a <b>value.</b> <br>" +
"While a Promise object is <b>'rejected'</b>(working), the result is an <b>error object.</b> <br>" +
"";


