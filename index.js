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
const hint = document.querySelector('.hint');
let passwordChecked = false;
function checkPassword() {
    const password1 = password.value;
    const password2 = confirm_password.value;
    if (password1 !== password2) {
        passwordChecked = false;
        hint.classList.remove('hidden');
        hint.classList.add('show');
        password.classList.add('password-mismatch');
        confirm_password.classList.add('password-mismatch');
    } else {
        passwordChecked = true;
        hint.classList.remove('show');
        hint.classList.add('hidden');
        password.classList.remove('password-mismatch');
        confirm_password.classList.remove('password-mismatch');
    }
}
password.addEventListener('input', checkPassword);
confirm_password.addEventListener('input', checkPassword);

document.querySelector('button').addEventListener('click', (event) => {
    let allValid = true;
    document.querySelectorAll('input').forEach(input => {
        if (!(input.validity.valid == true && input.value && passwordChecked == true)) {
            allValid = false;
            event.preventDefault();
        }
    })
    if (allValid) { location.reload(); }
});


