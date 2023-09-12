
// Chapter # 13 -15

// Quotion#1

// var myArray = [];
// console.log(myArray)


// Quotion#2

// var studentName = new Array();
// console.log(studentName)


// Quotion#3----strings array.


// var fruits = ["mango", "apple", "orange"]



// Quotion#4-----numbers array.

// var numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(numArr)

// Quotion#5
// Declare and initialize a boolean array.

// var boolean = [true , false ]; 




// Quotion#6

// var mixArr = ["Ali", 20, true, undefined, null]



// Quotion#7

                //   0    1     2    3     4      5     6         7
// var Education = ["SSC", "HSC","BCS","BS","BCOM","MS","M. Phil.","PhD"]

// document.write("<h1>Qualifications:</h1>");
// for(i = 0 ; i < Education.length ; i++){
//     document.write("<h1>" + Education[i] + "</h1>")
// }



// Quotion#8


                   // 1         2           3
// var studentName = ["Mateen" , "Sufiyan" , "Amir"];
// var studentScores = [450 , 420 , 380];

// var totalMarks = 500;

// for(var i = 0; i < studentName.length; i++){
//     var percentage = (studentScores[i]/totalMarks)*100;
//     document.write("<h1>" + "Scored of " + studentName[i] + " is " + studentScores[i]+ "." + "Percentage:" + percentage + "%" + "</h1>" + "<br/>")
// }

// Question #9 



//  var colors = ["Red" , "Green" , "Blue","oringe", "yellow"];
// document.write(colors);


// A

// var userColor = prompt("What Color do you want to add to the beginning?");
// colors.unshift(userColor);
// document.write("<br/>" + colors);


// B

// var userColor = prompt("What Color do you want to add to the End?");
// colors.push(userColor);
// document.write("<br/>" + colors);


// C

// colors.unshift("black", "white")

// document.write("<br/>"+ colors )

// D

// var clrfirstArr = ["Red" , "Green" , "Blue","oringe", "yellow"];
// clrfirstArr.shift([0])

// document.write("<br/>" + clrfirstArr )

// E


// var clrArr = ["Red" , "Green" , "Blue","oringe", "yellow"];
// clrArr.pop([0])

// document.write("<br/>" + clrArr )


// F

// var userIndex = prompt("At which Index do you want to add a color?");
// var userColorIndex = prompt("which Color Would you like to add?");
// colors.splice(userIndex,0,userColorIndex);
// document.write("<br/>" + colors);


// G


// var userDeleteIndex = prompt("At which index do you want to remove a color?");
// var userDeleteColor = prompt("Which Color Would you like to remove?");
// colors.splice(userDeleteIndex,userDeleteColor);
// document.write("<br/>" + colors);



// practice
// ----
// var userDeleteIndex = prompt("At which index do you want to remove a color?");
// var userDeleteColor = prompt("Which Color Would you like to remove?");
// var addclr = prompt ("which add colour")
// var addclr2 = prompt ("which add 2 colour")
// colors.splice(userDeleteIndex,userDeleteColor,addclr,addclr2);
// document.write("<br/>" + colors);




// Question #10

// var studentScores = [320 , 230 , 480 , 120];
// document.write("Scores of Students : " + studentScores + "<br/>");
// studentScores.sort(function(a,b){
//     return a-b;
// })
// document.write("Ordered Scores of Students : " + studentScores);

// Practice

// var num = [100,70,20,60,90,10,40,30,80,50]
// document.write(num)

// num.sort(function(a,b){return a-b})

// document.write("<br/>" + num)

// Question #11 

// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar"];
// document.write("Cities list:" + "<br/>" + cities + "<br/>");
// var selectedCities = cities.slice(2,4); 
// document.write(selectedCities);

// Question #12 

// var arr = ["This " , "is " , "my " , "cat"];
// document.write("<h1> Array:" + "<br/>" + arr + "</h1>")
// var singleString = arr.join("");
// document.write("<h1> String:" + "<br/>" + singleString + "</h1>")


// Practice
// ----

// var arr = ["My " , "name " , "is " , "Mateen ","Gaba"];
// document.write("<h1> Array:" + "<br/>" + arr + "</h1>")
// var singleString = arr.join("");
// document.write("<h1> String:" + "<br/>" + singleString + "</h1>")



// Question #13


// var devices = [];
// devices.push(" keyboard ");
// devices.push("mouse ");
// devices.push("printer ");
// devices.push("monitor ");

// document.write("<h1> Devices:" + "<br/>" + devices + "</h1>");

// document.write("<h1> Out:" + "<br/>" + devices.shift() + "</h1>");
// document.write("<h1> Out:" + "<br/>" + devices.shift() + "</h1>");
// document.write("<h1> Out:" + "<br/>" + devices.shift() + "</h1>");
// document.write("<h1> Out:" + "<br/>" + devices.shift() + "</h1>");

// Question #14 


// var devices = [];
// devices.push("keyboard");
// devices.push("mouse");
// devices.push("printer");
// devices.push("monitor");

// document.write("<h1> Devices:" + "<br/>" + devices + "</h1>");

// document.write("<h1> Out:" + "<br/>" + devices.pop() + "</h1>");
// document.write("<h1> Out:" + "<br/>" + devices.pop() + "</h1>");
// document.write("<h1> Out:" + "<br/>" + devices.pop() + "</h1>");
// document.write("<h1> Out:" + "<br/>" + devices.pop() + "</h1>");


// Question #15

// var phoneManufacturers = ["Apple" , "Sansung" , "Motorola" , "Nokia" , "Sony" , "Haier"];
// document.write("<select>")
// for(var i = 0; i < phoneManufacturers.length; i++){
//     document.write("<option>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>")



// Chapter #17 - 20 // Arrays and Loop

// Question #1-----multidimensional array. 

// var emptyArray = [[]]; 


// Question #2

// var matrix = [
//     [0 , 1 , 2 , 3],
//     [1 , 0 , 1 , 2],
//     [2 , 1 , 0 , 1]
// ];



// Quotion#3
// 3. Write a program to print numeric counting from 1 to 10. 


// for (var i = 1; i <= 10; i++) {
//         document.write(i + "<br />")
//     }



// Quotion#4

// Write a program to print multiplication table of any 
 
// number using for loop. Table number & length should be
// taken as an input from user.

// var tableNumber = +prompt("Enter Table number");
// var tablelength = +prompt("Enter table length");

// for (var i = 1; i <= tablelength; i++) {
//     document.write(tableNumber + " x" + " " + i + " " + " = " + " " + tableNumber * i + "<br />")

// }


// Quotion#5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]


// for (var i = 0; i < fruits.length; i++) {
//     document.write("<h1>" + fruits[i] + "</h1>");
//     document.write("<h1>" + "Element at Index " + i + " is "  +  fruits[i] + "</h1>")
// }



// Quotion#6

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15



// for (var i = 1; i <= 10; i++) {
//         document.write(i)
// }


// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// c. Even


// for (var i=0; i<=20; i++) {
//     if (i % 2 === 0) {
//             document.write(i + "<br />" );   
//     }
    
// }

// // 2nd methord

// for (var i = 0; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write("even number ", i+ "<br />")
//     }
// }


// d. Odd:


// for (var i = 0; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         document.write("even number ", i+ "<br />")
//     }
// }

// E----Series:k

// for (var i = 1; i <= 20; i++) {
//     if (i % 2 == 0) {
//         document.write( i+"K"+ "<br />")
//     }
// }


    
// question#7    

// var bakeryItem = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];


// var userInput = prompt("Welcome to ABC bakery.What do you want to order")
// console.log(userInput, "userInput")

// var isMatch = false

// for (var i = 0; i < bakeryItem.length; i++) {
//     if (bakeryItem[i] === userInput) {
//         isMatch = true
//         document.write(userInput + " " + "is avaiable at index " + i + " in our bakery <br />")
//         break;
//     }
// }

// if (isMatch === false) {
//     document.write("We are sorry, is not available")
// }


// question#8


// var arr = [24, 53, 78, 91, 12];
// var largest = 0;

// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// document.write("largest value of num array is ", largest);


// question#9----// SMALLEST NUMBER


// var num = [24, 53, 780, 91, 12, 100, 5]
// var temp = num[0]

// for (var i = 0; i < num.length; i++) {
//     if (temp > num[i]) {
//         temp = num[i]
//     }
// }

// document.write("smallest value of num array is ", temp)





// question#10


// for (var i = 1; i <= 100; i++) {
//     var message = '';
//     if (i%3 === 0);
//     if (i%5 === 0) 
//     document.write(message || i +"<br/>" );
//   }
