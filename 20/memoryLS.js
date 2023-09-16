//Реализовать функцию подсчета объема памяти занимаемого данными в LocalStorage для предыдущей задачи
function calculateLocalStorageSize() {
    let totalSize = 0;

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const data = localStorage.getItem(key);
        const dataSize = encodeURI(data).length; // Размер в байтах

        totalSize += dataSize;
    }

    return totalSize;
}