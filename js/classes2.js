let demo20 = document.getElementById("demo20");
demo20.innerHTML = 
"<h2>JavaScript Classes</h2>" +
"JS Classes are <b>templates</b> for JavaScript <b>Objects.</b> <br>" +
"JS Classes are <b>Not Objects!</b><br>" +
"For ex: <br>" +
"class Bike { <br>" +
"constructor(name, year) { <br>" +
"this.name = name; <br>" +
"this.year = year; <br>" +
"} <br>" +
"} <br>" +
"(Please look at the console of line classes2.js:25 for the example.) <br>" +
"<ol>" +
"<li>It has to have the exact name <b>'constructor'.</b></li>" +
"<li>It is executed automatically when a new object is created.</li>" +
"<li>It is used to initialize object properties.</li>" +
"</ol>"

//Example of making Objects with Classes(templates of objects)
class Helmet {
     constructor(brand, model) {
          this.brand = brand;
          this.model = model;
     }
}

const myHelmet1 = new Helmet("Giro Eclipse", "Best Overall");
const myHelmet2 = new Helmet("Rapha + POC Ventral lite", "Best Lightweight");

console.log(myHelmet1.brand + " " + myHelmet1.model + ", " + myHelmet2.brand + " " + myHelmet2.model)