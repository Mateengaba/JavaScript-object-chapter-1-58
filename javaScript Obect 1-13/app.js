// CHAPTER # 01
// Question # 1
// alert("Welcom");

// Question # 2

// alert("Erroi! Please enter a valid Password");

// Question # 3

// alert("Welcom to JS Land...\nHappy coding!")

// Question # 4

// alert("Welcom to JS Land..")

// Question # 5

// alert("Hello...I can run JS through my web browser's console")


// CHAPTER # 02

// Question # 1

// var userName = "Mateen";
// alert(userName)

// Question # 2

// var myName = "Mateen Gaba";
// alert(myName)

// Question # 3

// var Message = "Hello World";
// alert(Message)

// // Question # 4

// var studentName = "Mateen"
// var studentAge = "33 years old"
// var studentCerts = "Certifid Mobile Application Developer"

// alert(studentName)
// alert(studentAge)
// alert(studentCerts)

// // Question # 5

// var Food ="PIZZA\nPIZZ\nPIZ\nPI\nP"

// alert(Food)

// Question # 6

// var email = "My email address is mateen.gaba@gmail.com"
// alert(email)


// Question # 7

// var book = "I am trying to learn from the book A smarter way to learn JavaScript"
// alert(book)

// Question # 9

// var art = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(art)

// END

// CHAPTER # 03 (VARIABLES FOR NUMBERS )

// Question # 1

// var userAge = 20;

// alert(userAge)


// CHAPTER # 04 (ARIABLE NAMES: LEGAL & ILLEGAL )

// // Question # 1

// var age = 5;
// var income = 6;
// var sum = age + income;



// document.write(sum)


// // Question # 2

// #Legal variable names:
// myvar = "John"
// my_var = "John"
// _my_var = "John"
// myVar = "John"
// MYVAR = "John"
// myvar2 = "John"

// #Illegal variable names:
// 2myvar = "John"
// my-var = "John"
// my var = "John"

// // Question # 3

// Variable names can only contain letters, digits and nonpunctuation characters.
// For example $my_1stVariable.

// b) Variables must begin with a a letter, an underscore (_), or a dollar sign ($).

//e) Variable names should not be JS ___keyword______


// CHAPTER # 05

// // Question # 1

// var x = 3;
// var y = 5;
// var sum = x + y ;


// document.write(sum)

// // Question # 4

// var movieTicket =600;
// var ticket = 5;
// var sum = 600*5;
// document.write(sum)


// Question # 5

// program to generate a multiplication table

// // take input from the user
// const number = parseInt(prompt('Enter an integer: '));

// //creating a multiplication table
// for(let i = 1; i <= 10; i++) {

//     // multiply i with number
//     const result = i * number;

//     // display the result
//     console.log(`${number} * ${i} = ${result}`);
// }

// // Question # 7

// var item1 = 650;
// var qty_1 = 3;
// var item2 = 100;
// var qty_2 = 7;
// var shipcharg = 100;

// var item1_total = item1 * qty_1;
// var item2_total = item2 * qty_2;
// var g_total = item1_total + item2_total + shipcharg;
// console.log("Price of item 1 is " + item1 + "\n" + "Quantity of item 1 is " + qty_1 + "\n" + "Price of item 2 is " + item2 + "\n" + "Quantity of item 2 is " + qty_2 + "\n" + "Shiping cost is " + shipcharg + "\n"  + "total cost of " + g_total)  


// // Question # 8

// var total_marks = 980;
// var marks_obt = 804;
// var percentage = 804 / 980;
// var per = percentage * 100;
// document.write("Percentage is: " + per)


// // Question # 9

// var USD = 10;
// var Riyals = 25;
// var USD_rate = (104.8 * 10);
// var riyal_rate = (25 * 28);
// var sum = USD_rate + riyal_rate;

// document.write("Toat Currency is PKR:" + sum)


// // Question # 10

// var currentYear = 2016;
// var birthYear = 1992;
// var yourage = currentYear - birthYear;
// document.write("Your Age is: " + yourage)


// // Question # 12
// The Lifetime Supply Calculator:


// var currentAge = 15;
// var MaxAge = 65;
// var amount = 3;
// var remainAge = MaxAge - currentAge;
// var total = amount * remainAge;
// document.write("You will need " + total + " chocalte chip to last you until the ripe old age of " + MaxAge)



// CHAPTER # 06-09

// // // Question # 1
// a 

// var a = 10;
// var value = ++a ;
// document.write("Now the Value of is: " + a)

// B

// var a = 10;
// var value =++a + a++ ;
// document.write("Now the Value of is: " + a)

// c

// var a = 10;
// var value =++a + a++ ;
// document.write("Now the Value of is: " + a)

// D


// var a = 10;
// var value =++a + a++ ;
// document.write("Now the Value of is: " + --a)

// E


// var a = 10;
// var value =++a + --a;
// document.write("Now the Value of is: " + a--)


// // // Question # 2

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// document.write("result is " + result)

    
//     // Explain the output at each stage:
// --a; (1-2)=1
// --a - --b; (1-2)=1 - (1-1)=0
// --a - --b + ++b; (1-2)=1 - (1-1)=0 + (1+0)=1;
// --a - --b + ++b + b--;
// (1-2)=1 - (1-1)=0 + (1+0)=1 + 1
// 1 - 0 + 1 + 1 = 3;

// // // Question # 3

// . Write a program that takes input a name from user & 
// greet the user.


// var userName = prompt("What's your name?")
// document.write("Hello " + userName + ", how are you doing today?")

// // // Question # 4


// Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.

// var num = prompt("Enter Number", "5") //prompt user to enter the number
// var num = parseInt(num); //parse the num to number
// var i = 0;
// document.write('<table border="1" cellspacing="0">');
// for (i = 1; i < 10; i++) {
//   document.write("<tr><td>" + num + " x " + i + " = " + num * i + "</td></tr>");
// }

// Assignment # 9-10

// // // Question # 1


// var city = "Karachi"

// if (city === "Karachi") {
//         document.write("Welcome to city of lights")
//     }


// // // Question # 2

    // var gender = prompt ("Enter your gender")

    // if (gender === "male"){
    //     document.write("Good Morning Sir")}
    //     else if (gender === "femail"){
    //     document.write("Good Morning Ma’am.")
    // }

    
// // // Question # 3

// Write a program to take input color of road traffic signal
// from the user & show the message according to this table:


// var traffic_signal= prompt ("Enter Signal color")

// if (traffic_signal === "Red"){
//         document.write("Must Stop")}
//         if (traffic_signal === "Yellow"){
//         document.write("Ready to move.")
//     } if (traffic_signal === "Green"){
//         document.write("Move Now.")
//     }

// // // Question # 4

// problem

// var remaining_fuel= prompt ("Enter remaining fuel in Car in Ltr")

// if (remaining_fuel = ("0=>" && "<=0.25")){
//             document.write("Please refill the fuel in your car")}

// // // Question # 5

// A

// var a = 4;
// if (++a === 5){
//         alert("true")}


        // B
        
        // var b = 82;
        // if (b++ === 83){
        // alert("true");
        // } 
        // else{ alert("False")}
        

// c. 

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// } else{ alert("condition 1 is false")}
// if (c === 13){
// alert("condition 2 is true");
// }else{ alert("condition 2 is false")}
// if (++c < 14){
// alert("condition 3 is true");
// } else{ alert("condition 3 is false")}
// if(c === 14){
// alert("condition 4 is true");
// } else{ alert("condition 4 is false")}
 
// d. 

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }  else{ alert("The cost Not equals")}
 

// // E

// if (true){
//     alert("True");
//     }
//     if (false){alert("False"); }
     

    // F


//     if("car" < "cat"){
//         alert("car is smaller than cat");
//         } else{ alert("car is not smaller than cat")}
// -----------


// if("car" > "cat"){
//     alert("car is smaller than cat");
//     } else{ alert("car is not smaller than cat")}



// // // Question # 6


// 80 && 100 == A +
// 70 && 79 == A
// 60 && 69 == B
// 50 && 59 == fail


// var total_marks = 300;
// var marks_obt = 219;
// var percentage = 219 / 300;
// var per = percentage * 100;
// document.write("Percentage is: " + per)


// var percentage = +prompt("Enter your percentage...");

// if (percentage >= 80 && percentage <= 100) {
//     console.log("A+")
// } else if (percentage >= 70 && percentage <= 79) {
//     console.log("A")

// }else if (percentage >= 60 && percentage <= 69) {
//     console.log("B")

// }else if (percentage >= 1 && percentage <= 59) {
//     console.log("Fail")

// }

// Assignment # 11-13

// // // Question # 1



// function integer(a,b) {

//     if (a > 0 && b > 0 && a > b) {
//       document.write("The larger number is " + a );
//     } else if (a > 0 && b > 0 && a < b) {
//       document.write("The larger number is " + b);
//     } else if (a === b && a > 0 && b > 0) {
//       document.write("Both numbers are equal!")
//     } else {
//         document.write("Please add an integer!");
  
//     }
//   }
  
//   integer(-1,-1);

// // // Question # 2

//   function integer(a,b) {
//     if(a>=0 && b>=0)
//     {
//         if(a!=b)
//         {
//             document.write("The larger number is " + Math.max(a,b));
//         }
//         else
//         {
//             document.write("Both numbers are equal!")
//         }
//     } else {
//         document.write("Please add an integer!");
//     }
// }

// integer(-1,-1);


// // // Question # 3


// // program that checks if the number is positive, negative or zero
// // input from the user
// const number = parseInt(prompt("Enter a number: "));

// // check if number is greater than 0
// if (number > 0) {
//     document.write("The number is positive");
// }

// // check if number is 0
// else if (number == 0) {
//     document.write("The number is zero");
// }

// // if number is less than 0
// else {
//     document.write("The number is negative");
// }

