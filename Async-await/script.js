// console.log("Hello Kem cho Bdha!");

// async function getData() {
//   const responce = await fetch("https://dummyjson.com/users");
//   const data = await responce.json();
//   console.log(data);

// for (let user of data) {

//    const element =  document.createElement("div");
//    element.classList.add("user");

//    const image = document.createElement("img");
//    image.src = user.image;

//    const userName = document.createElement("h2")
//    userName.textContent = user.username;

//    const anchor = document.createElement("a");
//    anchor.href = user.

// }

// }

// getData();

// Small Project

async function github() {
  try {
    const response = await fetch("https://api.github.com/users");
    if (!response.ok) {
      throw new error("Data is not present");
    }

    const data = await response.json();
    // console.log(data);

    const parent = document.getElementById("first");

    for (let user of data) {
      const element = document.createElement("div");
      element.classList.add("user");

      const image = document.createElement("img");
      image.src = user.avatar_url;

      const userName = document.createElement("h2");
      userName.textContent = user.login;

      const anchor = document.createElement("a");
      anchor.href = user.html_url;
      anchor.textContent = "Visit Profile";

      element.append(image, userName, anchor);
      parent.append(element);
    }
  } catch (error) {
    console.log("error");
  }

}

github();

