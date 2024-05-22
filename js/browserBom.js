let demo41 = document.getElementById("demo41");
demo41.innerHTML = 
"<hr>" +
"<h2>BOM - JS Window - The Browser Object Model</h2>" +
"BOM allows JS to 'talk to' the browser. <br>" +
"Global variables are properties and global functions are methods of the <b>window object.</b> <br>" +
"windows.document.getElementById('header'); is the same as <br>" +
"document.getElementById('header'); <br>" +
"We can search the <b>size</b> of JavaScript Window like this: <br>" + 
"<b>window.innerWidth</b> and <b>window.innerHeight</b> <br>" +
"<u>The browser window (the browser viewpoint) is NOT including <b>tollbars and scrollbars.</b></u> <br>" +
"<b>Window methods:</b> window.open(), window.close(), window.moveTo(), window.resizeTo() <br>" +
"<b>Window Screen objects</b> can be written without the window prefix, like this: <br>" +
"<b>scrren.width, screen.height, screen.availWidth, screen.availHeight, screen.colorDepth, screen.pixelDepth</b> <br>" +
"<b>screen.width</b> and the output is gonna be: 1440 <br>" +
"<b>screen.availWidth</b> means <b>available width and heigh.t</b> <br>" +
"<b>screen.availHeight</b> available height in pixels, minus interface features like the Window Taskbar. <br>" +
"<b>screen.colorDepth</b> returns the number of bits used to display one color <br>" +
"All modern computers use 24 bit or 32 bit hardware for color resolution. <br>" +
"<b>screen.pixelDepth</b> returns the pixel depth of the screen. <br>" +
"For modern computers, Color Depth and Pixel Depth are equal. <br>" +
"<b>window.location</b> window.location.href: URL, window.location.hostname: domain name, <br>" +
"window.location.pathname: file name of the current page, <br>" +
"window.location.protocol: it means http or https? <br>" +
"window.location.assign(): loads new a document.<br>" +
"window.location.port: returns internet host port of the current page. <br>" +
"<b>window.history</b>, window.history.back(), window.history.forward() <br>" +
"<b>window.navigator</b> navigator.cookieEnabled, navigator.appCodeName(<u>deprecated</u>), navigator.platform <br>" +
"navigator.appVersion, navigator.language, navigator.onLine, navigator.javaEnabled <br>" +
"<b>JS Popup Boxes</b>, window.alert('text...'); window.confirm('text...'); " +
"<b>window.prompt</b>: it is often used if you want the user to input a value before entering a page. <br>" +
"Example of <b>window.prompt</b>, please click the For Name button <br>" +
"<b>Timing Events:</b> setTimeout(function(), milliseconds), setInterval(function(), milliseconds) <br>" +
"We can <b>stop</b> the (time) execution with using <b>clearTimeout(..)</b> like this: <br>" +
"<button onclick='myVar = setTimeout(myFunction, 3000)'>Click!</button> <br> " +
"<button onclick='clearTimeout(myVar)'>Stop it!</button> <br>" +
"If we want to stop Execution of Interval, we need to use clearInterval(myVar); <br>" +
"Look at browserBom.js file for more examples.";

// Examples:
function goBack() {
     window.history.back()
}

function goForward() {
     window.history.forward()
}

console.log("The Language of the browser: " + navigator.language);
console.log("Is the browser online? " + navigator.onLine);
console.log("Are the cookies enabled? " + navigator.cookieEnabled);

function alertBox() {
     let txt;
     if (confirm('press ok or cancel and after look at console!')) {
          txt = "you pressed ok ";
     } else {
          txt = "you pressed cancel";
     }
     console.log(txt);
}

function promptBox() {
     let text;
     let person = prompt("Please enter your name:", "Name and Surname");
     if (person == null || person == "") {
          text = "User cancelled the prompt.";
     } else {
          text = "<h3>" + "Hallo " + person + "! Did you run today?"; +"</h3>"
     }
     document.getElementById("demo42").innerHTML = text;
}

//JS Clock with '0'
function startTime() {
     const today = new Date();
     let h = today.getHours();
     let m = today.getMinutes();
     let s = today.getSeconds();
     m = checkTime(m);
     s = checkTime(s);
     document.getElementById("demo43").innerHTML = h + ":" + m + ":" + s;
     setTimeout(startTime, 1000);
}

function checkTime(i) {
     if(i < 10) {
          i = "0" + i; //add zero in front of numbers < 10
     }
     return i;
}
startTime();

//JS setTimeout()
setTimeout(myTimeout1, 2000)
setTimeout(myTimeout2, 4000)
setTimeout(myTimeout3, 6000)
setTimeout(myTimeout4, 8000)
setTimeout(myTimeout5, 10000)

function myTimeout1() {
     document.getElementById("demo44").innerHTML = "2 seconds passed.";
}

function myTimeout2() {
     document.getElementById("demo44").innerHTML = "4 seconds passed.";
}

function myTimeout3() {
     document.getElementById("demo44").innerHTML = "6 seconds passed.";
}

function myTimeout4() {
     document.getElementById("demo44").innerHTML = "8 seconds passed.";
}

function myTimeout5() {
     document.getElementById("demo44").innerHTML = "Time is passing dude! Work hard!";
}

let demo45 = document.getElementById("demo45");
demo45.innerHTML = 
"<hr>" +
"<h2>JS Cookies</h2>" +
"<h3>Cookies let us STORE USER INFORMATION in web pages.</h3>" +
"Cookies are small text data files, on our computer. <br>" +
"Cookies were invented for this: <b>'how to remember information about the user'</b>. <br>" +
"1) When users visit a web page, their names <b>can be stored in a cookie.</b><br>" +
"2) When users visit the same page after a while, <b>the cookie remembers their names.</b><br>" +
"<ul>" + 
"<li>Cookies are saved in name-value pairs like: <b>username = firstName lastName</b></li><br>" +
"<li>A browser requests a web page from a server, <b>cookies</b> are added to the request too.</li><br>" +
"<li>'document.cookie = 'username= Tommy H.'</li><br>" +
"<li>'document.cookie = 'username= Tommy H.; expires=Tue, 31 Dec 2024 12:00:00 UTC'; path=/..'</li><br>" +
"<li>'let x = document.cookie;' will return all cookies in one string much like: cookie1:value; cookie2:value;'</li><br>" +
"<li>" + "When we want to <b>delete</b> our cookies, we need to add <b>expires parameter to a past date:</b> " +
"'document.cookie = 'username= Tommy H.; expires=Thu, 01 Jan 1970 00:00:00 UTC'; path=/..'" + "</li> <br>" +
"</ul>" +
"<h3>JS Cookie Example</h3>" +
"<ol>" + 
"<li>A function to <b>set</b> a cookie value</li>" +
"<li>A function to <b>get</b> a cookie value</li>" +
"<li>A function to <b>check</b> a cookie value</li>" +
"</ol>" +
"For more example, please Look at the /browserBom.js file.";

//JS Cookie Example

//A function to SET a Cookie
function setCookie(cname, cvalue, exdays) {
     const d = new Date();
     d.setTime(d.getTime() + (exdays*24*60*60*1000));
     let expires = "expires" + d.toUTCString();
     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//A function to GET a Cookie
function getCookie(cname) {
     let name = cname + "="; //Created a variable with the text to search for
     let decodedCookie = decodeURIComponent(document.cookie); //for this encoded URI
     let ca = decodedCookie.split(';');
     for(let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
               c = c.substring(1);
          }
          if (c.indexOf (name) == 0) {
               return c.substring(name.length, c.length);
          }
     }
     return "";
}

//A function to GET a Cookie
function checkCookie() {
     let username = getCookie("username");
     if (username != "") {
          alert("Welcome again " + username);
     } else {
          username = prompt("Please enter your name:", "");
          if (username != "" && username != null) {
               setCookie("username", username, 365);
          }
     }
}

//checkCookie();