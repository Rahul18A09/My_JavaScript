// console.log("Rahul");

// Without async-await
// fetch("https://fakestoreapi.com/users")
// .then(responce => responce.json())
// .then(data => console.log(data));

// with async-await

// async function getUsers() {
//   const responce = await fetch("https://fakestoreapi.com/users");
//   const data = await responce.json();
//   console.log(data);
// }

// getUsers();

// example without API

// function waitTwoSeconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Done waiting"), 4000);
//   });
// }

// async function demo() {
//   console.log("Start");

//   const msg = await waitTwoSeconds();
//   console.log(msg);

//   console.log("End");
// }

// demo();

// 1.Async-Await vs Promises

// Using Pormises (old way)

// fetch("https://fakestoreapi.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Using Async-Await (Modern way)

// async function getData() {
//     try {
//         const res = await fetch("https://fakestoreapi.com/users");
//         const data =await res.json();
//         console.log(data);

//     }catch(err) {
//         console.log(err);

//     }
// }
// getData();

//2. Error Handling with try-catch

const productcontainer = document.getElementById("products");

async function loadProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log(data);

    let output = "";

    data.forEach((product) => {
      output += `<div class="product">
        <img src="${product.image}">
        <h2>${product.title.slice(0, 25)}...</h2>
        <p>Price: ${product.price}</p>
        <button>Add to Cart</button>
        </div>`;
    });

    productcontainer.innerHTML = output;
  } catch (err) {
    console.log("Something went wrong:", err);
  } finally {
    console.log("Mai to chalunga hi!");
  }
}

loadProducts();

// 3. Real Project Examples

// Example 1: Show API data in HTML Table

// async function getUsers() {
//   try {
//     const res = await fetch("https://fakestoreapi.com/users");
//     const data = await res.json();
//     // console.log(data);

//     let rows = "";
//     data.forEach((user) => {
//       rows += `
//         <tr>
//              <td>${user.id}</td>
//              <td>${user.name.firstname}</td>
//              <td>${user.name.lastname}</td>
//         </tr>`;
//     });

//     document.getElementById("tbody").innerHTML = rows;
//   } catch (err) {
//     console.log("Error:", err);
//   }
// }

// Example 2: Make a function wait Using async-await

// function delay(time) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, time);
//   });
// }

// async function run() {
//   console.log("Start");

//   await delay(2000);
//   console.log("end");

//   console.log("After 2 seconds");
// }

// run();

// Example 3: Multiple API calls (Sequential)

// async function run() {

//     const [users,  products] = await Promise.all([
//         fetch("https://fakestoreapi.com/users")
//         .then(res => res.json()),

//         fetch("https://fakestoreapi.com/products")
//         .then(res => res.json())
//     ]);

//     console.log(users);
//     console.log(products);
// }

// run();
