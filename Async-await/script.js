// console.log("Hello Kem cho Bdha!");

async function getData() {
  const responce = await fetch("https://dummyjson.com/users");
  const data = await responce.json();
  console.log(data);

for (let user of data) {

   const element =  document.createElement("div");
   element.classList.add("user");

   const image = document.createElement("img");
   image.src = user.image;

   const userName = document.createElement("h2")
   userName.textContent = user.username;

   const anchor = document.createElement("a");
   anchor.href = user.




}

}

getData();


