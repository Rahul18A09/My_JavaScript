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

const user = {
    name: "rahul",
    age:25,
    city: "Delhi"
}

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

console.log(Object.entries(user));















 


