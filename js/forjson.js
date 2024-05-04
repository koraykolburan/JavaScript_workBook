//This is for JSON

//Creating a Js Object from a JSON String
const txt = '{"file1":"Public Regulation on Economy", "file2":"Labour Market", "file3":"Estate Market"}'
const obj = JSON.parse(txt);

document.getElementById("demo44").innerHTML =
"<h2 id='JSON'>This is for JSON:</h2> Kindly reminder:(please go to the '/js/forjson.js') <br>" +
"<h3>Creating a Js Object from a JSON String:</h3>" +
"We used <b>JSON.parse()</b> as like this: <b>const obj = JSON.parse(txt);</b> <br>" +
obj.file1 + " and " + obj.file2 + " is connected with " + obj.file3 + " too, in the end of day.";

//Creating a Js Array from a JSON Array
const txt2 =  '[ "Cannondale", "Tarmac", "Liv Langma" ]';
const jsonArr = JSON.parse(txt2);

document.getElementById("demo45").innerHTML = 
"<h3>Creating a Js Array from a JSON Array:</h3>" +
"We used <b>JSON.parse()</b> as like this: <b>const jsonArr = JSON.parse(txt2);</b> <br>" +
"My favourite road bikes are " + jsonArr[0] + " and " + jsonArr[1] + ". My wife's opinion is " + jsonArr[2] + ".";

//Date objects are not allowed in JSON. However we can use writing as a string - Converting a string into a date:

const txt3 = '{"outdoorConcert":"2024-08-30", "indoorConcert":"2024-11-15"}';
const obj2 = JSON.parse(txt3);
obj2.outdoorConcert = new Date(obj2.outdoorConcert);
obj2.indoorConcert = new Date(obj2.indoorConcert);

document.getElementById("demo46").innerHTML = 
"<h3>This is for parsing Dates</h3>" +
"We are going to go to EU this summer at " + obj2.outdoorConcert + " after that we are going to prepare for indoor Concert at " + obj2.indoorConcert + ".";

/*
Parsing Functions - We should avoid using function in JSON. The Functions will lose their scope and we would have to use eval() to CONVERT them back into functions.
*/

//When we sending data to a Web Server, the data has to be A STRING. Convert a Js Object into a JSON String 

//Stringify a Js Object
const bikesColl = {bike1:"Road", bike2:"Mountain Bike", bike3:"Trail Riding"};
const myJSON = JSON.stringify(bikesColl);

document.getElementById("demo47").innerHTML =
"<h3>JSON.stringify( objName )</h3>" +
"When we sending data to a Web Server, the data has to be A STRING. <br>" +
"Convert a Js Object into a JSON String! <br>" +
"from this Js Object: <b>const bikesColl = {bike1:'Road', bike2:'Mountain Bike', bike3:'Trail Riding'};</b> <br>" +
"to this JSON String: <br>" +
myJSON;

//Stringify a Js Array
const jsonArr2 = ["name1", "name2", "name3"];
const myJSON2 = JSON.stringify(jsonArr2);

document.getElementById("demo48").innerHTML =
"<h3>JSON.stringify( arrayName )</h3>" +
"When we sending data to a Web Server, the data has to be A STRING. <br>" +
"Convert a Js Array into a JSON String! <br>" +
"from this Js Array: <b>const jsonArr2 = ['name1', 'name2', 'name3'];</b> <br>" +
"to this JSON String: <br>" +
myJSON2;

//Store and Retrieve data from LOCAL STORAGE

//Storing Data:
const bikesColl2 = {bike1:"Road", bike2:"Mountain Bike", bike3:"Trail Riding"};
const myJSON3 = JSON.stringify(bikesColl2);
localStorage.setItem("testJSON", myJSON3);
document.getElementById("demo49").innerHTML =
"<h3>Storing Data to Local Storage: JSON.stringify()</h3> " +
"Kindly reminder:(please go to the '/js/forjson.js') <br>" +
myJSON3;

//Retrieving Data:
let txt4 = localStorage.getItem("testJSON");
let obj3 = JSON.parse(txt4);
document.getElementById("demo50").innerHTML =
"<h3>Retrieving Data from Local Storage: JSON.parse()</h3>" +
"Kindly reminder:(please go to the '/js/forjson.js') <br>" +
"I'm going to ride " + obj3.bike2 + " on Hill at this weekend.";

//Stringify Dates - JSON.stringify() function will convert any dates into strings
const concerts = {outdoorConcert:"2024-08-30", indoorConcert: new Date()};
const myJSON4 = JSON.stringify(concerts);
console.log( "This is for convert any dates into strings: " + myJSON4 );

//Stringify Functions - JSON.stringify() function will remove any functions from a Js objecty(key and value)
const bikesColl3 = {bike1:"Road", bike2: function () { return "Mountain Riding"}, bike3:"Trail Riding"};
const myJSON5 = JSON.stringify(bikesColl3);
console.log( "This is for delete any functions in a Js object: " + myJSON5 );

//This is a JSON Object Literal
//{"name":"name1", "age":30, "city":null} JSON Object Literal are surrounded by curly braces {}.
//JSON cannot be an OBJECT. JSON is a String Format!!!
//We can create a Js Object by parsing a JSON String:
const myJSON6 = '{"name":"John", "age":30, "city":null}';
const myObj = JSON.parse(myJSON6);
console.log("This is how we can create a Js Object by PARSING a JSON String!: " + myObj.name + " " + myObj.age + " " + myObj.city);

//Looping an Object - with for/in loop
const myJSON7 = '{"bike1":"Road", "bike2":"Mountain Bike", "bike3":"Trail Riding"}';
const myObj2 = JSON.parse(myJSON7);

let txt5 = "";
for(const x in myObj2){
     txt5 += x + ", "; //for property
}

let txt6 = "";
for(const x in myObj2){
     txt6 += myObj2[x] + ", "; //for property values
}
document.getElementById("demo51").innerHTML = "<b>This is looping through the Object:</b> <br>" +
"After JSON.parse(object), we can use the for/in loop like this:<br>" +
"My bikes are like that: " + txt5 + "<br>" +
"If we want to <b>access property values</b>, <br>" +
"we need to use <b>myObj2[x]</b> inside of the <b>for/in loops.</b> <br>" +
"And the output is going to be like that: " + txt6;

//Looping an Array - with for/in and for loops
const myJSON8 = '{"bike1":"Road", "bike2":"Mountain Bike", "bike3":"Trail Riding", "countries": [ "Italy", "The U.K.", "Germany"  ]}';
const myObj3 = JSON.parse(myJSON8);

let txt7 = "";
for(const x in myObj3.countries){
     txt7 += myObj3.countries[x] + ", ";
}
document.getElementById("demo52").innerHTML =
"<b>This is looping through the Array:</b> <br>" +
"We need to access countries array that's why we need to use <b>myObj3.countries[x]</b> inside of the <b>for/in loops.</b> <br>" +
"I rode my bikes in these three countries: " + txt7;
// we can do this with using for loop
let txt8 = "";
for(let i = 0; i < myObj3.countries.length; i++){
     txt8 += myObj3.countries[i] +  ", ";
}
console.log("This is for after parsing an JSON.parse(), looping through a Js Array: " + txt8);

//Convert a Js object into a JSON string and send it to the SERVER!
/*
const myObj4 = {"bike1":"Road", "bike2":"Mountain Bike", "bike3":"Trail Riding"};
const myJSON9 = JSON.stringify(myObj4);
window.location = "demo_json.php?x=" + myJSON9;

*/

//Receiving Data from a SERVER - Fetch a JSON file with XMLHttpRequest
const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
     const myObj4 = JSON.parse(this.responseText);
     let txt9 = "";
     for(const x in myObj4.top10RoadBikes){
          txt9 += myObj4.top10RoadBikes.brand[x] + ", ";
     }
     document.getElementById("demo53").innerHTML = txt9;
}
xmlhttp.open("GET", "json/bikes.json");
xmlhttp.send();