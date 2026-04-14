// let x = 10;
// x++;
// // x--;
// console.log(x);

// JavaScript Operators

// 1️⃣ Arithmetic Operators
// let x = 10;
// let y  = 5;

// // console.log(x + y);
// // console.log(x - y);
// // console.log(x * y);
// console.log(x / y);

// 2️⃣ Assignment Operators

// let x = 10;
//  x += 5;
//  x -= 5;
//  x *= 5;
//  x /= 5;
//  console.log(x);

// 3️⃣ Comparison Operators

// ==
// ===
// !=
// !==
// >
// <
// >=
// <=

// console.log(5 == '5');
// console.log(5 === '5');

// 4️⃣ Logical Operators

// let age = 20;

// console.log(age > 18 && age < 25); // true
// console.log(age > 18 || age < 10); // true
// console.log(!(age > 18)); // false

// 5️⃣ Increment / Decrement Operators

// let x = 5;

// x++;
// ++x;

// console.log(x);

// 6️⃣ Ternary Operator

// condition ? trueValue : falseValue

// let age = 19;

// let result = age >= 18 ? "Adult" : "Minor";
// console.log(result);

// 7️⃣ Type Operator

// console.log(typeof "rahul");
// console.log(typeof 10);
// console.log(typeof true);

// Type Conversion

// implicit Conversion
// explicit Conversion

// let x = "5";
// let y = Number(x);
// console.log(y);

// function in javaScript

// Normal Function
// function greet() {
//     console.log("Hello Rahul");

// }

// greet();

// function Expression()
// const greet = function() {
//   console.log("Hello Rahul");
// };

// greet();

//  Arrow Function
// short syntax version of function expression

// const greet = () => {
//     console.log("Hello Rahul");

// }

// greet();

// const obj = {
//     name: "Rahul",
//     age: 25,
//     normalfun: function(){
//         console.log(this.name);

//     },

//     arrowfun: () => {
//         console.log(this.name);

//     }
// };

// obj.normalfun();
// obj.arrowfun();

// Callback function
// function greet(name, callback) {
//     console.log("Hello, " + name);
//     callback();
// }

// function sayGoodbye(){
//     console.log("Bye");

// }

// greet("Rahul", sayGoodbye);

// Object Creation

// Object Literal
// const user = {
//     name: "rahul",
//     age: 25,
//     city: "Delhi"
// }

// console.log(user.name);
// console.log(user.age);
// console.log(user.city);

// Using new Object()
// const user = new Object();

// user.name = "Rahul";
// user.age = 25;

// console.log(user);
// console.log(user.name);

// constructor function

// function user(name, age) {
//     this.name = name;
//     this.age = age;

// }

// const user1 = new user("Rahul", 25);
// console.log(user1);

// Object Methods

// const user = {
//     name: "Rahul",
//     age:25,
//     greet: function(){
//         console.log("Hello" + " " + this.name);

//     }
// }

// user.greet();

// ✅ How to clone an object?
// const user = {
//     name: "Rahul",
//     age: 25,

// const copy = {...user};
// console.log(copy);

// ✅ How to merge objects?

// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };

// const mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj);

// ✅ How to get keys?

// const user = {
//     name: "rahul",
//     age:25,
//     city: "Delhi"
// }

// Object.keys(user).forEach(key => {
//     console.log(key);
// });

// console.log(Object.keys(user));

// ✅ How to get values?

// console.log(Object.values(user));

// Object.values(user).forEach(value => {
//     console.log(value);

// });

// ✅ How to get entries?

// console.log(Object.entries(user));

// Template Literals (` `)
// used for string interpolation

// const name  = "Rahul";

// console.log("Hello" + name);
// console.log(`Hello ${name}`);

// Spread Operator (...)

// const user = {
//   name: "Rahul"
// };

// const copy = { ...user };

// console.log(copy);
// console.log(user.name);
// console.log({...user});

// const obj1 = {
//     name: "rahul",
//     age: 25
// }

// const obj2 = {
//     name1: "Asha",
//     age1: 23
// }

// const mrgobj = {...obj1,...obj2};
// console.log(mrgobj);

// Rest Operator (...)

// Collect multiple values into one variable.

// const sum  = (...numbers) => {
//     return numbers.reduce((total, sum) => total + sum)
// }

// console.log(sum(1,2,3,4));

// const numbers = [1,2,3,4,5];

// const [first, ...rest] = numbers;

// console.log(first);
// console.log(rest);
// console.log(numbers);

// Example of Closure

// function outer() {
//     let count = 0;

//    return function inner(){
//         count++;
//         console.log(count);
//     };

// }

// const fn = outer();
// fn();
// fn();

// Hoisting

// console.log(a);
// var a = 10;

// function app () {
//     console.log(a);
//     var a = 15
// }

// app();

// Promise

// const promise = new Promise((resolve, reject) => {
//     let success  = true;

//     if(success){
//         resolve('Task completed');
//     }else {
//         reject('Task failed');
//     }
// });

// promise.then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);

// });

// Event loop

// console.log('start');

// setTimeout(() => {
//     console.log("Hello");

// }, 2000);

// console.log('End');

// map()  //transform an array in to new array

// let nums = [1,2,3,4];
// let  newnums = nums.map(n => n *2)
// console.log(newnums);

// filter()   //filters an array

// let num = [10, 20, 30, 35, 40,45];

// let result = num.filter(n => n > 20);
// console.log(result);

// reduce()
// let nums = [1,2,3,4];

// let ans = nums.reduce((acc, curr) => acc + curr, 0);
// console.log(ans);

// Destructiring

// let user = {name: "rahul", age: 25};

// let {name, age} = user;

// console.log({name, age});

//  Spread Operator (...)

// let arr1 = [1,2,3];

// let arr2 = [...arr1, 3 ,4];

// console.log(arr2);

// let obj = {name: 'rahul'};

// let newobj = {...obj, age:22};

// console.log(newobj);

// Callback hell

// getData(function(){
//     getMoreData(function(){
//         getEvenMoreData(function(){
//             console.log('Done');
//         });
//     });
// });

// const user = {
//     name: 'rahul',
//     greet(){
//         console.log(this.name);

//     }
// };

// user.greet();

// const user = {
//     name: 'rahul',
//     greet: () => {
//         console.log(this.name);

//     }
// };

// user.greet();

// Event loop

// console.log('A');

// setTimeout(() => {
//     console.log('B');

// }, 2000);

// console.log('C');

// fetch API

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.log(error));

// async function getUsers() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);

//     } catch(error) {
//         console.log(error);

//     }
// }

// getUsers();

// let nums = [1,2,3,4];

// // nums.push(5);
// nums.pop();

// console.log(nums);

// Template literals
// used for string interpolation

// let name = 'rahul';

// let msg = `
// Hello
// Rahul
// from Navsari
// `;

// // console.log("Hello" + " " + name);
// console.log(`Hello ${name}`);
// console.log(`${msg}`);

// swap variable without using third variable

// method 1
// let a = 10;
// let b = 15;

// a = a + b;  //25
// b = a - b;  //10
// a = a - b;  //15

// console.log(a);
// console.log(b);
// console.log(a , b);

// method2
// let a = 5;
// let b = 10;

// [a,b] = [b,a];

// console.log(a,b);

// Palindrome Example in JavaScript

// Using reverse()

// function isPalindrome(str){
//   let reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));

// function isPalindrome(str) {
//     str = str.toString(); // convert number to string
//     let reversed = str.split().reverse().join();
//     return str === reversed;
// }

// console.log(isPalindrome("racecar"));
// console.log(isPalindrome(1221));

// Reverse a String

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"));

// Find Largest Number in Array

// let arr = [10, 5, 20, 8];

// function largest(arr){
//     return Math.max(...arr);
// }

// console.log(largest(arr));

// let arr=[10,15,20,30,45];

// function largest(arr) {
//     return Math.max(...arr);
// }

// console.log(largest(arr));

// Remove Duplicate Values from Array

// let arr = [1,2,2,3,4,4,5,6];

// function removeDuplicates(arr){
//     return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr));

// Find Duplicate Elements in Array

// function findDuplicates(arr){
//     let duplicates = [];

//     for(let i = 0; i < arr.length; i++){
//        if(arr.indexOf(arr[i]) !==i) {
//         duplicates.push(arr[i]);
//        }
//     }
// return [...new Set(duplicates)];
// }

// console.log(findDuplicates([1,2,2,3,4,4,5,5,6,7,7]));

// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("Rahul"));

// Frequency Counter (Character Count)

// function frequnecyCounter(str) {
//     let count = {};

//     for(let char of str){
//         count[char]= (count[char] || 0) + 1;
//     }
//     return count;
// }

// console.log(frequnecyCounter("Ulloo"));

// map example

// const number = [2,3,4,5,6];

// const doubled = number.map(num => num*2);

// console.log(doubled);

// const users = [
//   { name: "Rahul" },
//   { name: "Amit" },
//   { name: "Neha" }
// ];

// const  names = users.map(user => user.name);

// console.log(names);

// filter() example

// find odd numbers

// const numbers = [1, 2, 3, 4, 5, 6];

// const odd = numbers.filter(num => num % 2 !== 0);

// console.log(odd);

// Filter users age > 18

// const users = [
//   { name: "Rahul", age: 22 },
//   { name: "Amit", age: 16 },
//   { name: "Neha", age: 25 }
// ];

// const adults = users.filter(user => user.age > 18);

// console.log(adults);

// reduce example

// const numbers = [2,4,6,8,10];

// const sum  = numbers.reduce((total, sum)=> total + sum, 0);

// console.log(sum);

const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Amit" },
  { id: 3, name: "Neha" },
];

const result = users.reduce((obj, user) => {
  obj[user.id] = user.name;
  return obj;
}, {});


console.log(result);

