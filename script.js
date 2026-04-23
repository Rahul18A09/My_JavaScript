// alert("Hello world!");
// console.log("JavaScript Revision");
// console.error("Something went wrong!");

// Callback function

// function greet(name , callback) {
//     console.log("Hi" + name);
//     callback();

// }

// const greet = function() {
//   console.log("Hello Rahul");
// };

// greet();

// function sayBye() {
//     console.log("Bye");

// }

// greet("Rahul", sayBye);

// if/else

// let score = 25;

// if( score > 35){
//     console.log("grade A");

// }else {
//     console.log("grade B");

// }

// else/ if

// let score = 97;

// if(score >= 90){
// console.log("A");

// }else if(score >= 80){
//     console.log("B");

// }else if(score >= 70) {
//     console.log("C");

// }else {
//     console.log("D");

// }

// let day = 7;

// switch (day){
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");

// }

// loops in js

// for(let i = 0; i <=10; i++){
//     console.log(i);

// }

// let i = 0
// while(i <=5){
//     console.log(i);
//     i++
// }

// let i = 4;
// do{
//     console.log(i);

// }while( i < 3);

// function in js

// function sayHi() {
//     console.log("Hello");

// }

// sayHi();

// let x = 10;

// function test(){
//     let x = 20
//     let y = 15
//     console.log(x);
//     console.log(y);

// }

// test();

// this key word

// const user = {
//     name : "Rahul",
//     age: 26,
//     greet(){
//         console.log(this.name);

//     }
// };

// user.greet();

// lexical scope

// function outer() {
//     let x = 10;

//     function inner (){
//         console.log(x);

//     }
//     inner();
// }

// outer();

// function counter(){
//     let count = 0;

//     return function(){
//         count ++;
//         console.log(count);

//     };
// }

// const increment = counter();
// increment();
// increment();

// Object methods

// const user = {
//     name: "Rahul",
//     age: 22,
//     greet: function(){
//         console.log("Hello" + " " + this.name);

//     }
// };

// user.greet();

// Object Destructuring
// const user = {
//   name: "Rahul",
//   age: 22,
//   city: "Ahmedabad",
//   greet: function(){
// console.log("Hello" + " " + this.name);

//   }
// };

// user.greet();

// let key = "name";
// console.log(user[key]);

// const obj = {
//     "first name": "Rahul"
// };

// console.log(obj["first name"]);

// const {name, age, city} = user;
// console.log(name);
// console.log(age);
// console.log(city):
// const {name: username} = user;
// console.log(username);

// loop through Object

// const user = {
//   name: "Rahul",
//   age: 22,
//   city: "Ahmedabad"
// };

// using(for...in)
// for (let key in user){
//     console.log(key,  user[key]);

// }

// using(Object.keys())
// Object.keys(user).forEach(key => {
//     console.log(key, user[key]);

// })

// using(Object.entries())
// Object.entries(user).forEach(([key, value]) => {
//     console.log(key , value);

// });

// DOM = Document Object Model

// document.getElementById("title").innerText = "Hello JavaScript";
// document.querySelector(".text").style.color = "Blue";

// let element = document.getElementById("heading");
// element.innerText = "Hello World";
// console.log(element);

// var, let , const

// Block scope

// {
// let x = 10;

// }

// console.log(x);

// {
//     var a = 10;
//     console.log(a);

// }
// console.log(a);

// let a = 10;

// let b = "10";

// console.log(a == b);
// console.log(a === b);

// Hoisting

// console.log(a);

// var a = 15;

// console.log(x);
// let x = 15;

// syaHello();  // function declaration is fully hoisted

// function syaHello(){
//     console.log("Hello rahul");

// }

// sayHi(); // it is not a function

// const sayHi = function (){
//     console.log("Hello");

// }

// Event loop

// console.log('start');

// setTimeout(() => {
//     console.log('Timeout');

// }, 0);

// Promise.resolve().then(()=> {
//     console.log('Promise');

// });

// console.log('End');

// Async/await

// function fetchData(){
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data received")
//         }, 2000);
//     });
// }

// async function getData() {
//     console.log('Loading...');

//     const result = await fetchData();

//     console.log(result);

// }

// getData();

// API-style example

// async function getUsers() {
//     try{
//         let response = await fetch("https://jsonplaceholder.typicode.com/users");
//         let data = await response.json();

//         console.log(data);

//     }catch (error) {
//         console.log("Error:" , error);

//     }
// }

// getUsers();

// const fs = require("fs");

// fs.writeFile("demo.txt", "Hello Rahul", (err) => {
//     if (err) throw err;
//     console.log("File Created successfully");

// });

//  const data = fs.readFile("demo.txt", "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);

// });

// fs.appendFile("demo.txt", "\nWelcome to Node.js", (err) => {
//     if (err) throw err;
//     console.log("Content added successfully");

// });

// fs.unlink("demo.txt", (err) => {
//     if (err) throw err;
//     console.log("File Deleted Successfully");

// });

// const path = require("path");

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));

// const filePath = path.join(__dirname, "files", "demo.txt");

// console.log(filePath);

// const os = require("os");
// const { log } = require("console");

// console.log(os.platform());
// console.log(os.arch());
// console.log(os.freemem());
// console.log(os.totalmem());

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.write("Hello Rahul, Welcome to my world");
//     res.end();
// });

// server.listen(5000);

// let age = 17;

// if(age >= 18) {
//     console.log("you are able to valt");
// }   else {
//     console.log("you are not aligible to valt");

// }

// let marks = 91;

// if(marks >= 90) {
//     console.log('Grade A');

// }else if(marks >=75){
//     console.log('Grade B');

// }else if(marks >= 60){
//     console.log("Grade C");

// }else{
//     console.log('Grade D');

// }

// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;

//   case 2:
//     console.log("Tuesday");
//     break;

//   case 3:
//     console.log("Wednesday");
//     break;

//     default:
//         console.log('Another day');
        
// }


// for(let i = 1; i <= 15; i++){
//     console.log(i);
    
// }


let i = 1;

while( i <= 5){
    console.log('Number' + " " +  i);
    i++;
    
}