// alert('Rahul!');
// console.log("Hello World!");


//Select Elements
const title = document.getElementById("title");
const message = document.getElementById("message");

//Change text when button clicked

document.getElementById("changeText").addEventListener('click', () => {
    title.textContent = "Text Changed!";
    message.textContent = "You just manipulated the DOM!";
})

//Change color when button clicked

document.getElementById("changeColor").addEventListener('click', () => {
    document.body.style.backgroundColor = 'lightblue';
    title.style.color = 'darkred';
});

// Add new element

document.getElementById("addElement").addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "New element added";
    document.body.appendChild(newParagraph);
    newParagraph.style.color = 'white';
    newParagraph.style.backgroundColor = 'orange';

});

//Remove the paragraph

document.getElementById("removeElement").addEventListener('click', () => {
    message.remove();
})
