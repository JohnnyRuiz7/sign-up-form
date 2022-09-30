const password = document.getElementById('user-password')
const passwordConfirmation = document.getElementById('user-password-confirmation')
const left = document.querySelector('.form-left')
const submitButton = document.querySelector('button')
const div = document.createElement('div')
div.textContent = '* Passwords do not match!'
div.style.color = 'red'
div.style.fontSize = '10px'
div.setAttribute('id', 'password-fail')

submitButton.addEventListener('click', submit)

function submit() {
    if (password.value === passwordConfirmation.value) {
        submitButton.removeAttribute('disabled')
        submitButton.setAttribute('enabled', true)
        const passwordFail = document.querySelector('#password-fail')
        passwordFail.remove()
    }

    else {
        submitButton.removeAttribute('enabled')
        submitButton.setAttribute('disabled', true)
        left.appendChild(div)
    }
}

password.addEventListener('keyup', checkPassword)
passwordConfirmation.addEventListener('keyup', checkPassword)

function checkPassword() {
    if (password.value === passwordConfirmation.value &&
        password.value.match(/[a-z]/g) &&
        password.value.match(/[A-Z]/g) &&
        password.value.match(/[0-9]/g) &&
        password.value.match(/[!@#$%^&*_=+-]/g)) {
        passwordConfirmation.style.borderColor = 'lightgreen'
        password.style.borderColor = 'lightgreen'
        submitButton.removeAttribute('disabled')
        submitButton.setAttribute('enabled', true)
    }

    else {
        passwordConfirmation.style.borderColor = 'red'
        password.style.borderColor = 'red'
    }
}