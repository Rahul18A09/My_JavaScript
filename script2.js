// practical questions for Interview

// 1. Reverse a String

// "Hello";

// function reverseString(str) {
// return str.split('').reverse().join('');

// }

// console.log(reverseString("hello"));

// 2. Chech panlindrome

// function isPalindrome(str){
//     let reversed = str.split('').reverse().join('');
//     return str === reversed;
// }

// console.log(isPalindrome("level"));
// console.log(isPalindrome("hello"));
// console.log(isPalindrome("racecar"));

// 3. Find largest number inan Array

// let arr = [10, 5, 8, 20];

// function maxNum(arr) {
//     return Math.max(...arr)
// }

// console.log(maxNum(arr));

// 4. Remove Duplicates from an array

// let arr = [1,2,2,3,4,4,5];

// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }

// console.log(removeDuplicates(arr));

// 5. count occurences of Characters

// let word = "apple";

// function countChars(str){
//     let obj = {};
//     for (let char of str){
//         obj[char] = (obj[char] || 0) + 1;
//     }

//     return obj;
// }

// console.log(countChars(word));

// 6. FizzBuzz
let i = 0;
for ( let i = 1; i <= 100; i++){
    if( i % 15 === 0)
        console.log("FizzBuzz");
     else if (i % 3 === 0)
        console.log("Fizz");
      else if (i % 5 === 0)
        console.log("Buzz");
       else console.log(i);          
}
