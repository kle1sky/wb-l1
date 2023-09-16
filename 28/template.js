//Создать и добавить элемент с использованием шаблонов

const employees = [{
        name: 'John',
        age: 30,
        salary: 100
    },
    {
        name: 'Jane',
        age: 25,
        salary: 200
    },
    {
        name: 'Bob',
        age: 40,
        salary: 300
    }
]

const list = document.querySelector('.grid');
const template = list.querySelector('.template');

employees.forEach(item => {
    const copy = template.content.cloneNode(true);
    copy.querySelector('.name').textContent = item.name;
    copy.querySelector('.salary').textContent = item.salary + ' $';
    copy.querySelector('.age').textContent = item.age + ' лет';
    list.append(copy);
})