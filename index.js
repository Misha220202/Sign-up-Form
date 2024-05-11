function toUpperCase(event) {
    let value = event.target.value;
    value = value.toUpperCase();
    event.target.value = value;
}

document.querySelector('#first_name').addEventListener('input', toUpperCase);
document.querySelector('#last_name').addEventListener('input', toUpperCase);

document.querySelector('#phone_number').addEventListener('input', event => {
    let value = event.target.value;
    value = value.replace(/-/g, '');
    if (value.length > 3 && value.length <= 6) {
        value = value.slice(0, 3) + '-' + value.slice(3);
    } else if (value.length > 6 && value.length <= 10) {
        value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6);
    }
    event.target.value = value;
});

const password = document.querySelector('#password');
const confirm_password = document.querySelector('#confirm_password');

function checkPassword() {
    const form = document.querySelector('form');
    let password1 = password.value;
    let password2 = confirm_password.value;
    if (password1 !== password2) {
        password.classList.add('password-mismatch');
        confirm_password.classList.add('password-mismatch');
        if (form.lastElementChild.tagName.toLowerCase() === 'fieldset') {
            const note = document.createElement('p');
            note.textContent = '*Passwords do not match';
            note.style.color = 'red';
            note.style.fontSize = '0.7rem';
            form.appendChild(note);
        }
    } else {
        password.classList.remove('password-mismatch');
        confirm_password.classList.remove('password-mismatch');
        if (form.lastElementChild.tagName.toLowerCase() === 'p') {
            form.removeChild(form.lastElementChild);
        }
    }
}

password.addEventListener('input', checkPassword);
confirm_password.addEventListener('input', checkPassword);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('focus', () => input.classList.remove('invalid'))
})

document.querySelector('button').addEventListener('click', event => {
    event.preventDefault(); //组织表单提交
    inputs.forEach((input) => {
        if (input.hasAttribute('pattern')) {
            var pattern = new RegExp(input.getAttribute('pattern'));
            if (!pattern.test(input.value) || !input.value) {
                input.classList.add('invalid');
            } else {
                input.classList.remove('invalid');
            }
        }
    });
});