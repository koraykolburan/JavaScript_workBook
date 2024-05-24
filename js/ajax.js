let demo52 = document.getElementById("demo52");
demo52.innerHTML = 
"<h2>JS AJAX</h2>" +
"<ul>" +
"<li>Read data from a web-server - after page has loaded.</li>" +
"<li>Update a web page without reloading the page.</li>" +
"<li>Send data to a web server - in the background.</li>" +
"<li>Ajax allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. <br> This means that is possible to update parts of a web page, <b>without reloading</b> the whole page.</li>" +
"<li>A browser built-in XMLHttpRequest object(to request data from a web server).</li>" +
"</ul>" +
"<ol>" + 
"<li>An event occurs in a web page(the page is loaded, a button is clicked)</li>" +
"<li>An XMLHttpRequest object is created by JS.</li>" +
"<li>The XMLHttpRequest object sends a request to a web server.</li>" +
"<li>The server processes the request.</li>" +
"<li>The server sends a response back to the web page.</li>" +
"<li>The response is read by JS.</li>" +
"<li>Proper action(like page update) is performed by JS.</li>" +
"</ol>" +
"<b>Modern Browser can use Fetch API instead of the XMLHttpRequest Object.</b> <br>" +
"The Fetch API interface allows web browser to make HTTP requests to web servers. <br>" +
"If we use XMLHttpRequest Object, Fetch can do the same in a simpler way." +
"<h3>XMLHttpRequest Object METHODS:</h3>" +
"abort(): cancels the current request. getAllResponseHeaders(), getResponseHeader() <br> " +
"open(method, url, async, user, psw), user: optional user name, psw: optional user password. <br>" +
"send(), send(string), setRequestHeader()" +
"<h3>XMLHttpRequest Object PROPERTIES:</h3>" +
"onload, onreadystatechange, readystate, responseText, responseXML, <br>" +
"status: 200:'OK', 403:'Forbidden', 404:'Not Found' (Http Messages Reference)<br>" +
"Or we can use: statusText: returns (e.g 'OK' or 'Not Found')";


//The XMLHttp Request Object
function loadDoc() {
     const xhttp = new XMLHttpRequest();
     xhttp.onload = function() {
          document.getElementById("demo53").innerHTML = 
          this.responseText;
     }
     xhttp.open('GET', "/txt/ajax_info.txt");
     xhttp.send();
}

//Request the file /xml/artists_catalog.xml and PARSE the response
const xhttp2 = new XMLHttpRequest();
xhttp2.onload = function () {
     const xmlDoc = this.responseXML;
     const artists = xmlDoc.getElementsByTagName("ARTIST");
     let txt = "";
     for (let i = 0; i < artists.length; i++) {
          txt = txt + artists[i].childNodes[0].nodeValue + "<br>";
     }
     document.getElementById("demo55").innerHTML = txt;
}
xhttp2.open('GET', "/xml/artists_catalog.xml");
xhttp2.send();

let demo54 = document.getElementById("demo54");
demo54.innerHTML = 
"If we have more than one AJAX task in a website, we should create one function for executing the <b>XMLHttpRequest Object</b>, and one <b>callback function</b> for each AJAX task. <br>" +
"The <b>readyState</b> property holds the status of the XMLHttpRequest. <br>" +
"0: Request not initialized. 1: Server connection established 2: Request received 3: Processing request 4: Request finished and response is ready <br>" +
"<b>onreadystatechange</b>: Defines a function to be called when the <b>readyState</b> changes. <br>" +
"<h3>AJAX Request</h3>" +
"The XMLHttpRequest object is used to to request data from a server. <br>" +
"Server requests should be sent asynchronously. <b>xhttp.open('GET', 'ajax_test.asp', true)</b> <br>" +
"The default value for the async parameter is <b>async = true.</b> Thus, we can safely delete third parameter.<br>"+
"Synchronous XMLHttpRequest (<b>async = false</b>) is not recommended because the JS will stop executing until the response is ready. <br>" +
"If the server is busy or slow, the application will hang or stop. <br>" +
"<b>GET</b> simpler and faster than <b>POST</b> and can be used in many cases. <br>" +
"We need to use always the <b>POST</b> In these circumstances <br>" +
"1) Update a file or database on the server.<br>" +
"2) Sending a large amount of data to the server (<b>POST</b> has no size limitations)<br>" +
"3) Sending user input(which can contain unknown characters), POST is more <b>robust and secure</b> than GET.<br>" +
"If we want to send information with the <b>GET</b> method, we need to add the informaiton to the URL: <br>" +
"xhttp.open('GET', '/txt/ajax_info.txt?fname=Tommy&lname=Hilf.')" +
"<b>setRequestHeader()</b> Specify th data we want to send in the <b>send()</b> method: <br>" +
"xhttp.open('POST', 'demo_post2.asp'); xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); <br>" +
"xhttp.send('fname=Tommy&lname=Hilf'); <br>" +
"<h3>AJAX - Server Response</h3>" +
"<b>responseText:</b> get the response data as string <br>" +
"<b>responseXMl:</b> get the response data as XML data(XMl DOM Object) <br>" +
"document.geteleme....innerHTML = this.responseText <br><br>" +
"This Artists returns from /xml/artists_catalog.xml with XMLHttpRequest. <br>" + " It has as <b>in-built parser.</b> <br>" +
"<br>";

function loadDoc2() {
     const xhttp3 = new XMLHttpRequest();
     xhttp3.onload = function() {
          myFunctionXML(this);
     }
     xhttp3.open('GET', "/xml/artists_catalog.xml");
     xhttp3.send()
}

function myFunctionXML(xml) {
     const xmlDoc = xml.responseXML;
     const x = xmlDoc.getElementsByTagName("CD");
     let table = "<tr><th>Artist</th><th>Title</th><th>Country</th><th>Company</th><th>Price</th><th>Year</th></tr>";
     for (let i = 0; i < x.length; i++) {
          table += "<tr><td>" + 
          x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("COUNTRY")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
          "</td><td>" +
          x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue +
          "</td></tr>";
     }
     document.getElementById("demo57").innerHTML = table;
}

let demo56 = document.getElementById("demo56");
demo56.innerHTML =
"<b>getResponseHeader():</b> returns specific header information from the server resource. <br>" +
"<b>getAllResponseHeaders():</b> returns all the headers information from the server resource. <br>" +
"AJAX XML file can be used for interactive communication.<br>" +
" <br>";

let demo58 = document.getElementById("demo58");
demo58.innerHTML =
"<hr>" +
"<h3>AJAX PHP Example</h3>" +
"How a web page can communicate with a web server while a user <b>types characters</b> in an input field. <br>" +
"This example uses <b>onkeyup</b> event for suggestions. <br>" +
"We can do this with <b>ASP</b> too. It is basically a web-based framework that helps programmers to build dynamic web pages. <br>" +
"<b>ASP</b>: Active Server Page. It is XML based. <br>";

function showHint(str) {
     if (str.length == 0) {
          document.getElementById("txtHint").innerHTML = "";
          return;
     }
     const xhttp4 = new XMLHttpRequest();
     xhttp4.onload = function() {
          document.getElementById("txtHint").innerHTML = this.responseText;
     }
     xhttp4.open("GET", "/php/get_hint.php?q="+str);
     xhttp4.send();
}

//Example of Communicative Server AJAX and PHP
function showCustomer(str) {
     if (str == "") {
          document.getElementById("txtHint2").innerHTML = "";
          return;
     }
     const xhttp5 = new XMLHttpRequest();
     xhttp5.onload = function () {
          document.getElementById("txtHint2").innerHTML = this.responseText;
     }
     xhttp5.open("GET", "/php/getcustomer.php?q="+str);
     xhttp5.send();
}

let demo59 = document.getElementById("demo59");
demo59.innerHTML =
"<h3>AJAX Database Example</h3>" +
"AJAX can be used for interactive communication with a database. <br>" +
"<h3>XML Applications</h3>";


//XML APP. with Next() and Previous() buttons
let i = 0;
let len;
let cd;

const xhttp7 = new XMLHttpRequest();
xhttp7.onload = function() {
     const xmlDoc = xhttp7.responseXML;
     cd = xmlDoc.getElementsByTagName("CD");
     len = cd.length;
     displayCD(i);
}
xhttp7.open("GET", "/xml/artists_catalog.xml");
xhttp7.send();

function displayCD(i) {
     document.getElementById("showCD").innerHTML =
     "Artist: " +
     cd[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
     "<br>Title: " +
     cd[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
     "<br>Year: " + 
     cd[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
   }

function next() {
     if (i < len-1) {
          i++;
          displayCD(i);
     }
}

function previous() {
     if (i > 0) {
          i--;
          displayCD(i);
     }
}

//Show Album infos when Clicking on a Artist or Title

const xhttp8 = new XMLHttpRequest();
xhttp8.onload  = function () {
     const xmlDoc = xhttp8.responseXML;
     cd = xmlDoc.getElementsByTagName("CD");
     loadCD2();
}
xhttp8.open("GET", "/xml/artists_catalog.xml");
xhttp8.send();

function loadCD2() {
     let table = "<tr><th>Artist</th><th>Title</th></tr>";
     for (let s = 0; s < cd.length; s++) {
          table += "<tr onclick='displayCD2(" + s + ")'><td>";
          table += cd[s].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
          table += "</td><td>";
          table += cd[s].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue;
          table += "</td></tr>";
     }
     document.getElementById("demo60").innerHTML = table;
}

function displayCD2(s) {
     document.getElementById("showCD2").innerHTML = 
     "<b>Artist: </b>" +
     cd[s].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
     "<br><b>Title: </b>" +
     cd[s].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
     "<br><b>Year: </b>" +
     cd[s].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue;
}

let demo61 = document.getElementById("demo61");
demo61.innerHTML =
"<br>" + "<hr>" +
"<h2>Why JSON is Better Than XML?</h2>" +
"<h3>XML is much more difficult to parse than JSON.</h3>" +
"<h3>JSON is parsed into a ready-to-use JS object.</h3>" +
"<h3>For AJAX Application, JSON is faster and eaiser than XML.</h3>" +
"<h3>Using XML:</h3>" +
"1) Fetch an XML document, 2) Use the XML DOM to loop through the document, 3) Extract values and store in variables. <br>" +
"<h3>Using JSON:</h3>" +
"1) Fetch a JSON string, 2) JSON.Parse the JSON string. <br>" + "<br>" +
"Please look at console for examples of these: <br>" +
"<ul>" + 
"<li>JSON Parse()</li>" +
"<li>JSON Stringify(): the result will be a string following the JSON notation</li>" +
"</ul>";


//JSON Examples
const obj2 = JSON.parse('{"name":"Tommy", "lastName":"Hilf.", "age":65, "city":"New York"}');
console.log("This is JSON.parse(..) on object! " + obj2.name + " " + obj2.lastName + " " + obj2.age + " " + obj2.city);

const arr2 = JSON.parse('[ "name", "John", "age", 30, "city", "New York" ]');
console.log("This is JSON.parse(..) on array! " + arr2[0] + arr2[1] + arr2[3] + arr2[4] + arr2[5]);

const obj3 = {"name":"Tommy", "lastName":"Hilf.", "age":65, "city":"New York"};
const myJSONobj = JSON.stringify(obj3);
console.log("myJSONobj is ready to be sent to a server: " + myJSONobj);

const myJSONobj2 = '{"name":"Tommy", "lastName":"Hilf.", "age":65, "city":"New York"}';
const myObj3 = JSON.parse(myJSONobj2);
let txt2 = "";
for (const x in myObj3) {
     txt2 += myObj3[x] + ", ";
}
console.log("This is for/in loop for: " + txt2)

//JSON XMLHttpRequest to get data from the server
const xmlhttp99 = new XMLHttpRequest();
xmlhttp99.onload = function () {
     const myObjforjson = JSON.parse(this.responseText);
     console.log(
          myObjforjson.name + " " + myObjforjson.age + " " + myObjforjson.pets[0].animal1 + " name is " + myObjforjson.pets[0].name + " and other pet is " + myObjforjson.pets[1].animal2 + " its name is " + myObjforjson.pets[1].name + " and the last pet is " + myObjforjson.pets[2].animal3 + " its name is " + myObjforjson.pets[2].name + "."
     );
};
xmlhttp99.open("GET", "/txt/json_info.txt"); 
xmlhttp99.send();