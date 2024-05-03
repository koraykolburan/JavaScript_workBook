//This is for JSON

//Creating a Js Object from a JSON String
const txt = '{"file1":"Public Regulation on Economy", "file2":"Labour Market", "file3":"Estate Market"}'
const obj = JSON.parse(txt);

document.getElementById("demo44").innerHTML =
"<h2>This is for JSON:</h2> Kindly reminder:(please go to the '/js/forjson.js') <br>" +
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

//Store and Retrieve data from local storage

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

//Looping an Object
const myJSON7 = '{"bike1":"Road", "bike2":"Mountain Bike", "bike3":"Trail Riding"}';
const myObj2 = JSON.parse(myJSON7);

let txt5 = "";
for(const x in myObj2){
     txt5 += x + ", ";
}
document.getElementById("demo51").innerHTML = "This is looping through the object: " + txt5;