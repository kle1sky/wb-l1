//Необходимо реализовать простое поле ввода адреса с функцией геокодинга
const list = document.querySelector('.list');
const input = document.querySelector('input');

//Комбинированная функция защиты от троттлинга и дебаунсинга
function throttleAndDebounce(func, delay) {
    let timeoutId;
    let lastExecutedTime = 0;

    return function () {
        const context = this;
        const args = arguments;
        const currentTime = Date.now();

        clearTimeout(timeoutId);

        if (currentTime - lastExecutedTime >= delay) {
            func.apply(context, args);
            lastExecutedTime = currentTime;
        } else {
            timeoutId = setTimeout(function () {
                func.apply(context, args);
                lastExecutedTime = Date.now();
            }, delay);
        }
    };
}

function geocode(address) {
    const apiKey = '738bcff2-b965-49a1-ada0-73585e83d25d';
    const addressUpd = address.replace(' ', '+');

    const url = `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&format=json&geocode=${addressUpd}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const addresses = data.response.GeoObjectCollection.featureMember.map(feature => feature.GeoObject);

            list.innerHTML = '';

            addresses.forEach(address => {
                const li = document.createElement('li');
                li.innerHTML = `<span>${address.name}, ${address.description}</span>`;

                list.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
}

input.addEventListener('input', throttleAndDebounce((e) => {
    if (e.target.value === '') {
        list.innerHTML = '';
        return;
    }
    geocode(e.target.value);
}, 500));