//(1) Access & Modify
// let fruits = ["Banana", "Apple", "Graps"];
// console.log(fruits.length);

let num = [10, 20, 30];
// console.log(num[0]);
// console.log(num[num.length-1]);

// num[2] = 25; //modify
// num[3] = 40; //add at last
// console.log(num); 


// (2) Adding & Removing

// push   //add at the end of an array.
// let number = [1,2,3,4];
// number.push(5,6);
// console.log(number);

//pop   //remove from an end of an array.
// let number = [1,2,3,4,5];
// number.pop();
// console.log(number);

// unshift   // add at the start of an array
// let number = [1,2,3,4,5];
// number.unshift(0);
// console.log(number);

// shift   //remove from the start of an array
// let number = [1,2,3,4,5];
// number.shift();
// console.log(number);

// (3) Searching in Arrays

// indexOf() // find the index number of an elemnet
// const fruits = ['apple', 'banana', 'orange', 'banana'];
// console.log(fruits.indexOf('banana'));

// lastindexof() // find the last index number of element 
// const fruits = ['apple', 'banana', 'orange', 'banana'];
// console.log(fruits.lastIndexOf("banana"));


// const bananaindex = fruits.indexOf('banana')
// console.log(bananaindex);

// includes() // find that the element is exist in an array or not it returns the boolean value true or false
// const fruits = ['apple', 'banana', 'orange'];
// console.log(fruits.includes('banana'));

// find()

// const users = [
//     {id: 1, name:'Alice'},
//     {id: 2, name:'Bob'},
//     {id: 3, name:'Charlie'}
// ];

// const bob = users.find(user => user.name ==='Bob');
// console.log(bob);

// const charlieIndex = users.findIndex(user => user.id === 3);
// console.log(charlieIndex);


// (4) Extracting & Editing

// let arr  = [10,20,30,40,50];

// arr.slice(1,4);
// console.log(arr.slice(1,4));

// arr.splice(3, 1, "R");
// console.log(arr);

// arr.join('*');
// console.log(arr.join(" * "));



// (5) Iteration Method

// forEach()

// basic
// let numbers = [1,2,3,4,5];

// numbers.forEach(function(num){
//     console.log(num);

// });

// using arrow function

// let fruits = ["apple", "banana", "mango"];

// fruits.forEach((fruit, index) => {
//     console.log(index + "=>" + fruit);

// })



// Map()

// let numbers = [1, 2, 3, 4];

// let squares = numbers.map(num => num * num);

// console.log(squares);


// filter()

// let numbers = [1, 2, 3, 4, 5, 6];

// let evens = numbers.filter(num => num % 2 === 0);

// console.log(evens);

// reduce()

// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce((accumulator , currentValue) => accumulator + currentValue, 0);

// console.log(sum);

// Find maximum number

// let numbers = [10, 25, 3, 99, 42];

// let max = numbers.reduce((acc, curr) => acc > curr ? acc : curr);

// console.log(max);

// let numbers = [10, 45, 22, 98, 33];

// let maxNumber = numbers.reduce(function (accumulator, currentValue) {
//     if (currentValue > accumulator) {
//         return currentValue;
//     } else {
//         return accumulator
//     }
// });

// console.log("Maximum number is: ", maxNumber );

// shorter arrow function version:
// let numbers = [10, 45, 22, 98, 33];

// let maxNumber = numbers.reduce((a,b)=> a > b ? a:b);
// console.log("Maximum number is: ", maxNumber);


// some()

// let numbers = [1, 3, 5, 7, 10];

// let haseven = numbers.some(num => num % 2 === 0);

// console.log(haseven); //return true

// every()

// let numbers = [1, 3, 5, 7, 8];

// let allPositive = numbers.every(num => num > 0);

// console.log(allPositive);

// find()

// let numbers = [1, 3, 7, 2, 8];

// let firstEven = numbers.find(num => num % 2 === 0);

// console.log(firstEven);

// findIndex()

// let numbers = [1, 3, 7, 8, 10];

// let index = numbers.findIndex(num => num % 2 === 0);
// console.log(index);


// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.indexOf("Mango");
// console.log(position);

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// let position = fruits.lastIndexOf("Apple");
// console.log(position);

// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Mango"));

// const numbers = [4,9,16,25,29];
// let first = numbers.find(myfunction);

// function myfunction(value, index, array) {
//     return value > 18;
// }
// console.log(first);

// const temp = [27,28,30,40,42,35,30];

// let high = temp.findLast(x => x > 40);
// console.log(high);





