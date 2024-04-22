
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