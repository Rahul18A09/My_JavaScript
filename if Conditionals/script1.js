// if statement
// let x = 10;

// if (x >= 9){
//     console.log(x);
// }

// if else statement
// let hour = 20;
// let greetings;

// if (hour < 18) {
//     console.log("Good Day");
// } else {
//     console.log("Good Evening");
// }

// let age = 17;
// let text = "You can Not drive!";

// if (age >= 18) {
//     text = "You can drive!";
//     console.log(text);
// } else (console.log("you can not drive!"));

// nested if else statement

// let age = 18;
// let country = "USA";
// let text = "You can not drive!";

// if (country == "USA"){
//     if (age >= 16) {
//         text = "You can drive!";
//         console.log(text);

//     }
// }

// if (country == "USA" && age >= 16){
//     text = "You can Drive!";
//     console.log(text);

// }

// const hour = new Date(). getHours();
// let greetings;

// if (hour < 23){
//     greetings = "Good Day";
// }else {
//     greetings = "Good Evening";
// }

// document.getElementById("demo").innerHTML = greetings;

// switch statement

// let day = 6;
// let dayName;

// switch (day) {
//     case 0:
//         dayName = "Sunday";
//         break;

//     case 1:
//         dayName = "Monday";
//         break;

//     case 2:
//         dayName = "Tuesday";
//         break;

//     case 3:
//         dayName = "Wednesday";
//         break;

//     case 4:
//         dayName = "Thursday";
//         break;

//     case 5:
//         dayName = "Friday";
//         break;

//     case 6:
//         dayName = "Saturday";
//         break;

//     default:
//         dayName = "Invalid Day";
// }

// console.log(dayName);

// switch using Values

// let fruit = "apple";
// let color;

// switch (fruit) {
//     case "banana":
//         color = "Yellow";
//         break;
//     case "apple":
//         color = "strawberry";
//         color = "red";
//         break;
//     case "grape":
//         color = "Purple";
//         break;
//     default:
//         color = "Unknown";
// };

// console.log("The fruit & color is: " + fruit + " " + color);

// let score = 85;
// let grade;

// switch (true) {
//     case (score >= 90):
//     grade = "A";
//     break;

//     case (score >= 80):
//         grade = "B";
//         break;

//     case (score >= 70):
//         grade = "C";
//         break;

//     default:
//         grade = "F";

// }

// console.log("The score is: ", score + " and " + "The grade is: ", grade);

// Logical Operator

// let x = 6;
// let y = 3;

// let z = (x < 8 && y < 0);
// console.log(z);

// let x = 6;
// let y = 3;
// let z = 5;

// let a= (x === 6 || y === 3 || z === 4)

// console.log(a);

// let x = ( 5 == 8);
// let y = !( 5 == 8);

// console.log(y);

// <--JavaScript loops-->
// the for loop

// const cars = ["BMW", "Volvo","Saab"];
// const len = cars.length;

// let text = "";
// for (let i = 0; i < cars.length ; i++){
//     text += cars[i] + "<br>";
// }

// document.getElementById('loop').innerHTML = text;


// let text = "";
// for (let i = 0; i < 10 ; i++){
//     text += "The number is " + i + "<br>";
// }
// document.getElementById('loop').innerHTML = text;

// the while loop

// const cars = ["BMW", "Volvo","Saab", "Ford"];
// let i = 0;
// let text = "";
// while(cars[i]) {
//     text += cars[i] + "<br>";
//     i++;
// }
// document.getElementById("loop").innerHTML = text;

// let text = "";
// let i = 0;
// while (i <= 10) {
//     text += "The number is " + i + "<br>";
//     i++;
// }
// document.getElementById('loop').innerHTML = text;

// the do while loop

// let text = "";
// let i = 0;

// do {
//   text += "The number is " + i + "<br>";
//   i++;
// } while (i <= 10);

// // console.log(text);
// document.getElementById('loop').innerHTML = text;

// let i = 15;
// let x = "";

// do {
//     x += "The number is " + i;

// }while(x  < 10);

// console.log(x);
// document.getElementById('loop').innerHTML= x;


// <--JavaScript Continue-->

// let i = 1;
// let  text = "" ;

// for (i = 1; i < 10; i++) {
//     if (i === 3) {continue;}
//         text += i*10 + "<br>";   
// }
// document.getElementById('demo').innerHTML = text;

