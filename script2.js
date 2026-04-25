// practical questions for Interview

// 1. Reverse a String

// "Hello";

// function reverseString(str) {
// return str.split('').reverse().join('');

// }

// console.log(reverseString("hello"));


// 2. Chech panlindrome

function isPalindrome(str){
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("racecar"));
