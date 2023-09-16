//Взаимодействие с формами

const form = document.querySelector('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const nameInput = form.elements.name;
    const emailInput = form.elements.email;

    const name = nameInput.value;
    const email = emailInput.value;

    alert(`Имя: ${name}\nEmail: ${email}`);


    form.reset();
}