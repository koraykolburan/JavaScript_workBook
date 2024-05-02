class Bike {
     constructor( brand, year ){
          this.brand = brand;
          this.year = year;
     }
     age(){
          const date = new Date();
          return date.getFullYear() - this.year;
     }
}
const newBike1 = new Bike("Tarmac", "2024.");
const oldBike1 = new Bike("Cannondale", "2018.");

document.getElementById("demo37").innerHTML = 
"class NewBike { <br> " + 
"constructor( brand, year ){  <br>" +
"this.brand = brand; this.year = year; <br>" +
"} <br>" + 
"} <br>" +
"const newBike1 = new Bike('Tarmac', '2024.'); <br>" +
"const oldBike1 = new Bike('Cannondale', '2018.'); <br>" +
"The output is below: <br>" +
"This one is my new road bike: " + newBike1.brand + ", " + newBike1.year + "<br>" +
"This one is my old road bike: " + oldBike1.brand + ", " + oldBike1.year + "<br>" +
"My old road bike " + oldBike1.brand + " is " + oldBike1.age() + " years old this year.";

//We can send Parameters to Class methods:
class AndroidPhone {
     constructor(brand, year, system){
          this.brand = brand;
          this.year = year;
          this.system = system;
     }
     age(x) {
          return x - this.year;
     }
}

const date = new Date();
let thisYear = date.getFullYear();

const redmi11 = new AndroidPhone("Xaomi Red Mi Note 10 Pro", 2021, "HyperOS");
const pocoX3 = new AndroidPhone("Poco X2 Pro", 2020, "MiUI 14");

document.getElementById("demo38").innerHTML = 
"My android phone is " + redmi11.brand + ". And it is " + redmi11.age(thisYear) + " years old. " +
"Also it has " + redmi11.system + " system. <br>" +
"Another android phone that belong to my wife is " + pocoX3.brand + ". And it is " + pocoX3.age(thisYear) + " years old. " + "Also it has " + pocoX3.system + " system. ";  

//Another Example:
class Book {
     constructor(name, pDate, genre, author ) {
          this.name = name;
          this.pDate = pDate;
          this.genre = genre;
          this.author = author;
     }
     age(x){
          return x - this.pDate;
     }
}

const date2 = new Date();
let thisYearB = date2.getFullYear();

const bestSeller1 = new Book("'Can't Hurt Me!'", 2018, "Autobiography", "David Goggins");
const bestSeller2 = new Book("'12 Rules for life'", 2018, "Personal Development", "Jordan B. Peterson");
const bestSeller3 = new Book("'Deep Work'", 2016, "Personal Development", "Cal Newport");
const bestSeller4 = new Book("'Indistractable: How to Control Your Attention and Choose Your Life'", 2019, "Personel Development", "Nir Eyal & Julie Li");

document.getElementById("demo39").innerHTML = 
"My first best seller book that I've read is " + bestSeller4.name +
" and it was published " +
bestSeller4.age(thisYearB) +
" years ago. And its genre is " +
bestSeller4.genre + 
". Also it has more than one author: " + 
bestSeller4.author + 
"." + 
"<br>" +
"My second best seller book that I've read after that is " + 
bestSeller3.name + 
" written by " + 
bestSeller3.author + 
", it was published before " + 
bestSeller3.age(thisYearB) + 
" years ago. "  + 
"And its genre is " + 
bestSeller3.genre + 
" too. <br>" +
"My third best seller book that I've read after " + 
bestSeller3.name + 
" is " + 
bestSeller2.name + 
" written by " + 
bestSeller2.author + 
", it was published before " + 
bestSeller2.age(thisYearB) + 
" years ago. "  + 
"And its genre is " + 
bestSeller2.genre + 
" too. <br>" +
"My latest and my favourite best seller book that I wanted to write with upper case on everywhere is " + bestSeller1.name + 
" written by " + 
bestSeller1.author + 
". It was published before " + 
bestSeller1.age(thisYearB) + 
" years ago. " + 
"And its genre is " + 
bestSeller1.genre + 
".";