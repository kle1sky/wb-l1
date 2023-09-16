//Задача о сортировке объектов
function sortArray(arr) {
    const result = arr.sort((a, b) => {
        if (a.age === b.age) {
            return a.name.localeCompare(b.name);
        }
        return a.age - b.age
    })
    return result
}


const people = [{
        name: 'John',
        age: 25
    },
    {
        name: 'Alice',
        age: 20
    },
    {
        name: 'Bob',
        age: 30
    },
    {
        name: 'Eve',
        age: 25
    },
];