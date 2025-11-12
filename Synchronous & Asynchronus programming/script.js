// JavaScript Event

// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }

// Javascript Callback function

// function greet(name, callback) {
//   const greetingElement = document.getElementById("greeting");
//   greetingElement.innerHTML = "Hello" + name;
//   callback();
// }

// function sayGoodbye() {
//   const goodbyeElement = document.getElementById("farewell");
//   goodbyeElement.innerHTML = "Goodbye!";
// }

// greet("Alice", sayGoodbye);

// function myDisplayer(some) {
//   document.getElementById("sum").innerHTML = some;
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// let result = myCalculator(10, 10);
// myDisplayer(result);

// Promises

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("network response was not ok");
//     }
//     return response.json();
//   })
//   .then(data=> {
//     console.log("Data received:", data);
//   })
//   .catch(error=> {
//     console.error("There was a problem with the fetch operation:", error);
//   });
