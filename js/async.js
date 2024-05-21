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
" &nbsp &nbsp &nbsp let sum = num1 + num2; <br>" +
" &nbsp &nbsp &nbsp return sum; <br>" +
"} <br>" + 
"The output is going to be: " + "<b>" + myCalculator(20,20) + "</b> <br>" +
"The problem with this example, is that we <b>cannot prevent</b> the calculator function from displaying the result. <br>" +
"Using a <b>callback,</b> we could call the calculator function(myCalculator) with a <b>callback(myCallback).</b> <br>" +
"And let the calculator function run the callback <b>after</b> the calculation is finished: <br>" +
"<br>" +
"let <b>myDisplayer = (sth)</b> => { <br> " +
" &nbsp &nbsp &nbsp document.getEl....innerHTML = sth; }<br> " +
"let <b>myCalculator = (num1, num2, myCallback)</b> => { <br> " +
" &nbsp &nbsp &nbsp let sum = num1 +  num2; <br> " +
" &nbsp &nbsp &nbsp myCallback(sum); } <br> " +
" myCalculator(10, 10, myDisplayer); <br> " + 
"<br>" +
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
"<li>'Pending' = undefined.</li>" +
"<li>'Fulfilled' = a result value.</li>" +
"<li>'Rejected' = an error object.</li>" +
"</ul>" +
"The Promise object supports two properties: <u><b>state</b> and <b>result.</b></u> <br>" +
"While a Promise object is <b>'pending'</b>(working), the result is <b>undefined.</b> <br>" +
"While a Promise object is <b>'fulfilled'</b>, the result is a <b>value.</b> <br>" +
"While a Promise object is <b>'rejected'</b>, the result is an <b>error object.</b> <br>" +
"We cannot access the Promise properties <b>state</b> and <b>result.</b> <br>"+
"We must use a Promise method to handle promises. <br>" +
"Here is how to use a <b>Promise:</b> <br> " + 
"myPromise<b>.then</b>( <br> " +
" &nbsp &nbsp &nbsp function(value) { /* code if successful */ }, <br>" +
" &nbsp &nbsp &nbsp function(error) { /* code if some error */ } <br>" +
"); <br>" +
"<br>" +
"<b>Promise.then()</b> takes two arguments(for success and for failure) <br> " +
"These are optional, we can add a callback for success or failure only. <br>" +
"<u>Here it is another Example:</u> <br>" +
"<br>" +
"function myDisplayer(sth) { <br>" +
" &nbsp &nbsp &nbsp document..... = sth; <br>" +
"} <br>" +
"let myPromise = new Promise( function( myResolve, myReject ) { <br>" + 
" &nbsp &nbsp &nbsp let x = 0; <br>" +
" &nbsp &nbsp &nbsp if (x == 0) { <br>" +
" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp myResolve('This is True!! It means: SUCCESS!'); <br>" +
" &nbsp &nbsp &nbsp } &nbsp else { <br>" +
" &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp myReject('This is False!! It means: ERROR!')<br>" +
" &nbsp &nbsp &nbsp } <br>" +
" }); <br>" +
"<br>" +
"<b>myPromise.then(</b> <br>" +
" &nbsp &nbsp &nbsp function(value) {myDisplayer(value);}<br>" +
" &nbsp &nbsp &nbsp function(error) {myDisplayer(error);}<br>" +
"); <br>" +
"The output is gonna be change, If we change the value of <b>x</b> like this: <br>" +
"let x = 0; <b>This is True!! It means: SUCCESS!</b> <br>" +
"let x = 1; (or whatever is different then 0) <b>This is False!! It means: ERROR!</b> <br>";


//Examples of JS Promise
function myDisplayer3 (sth) {
     document.getElementById("demo33").innerHTML =
     "<u>" + 
     "This is the real output of the example above: " +
     "<b>" + sth +"</b>" +
     "</u>";
}

let myPromise = new Promise(function(myResolve, myReject) {
     // let x = 0;
     let x = 1;

     if (x == 0) {
          myResolve("This is True!! It means: SUCCESS!");
     } else {
          myReject("This is False!! It means: ERROR!");
     }
})

myPromise.then(
     function(value) { myDisplayer3(value); },
     function(error) { myDisplayer3(error); }
);

//Another Example of using Promise
let myPromise2 = new Promise(function(myResolve, myReject) {
     setTimeout(function() { myResolve("1 2 3... Here it is after 3 seconds!"); }, 3000);
})

myPromise2.then(
     function(value) { 
          console.log(value);
     }
);

// ------------------------ WAITING FOR A FILE Example using CALLBACK ------------------------

function myDisplayer4(sth) {
     document.getElementById("demo34").innerHTML =
     "<br>" +
     "<h3>Waiting For A File Example using CALLBACK:</h3>" +
     "This is an ERROR! Because there is no page named '/road_cycling' " +
     "<b>" + sth + "</b> <br>" +
     "Please Look at the js.245 line for this example.";
}

function getFile(myCallback) {
     let req = new XMLHttpRequest();
     req.onload = function() {
          if(req.status === 200) {
               myCallback(this.responseText);
          } else {
               myCallback("Error: " + req.status);
          }
     }
     req.open('GET', "/road_cycling");
     req.send();
}

getFile(myDisplayer4);

// ------------------------ WAITING FOR A FILE Example using PROMISE ------------------------

function myDisplayer5(sth) {
     document.getElementById("demo35").innerHTML = 
     "<h3>Waiting For A File Example using PROMISE:</h3>" +
     sth;
}

let myPromise3 = new Promise(function(myResolve, myReject) {
     let req = new XMLHttpRequest();
     req.open('GET', "road_cycling2");
     req.onload = function() {
          if (req.status == 200) {
               myResolve(req.response);
          } else {
               myReject("File not Found. Because there is no page named '/road_cycling2'" + " : " + req.status);
          }
     };
     req.send();
});

myPromise3.then (
     function(value) { myDisplayer5(value) },
     function(error) { myDisplayer5(error) }
);

// -- JS ASYNC --
let demo36 = document.getElementById("demo36");
demo36.innerHTML = 
"<h2>JS ASYNC</h2>" +
"<b>async</b> makes a function <b>return</b> a Promise.<br>" +
"<b>await</b> makes a function <b>wait</b> for a Promise.<br>" +
"<b>async</b> function myFunction() { <b>return</b> 'Hallo';} <br>" +
"<u>is the same as:</u> <br>" +
"function myFunction() { return <b>Promise.resolve</b>('Hallo'); } <br>" +
"We can use with Promise, like this: <br>" +
"function myDisplayer(sth) { doc.get... = sth; } <br>" +
"<b>async</b> function myFunction() { <b>return</b> 'Hallo';} <br>" +
"myFunction<b>.then</b>( <br> " +
" &nbsp &nbsp &nbsp function(value) {myDisplayer(value);} <br>" +
");<br> " +
"<h3>await</h3>" +
"The <b>await</b> keyword can only be used inside an <b>async</b> function. <br>" +
"The <b>await</b> keyword makes the function <b>pause</b> the execution and wait for a resolved promise before it continues: <br>" +
"<br>" +
"<b>async</b> function myDisplay() { <br>"+
" &nbsp &nbsp &nbsp let myPromise = new Promise(function(<b>resolve, reject</b>) { <br>" + 
"&nbsp &nbsp &nbsp&nbsp &nbsp &nbsp resolve('This is an async/await function!');" +
"&nbsp &nbsp &nbsp }); <br>"+
" documen.....innerHTML = <b>await</b> myPromise<br>" +
"} <br>" +
"myDisplay();"


//Example of async / await

async function myDisplay() {
     let myPromise4 = new Promise(function(resolve, reject) {
          resolve("<h2>'This is an <u>async/await</u> function!'</h2>");
     });
     document.getElementById("demo37").innerHTML = await myPromise4;
}
myDisplay();

// async/await Waiting for a Timeout

async function myDisplay2() {
     let myPromise5 = new Promise(function(resolve) {
          setTimeout(function() { resolve("Output 1: async/await Waiting for a Timeout.(setTimeout())"); }, 3000);
     });
     document.getElementById("demo39").innerHTML = await myPromise5;
}
myDisplay2();

// async/await Waiting for a File

async function getFile() {
     let mypromise6 = new Promise(function(resolve){
          let req = new XMLHttpRequest();
          req.open('GET', "my_fav_road_bikes.html");
          req.onload = function() {
               if (req.status == 200) {
                    resolve(req.response);
               } else {
                    resolve("File not found!");
               }
          };
          req.send();
     });
     document.getElementById("demo40").innerHTML = 
     "Output 2: async/await Waiting for a File. " +
     await mypromise6;
}
getFile();


let demo38 = document.getElementById("demo38");
demo38.innerHTML =
"There are <b>two arguments</b> are pre-defined by JS. <br>" + 
"We will <b>not create(resolve and reject)</b> them. <br> " + 
"However we will call one of them when the executor function is ready.<br>" +
"Very often we will <b>not need a reject function.</b> <br>" +
"<b>Example without reject:</b> <br>" +
"<b>async</b> function myDisplay() { <br>" +
" let myPromise = new Promise(function(resolve) { <b>resolve</b>('Notes in here..') }); <br>" +
"document.getElement....innerHTML = <b>await</b> myPromise;" +
" } <br>" +
"For <b>async/await Waiting for a Timeout</b> and <b>async/await Waiting for a File</b> examples please look at JS line 323.";