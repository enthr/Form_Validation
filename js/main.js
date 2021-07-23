const form = document.getElementById('form');
const userName = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form_control error';

    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show Success Outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form_control success';
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `${input.previousElementSibling.innerText} is Not Valid`);
    }
};

// Check Required Fields
function checkRequired(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${input.previousElementSibling.innerText} is Required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check input Length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${input.previousElementSibling.innerText} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${input.previousElementSibling.innerText} must be leass than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Check Passwords Match
function checkPasswordsMatch(input1, input2) {
    if(input1.value !== input2.value) {
        showError(input2, 'Passwords Do Not Match');
    }
}

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([userName, email, password, password2]);
    checkLength(userName, 3, 15);
    checkLength(password, 6, 25);
    checkPasswordsMatch(password, password2);
});

