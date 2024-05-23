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
"<br>"