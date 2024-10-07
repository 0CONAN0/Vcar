let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

const validEmail = "conangaming007@gmail.com";
const validPassword = "Conan@1234";

let
    username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    engine(username, 0, "Username cannot be blank.");
    engine(email, 1, "Email cannot be blank.");
    engine(password, 2, "Password cannot be blank.");

    // Proceed only if fields are not empty
    if (username.value.trim() !== "" && email.value.trim() !== "" && password.value.trim() !== "") {
        validateInfo();
    }
});

function validateInfo() {
    if (email.value === validEmail && password.value === validPassword) {
        // Redirect to index.html
        window.location.href = "home.html";
    } else {
        // Provide feedback for incorrect credentials
        errorMsg[1].innerHTML = "Invalid email or password.";
        errorMsg[2].innerHTML = "Invalid email or password.";
        email.style.border = "2px solid red";
        password.style.border = "2px solid red";
        failureIcon[1].style.opacity = '1';
        failureIcon[2].style.opacity = '1';
        successIcon[1].style.opacity = '0';
        successIcon[2].style.opacity = '0';
    }
}

let engine = (id, serial, message) => {
    if (id.value.trim() === "") {
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";
        failureIcon[serial].style.opacity = '1';
        successIcon[serial].style.opacity = '0';
    } else {
        errorMsg[serial].innerHTML = '';
        id.style.border = "2px solid green";
        failureIcon[serial].style.opacity = '0';
        successIcon[serial].style.opacity = '1';
    }
};
