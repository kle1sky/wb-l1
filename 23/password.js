//Анализатор сложности пароля
const input = document.querySelector('input');

function passValidation(event) {
    const value = event.target.value;
    const length = document.querySelector('.length');
    const symbols = document.querySelector('.symbols');
    const caseValue = document.querySelector('.case');
    const number = document.querySelector('.number');

    value.length >= 7 ? length.classList.add('active') : length.classList.remove('active');
    value.match(/[!@#$%^&*]/) ? symbols.classList.add('active') : symbols.classList.remove('active');
    value.match(/[a-z]/) && value.match(/[A-Z]/) || value.match(/[а-я]/) && value.match(/[А-Я]/) ? caseValue.classList.add('active') : caseValue.classList.remove('active');
    value.match(/\d/) ? number.classList.add('active') : number.classList.remove('active');
}

input.addEventListener('input', passValidation);