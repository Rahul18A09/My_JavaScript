//Scope and closure, HOF

// let a = 10;
// const b = 20;

// function greet() {
//   let gobal = 30;
// //   console.log(gobal);
// console.log(a);
// }
// greet();

// function createCounter(){

//     function increament(){
//         console.log("I am increament function");

//     }

//    return increament;
// }

//  const count =  createCounter();
//  count();

// let balance = 500;
// balance += 500;
// console.log(balance);

// function createBankAccount() {
//   let balance = 500;

//   const user = {
//     deposite: function (amount) {
//       if (typeof amount === "number" && amount > 0) {
//         balance += amount;
//         return balance;
//       }
//     },
//     withdraw: function (amount) {
//       if (typeof amount === "number" && amount > 0 && balance >= amount) {
//         balance -= amount;
//         return balance;
//       }
//     },
//     getBalance: function () {
//       return balance;
//     },
//   };

//   return user;
// }

// const customer = createBankAccount();
// console.log(customer.deposite(500));
// console.log(customer.withdraw(300));
// console.log(customer.getBalance());

// let user = {
//   balance: 500,
//   deposite: function (amount) {
//     if (typeof amount === "number" && amount > 0 && this.balance >= amount) {
//       this.balance += amount;
//       return this.balance;
//     }
//   },
// };

// console.log(user.deposite(200));

// <--HOF-->

function double() {
  return function execute() {
    console.log("Hello");
  };
}
const n = double();
n();
