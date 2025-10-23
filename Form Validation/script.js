
const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");


const name_error = document.getElementById("name_error");
const email_error = document.getElementById("email_error");
const password_error = document.getElementById("password_error");

form.addEventListener('submit', (e) => {

    var email_check = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/;
    if (name.value === '' || name.value == null) {
        e.preventDefault();
        name_error.innerHTML = "Name is Required";
        name_error.style.color = "red";
    }else {
        name_error.innerHTML = "";
    }

    if (!email.value.match(email_check)) {
        e.preventDefault();
        email_error.innerHTML = "Valid Email is required";
        email_error.style.color = 'red';
    }else {
        email_error.innerHTML = "";
    }

    if (password.value.length <= 5) {
        e.preventDefault();
        password_error.innerHTML = "Password must be more than 6 character";
        password_error.style.color = "red";
    }else {
        password_error.innerHTML = "";
    }

    if (password.value.length >= 20) {
        e.preventDefault();
        password_error.innerHTML = "Password cannot be more than 20 character";
        password_error.style.color = "red";
    }else {
        password_error.innerHTML = "";
    }

    if (password.value === 'password') {
        e.preventDefault();
        password_error.innerHTML = "Password cnanot be password";
        password_error.style.color = "red";
    }else {
        password_error.innerHTML = "";
    }

});
