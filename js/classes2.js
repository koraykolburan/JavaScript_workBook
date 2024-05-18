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
" super(brand); <br>" +
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
" and gets access to <b>the parent's properties and methods.</b> <br>" +
""