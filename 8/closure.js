//Задача о замыканиях 
const functions = [
    () => 1,
    () => 2,
    () => 3,
];

function closure(arrFunctions) {
    return function () {
        return arrFunctions.map(func => func());
    }
}

const result = closure(functions);

console.log(result());