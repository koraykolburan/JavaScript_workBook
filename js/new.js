
          /* Array Methods */

          //matchAll() method - Basic Methods
          let text = "Did you go to the run today? No? Let's run then. I love running everyday! RUNNING and CYCLING!!!"
          const iterator = text.matchAll(/run/gi);
          document.getElementById("demo").innerText = Array.from(iterator);

          //flat() method - Basic Mathods
          const cars = [ "cars0", "cars1", [ "e-cars0", "e-cars1", [ "h-cars0", "h-cars1"], "cars2", "cars3"]];
          const newArr = cars.flat();
          document.getElementById("demo2").innerText = newArr;

          //find() method - Search Methods
          const nums = [2, 3, 4, 6, 7, 9, 12, 13, 15, 17];
          let first = nums.find(myFunction); 

          document.getElementById("demo3").innerText = "First number over 10 is " + first + ".";

          function myFunction(value, index, array){
               return value > 10;
          }

          //reduce() method - Iteration Methods
          /*
          - method runs a function on each array element to produce a single value.
          - it can be a sum, subtract, multiply or dividing.
          - it does not reduce the original array.
          - it can accept initial value. For ex: nums1.reduce(myFunction2, 100);
          */
          const nums1 = [50, 2];
          let divide = nums1.reduce(myFunction2, 100);

          function myFunction2(dividing, value, index, array) {
               return dividing / value;
          }
          console.log(divide);

          //reduceRight() method - Iteration Methods
          // it's just like reduce() method, however this method works from RIGHT-TO-LEFT.
          // it can accept initial value but it will be adding the right side of the array!!!
          const nums2 = [50, 2];
          let sub = nums2.reduceRight(myFunction3, 90);

          function myFunction3(sub, value, index, array) {
               return sub - value;
          }
          console.log(sub);

          //every() method - Iteration Methods
          // it checks checks if ALL ARRAY values pass a test - Then returns TRUE or FALSE.

          const nums3 = [15, 19, 21, 23, 3, 4];
          let allOver18 = nums3.every(myFunction4);

          function myFunction4(value) {
               return value > 18;
          }
          console.log(allOver18);

          //some() - method -Iteration Methods
          // it checks if SOME ARRAY values pass a test - Then returns TRUE or FALSE.

          let someOver18 = nums3.some(myFunction5);

          function myFunction5(value) {
               return value <= 3; 
          }
          console.log(someOver18);

          //from() - method -Iteration Methods -(From Object to Array )
          // it returns an Array object from any object with a LENGTH PROPERTY  or any ITERABLE object!
          const myArr = Array.from("UKULELE");
          document.getElementById("demo4").innerHTML = myArr;

          //keys() - method -Iteration Methods -(From Object to Array )
          // it returns an Array Iterator object with the KEYS of an Array.
          const summer = ["U", "K", "U", "L", "E", "L", "E"];
          const keys = summer.keys();
          let text1 = "";

          for(let x of keys) {
               text1 += x + "<br>";
          };
          document.getElementById("demo5").innerHTML = text1;

          //entries() - method -Iteration Methods - KEY / VALUE PAIRS
          const instruments = ["Ukulele","Bass Guitar","Saxophone","Electric Guitar","Drum"];
          const i = instruments.entries();

          for(let x of i) {
               document.getElementById("demo6").innerHTML += x + "<br>";
          }

          //with() - method -Iteration Methods
          const instruments1 = ["Ukulele","Bass Guitar","Saxop","Electric Guitar","Drum"];
          const myInsturments = instruments1.with(2, "Saxophone");
          document.getElementById("demo7").innerHTML = myInsturments;

          // spread() - method -Iteration Methods
          const s1 = ["Ich", "Du"];
          const s2 = ["Er", "Sie", "Es"];
          const s3 = ["Wir", "Ihr", "Sie"];
          const pronomen = [...s1, ...s2, ...s3];
          document.getElementById("demo8").innerHTML = pronomen;

          //Nullish Coalescing Operator and Nullish Coal. Assignment Op.
          let x = 12;
          let y = null;
          let z = 13;
          x ??= z;
          y ??= z;
          document.getElementById("demo9").innerHTML = 
          "x ??= z;  console.log(x); " + x + "<br>"  + "y ??= z;  console.log(y); " + y ;

          let nameObj = { name: "Eric" };
          nameObj.name ??= "Micheal";
          nameObj.age ??= 19;
          document.getElementById("demo10").innerHTML = 
          "* When we do this 'nameObj.name ??= 'Micheal';' the " + "<b>" + nameObj.name + "</b>"  + " won't change. Because the 'nameObj.name' is not NULLISH." + "<br>" + " However, when we write this: 'nameObj.age ??= 19;' the output is gonna be like this: " + "<b>" + nameObj.age + "</b>" + " . Because there is no any property named age in object 'nameObj'. So the value of 'nameObj.age' will be undefined(means nullish). That's why the value of age will be assigned. ";

          const array2 = [ 4,5, "ukulele", "guitar", null, undefined, [] ];
               // replace each nullish values with "this value was nullish"
          array2.forEach((value, index, arr) => {
               arr[index] ??= "(this value was nullish before)";
          })
          document.getElementById("demo11").innerHTML = 
          "* We created this array: const array2 = [ 4,5, 'ukulele', 'guitar', null, undefined, [] ];" + "<br>"  +  "  and we replaced the every nullish item with '(this value was nullish before)' " + "<br>"  + "The output is: " + array2.toString();
          console.log(array2);

          // For of -- ES6 Method
          //1) On an Array
          let text2 = "";
          for (let x of instruments) {
               text2 += x + "<br>";
          };
          document.getElementById("demo12").innerHTML = text2;
          //2) On a String
          let miniInstrument = "Ukulele";
          let text3 = "";
          for(let x of miniInstrument) {
               text3 += x + "<br>";
          };
          document.getElementById("demo13").innerHTML = text3;

          //JS Sets --------------------------------------------------------------------
          const instruments2 = new Set(["Ukulele ","Bass Guitar ","Saxophone ","Electric Guitar ","Drum"]);
          /* 
          we also can do like this: 
          const instruments2 = new Set(); 
          instruments2.add("ukulele"); 
          instruments2.add("Bass Guitar"); 
          ... 
          */
          let text4 = "";
          for(let x of instruments2){
               text4 += x + "<br>";
          }
          //with values() method
          const triathlon = new Set(["Swimming ","Cycling ","Running"]);
          let text7 = "";
          const myIterator = triathlon.values();
          for(let x of myIterator){
               text7 += x + "<br>";
          }

          document.getElementById("demo18").innerHTML = 
          "We can create new set like this: <br>" +
          "<b>Firstly)</b> const instruments2 = new Set(['Ukulele ', 'Bass Guitar ', 'Saxophone ', 'Electric Guitar ', 'Drum'])<br>" +
          "Or with the add() method like this: <br>" +
          "<b>Secondly)</b> const instruments2 = new Set(); <br>" +
          "instruments2.add('Ukulele '); <br> " + 
          "instruments2.add('Bass Guitar '); <br> " + 
          "instruments2.add('Saxophone '); <br> " + 
          " . . . <br>" + 
          "And we can Listing Sets with <b>for..of loop</b> or with <b>values()</b> property like this: <br>" +
          "let text4 = '' <br>" +
          "for(let x of instruments2){ text4 += x + < br>};  or <br>" +
          "instruments2.forEach(function(value){ text4 += value + < br> }) <br>" +
          text4 + "<br>" + 
          "Or we can do this with <b>values()</b> method it returns an Iterator: <br> " +
          "const triathlon = new Set(['Swimming', 'Cycling', 'Running']); <br>" +
          "const myIterator =  triathlon.values(); <br>" +
          "for(let x of myIterator){ text += x + < br> } <br>" +
          "alternatively we can use like this too: for(let x of triathlon<b>.values()</b>){ text += x + < br>} <br> " + 
          text7;

          /*entries() method can be used also for SET like this:
          entries() method is supposed to return a [key,value] pair from object.
          However, a Set has no keys, that's why entries() returns [value, value].
          This makes Sets compatible with Maps.
          Here it is:
          */
         const someInfo = new Set(["first", "second", "third", 987, 123]);
         let text8 = "";
         const myIterator3 = someInfo.entries();
         for(const entry of myIterator3){
          text8 += entry + "<br>";
         }
         document.getElementById("demo19").innerHTML = 
         " <h4>Iterating a new Set with <b>entries()</b> method:</h4>" +
         "<ul><li> entries() method is supposed to return a [key,value] pair from object. </li>" +
         "<li> However, a Set has no keys, that's why entries() returns [value, value]. </li> " +
         "<li> This makes Sets compatible with Maps. </li></ul> " +
         text8;

          //JS Maps --------------------------------------------------------------------
          const fruitsPrices = new Map([
               ["oranges", 0.59],
               ["apples", 0.32],
               ["mangos", 2.79],
               ["berries", 3.19]
          ]);
          fruitsPrices.set("cherries", 2.99);
          fruitsPrices.delete("mangos");
          console.log(fruitsPrices.has("cherries"));
          console.log(fruitsPrices.has("mangos"));
          console.log(fruitsPrices.get("apples"));
          //clear() method removes all the elements(values) from a Map
          let text5 = "";

          fruitsPrices.forEach(function(value,key){
               text5 += key + ' = ﹩' + value + "<br>";
          });
          document.getElementById("demo14").innerHTML = text5;

          //With entries() method:
          let text6 = "";
          for(let x of fruitsPrices.entries()){
               text6 += x + "<br>";
          };
          document.getElementById("demo15").innerHTML =
          "With <b>entries()</b> method: <br>" +
          "It creates [key, value] pairs easily. <br>" +
          text6;

          //With keys() method: 
          let text9 = "";
          for(let x of fruitsPrices.keys()){
               text9 += x + "<br>";
          }
          document.getElementById("demo20").innerHTML = 
          "With <b>keys()</b> method: <br>" +
          "It returns only keys from a Map: <br>" +
          text9;

          //With values() method:
          let text10 = "";
          for(let x of fruitsPrices.values()){
               text10 += x + "<br>";
          }
          document.getElementById("demo21").innerHTML = 
          "With <b>values()</b> method: <br>" +
          "It returns only values from a Map: <br>" +
          text10;

          // Some Data Types ------------------------------------------------------------------
          document.getElementById("demo16").innerHTML = 
          "<b>Constructor property returns the Constructor function for a Variable or an Object:</b>" + "<br>" +
          "name".constructor + "<br>" +
          true.constructor + "<br>" +
          (123).constructor + "<br>" +
          {name: "firstName", otherName: "lastName"}.constructor + "<br>" +
          new Date().constructor + "<br>" +
          ["a",5,"c",8].constructor + "<br>" +
          function(){}.constructor;

          let tool = {string:6, color:"red", eTech:"plugged"}
          tool = null;
          document.getElementById("demo17").innerHTML = 
          "<b>typeof Null and Undefined:</b>" + "<br>" +
          'let tool = {string:6, color:"red", eTech:"plugged"}' + "<br>" + 
          'tool = null;' + "<br>" +
          'typeof tool : ' + typeof tool + "<br>" +
          'typeof null : ' + typeof null + "<br>" +
          'typeof undefined : ' + typeof undefined; 

          //converting Decimal to Binary
          document.getElementById("demo22").innerHTML = 
          "<h4>Converting Decimal to Binary</h4>" +
          "dec2bin(-5)  " +
          dec2bin(-5);
          function dec2bin(dec){
               return (dec>>> 0).toString(2);
          }
          
          // RegExp
          let text11 = "Visit This Page!";
          let n = text11.search(/Page/i);
          document.getElementById("demo23").innerHTML = 
          "RegExp with <b>search()</b> Method: <br>" + 
          "let text11 = 'Visit This Page!'; <br>" + 
          "let n = text11.search(/Page/i); <br>" +
          n;
          function myFunction6(){
               let text = document.getElementById("demo24").innerHTML;
               document.getElementById("demo24").innerHTML = 
               "let text = 'Visit This Page!'; <br>" + 
               "let n = text.replace(/This/i, 'Our'); <br>" +
               text.replace(/This/i, "Our");
          }
          //RegExp - Modifiers
          let text12 = "Visit This Page!";
          let text13 = "\nIs th\nis it?";
          let text14 = "aaaaaaabbbbbbb";
          let result = text12.match(/this/i); // i modifier performs Case-INsensitive matching
          let result2 = text12.match(/is/g); // g modifier performs a global-match(FIND ALL,finds all 'this')
          let result3 = text13.match(/^is/m); //m modifier performs a multiline matching
          let result4 = text14.match(/(aa)(bb)/d); // d modifier specifies start & end matching( ES2022 ) case-sensitive
          console.log("RegExp Global Modifier. Output is here (from this: 'Visit is This Page!') : " + result2);
          document.getElementById("demo25").innerHTML =
          "RegExp 'd' modifiers ES2022: <br>" +
          "let text = 'aaaaaaabbbbbbb'; <br>" +
          "let result4 = text14.match(/(aa)(bb)/d); <br>" + 
          result4;
          /* 
          (/[abc]/g); find the characters between the square brackets
          (/[0-9]/g); find the digits between the square brackets
          (x|y); find any alternatives separated with |  
          text.match(/\d/g); find the digits
          text.match(/\s/g); find the whitespace characters
          text.search(/\bLO/); find at the beginning of a word from this: let text = "HELLO"; <<<<<< LO
          text.match(/o+/g); Do a global search for AT LEAST ONE 'o' in a string. 
          */

          // test() method
          let text15 = "Swimming, Cycling and Running";
          const pattern = /e/;
          const pattern2 = /w/;
          console.log(pattern2.test(text15));
          //We also can like this: pattern2.test('The best things in life are free!');
          document.getElementById("demo26").innerHTML =
          "RegExp <b>test()</b> Method: <br>" +
          "let text15 = 'Swimming, Cycling and Running'; <br>" +
          "const pattern = /e/; <br>" + 
          pattern.test(text15);

          // Throw, try{} & catch{} -- Js ERRORS -------------------------------------------------------
          function myFunction7(){
               const warning = document.getElementById("p01");
               warning.innerHTML = "";
               let x = document.getElementById("demo27").value;
               try {
                    if( x.trim() == "") throw "empty!";
                    if( isNaN(x) ) throw "not a number!";
                    x = Number(x);
                    if( x < 20 ) throw "too low for driver licence registration. <br>" + 
                    "Sorry, maybe next few years later!";
                    if( x >= 20 && x <= 75 ) throw "Appropriate. You can call us for driver licence registration."
                    if( x > 75 ) throw "too high for driver licence registration.";
               }
               catch(err){
                    warning.innerHTML = "Your age is " + err;
               }
               finally {
                    document.getElementById("demo27").value = "";
               }
          }
          // Modern browser use this: <input id="demo" type="number" min="5" max="10" step="1">
          /* 
          Error types in Js: ----------------------------------------------------------------------
          RangeError(about range), 
          Reference Error, Syntax Error, 
          Type Error, 
          URI Error(uniform resource identifier - illegal characters like %%%),
          */
          // If we create global variable with let, we cannot access with window.object.

          //Some Notes about Js Hoisting ----------------------------------------------------------
          try{
               fruitName = "Mango";
               const fruitName = "Banana";
          }
          catch(err){
               console.log("This is for a reference error message: " + err);
          }
          //If we change let with const, this code will simply not run.
          /*
          let a = 5;
          let b;
          console.log( typeof a + " " + typeof b );
          b = 12;
          output is: ReferenceError: Cannot access 'b' before initialization

          To Sum up: We need DECLARE our Variables At The TOP!
          */

          //JS Strict Mode ----------------------------------------------------------
          function strictFunction(){
               "use strict";
               let x;
               x = { p1:20, p2:30 };
               // delete x; object cannot be called on in an strict mode.
               function x2(p1, p2){};
               //delete x2; function cannot be called on in an strict mode.
               //function x2(p1, p1){}; duplicating a parameter in strict mode, not allowed!
          }
          console.log("This for 'use strict':  " + strictFunction()); // undefined because we used object without declaring.
          /*
          1) octal literals are not allowed!
          2) read-only property is not allowed!
          3) with Math.pow() OR let arguments = 2 is not allowed!(arguments and with)
          4) let eval=3.14 OR eval(x = 3.14) OR eval(x = 2) Or eval(var x = 2) or eval(let x = 2) is not allowed!
          5) 'this' keyword in functions behaves differently in strict mode. 'this' keyword refers to the object that called the function.
          If the object is NOT specified, functions in Strict Mode will return UNDEFINED.
          6)
          */
          
         function strictThis(){
          "use strict";
          function strictThis2(){
               console.log(this);
          }
          strictThis2();
         }
         strictThis();

         //'this' keyword ----------------------------------------------------------
         //In Js 'this' keyword refers to an object. Which object depends on how 'this' is being invoked.
         let color = "Diamond Grey";
         const bike = {
          brand: "Two's Day",
          wholeName: "The Tandem Two'sDay",
          mainSpeciality: "Folded Tandem",
          color: "Sugar Grape Purple",
          fullProperties: function(){
               return "The whole name of bike is " + this.wholeName + ". Its main speciality is " + this.mainSpeciality + ", and its color is " + this.color + ".";
          } 
          //If we don't specified with 'this' keyword to color, it will be take the property outside of the function that is 'Diamond Grey'.
         };
         console.log(bike.fullProperties());
         //When 'this' used alone, it refers to the GLOBAL OBJECT - WINDOW OBJECT. Because 'this' is runnning in the global scope like this:
         let x3 = this;
         console.log(x3);
         //If we use 'this' with "use strict" it refers to global object AGAIN - window object.

         function myThis(){
          "use strict";
          let x4 = this;
          console.log(x4); //it will returns UNDEFINED. Because of the "use strict" mode.
         };
         myThis();
         //'this' in a function refers to refers to global object AGAIN - window object.
         //If we use 'this' with "use strict" in a Function, it refers to UNDEFINED, like above.

         // 'this' keyword in HTML event handlers, it refers to the HTML element that received the event:
         function myFunction8() {
          this.document.getElementById("demo28").style.backgroundColor='red';
          this.document.getElementById("demo28").style.color='white';
         }
         const bike2 = {
          brand: "Two's Day",
          wholeName: "The Tandem Two'sDay",
          mainSpeciality: "Folded Tandem",
          color: "Sugar Grape Purple",
          fullProperties: function(){
               return this;
          }
         };
         console.log("This is Object Method Binding: " + bike2.fullProperties()) 

         //Explicit Function Binding
         const bike3 = {
          fullBrand: function(){
              return this.type + " - " + this.brand;
          }
         }
         const bike4 = {
          type: "The Road bike",
          brand: "Cannondale"
         }
         let merge = bike3.fullBrand.call(bike4);
         console.log(merge);

         //Function Borrowing - Function bind()
         const shoes = {
          type: "This is for the road running",
          brand: "Brooks.",
          fullShoes: function() {
               return this.type + ", its brand is " + this.brand;
          }
         }
         
         const otherShoes = {
          type: "This is for the trail running",
          brand: "Asics.",
         }

         let fullShoes = shoes.fullShoes.bind(otherShoes);
         document.getElementById("demo29").innerHTML = 
         "This is <b>Function Borrowing</b> - Js Function bind() method : <br>" + 
         "With the bind() method, an Object can borrow a Method from another object. <br>" + 
         "This examples create two different brand shoes, the otherShoes object borrows the fullShoes() method from the shoes object <br>" + 
         fullShoes();

         //Arrow Function ES6 --------------------------------------------------------------------------------
         //Without Arrow Function
         let greeting = "";
         greeting = function(){
          return "Hallo!";
         }
         document.getElementById("demo30").innerHTML = 
         "This is Js function <b>Without Arrow Function</b> <b>(Regular Function)</b> : <br>" +
         "let greeting = ''; <br>" + 
         "greeting = function(){ return 'Hallo!'}  <br> " +
         "greeting(); <br>" +
         greeting();

         //With Arrow Function
         let greeting2 = () => {
          return "Hola!";
         }
         document.getElementById("demo31").innerHTML = 
         "This is Js function <b>With Arrow Function</b> : <br>" +
         "let greeting2 = ''; <br>" + 
         "greeting2 = () => { return 'Hola!'}  <br> " +
         "greeting2(); <br>" + 
         greeting2();

         //If there is only ONE Statement, We can REMOVE the RETURN keyword and the Brackets!!!(shortest)
         let greeting3 = () => "Kalimera!";
         document.getElementById("demo32").innerHTML =
         "If we have <b>ONE Statement</b>(we can remove return keyword and brackets too) We can use this: <br> " +
         "let greeting3 = () => 'Kalimera'; <br> " +
         "greeting3(); <br>" +
         greeting3();

         //If we have parameters, we can pass them inside the parentheses:
         let ironMan = "";
         ironMan = ( a ) => "This Iron Man: " + a;
         document.getElementById("demo33").innerHTML = 
         "If we have <b>parameters</b>, we cann pass them inside the parentheses like this: <br>" + 
         "let ironMan = ''; <br> " +
         "<b>ironMan = ( a ) => 'This is Iron Man: ' + a;</b> <br> " +
         "ironMan('Swimming, ' + 'Cycling and ' + 'Running.') <br> " +
         ironMan("Swimming, " + "Cycling and " + "Running." + "<br>");

         //If we can have ONE PARAMETER, we can skip the Parentheses as well:
         let tvSeries = "";
         tvSeries = a => "My favourite tv series is Brooklyn " + a;
         document.getElementById("demo34").innerHTML = 
         "If we can have <b>ONE Parameter</b>, then we can <b>Delete the Parentheses</b> too: <br>" +
         "let tvSeries = ''; <br> " +
         "<b>tvSeries = a => 'My favourite tv series is Brooklyn ' + a;</b> <br> " +
         "tvSeries(' 99.'); <br>" +
         tvSeries("99." + "<hr>");

         //'this' keyword with Arrow Functions
         let ex1 = "";
         let ex2 = "";
         
         ex1 = function() {
          document.getElementById("demo35").innerHTML += 
          "This example returns two different <b>objects</b> that are (Window and Button) <br>" +
          this + 
          "<br>" +
          "Because, in the <b>regular functions,</b> 'this' keyword represents whatever invoke itself. ";
         }

         ex2 = () => {
          document.getElementById("demo36").innerHTML +=
          "This example returns the <b>Window Object TWICE</b>, because the <b>Window Object</b> is the <b>owner</b> of the function <br>" +
          this + 
          "<br>" + 
          "When we click the Arrow Function button, we will see the 'this' keyword still represents the <b>Window Object</b> again and again. <br>" + 
          " Because <b>Window Object</b> is the real owner of the arrow function.<br>";
         }

         //the window object calls the function
         window.addEventListener("load", ex1);
         window.addEventListener("load", ex2);
         
         //a button object calls the function
         document.getElementById("btn1").addEventListener("click", ex1);
         document.getElementById("btn2").addEventListener("click", ex2);

