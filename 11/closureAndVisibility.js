//Задача о замыканиях и области видимости

function outerFunction() {
    let outerVariable = 'Hello, world!';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const inner = outerFunction();

inner();