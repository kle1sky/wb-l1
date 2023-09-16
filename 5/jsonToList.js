//Разработайте функцию преобразования JSON в связный список
function jsonToLinkedList(json) {
    const data = JSON.parse(json);
    let head = null;
    let current = null;

    for (let i = 0; i < data.length; i++) {
        const node = {
            value: data[i],
            next: null
        };

        if (head === null) {

            head = node;
            current = node;
        } else {
            current.next = node;
            current = node;
        }
    }
    return head;
}

//Функция по выводу значений списка
let current = linkedList;
while (current !== null) {
    console.log(current.value);
    current = current.next;
}