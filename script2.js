// practical questions for Interview

// 1. Reverse a String

// "Hello";

// function reverseString(str){
//     return str.split('').reverse().join('');
// }

// console.log(reverseString("Hello"));


// 2. Chech panlindrome

// function isPalindrome(str){
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }
// console.log(isPalindrome("level"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("racecar"));

// function isPalindrome(str){
//     str = str.toString();
//     let reversed = str.split().reverse('').join();
//     return str === reversed;
// }

// console.log(isPalindrome(1234));
// console.log(isPalindrome(racecar));

// 3. Find largest number in an Array

// let arr = [10, 25, 30, 45];

// function maxNum (arr){
//     return Math.max(...arr);
// }

// console.log(maxNum(arr));

// 4. Remove Duplicates from an array

// let arr = [1,1,2,3,3,4,4,5,6];

// function removeDuplicates(arr){
//     return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr));

// 5. count occurences of Characters

// let word = "apple";

// function countChars(str){
//     let obj = {};
//     for (let char of str) {
//         obj[char] = (obj[char] || 0)  + 1;
//     }
//     return obj;
// }

// console.log(countChars(word));


// 6. FizzBuzz

// let i= 10;

// for(let i = 1; i <= 100; i++) {
//     if(i % 15 === 0)
//         console.log("FizzBuzz");
//       else if (i % 3 === 0)
//         console.log("Fizz");
//         else if (i % 5 === 0) 
//             console.log("Buzz");
//          else(i);     
// }


// 7. flatten Array

// let arr = [2, [3,4,[5,6,7,[8,9]]]];

// function flatten(arr){
//     return arr.flat(Infinity);
// }

// console.log(flatten(arr));


// 8.find Missing Number

// let arr = [1,2,4,5,7,8,10];

// function findMissingNumber(arr){
//     let n = arr.length + 1;

//     let expectedSum = (n * (n + 1)) / 2;
//     let actualSum = arr.reduce((sum, num) => sum + num, 0);

//     return expectedSum - actualSum;
// }

// console.log(findMissingNumber(arr));


// 9.  promise

// const promise = new Promise((resolve, reject) => {
//     let success = true;

//     if(success){
//         resolve("Task Completed");
//     }else{
//         reject("Task Failed");
//     }
// });

// promise.then((result)=> {
//     console.log(result);  
// }).catch((error) => {
//     console.log("Error:", error);
    
// });

// 10. Async/await

// async function getData() {
//   try {
//     const data = await fetchData();
//     console.log(data);
    
//   }catch(error) {
//     console.log(error);
    
//   }
// }

// getData();


// Swap variables Without using third variable

// method 1
// let x = 10;
// let y = 15;

// x = x + y; //25
// y = x - y; //10
// x = x - y; //15

// console.log(x);
// console.log(y);

// method 2

// [x, y] = [y, x];

// console.log(x);
// console.log(y);



// start petterns

// 1. Basic Square patttern

// let n = 4;

// for (let i = 1; i <= n ; i++){
//     let row = '';
//     for(let j = 1; j <= n; j++){
//         row += '* ';
//     }
//     console.log(row);
    
// }

// 2.Right Triangle Pattern

// let n = 4;

// for (let i = 1; i <= n; i++){
//     let row = '';
//     for(let j = 1; j <= i; j++){
//         row += '* ';
//     }
//     console.log(row);
    
// }

// 3. Inverted Triangle

// let n = 4;

// for(let i  = n; i >= 1; i--){
//     let row = '';
//     for(let j = 1; j <= i ; j++){
//         row += '* ';
//     }
//     console.log(row);
    
// }



// 4. Pyramid pattern

// let n = 4

// for (let i = 1; i <= n ; i++){
//     let row = "";

//     // spaces

//     for(let j = 1; j <= n-i; j++){
//         row += " ";
//     }

//     // stars

//     for(let k = 1; k <= i ; k++){
//         row += "* ";
//     }

//     console.log(row);
    
// }




// 5. Inverted Pyramid Pattern

let n = 4;

for (let i = n ; i >= 1; i--){
    let row  = "";

    // spaces
for(let j = 1; j <= n-i; j++){
    row +=" ";
}

// stars

for(let k = 1; k <= i; k++){
    row += '* ';
}
console.log(row);

}

// 6. Diamond pattern

// let n = 4;

// // upper part

// for(let i = 1; i <= n; i++){
//   let row = '';

//   // spaces
//   for(let j = 1; j <= n-i; j++){
//     row += ' ';
//   }

//   // stars

//   for(let k = 1; k <= i; k++){
//     row += '* ';
//   }
//   console.log(row);
  
// }

// lower part
// for (let i = n - 1; i >= 1; i--){
//   let row = '';

//   // spaces
// for( let j = 1; j <= n-i; j++){
//   row += ' ';
// }

// // stars
// for(let k = 1; k <= i; k++){
//   row += '* ';
// }

// console.log(row);

// }

// 7. Number square pattern

// let n = 4;

// for(let i = 1; i <= n; i++){
//   let row = '';

//   for(let j = 1 ; j <= n; j++){
//     row += j + " ";
//   }

//   console.log(row);
  
// }

// 8. Right Triangle pattern

// let n = 4;

// for (let i = 1; i <= n; i++){
//   let row = '';

//   for(let j = 1; j <= i; j++){
//     row += j + ' ';
//   }
//   console.log(row);
  
// }

// 9. Inverted Triangle

// let n = 4;

// for (let i = n; i >= 1; i--){
//   let row = '';

//   for(let j = 1; j <= i; j++){
//     row += j + " ";
//   }

//   console.log(row);
  
// }

// 10. Continuous Number 

// let n = 4;
// let num = 1;

// for(let i = 1; i <= n ; i++){
//   let row = '';
//   for (let j = 1 ; j <= i; j++){
//     row  += num +  ' ';
//     num++;
//   }
//   console.log(row);
  
// }


// map


// const prices = [10, 20, 30 ,35];

// const finalPrices = prices.map((price) => price* 1.5);

// console.log(finalPrices);


// extract names from this object

// const users = [
//     {name :  "rahul", age: 25},
//     {name : "Asha", age: 24}
// ];

// const names = users.map((user) => user.name);

// console.log(names);



// Filter

// get event numbers only

// const number = [1,2,3,4,5,6];

// const even = number.filter((num) => num % 2 === 0);

// console.log(even);

// get odd numbers only

// const number = [1,2,3,4,5,6];

// const oddnum =number.filter((num) =>  num % 2 !== 0);

// console.log(oddnum);


// Active users

const users = [
    {name: "rahul", active: true},
    {name: "asha", active: false}
];

const activeUsers = users.filter((user) => user.active);

console.log(activeUsers);



