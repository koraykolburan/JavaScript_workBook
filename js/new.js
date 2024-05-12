
          /* Array Methods */

          //matchAll() method - Basic Methods
          let text = "Did you go to the run today? No? Let's run then. I love running everyday! RUNNING and CYCLING!!!"
          const iterator = text.matchAll(/run/gi); // this is not case-sensitive
          const iterator2 = text.matchAll("RUN");
          const iterator3 = text.matchAll(/run/g) // this is case-sensitive
          let matchAllIterator = document.getElementById("demo");
          matchAllIterator.innerHTML = 
          Array.from(iterator) + " : text.matchAll(/run/gi) (this is not case-sensitive)" + "<br>" +
          Array.from(iterator2) + "<br>" + 
          Array.from(iterator3) + " : text.matchAll(/run/g) (this is case-sensitive)";
          
          //flat() method - Basic Methods
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

          //findIndex() method
          const nums4 = [2, 3, 4, 6, 7, 9, 12, 13, 15, 17, 22, 24, 29];
          
          document.getElementById("demo61").innerText = "First number over 18 has index " + nums4.findIndex(myFunction9) + ".";

          function myFunction9(value, index, array) {
               return value > 18;
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

          // The with() method -Iteration Methods - 2023
          const instruments1 = [ "Ukulele", "Bass Guitar", "Saxop", "Electric Guitar", "Drum" ];
          const myInstruments = instruments1.with( 2, "Saxophone" );

          document.getElementById("demo7").innerHTML = 
          "<b>The with() method </b> <br>" +
          "const instruments1 = [ 'Ukulele', 'Bass Guitar', 'Saxop', 'Electric Guitar', 'Drum' ]; <br>" +
          "const myInstruments = instruments.with(2, 'Saxophone'); <br>" +
          myInstruments;

          // The spread() method -Iteration Methods
          const s1 = ["Ich", "Du"];
          const s2 = ["Er", "Sie", "Es"];
          const s3 = ["Wir", "Ihr", "Sie"];
          const pronomen = [...s1, ...s2, ...s3];
          document.getElementById("demo8").innerHTML = pronomen;

          //The Nullish Coalescing Operator (??) and Nullish Coalescing Assignment Operator (??=)
          let x = null;
          let y = "This is the second argument.";
          let result5 = x ?? y;
          document.getElementById("demo9").innerHTML = 
          "<b>Nullish Coalescing Operator ( ?? )</b> <br>" +
          "let x = null; <br>" + 
          "let y = 'This is the second argument.'; <br> " + 
          "let result = x ?? y; <br>" + 
          "It will return the first argument if it is not nullish (null or undefined). Or else it will return the second argument <br>" +
          "<b>The output is: </b>" + result5;

          //The Nullish Coalescing Assignment Operator (??=)
          let nameObj = { name: "Eric" };
          nameObj.name ??= "Michael";
          nameObj.age ??= 19;
          document.getElementById("demo10").innerHTML = 
          "<b>The Nullish Coalescing Assignment Operator (??=)</b> <br>" +
          "let nameObj = { name: 'Eric' }; <br>" +
          "nameObj.name ??= 'Michael'; <br>" +
          "nameObj.age ??= 19; <br>" +
          "'nameObj.name ??= 'Michael';' the " + "<b>" + nameObj.name + "</b>"  + " won't change. Because the 'nameObj.name' is not NULLISH." + "<br>" + " However, 'nameObj.age ??= 19;' the output is gonna be like this: " + "<b>" + nameObj.age + "</b> <br>" +
          " . Because there is no any property named age in object 'nameObj'. So the value of 'nameObj.age' will be undefined(means nullish). That's why the value of age will be assigned. ";

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
         "entries() method is supposed to return a [key,value] pair from object. <br>" +
         "However, a Set has no keys, that's why entries() returns [value, value]. <br> " +
         "This makes Sets compatible with Maps. <br>" +
         text8 ;

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

         //We need to REDUCE DOM Access (as access one time like this)
         const oneObject = document.getElementById("demo58");
         oneObject.innerHTML = "<b>person = { fName:'Tom', lName:'Tommy', age: 39, }</b>";

         //Promises - For Example only ---------------------------------------------------------------
         const myPromise = new Promise(function(myResolve, myReject) {
          setTimeout(function() { myResolve("Hallo, I love you!!"); }, 5000);
         })

         myPromise.then(function(value) {
          document.getElementById("demo59").innerHTML = 
          "This is an example how promises work! " +
          "This text will appear after 5 second. " + 
          "<h2>" + value + "</h2>";
         })

         // The Symbol Type  --------------------------------------------------------------------------
         const person2 = {
          firstName : "Name1",
          lastName : "Name2",
          age: 39,
          occupation: "IT Specialist"
         };

         let id = Symbol('id');
         person2[id] = 159258374;
         document.getElementById("demo60").innerHTML =
         "This is <h3> 'The Symbol Type'</h3> " +
         person2[id] + " or " + person2.id;

         //Math.cbrt() -- 
         document.getElementById("demo62").innerHTML = 
         "Math.cbrt(125) The cube root of 125 = " +
         Math.cbrt(125);
         
         //ECMAScript2017 --------------------------------------------------------------------
         let passage = "5";
         passage = passage.padStart(5, "-");
         let passage2 = "9";
         passage2 = passage2.padEnd(9, ",")

         const demo63 = document.getElementById("demo63");
         demo63.innerHTML = "This is padStart(5, '-'); result is: " + passage + ". <br> " +
         "This is padEnd(9, ','); result is: " + passage2;

         //Object.entries() - ECMAScript 2017 --
         const veganProtein = {
          breakfast: "Oatmeals & peanut butter & blueberries",
          snackTime: "11.am",
          lunch: "Tofu Scramble",
          secondSnackTime: "15.am",
          dinner: "Tempeh",
          proteinShake: 1
         }

         const vegFoods = { Tofu:2.15, Tempeh:3.25, Proteinshake:0.75 };
         let pssg = "";
         for (let [vegFood, amount] of Object.entries(vegFoods)) {
          pssg += vegFood + ": " + amount + "<br>";
         }

         const myMap = new Map(Object.entries(vegFoods));

         const demo64 = document.getElementById("demo64");
         demo64.innerHTML = "This is <b>Object.entries(veganProtein)</b> : " +
         Object.entries(veganProtein) + "<br>" +
         " It Makes it simple to use Objects in loops like this:  <br>" +
         pssg +
         " It also makes it simple to convert Objects to Maps:  <br>" +
         myMap;

         //JavaScript Async - Await Functions -- ECMAScript2017
         const changeHMTL = document.getElementById("demo65");
         async function myDisplay() {
          let myPromise = new Promise(function(resolve) {
               setTimeout(function(){ resolve("<b>Example of async / await functions </b> <br>" +
               " 'There it is! After 3 Sec later!'");}, 3000);
          });
          changeHMTL.innerHTML = await myPromise;
         }
         myDisplay();
         
         //ECMAScript2018 --------------------------------------------------------------------
         /*
         1)JS Asynchronous Iteration - We can use for await() {}
         2)JS Promise.finally() - myPromise.then() - myPromise.catch(); - myPromise.finally();
         3)Js Object Rest Properties - Destruct an Object and Collet the leftovers onto a new object.
         4)New RegExp Features
            a)Unicode Property Escapes(\p{...})
            b)Look behind Assertions(?<=) and (?<!)
            c)Named Capture Groups
            d) s (dotAll) Flag
         5)JavaScript Threads - Workers API - workers thread are used to execute code in the background so that the main program can continue execution.
         It works at the same time simultaneously with the main program.
         Simultaneous execution of different parts of a program can be time-saving.
         6)JavaScript Shared Memory - It is a feature that allows threads to access and update the same data in the same memory.
         Instead of passing data between threads, we can pass a SharedArrayBuffer object that points to the memory where data is saved.
         7)SharedArrayBuffer - object represents a fixed-length raw binary data buffer similar to the ArrayBuffer object.    
         */

         //ECMAScript2019 --------------------------------------------------------------------
         const vegCakes = [
          ["chocolate", 5],
          ["vanilla", 2],
          ["strawberry", 7]
         ];
         const objEntries = Object.fromEntries(vegCakes);
         document.getElementById("demo66").innerHTML = 
         "<li>This is <b>fromEntries()</b> </li> " +
         typeof vegCakes + ", " + objEntries.strawberry; 

         //Optional catch Binding 
         //Before ECMAScript2019 it
         try {
          //code
         } catch(err) {
          //code
         }
         //After ECMAScript2019 -- we can omit the catch parameter(err) if we don't it.
         try {
          //code
         } catch {
          //code
         }

         //Stable Sort() after 2019 --
         const myArr2 = [
          {id:"A00",price:50},
          {id:"A01",price:50},
          {id:"A02",price:50},
          {id:"A03",price:50},
          {id:"A04",price:60},
          {id:"A05",price:60},
          {id:"A06",price:60},
          {id:"A07",price:60},
          {id:"A08",price:70},
          {id:"A09",price:70},
          {id:"A10",price:70},
          {id:"A11",price:70},
          {id:"A12",price:80},
          {id:"A13",price:80},
          {id:"A14",price:80},
          {id:"A15",price:80},
          {id:"A16",price:80},
          {id:"A17",price:80},
          {id:"A18",price:80},
          {id:"A19",price:80}
         ]

         myArr2.sort( (p1, p2) => {
          if (p1.price < p2.price) return -1;
          if (p1.price > p2.price) return 1;
          return 0;
         });

         let pssg3 = "";
         myArr2.forEach(myFunction10);

         function myFunction10(value) {
          pssg3 += value.id + " : " + value.price + "<br>";
         }
         document.getElementById("demo67").innerHTML = pssg3;

         //Revised JSON.stringify() -- after 2019
         let pssg4 = JSON.stringify("\u26D4");
         document.getElementById("demo68").innerHTML =
         "This is revised JSON.stringify: " +
         pssg4;

         //Revised Function toString();
         function myFunction11(p1,p2) {
          return p1 * p2;
         }
         document.getElementById("demo69").innerHTML =
         "<b>Revised Function .toString()</b>: " +
         myFunction11.toString();
         
         //ECMAScript2020 --------------------------------------------------------------------
         //BigInt() --
         let normalNumber = 999999999999999;
         let bigNumber = 9999999999999999;
         let bigIntNumber = 9999999999999999n;
         let bigIntNumber2 = BigInt("123456789012345678901234567890");

         let numbers = document.getElementById("demo70");

         numbers.innerHTML = 
         "Normally, JS numbers are only accurate up to about 15 digits. Like this: " + normalNumber + "<br>" +
         "However, this is 16 digits number: " + bigNumber + "<br>" +
         "We have two options to use these type of number first, we can call BigInt() or the second one is, we can just append 'n' to the end of an integer: " + 
         "In this example we added 'n' to the end of this integer let bigIntNumber = 9999999999999999n; " + bigIntNumber + "<br>" +
         "In this example we just call it BigInt('123456789012345678901234567890'), we should use number in quotes like this: " + bigIntNumber2 + "<br>" +
         "And also we can check its typeof, here is result: " + typeof bigIntNumber2;

         //The Optimal Chaining Operator ( ?. )
         const bike5 = { brand:"Cannondale", model:"2022", color:"Titan Grey" };
         let x5 = bike5?.tires;
         let docInner = document.getElementById("demo71");
         docInner.innerHTML = "<b>The Optimal Chaining Operator ( ?. )</b> <br>" + 
         "It returns 'undefined' if an object nullish.(instead of throwing an error) <br>" +
         "const bike5 = { brand:'Cannondale', model:'2022', color:'Titan Grey' }; <br>" +
         "let x5 = bike5?.tires; <br>" +
         "x5 is: " + x5;

         //The  &&=  and  ||= operators
         let x6 = undefined;
         let y1 = 100;
         x6 &&= 12;
         y1 ||= 12;
         document.getElementById("demo72").innerHTML =
         "<b>The  &&=  and  ||= operators</b> <br>" +
         "let x6 = 100; <br>" +
         "let y1 = undefined; <br>" +
         "x6 &&= 12; 'If the first value is true, the second value is assigned: '<br>" +
         "y1 ||= 12; 'If the first value is false, the second value is assigned: '<br>" +
         "x6: " + x6 + "<br>" +
         "y1: " + y1;

         //JavaScript Promise Object Method
         // a) Create a Promise
         const myPromise1 = new Promise((resolve, reject) => {
          setTimeout(resolve, 200, "Prince");
         });

         // b) Create another Promise
         const myPromise2 = new Promise((resolve, reject) => {
          setTimeout(resolve, 100, "Princess");
         });

         // c) Settle All
         Promise.allSettled([myPromise1, myPromise2]).then((results) => 
          results.forEach((x) => myDisplay(x.status)),
         );

         // d) Function to run when a Promise is settled:
         function myDisplay(some) {
          document.getElementById("demo73").innerHTML =
          "<h3>JavaScript Promise Object - allSettled() method</h3>" +
          "Please look at JS 820 line of news.js file <br>" +
          some;
          console.log("JavaScript Promise Object - allSettled() method: " + some);
         };
         //ECMAScript2021 --------------------------------------------------------------------
         //JS Promise.any()

         // a) Create a Promise
         const myPromise3 = new Promise((resolve, reject) => {
          setTimeout(resolve, 400, "Prince");
         });

         // b) Create another Promise
         const myPromise4 = new Promise((resolve, reject) => {
          setTimeout(resolve, 300, "Princess");
         });

         // c) Run when any promise fulfill
         Promise.any([myPromise3, myPromise4]).then((x) => {
          myDisplay(x);
         });

         // d) Function to run 
         function myDisplay(some2) {
          document.getElementById("demo74").innerHTML =
          "<b>JS Promise.any()</b> <br>" +
          some2;
         }

         //replaceAll();
         let text16 = "I love running. Especially, I run early in the morning. Let's run together tomorrow, before the sunrise!";
         text16 = text16.replaceAll("running","swimming");
         text16 = text16.replaceAll("run", "swim");
         document.getElementById("demo75").innerHTML =
         "<b>replaceAll()</b> <br>" +
         "let text16 = 'I love running. Especially, I run early in the morning. Let's run together tomorrow, before the sunrise!'; <br>" +
         "text16 = text16.replaceAll('running','swimming'); <br>" +
         "text16 = text16.replaceAll('run', 'swim'); <br>" +
         "text16 = " + "<b>" + text16 + "</b>";

         // JavaScript Numeric Separator ( _ )
         const num = 10_000_000_000;
         document.getElementById("demo76").innerHTML = 
         "<b>JavaScript Numeric Separator ( _ ) </b> <br>" +
         "Numeric Separator ( _ ) makes number more readable <br>" +
         "const num = 10_000_000_000; <br>" +
         num;

         //ECMAScript2022 --------------------------------------------------------------------
         //at() method on Array and on Strings
         const triathlon2 = ["Running", "Swimming", "Cycling"];
         let exerciseToday = triathlon2.at(1);

         let whatIs = "Memory";
         let chooseWhatIs = whatIs.at(3);

         document.getElementById("demo77").innerHTML =
         "<b>at() method on Arrays and on Strings</b> <br>" +
         "let exerciseToday = triathlon2.at(1); OR triathlon.at[2]; " + exerciseToday + "<br>" +
         "let chooseWhatIs = whatIs.at(3); OR whatIs.at[2]; " +
         "the output is: " + chooseWhatIs;
         
         //RegExp d Modifier
         let text17 = "bbbccc";
         let result6 = text17.match(/(bb)(cc)/d);
         document.getElementById("demo78").innerHTML = 
         "<b>RegExp d modifier</b> <br>" +
         "Match all that starts or ends with bb or cc: <br>" +
         result6;
         console.log(result6);

         //Object.hasOwn() property
         const proto = {
          initProp: 500,
         };

         const obj1 = {
          __proto__: proto,
         };

         let text18 = "";
         text18 += ("initProp" in obj1) + " ";
         text18 += ("initProp" in proto) + " ";
         text18 += Object.hasOwn("initProp") + " ";
         document.getElementById("demo79").innerHTML =
         "<b>The Object.hasOwn()</b> <br>" +
         " it's like <b>Object.prototype.hasOwnProperty</b> but supports all OBJECT TYPES <br>" +
         text18;

         //Error Cause -- let we specify the reason behind an error with error.cause
         /*
         try {
          connectData();
         }
         catch(err) {
          throw new Error("Connecting failed.", { cause: err });
         }
         */
        document.getElementById("demo80").innerHTML = 
        "<b>Error Cause -- let we specify the reason behind an error with error.cause: </b> <br>" +
        "try { connectData(); } catch(err) { throw new Error('Connecting failed.', { cause: err }); }";

         //JS await import -- modules can now wait for resources that require import before running:
         /*
         import {myData} from './myData.js';
         const data = await myData();
         */
         document.getElementById("demo81").innerHTML = 
        "<b>JS await import -- modules can now wait for resources that require import before running: </b> <br>" +
        "import {myData} from './myData.js'; <br>" + 
        "const data = await myData();";

         //JS Class Field Declarations -- 
         class Hello {
          counter = 7; // Class field
         }
         const myClass = new Hello();
         let x7 = myClass.counter;
         document.getElementById("demo82").innerHTML = 
         "class Hello { <br>" +
         "counter = 7; // Class field <br>" +
         " } <br>" +
         "const myClass = new Hello(); <br>" +
         " let x7 = myClass.counter; <br>"  +
         "x7 = " + x7;

         //JavaScript Private Methods and Fields
         /*
         class Hello2 {
          #counter = 7; // Private field
          #myMethod() {} // Private method
         }
         const myClass1 = new Hello2();
         let x8 = myClass1.#counter; // Error
         myClass1.#myMethod();     // Error
         */

         document.getElementById("demo82").innerHTML = 
         "<b>JavaScript Private Methods and Fields</b> <br>" +
         "class Hello2 { <br> " +
         "#counter = 7; // Private field <br> " +
         "#myMethod() {} // Private method <br> " +
         "}; <br>" +
         "const myClass1 = new Hello2(); <br>" +
         "let x8 = myClass1.#counter; // Error <br>" +
         "myClass1.#myMethod();     // Error <br>";

         //ECMAScript2023 --------------------------------------------------------------------
         //The findLast() method
         const celcius = [27, 28, 30, 32, 39, 38, 36];
         let high = celcius.findLast( x => x > 35 );

         document.getElementById("demo83").innerHTML =
         "<b>The findLast() Method</b> <br>" +
         "const celcius = [27, 28, 30, 32, 39, 38, 36]; <br>" +
         "let high = celcius.findLast( x => x > 35 ); <br>" +
         "In this week, the last temperature over 30 was " + "<b>" + high + "</b>";

         //The findLastIndex() method
         const temp = [21, 22, 24, 25, 29, 34, 32];
         let pos = temp.findLastIndex( x => x > 30 );

         document.getElementById("demo84").innerHTML =
         "<b>The findLastIndex() Method</b> <br>" +
         "const temp = [21, 22, 24, 25, 29, 34, 32]; <br>" +
         "let pos = temp.findLastIndex( x => x > 30 ); <br>" +
         "In this week, the last position of temperature over 30 is " + "<b>" + pos + "</b>";

         //The toReversed() method
         const lowerToHigher = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
         let higherToLower = lowerToHigher.toReversed();

         document.getElementById("demo85").innerHTML =
         "<b>The toReversed() Method</b> <br>" +
         "const lowerToHigher = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]; <br>" +
         "let higherToLower = lowerToHigher.toReversed(); <br>" +
         "<b>" + higherToLower + "</b>";

         //The Sorted Method
         const winterSpring = ["Dec", "Jan", "Feb", "Mar", "Apr", "May"];
         const sorted = winterSpring.toSorted();

         document.getElementById("demo86").innerHTML =
         "<b>The toSorted() Method</b> <br>" +
         "const winterSpring = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']; <br>" +
         "const sorted = winterSpring.toSorted(); <br>" +
         "<b>" + sorted + "</b>";

         //The toSpliced() Method
         const winterSpring2 = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
         const toSpliced = winterSpring2.toSpliced( 0, 1 );

         document.getElementById("demo87").innerHTML =
         "<b>The toSpliced() Method</b> <br>" +
         "const winterSpring2 = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May']; <br>" +
         "const toSpliced = winterSpring2.toSpliced( 0, 1 ); <br>" +
         "<b>" + toSpliced + "</b>";

         // #! JavaScript Shebang
         document.getElementById("demo88").innerHTML =
         "<b>#! JavaScript Shebang</b> <br>" +
         "It is a number sign and an exclamation mark (#!) at the beginning of a script. <br>" +
         "For ex: #!/usr/bin/env node <br>" +
         "It tells the operating system to use the <b>node program</b> to run the script."
         /*   
         It is a number sign and an exclamation mark (#!) at the beginning of a script.
         For ex: #!/usr/bin/env node  
         */