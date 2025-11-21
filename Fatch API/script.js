// let getProducts = async () => {
//   let apiFirstRes = await fetch("https://dummyjson.com/products");
//   let finalRes =await apiFirstRes.json();
//   console.log(finalRes.products);
// };
// getProducts();

let getProducts = () => {
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((finalRes) => {
      let { products } = finalRes;
      console.log(products);
    })
}

let getCategory = () => {
  fetch("https://dummyjson.com/products/categories")
    .then((res) => res.json())
    .then((finalres)=> {
        console.log(finalres);

    })
};

getProducts();
getCategory();

// document.getElementById("getData").addEventListener("click", getData());

// async function getData() {
//   try {
//     const response = await fetch("https://fakestoreapi.com/users");
//     const data = await response.json();
//     console.log(data);

//     let tbl = "";
//     data.map((value) => {
//       tbl += `<tr>
//       <td>${value.id}</td>
//       <td>${value.name.firstname} ${value.name.lastname}</td>
//       <td>${value.email}</td>
//       <td>${value.password}</td>
//       <td>${value.phone}</td>
//       </tr>`;

//     });

//     document.getElementById("showdata").innerHTML = tbl;

//   } catch (error) {
//     console.log("Error fetching users:", error);
//   }
// }

// function hideData() {
//   let data = document.getElementById("showdata").innerHTML = "";
// }

//  hideData();