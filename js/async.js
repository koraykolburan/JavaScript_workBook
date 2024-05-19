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
"It returns: <b>Hallo!</b>" +
"<h3>Sequence Control</h3>" +
""

//Examples --

function myDisplayer(some) {
     document.getElementById("demo24").innerHTML = some;
}

function myFirst() {
     myDisplayer("Hallo!");
}

function mySecond() {
     myDisplayer("Tschüss!");
}

myFirst();
mySecond();