blet demo41 = document.getElementById("demo41");
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
""

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