
// String Methods 21 - 25

// Question #1 


// var firstname = prompt("Enter your first name")
// var lastname = prompt("Enter your last name")
// var fullname = firstname  + " " +  lastname;
// console.log(fullname)


// Question #2

// var favoritePhone = prompt("Write Your Favorite Mobile Phone Model.");
// var phoneLength = favoritePhone.length;
// document.write("My Favorite Phone is: " + favoritePhone + "<br/>");
// document.write("Length of string: " + phoneLength);

// Question #3

// var a = "Pakistani";
// var indexNum = a.indexOf("n")
// document.write("String: " + a + "<br/>");
// document.write(indexNum)


// Question #4

// var a = "Hello World";
// var lastindx = a.lastIndexOf("l")
// document.write("String: " + a + "<br/>")
// document.write("Last indes of l:" + " " + lastindx)

// Question #5

// var a = "Pakistani";
// var indexcharc = a.charAt(3)
// document.write("String: " + a + "<br/>");
// document.write("character at index 3:"+ " " + indexcharc)


// Question #6


// var firstname = prompt("Enter your first name")
// var lastname = prompt("Enter your last name")
// var fullname = firstname  + " " +  lastname;
// console.log(fullname)


// Question #7

// var a = "Hyderabad";
// document.write("City: " + a + "<br/>");
// a = a.replace("Hyder", "Islam");
// document.write("After replacement: " + a)

// Question #8

// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("old:" + " " + message + "<br/>")
// message = message.replace(/and/g, "&")
// document.write("After replacement: " + message)


// Question #9

// var a = "470";
// var b = parseInt(a)
// document.write("Value: " + a + "<br/>");
// document.write("Type:" + " " + typeof(a) + "<br/>")
// document.write("Value: " + b + "<br/>");
// document.write("Type:" + " " + typeof(b))

// Question #10


// var a = prompt("Enter ").toUpperCase();

// var p = ("PEANUTS")
// document.write(p)


// Question #11


// var a = prompt("Enter ");


// var capitalize = a[0].toUpperCase() + a.slice(1).toLowerCase();
// document.write("capitalize:" + " " + capitalize, )


// Question #12

// var num = 35.36;
// var numstring = num.toString().replace("." , "")
// document.write("Number:" + " " + num + "<br/>")
// document.write("Result" + " " + numstring + "<br/>")
// document.write(typeof(numstring))

// Question #13

// var username = prompt("Enter your username:");
// var isValid = true;
// var specialSymbols = ['@', '.', ',', '!'];
// for (var i = 0; i < specialSymbols.length; i++) {
//   if (username.includes(specialSymbols[i])) {
//     isValid = false;
//     break;
//   }
// }
// if (!isValid) {
//   alert("Enter a valid username without special symbols [@ . , !]");
// }


// Question #14

// var bakeryItem = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];


// var userInput = prompt("Welcome to ABC bakery.What do you want to order").toLowerCase();
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
//     document.write("We are sorry,"  + userInput + "is not available in our bakery")
// }

// Question #15

// var password = prompt("Enter your password")

// if(password.length <6 )
// {
//     password = prompt ("Password It must at least 6 characters long. Enter valid Password" )
// }
// else if(!/^[a-zA-Z][a-zA-Z0-9]*$/.test(password)){
// password = prompt("Password Should contain Only alphabets and numbers , Please enter a valid Password.")}
// else { 
//     alert("Enter Valid Password")}

// Question #16

// var uni = "University of karachi";
// var arr = uni.split("");

// for (var i=0 ; i < arr.length; i++)
// document.write(arr[i] + "<br/>")


// Question #17

// var a = "Pakistan";
// var lastindex = a.charAt(a.length-1)
// document.write("String: " + a + "<br/>");
// document.write("Last character Of input:"+ " " + lastindex)


// Question #18

// var a = "the quick brown fox jumps over the lazy dog";
// var copy = (a.match(/the/g)).length;
// document.write(copy)



// MATH METHODS 
// Chepter #  # 26-30

// Question #1



// var num = 3.45214;
// var round = Math.round(num)
// var flor = Math.floor(num)
// var cel = Math.ceil(num)



// document.write("number:" + "" + num  + "<br/>")
// document.write("Round:" + "" + round + "<br/>")
// document.write("floor:" + "" + flor + "<br/>")
// document.write("Ceil:" + "" + cel  + "<br/>")


// Question #2


// var num = -2.763;
// var round = Math.round(num)
// var flor = Math.floor(num)
// var cel = Math.ceil(num)



// document.write("number:" + "" + num  + "<br/>")
// document.write("Round:" + "" + round + "<br/>")
// document.write("floor:" + "" + flor + "<br/>")
// document.write("Ceil:" + "" + cel  + "<br/>")

// Question #3










// Question #4


// var random = Math.random() * 6 + 1;
// var flor = Math.floor(random)

// document.write(flor)


// Question #5


// var random = Math.random() * 1 + 1;
// var round = Math.round(random)
// var results;


// if (round === 1){
//     results = "Heads"

// }else{
//     results = "Tails"

// }
// document.write(round + "<br/>")
// document.write("Random dice value: " + results)


// Question #6


// var random = Math.random() * 100;
// var round = Math.round(random)

// document.write("random number between 1 and 100: " + round)



// Question #7

// var weight = prompt("Enter your weight in kilograms");
// weight = parseInt(weight.replace(/[^\d.-]/g , ""));
// document.write("Your weight is: " + weight + " kilograms")





// Question #8

// var secretNumber = +prompt("Enter a Number between 1 to 10");
// var random = Math.random() *10 +1;
// var round = Math.round(random)
// console.log(round)


// if(secretNumber === round){
//     document.write("Congratulation!! You Got it Right!!")
// }else(
//     document.write("Better Luck Next Time")
// )





// DATE METHODS 31 - 34

// Question #1

// var time = new Date();
// document.write(time)

// Question #2


// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// var a = new Date();
// var month = months[a.getMonth()]
// document.write(month)


// Question #3


// var days = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// var a = new Date();
// var day = days[a.getDay()]
// document.write(day)


// Question #4


// var days = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// var a = new Date();
// var day = days[a.getDay()]
// document.write(day + "<br/>")

// if (day === "Sat" && "Sun"){
//     document.write("It's Fun Day")

// } else{
//     document.write("today is working Day")

// }


// Question #5


// var a = new Date();
// var day = a.getDay();

// if (day <=15){
// document.write("First Fifteen Days of the month");
// }else{
//     document.write("Last Days of the Month")
// }

// Question #6


// var d = new Date();
// var milisec = d.getTime();
// var min = Math.round(d.getTime() / (1000 * 60))

// document.write("Current Date: " + d + "<br/>")
// document.write("Elapsed milliseconds since January 1, 1970: " + milisec + "<br/>");
// document.write("Elapsed minutes since January 1, 1970: " + min + "<br/>");


// Question #7


// var d = new Date();
// var hour = d.getHours();

// if (hour <12){
//     alert("its AM")

// }else{
//     alert("its PM")
// }


// Question #8

// var laterDate = new Date(2020,11,31);
// document.write("Later date: " + laterDate)


// Question #9

// var ramadanStart = new Date();
// var oneDay = 24 * 60 * 60 * 1000;
// var daysPassed = Math.round((ramadanStart.getTime()- new Date(2015,5,18).getTime()) / oneDay)
// document.write(daysPassed + " days have passed since 1st Ramadan, 2015")
