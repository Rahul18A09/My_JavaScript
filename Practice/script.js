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

function waitTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Done waiting"), 2000);
  });
}

async function demo() {
  console.log("Start");

  const msg = await waitTwoSeconds();
  console.log(msg);

  console.log("End");
}

demo();
