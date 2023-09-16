function calculateMaxLocalStorageSize() {
    const testKey = 'test';
    let data = '';
    let maxSize = 0;

    // Заполняем данные до достижения предела
    while (true) {
        try {
            data += 'A';
            localStorage.setItem(testKey, data);
        } catch (e) {
            // Достигнут предел
            maxSize = data.length - 1;
            localStorage.removeItem(testKey);
            break;
        }
    }

    return maxSize;
}

const maxLocalStorageSize = calculateMaxLocalStorageSize();
console.log(`Максимальный объем данных: ${maxLocalStorageSize} байт`);