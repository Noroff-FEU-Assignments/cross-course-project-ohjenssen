const nameError = document.querySelector(".nameError");
const subjectError = document.querySelector(".subjectError");
const emailError = document.querySelector(".emailError");
const messageSuccess = document.querySelector(".messageSuccess");

const userName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");

const button = document.querySelector("button");
const form = document.querySelector("form");

function checkLength(value, reqLength){
    if(value.trim().length >= reqLength){
        return true;
    } else {
        return false;
    }
};

function validateEmail(email){
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
};

function validateForm(event){
    event.preventDefault(); // Prevents the page from reloading when pressing the button
    
    if(!checkLength(userName.value, 3)){
        nameError.style.display  = "block"; // Makes an error-message appear if input is not valid
    } else {
        nameError.style.display = "none"; // Makes the error-message disappear after a new check (if valid this time)
    }

    if(!checkLength(subject.value, 10)){
        subjectError.style.display = "block";
    } else {
        subjectError.style.display = "none";
    }

    if(!validateEmail(email.value)){
        emailError.style.display = "block";
    } else {
        emailError.style.display = "none";
    }

    if(checkLength(userName.value, 3) && checkLength(subject.value, 10) && validateEmail(email.value)){
        messageSuccess.innerHTML += `<p>Message sent!</p>`;
    }
}

form.addEventListener("submit", validateForm);