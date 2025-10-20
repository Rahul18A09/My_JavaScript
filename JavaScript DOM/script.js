// alert("Rahul!");
// console.log("Hello World!");

//  To Manipulate HTML Select element

// By Id
const heading = document.getElementById("heading");

const changeBtn = document.getElementById("changeBtn");
const addBtn = document.getElementById("addBtn");

// Change heading text on Click
changeBtn.addEventListener('click',() =>{
    heading.textContent  = "You Just clicked the button!";
    heading.style.color = 'white';
    heading.style.backgroundColor = "blue";
} );

//create new element and append it in the body
addBtn.addEventListener('click', ()=>{
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "A new paragraph was added!";
    document.body.appendChild(newParagraph);
});



// By Class 
const paragraph = document.getElementById("text");

// By Tag
const buttons = document.getElementById("button");

// Using CSS selectors
const btn = document.querySelector("#changeBtn");
const allButtons = document.querySelectorAll("button");

// Changing Text or HTML 
heading.textContent = "DOM Manipulation is Fun!";
paragraph[0].innerHTML = `<strong>Updated using innerHTML!</strong>`;

// Changing Attributes and Styles

// change attribute
heading.id = 'mainTitle';
document.querySelector("p").setAttribute("title", "Paragraph tootip");

// change CSS Style
heading.style.color = 'blue';
heading.style.backgroundColor = "lightgray";

// To add ot remove CSS classes dynamically:
heading.classList.add("highlight");
heading.classList.toggle("hidden");

// create and append a new element
const newPara = document.createElement("p");
newPara.textContent = "This is a new Paragraph!";
document.body.appendChild(newPara);

// Remove an element
document.getElementById("p").remove();
document.querySelector(".text").remove();