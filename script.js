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

document.getElementById("title").innerText = "Hello JavaScript";
document.querySelector(".text").style.color = "Blue";

let element = document.getElementById("heading");
element.innerText = "Hello World";
console.log(element);




