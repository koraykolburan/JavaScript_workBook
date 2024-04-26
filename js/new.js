
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

          //JS Sets --
          const instruments2 = new Set(["Ukulele ","Bass Guitar ","Saxophone ","Electric Guitar ","Drum"]);
          /* we also can do like this: const instruments2 = new Set(); instruments2.add("ukulele"); instruments2.add("Bass Guitar"); .. */
          let text4 = "";
          for(let x of instruments2.values()){
               text4 += x;
          };
          console.log(text4);

          //JS Maps --
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

          let text5 = "";

          fruitsPrices.forEach(function(value,key){
               text5 += key + ' = ﹩' + value + "<br>";
          });
          document.getElementById("demo14").innerHTML = text5;

          //We also can use this:
          let text6 = "";
          for(let x of fruitsPrices.entries()){
               text6 += x + "<br>";
          };
          document.getElementById("demo15").innerHTML = text6;

          // Some Data Types --
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
          