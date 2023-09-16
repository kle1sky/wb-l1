//Задача о коллекции функций
const functions = [
    () => console.log(1),
    () => console.log(2),
    () => console.log(3),
];

//Решение через цикл
for (let i = 0; i < functions.length; i++) {
    functions[i]();
}

//Решение через рекурсию
function callFunction(index) {
    if (index >= functions.length) {
        return;
    }

    functions[index]();

    callFunction(index + 1);
}

callFunction(0);