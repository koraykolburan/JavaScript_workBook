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
"</ol>" +
"Always add a <b>constructor()</b> method. Then add any number of methods. <br>";

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


//Example of Creating a Class method named 'model'
class Bike99 {
     constructor (brand, year) {
          this.brand = brand;
          this.year = year;
     }
     model() {
          const date = new Date();
          return date.getFullYear() - this.year;
     }
}

const myBike = new Bike99('Cannondale', 2022);

//We can send parameters to Class methods, however, we need to arrange the model() method like this:
class bike98 {
     constructor (brand, year) {
          this.brand =  brand;
          this.year = year;
     }
     model(x) {
          return x - this.year;
     }
}

const date = new Date();
let year = date.getFullYear();

const myBike2 = new bike98("Canyon", 2024);

let demo21 = document.getElementById("demo21");
demo21.innerHTML = 
"This is a Class method named 'model', that returns the bike model: <br> " +
"My first bike is " + myBike.brand + ". And it is " + myBike.model() + " years old." +
"We can send parameters to Class methods: <br>" +
"My new bike is " + myBike2.model(year) + " years old." + " Its brand " + myBike2.brand;
