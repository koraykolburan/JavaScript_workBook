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
"First, we need to <b>Create a Web Worker File.</b> <br>" +
"let i = 0; function timedCount() {i++; postMessage(i); setTimeout('timedCount()', 500);} timedCount() <br>" +
"This file is <b>'demo_workers.js'</b> file. <br>"+
"The important part of the code above is the <b>postMessage()</b> method - which is used to post a message back to the HTML page. <br>" +
"Now, we need to call it from an HTML page. <br> " +
"<b>if (typeof(w) == 'undefined') { w = new Worker('demo_workers.js'); }</b> <br>" +
"Then we can send and receive messages from the web worker. <br>" +
"We can add 'onmessage' event listener to the web worker <br>" +
"<b>w.onmessage</b> = function(event){ document.getElementById('result').innerHTML = event.data; };" +
"When the web worker posts a message, the code within the event listener is executed. <br>" +
"The data from the web worker is stored in <b>event.data</b>. <br>" +
"When a web worker object is created, it will continue to listen for messages until it is <b>terminated</b>. <br>" + 
"(even after the external script is finished)<br>" +
"If we set the worker variable to undefined like this: <b>w = undefined;</b> after it has been terminated, we can reuse the code. <br>" +
"<u>let w; function startWorker() {if(typeof(w) == 'undefined') {w = new Worker(/js/demo_worker.js);}</u><br>" +
"<u>w.onmessage = function(event) {document.....innerHMTL = <b>event.data</b>};}</u><br>" +
"<u>function stopWorker() {w.terminate(); w = undefined;}</u><br>";

//Get Location Browser APIs --------------------------- GEOLOCATION API
const error2 = document.getElementById("demo47");

function getLocation() {
     if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition, showError);
     } else {
          error2.innerHTML = "Geolocation is not supported by this browser.";
     }
}

function showPosition(position) {
     error2.innerHTML = "Latitude: " + position.coords.latitude +
     "<br>Longitude: " + position.coords.longitude;
     let latlon = position.coords.latitude + "," + position.coords.longitude;

     //Displaying the Result in a Map
     let img_url = "https://maps.googleapis.com/maps/api/staticmap?center="+latlon+"&zoom=14&size=400x300&sensor=false&key=YOUR_KEY";
     document.getElementById("mapholder").innerHTML = "img src='" + img_url+"'>";
}

function showError(error) {
     switch(error.code) {
          case error.PERMISSION_DENIED:
               error2.innerHTML = "User denied the request for Geolocation."
               break;
          case error.POSITION_UNAVAILABLE:
               error2.innerHTML = "Location information is unavailable."
               break;
          case error.TIMEOUT:
               error2.innerHTML = "The request to get user location timed out."
               break;
          case error.UNKNOWN_ERROR:
               error2.innerHTML = "An unknown error occured."
               break;
     }
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

//------------------------------------- Web Workers API -------------------------------------
let w;

function startWorker() {
     if(typeof(w) == "undefined") {
          w = new Worker("/js/demo_workers.js");
     }
     w.onmessage = function(event) {
          document.getElementById("result").innerHTML = event.data;
     }
} 

function stopWorker() {
     w.terminate();
     w = undefined;
}

let demo49 = document.getElementById("demo49");
demo49.innerHTML =
"Since web workers are in external files, they <b>do not have access</b> to the following JS objects: <br>" +
"1)The window object 2)The document object 3)The parent object <br>" +
"<h3>JS Fetch API</h3>" +
"The Fetch API interface allows web browser to make HTTP requests to web servers. <br>" +
"No need for <b>XMLHttpRequest</b> anymore!!!<br>" +
"<h4>A Fetch API Example</h4>" +
"The example below <b>fetches</b> a file and displays the content: <br>" +
"let file = 'fetch_info.txt'  fetch (file) .then(x => x.text()) .then(y => document....innerHTML = y); OR <br>" +
"<b>async function</b> getText(file) { let x = <b>await</b> fetch(file); let y = <b>await</b> x.text(); " +
"document....innetHTML = y;} <br>" +
"<br>";

//A FETCH API with async/await

getText("/txt/fetch_info.txt");

async function getText(file) {
     let myObject = await fetch(file);
     let myText = await myObject.text();
     document.getElementById("demo50").innerHTML = myText;
}

let demo51 = document.getElementById("demo51");
demo51.innerHTML =
"<br>" +
"The <b>getCurrentPosition()</b> Method - Return Data <br>" +
"The method returns an object on success. The latitude, longitude and accuracy properties are always returned. <br>" +
"The other properties are returned if available: <br>" +
"coords.latitude, coords.longitude, coords.accuracy, coords.altitude, coords.altitudeAccuracy, coords.heading <br>" +
"coords.speed, timestamp. <br>" +
"<h3>Geolocation Object - Other interesting Methods</h3>" +
"<b>watchPosition()</b> - Returns the current position of the user, like the GPS in a car. <br>" +
"<b>clearWatch()</b> - Stops the <b>watchPosition()</b> method.";

const locMobile = document.getElementById("demo52");

function getLocation() {
     if (navigator.geolocation) {
          navigator.geolocation.watchPosition(showPosition2);
     } else {
          locMobile.innerHTML = "Geolocation is not supported by this browser.";
     }
}

function showPosition2(position) {
     locMobile.innerHTML = "Latitude: " + position.coords.latitude +
     "<br>Longitude: " + position.coords.longitude;
}
