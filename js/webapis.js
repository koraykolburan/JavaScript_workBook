let demo46 = document.getElementById("demo46");
demo46.innerHTML =
"<hr>" +
"<h2>Web APIs</h2>" +
"<b>API</b> is <b>A</b>pplication <b>P</b>rogrammin <b>I</b>nterface. <br>" +
"<ol>" + 
"<li><b>A Web API</b> is an application programming interface for the Web.</li>" +
"<li><b>A Browser API</b> can extend the functionality of a web browser.</li>" +
"<li><b>A Server API</b> can extend the functionality of a web server.</li>" +
"</ol>" +
"All browsers have a set of built-in Web APIs. <br>" +
"For example: Some APIs can return the coordinates of where the browser <b>is located</b><br>" +
"All browsers have a set of built-in Web APIs. <br>" +
"<h3>Third Party APIs</h3>" +
"<b>Third Part APIs are not built-in our Browser.</b> <br>" +
"There are Third-Party APIs, YouTube API, X API, Facebook API <br>" +
"<h3>Web Forms API</h3>" +
"<b>checkValidity()</b> returns true if an input element contains valid data. <br>" +
"<b>setCustomValidity()</b> Sets the validationMessage property of an input element. <br>" +
"validity, validationMessagei willValidate, rangeOverflow(input's max attribute: 100) <br>" +
"rangeUnderflow(input's min attribute: 100), <br>" +
"<h3>Web History API</h3>" +
"It provides easy methods to access the window.history object <br>" +
"The <b>window.history object</b> contains the <b>URL</b>s (Web Sites) visited by the user. <br>" +
"We've seen already the <b>history.back()</b> method. <br>" +
"If we use <b>window.history.go()</b> as like this: function myFunction() {window.history.go(-3)} <br>" +
"It goes back 2 Pages. <br>" +
"History Object Property is <b>length</b>, History Object Methods are: <b>back(), forward(), go().</b><br>" +
"<h3>Web Storage API</h3>" +
"It is a simple syntax for <b>storing and retrieving data in the browser</b> <br>" +
"<b>localStorage.setItem('name', 'Tommy H.')</b><br>" +
"<b>localStorage.getItem('name', 'Tommy H.')</b><br>" +
"<b>sessionStorage.getItem('name', 'Tommy H.')</b> When the browser is closed, the data is <b>deleted.</b><br>" +
"<h3>Web Workers API</h3>" +
""

//Get Location Browser APIs
const loc = document.getElementById(demo47);

function getLocation() {
     try {
          navigator.geolocation.getCurrentPosition(showPosition);
     } catch {
          loc.innerHTML = err;
     }
}

function showPosition(position) {
     loc.innerHTML = "Latitude: " + position.coords.latitude +
     "<br>Longitude: " + position.coords.longitude;
}

//JS Validation
function validFunc() {
     const inpObj = document.getElementById("id1");
     if (!inpObj.checkValidity()) {
          document.getElementById("demo48").innerHTML = inpObj.validationMessage;
     } else {
          document.getElementById("demo48").innerHTML = "You can registrate for Driving Licence.";
     }
}

//Web Storage API
localStorage.setItem("name", "Tommy H.");
console.log("An example of Web Storage API: " + localStorage.getItem("name"));

//Web Worker API
let w;

function startWorker() {
     if(typeof(w) == undefined) {
          w = new Worker("/demo_workers.js");
     }
     w.onmessage = function(event) {
          document.getElementById("result").innerHTML = event.data;
     }
} 

function stopWorker() {
     w.terminate();
     w = undefined;
}
