//Создать и добавить стиль для элемента
const list = document.querySelector('.list');

function createStyleElement(tagName, styles) {
    const element = document.createElement(tagName);
    for (const key in styles) {
        element.style[key] = styles[key];
    }
    list.append(element);
}

const styles = {
    width: '200px',
    height: '200px',
    backgroundColor: 'midnightblue',
    borderRadius: '50%'
}

createStyleElement('li', styles);