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

console.log(posNums);

function removeNeg (numbers, callback) {
     const myArray = [];
     for (const x of numbers) {
          if(callback(x)) {
               myArray.push(x);
          }
     }
     return myArray;
}