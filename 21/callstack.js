//Вычислить размер коллстэка в основных браузерах: Chrome, Firefox, Opera и Safari (если есть возможность).

let stackSize = 0;

function recursiveFunction() {
    stackSize++;
    recursiveFunction();
}

try {
    recursiveFunction();
} catch (error) {
    console.log('Estimated stack size:', stackSize);
}

/* Примерная оценка размера стека вызовов функций, так как размер стека вызовов функций может зависеть от разных факторов, 
таких как версия браузера, операционная система и конфигурация устройства. Функция вызывает саму себя и увеличивает счетчик до тех пор, 
пока не вызовет ошибку. Ошибка возникает из-за переполнения стека вызовов функций. */

//Результаты: Opera: 13 936, Chrome: 13 936, Firefox: всегда по разному (11 103 - 22 605)