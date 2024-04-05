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

console.log(car.make);
/*  ---------------------------- USAGE on Objects and Methods ----------------------------
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


let array = [
     "string",
     100,
     ["embed", 200],
     { car: "Toyota" },
     function(){ return "drive"; }
];

/*  ---------------------------- USAGE on Arrays ----------------------------
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

console.log(makeBlackTea( 30, 70, 2 ));

/* ---------------------------- Callable Objects ----------------------------


*/