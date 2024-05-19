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
"My first bike is " + myBike.brand + ". And it is " + myBike.model() + " years old. <br>" +
" We can send <b>parameters</b> to Class methods like this: <br>" +
"My new bike is " + myBike2.model(year) + " years old." + " Its brand " + myBike2.brand + "." +
"<h3>To Create a Class Inheritance with the 'extends' keyword</h3>" +
"class Book { <br>" + 
" constructor(name) { <br>" +
"    this.bookname = name; <br>" + 
"    } <br>" + 
"    current() { <br>" + 
"    return 'I have a ' + this.bookname; <br>" + 
"}} <br>" +
"<br>" +
"class Genre <b>extends</b> Book { <br>" +
" constructor(name, genre) { <br>" +
" <b>super</b>(brand); <br>" +
" this.genre = genre; <br>" +
"    } <br>" + 
"    show() { <br>" + 
"    return this.current() + ', it is a ' + this.genre; <br>" + 
"    } }<br>" + 
"<br>" +
"let myBook = new Book('BookName1', 'Autobiography'); <br>" +
"console.log(myBook.show();) <br>"+ 
"The <b>super()</b> method refers to the parent class. <br>" +
"By calling the <b>super()</b> method in the constructor method, we call <b>the parent's constructor method</b>" +
" and gets Access to <b>the parent's properties and methods.</b> <br>" +
"<h3>Getters & Setters</h3>" +
"Classes allows us to use getters and setters <br>" +
"If we want to do something special with the <b>value</b> before returning, we can use <b>getters and setters.</b> <br>" +
"To add <b>getters and setters</b> in the class, we need to use <b>get and set</b> keyword like this: <br>" +
"class Bike { constructor (brand){ this.bikename = brand; } <b>get</b> bName() { return this.bikename } } <br>" +
"<b>set</b> bName(x) { this.bikename = x } } <br> " +
"const myBike = new Bike('Canyon'); <br>" +
"console.log(myBike.bName); <br>" +
"<h4># NOTES #</h4>" +
"<b>1)</b> Even if the <b>getter</b> method, we don't use the <b>parentheses</b> when we want to get the property value. <br>" +
"<b>2)</b> Plus, we can use an underscore '_' character before the property name to separate the <b>getter/setter</b> from the <b>actual property.</b> <br>" +
"<b>Example:</b> like this: <b>this._bikename = brand;</b> get bikename() {<b> return this._bikename</b>} set bikename(x) { this._bikename = x; } <br>" +
"<b>3)</b> <b>On the contrary functions, and other JS declarations, Class declarations are not <u>hoisted.</u></b> <br>" +
"Therefore, We must declare a Class before we can use it!(uttermost). <br>" +
"The <b>default behaviour of JS</b> declarations are hoisting <b>(moving the declaration to the TOP).</b> <br>" +
"<h3>Js Static Methods</h3>" +
"We cannot <b>call a static method</b> on an <b>object</b>. Only on an <b>object class.</b> Like this:<br>" +
"class Car { constructor(name) { this.name = name; } <b>static</b> hello() { return 'Static Method!'; } } <br>" +
"const myCar = new Car('BMW'); <br>" +
"We can call like this: console.log(Car.hello();) it returns: <b>Static Method!</b>. <br>" +
"If we invoke like this: <b>myCar.hello();</b> it will throw an <b>Error.</b>";

//Getters and Setters in Class Constructors
class Bike97 {
     constructor (brand) {
          this.bikename = brand;
     }

     get bName() {
          return this.bikename;
     }

     set bName(x) {
          this.bikename = x;
     }
}

const myBike3 = new Bike97("Canyon");
console.log("This result is for getters and setters result: " + myBike3.bName);

//Static method Example in Class
class Car {
     constructor (name) {
          this.name = name;
     }

     static sMethod(x) {            
          return "Hello from Static Method! to " + x.name;
     }
}
const myCar = new Car ("BMW");
console.log(Car.sMethod(myCar));
//console.log(myCar.sMethod());  -- -- -- If we invoke like this, it Throw AN ERROR!
//In order to use the 'myCar' object, we need to send it as parameter.