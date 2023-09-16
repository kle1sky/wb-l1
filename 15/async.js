//Задача на асинхронность
async function async () {
    let result = [];

    await result.push(1);
    await result.push(3);
    await result.push(2);

    return result;
}

function push(a, arr) {
    arr.push(a);
}

console.log(async ());