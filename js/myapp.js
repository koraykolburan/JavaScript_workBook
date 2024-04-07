
/* ---------------------------- Objects ---------------------------- */

let car = {
     make: "WV",
     speed: 200,
     engine: {
          size: 1.0,
          make: "Mercedes",
          fuel: "TSI",
          Cylinders: [ 
               { maker: "Mercedes" }, 
               { maker: "Mercedes" }, 
               { maker: "Mercedes2" } 
          ]
     },
     drive: function () {
     return "drive";
     }
};

console.log("1) " + car.make);
/*  ---------------------------- USAGE of Objects and Methods ----------------------------
We can try these on the Console:
car.make = "bmw";
car.make += 200; or car.make += "T-Cross";
you can access these two way: car.speed *= 2; or car["speed"] *=2; 
car.engine = { newEngine: "new" };

------- Creating a new Key within this object -------
car.model = '2024'; this is like: let model = '2024';
car.color = 'blue';

------- Creating a new Method within this object -------
car.stop = function(){ return "stop" }; or   car.engine.stop = function() { return "stop" };

------- Deleting certain numbers within this object -------
delete car.color; it will return as: true.

------- Deleting Methods(functions) within this object -------
delete car.stop; or delete car.drive;
*/


/* ---------------------------- Arrays ---------------------------- */

let array = [
     "string",
     100,
     ["embed", 200],
     { car: "Toyota" },
     function(){ return "drive"; }
];

/*  ---------------------------- USAGE of Arrays ----------------------------
We can try these on the Console:
array[0] = 'new string';
array[0] += ' concat';
array[5] = 'new string';  -> creating a new string inside of the array.

Brackets syntax is not very good for ARRAYS. Also you have to be very careful again with the bracket syntax.
Also, dot notation is not very good for ARRAYS too.
Arrays are supposed to be a NUMERABLE and that means COUNTABLE.
That's why length() property tells us how many elements are in the array.

array.length; >> 5

Actual Javascript Language created this for us automatically when we create an array it attaches another object onto it. 
And it's called the PROTOTYPE Object.
[[Prototype]]: Array(0)
But it comes with all of these different methods and these methods allow us to ITERATE OVER VALUES.
These are pre-built methods:
(at(), concat(), cosntructor(), copyWithin(), entries(), every(), fill(), filter(), find(), findIndex() ... )
It allows us to filter data or inside of it.
It allows us to change and modify data in our Array.
So this is all defined by JavaScript the language itself.

--------- PRE-BUILT Methods ---------

array.shift(); >> it is gonna delete of the FIRST element in the array.
array.pop(); >> it is gonna delete of the LAST element in the array. 
array.unshift( 'string', 20, function(){}, {}, [] ); >> it is gonna inserted all of these values right at BEGINNING of the array.
array.push( 'string', 200, 300 ); >> it is gonna inserted all of these values right at ENDING of the array.

-- How do I go in the MIDDLE OF SOMEWHERE in the Array and DELETE ELEMENTS? --   -->> splice()
******   splice( index, how many elements to be DELETE) ******   
array.splice( 2, 2 ); ---->> it will return what was deleted like this: (2) [Array(2), {…}]
after that, array --->> it will return like these: (3) ['string', 100, ƒ]

-- How do I go in the MIDDLE OF SOMEWHERE in the Array and ADD ELEMENTS? --   -->> splice()
splice(index, how many elements to be DELETE, VALUES to ADD)
array.splice( 1, 0, "WV", "BMW", "TESLA", 200);

-- How do I go in the MIDDLE OF SOMEWHERE in the Array and REPLACING the ELEMENTS? --   -->> splice()
array.splice( 2, 2, "world200"); --> it will delete in 2 elements have 2 index and it will add the "world200" instead.

*/



/* ---------------------------- Callable Objects ---------------------------- */

function makeBlackTea ( blackTea, water, lemon ) {
     let instructions = "Boil water,";
     instructions += " pour into tea pot,";
     instructions += " add black tea leaves,";
     instructions += " wait 13 Mins.";
     instructions += " After that, pour " + blackTea + "% blackTea into a tea cup ";
     instructions += "and add " + water + " % water.";
     instructions += " Finally, put " + lemon + " slices lemons.";
     return instructions;
};

console.log("2) ", makeBlackTea( 30, 70, 2 ));

// Embedded functions
function userName() {
     let fullName = "John Tom"; // 1) Create a variable called fullname, it stores the value "John Tom"(string).

     function concat( fName2 ){ // 2) Create another subroutine that an object inside of an object.(concat()).
                              // We created a parameter is 'fName2' to STORE that string "John Tom".
          return "MR. " + fName2; // 3) And then we return this SUBROUTINE when it's invoked the string.

     }

     return concat(fullName);
}

console.log("3) ", "This is the full name of: " + userName());


/* ---------------------------- USAGE of Callable Objects ----------------------------
Like creating embedded objects, we can do this with functions or subroutines or callable objects.
Embedded functions or subroutines or callable objects:

function userName() { let fullName = "John John"; function concat( userName ){ return "MR. " + userName;} return concat(fullName); }
---- Explanation ----
1) Create a variable called fullname, it stores the value "J.M."(string).
2) Then we create another subroutine that an object inside of an object. 
     - Concat is now the symbol name which I can reference this subroutine. "concat(){}"
     - And it receives an argument which is 'userName'. "concat( userName ){}"
     - An argument is a value is going to receive this value is string "John John" and it needs a place to store it.
     - So we create in essence a variable a parameter that will stall that string while we're executing. 
     - And then it will delete that out of memory.
     - So that 'concat( userName )' userName parameter contains that string: 'let fullName = "John John";'
3) And then we return this SUBROUTINE when it's invoked the string: 'return "MR. " + userName;'

Objects inside of objects, we can have a standard OBJECT LITERAL. 
And methods are in fact subroutines or callable objects nested inside of an object. 
Like this:
let obj = { 
     method: function(){}
};

We have the same thing for Arrays. They don't have a method name. They're just an element inside of the array. 
let Arr = [
     function(){}
];
*/


/* ------------- Defining(invoking) an OBJECT as an ARGUMENT ------------- */

function userName2 ( fullName ) {
     
     return fullName.firstName + fullName.lastName;
};

console.log(userName2( { firstName: "John", lastName: " Johny" } ));

/* -- Explanation --
1) We invoke the userName2(); And we're going to pass it an object and it's going to have the firstName and lastName.
2) So there is our object firstName and lastName that will then be passed to this parameter 'fullName'.
3) And we can start to use it within our subroutine. We can 'return fullName.firstName + fullName.lastName;

 The Cycle is like that: 
function userName2 ( fullName ={ firstName: "John", lastName: " Johny" } ) {
     
     return fullName.firstName("John") + fullName.lastName( Johny);
};
*/


/* ------------- Defining(invoking) a Function as an ARGUMENT ------------- */

function userName3 ( fullName ) {
     
     return fullName(); //Don't forget the parantheses in here, because we invoke the function!
};

console.log(userName3( function(){ return "embed"; } ));
/* -- Explanation --
Let's pass in a Callable Object to a parameter just like creating a variable. So we can call it like that:
let obj = function(){};
1) It printed out the FUNCTION - 'ƒ (){ return "embed"; }' that we defined as an ARGUMENT.
2) This funct. does not need the name placing in here, because it's going to be given a symbol name when it's assigned to the parameter.
3) We invoked this callable object 'userName3'. This 'userName3' received the ARGUMENT this callable object 'fullName = function(){ return "embed";}'
4) How we actually execute this 'ƒ (){ return "embed"; }', we need to add paratheses like: 'return fullName();'
*/


/* -------------------------- Memory Hoisting -------------------------- */
console.log( printName()) ;

let myName = "Newton";

function printName() 
{
     /* console.log( a ); It created the 'let a'; And it created that symbol first.

     let a = 100; */

     return "Usain Bolt";
}


/* -------------------------- SCOPE -------------------------- */
let engine = {
     maker: 'BMW',
     headGasket: {
          pots: [
               "piston1",
               "piston2"
          ]
     }
}

console.log(engine.headGasket.pots[1]);

/* -- SCOPE on Callable Objects -- */

function playThis() {
     let x = 25;

     function add() {
          let y = 75;

          return x + y;
     }

     return add();
}

console.log( playThis() );


/* -- GLOBAL SCOPE -- */

let engine2 = {    // this is the highest = global scope
     maker: 'Mercedes',
     headGasket: {
          pots: [
               "piston1",
               "piston2"
          ]
     }
}

function access() {

     let x = 10; // this is the highest = global scope for in function.

     function add() {

          let engine2 = 'Engine2 String.';
          
          console.log( engine2 );
     }
     
     add();
}

console.log(access());