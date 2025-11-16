// forEach, filter,reducer, map, set

// 1.forEach()
// const arr = [10,20,30,5,90,87];
// let sum = 0;

// arr.forEach((number)=>{
//     sum+= number;
// })

// console.log(sum);

// 2.filter()

// const arr = [10,20,30,5,90,87];

//  const newArr = arr.filter((number)=> number>=25)

//  console.log(newArr);

// 3.map

// const arr = [10,20,30,5,90,87];

//  const newArr = arr.map((num)=> num*2);

// console.log(newArr);

const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },]

 
// howto use filter

// const newProduct = products.filter((product)=> product.price>=50).sort((a,b)=>b.price - a.price).map((product)=>({name:product.name, price:product.price}));

// console.log(newProduct);

// const arr = [10, 30, 20,40,60,50];

// const newArr = arr.sort((a,b)=>b-a);
// arr.filter((num)=>num>=20);
// const a = arr.map((number)=> number+2);
// console.log(a);

// reduce method

// const totalprice = products.reduce((accumulator, currentvalue)=>{
//     if(currentvalue.inStock)
//         return accumulator+currentvalue.price;
//     else
//         return accumulator
// },0)

// console.log(totalprice);

// const number = [10,20,30,40];
// const sum = number.reduce((acc,val)=>{
//     return acc + val;
// },0)
// console.log(sum);

const values = [75,50,90,80,65,95];
const max  = values.reduce((acc ,val)=>Math.max(acc, val));
console.log(max);

