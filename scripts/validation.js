const form = document.querySelector('.callback-form');  
const nameInput = document.querySelector('#fullName');
const emailInput = document.querySelector('#email');
const storyInput = document.querySelector('#story');
const nameError = document.querySelector('#fullName + .field-error');
const emailError = document.querySelector('#email + .field-error');
const storyError = document.querySelector('#story + .field-error');


function validateName() {
    if (nameInput.validity.valid) {
        nameError.textContent = '';
    } else {
        showNameError();
    }
}

function showNameError() {
    nameError.textContent = 'Please enter your name';
}

function validateEmail() {
    if (emailInput.validity.valid) {
        emailError.textContent = '';
    } else {
        showEmailError();
    }
}

function showEmailError() {
    if (emailInput.validity.valueMissing) {
        emailError.textContent = 'Please enter your email address';
    } else if(emailInput.validity.typeMismatch) {
        emailError.textContent = 'Your email address does not appear to be correct';
    }
}

function validateStory() {
    if (storyInput.validity.valid) {
        storyError.textContent = '';
    } else {
        showStoryError();
    }
}

function showStoryError() {
    storyError.textContent = 'Please enter your message';
}

function validateForm(event) {
    let formHasErrors = false;
    if (!nameInput.validity.valid) {
        formHasErrors = true;
        showNameError();
    }

    if(!emailInput.validity.valid){
        formHasErrors = true;
        showEmailError();
    }

    if(!storyInput.validity.valid){
        formHasErrors = true;
        showStoryError();
    }

    if(formHasErrors){
        event.preventDefault();
    }
}

nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
storyInput.addEventListener('input', validateStory);

form.addEventListener('submit', validateForm);