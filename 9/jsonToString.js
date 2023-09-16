//Реализовать функцию конвертации JSON в строку
function jsonToString(obj) {
    if (typeof obj === 'object') {
        let result = '{';
        let keys = Object.keys(obj);

        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let value = obj[key];

            result += `"${key}": ${jsonToString(value)}`;

            if (i < keys.length - 1) {
                result += ', ';
            }
        }

        result += '}';
        return result;
    } else if (typeof obj === 'string') {
        return `"${obj}"`;
    } else {
        return String(obj);
    }
}


//Проверка функции
console.log(jsonToString({
    a: 1,
    b: 2
}));