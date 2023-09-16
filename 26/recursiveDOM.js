//Рекурсивный обход дерева DOM

function recursiveDOM(node, action) {
    action(node);

    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
        recursiveDOM(children[i], action);
    }
}

const list = document.querySelector('.list');
const logInfo = (node) => {
    console.log(node.tagName);
}

recursiveDOM(list, logInfo);