//Реализовать виджет, отображающий список постов из любого паблика в VK
VK.init({
    apiId: 51748529,
});

const MAX_LOCAL_STORAGE_SIZE = 5 * 1024 * 1024; // 5 MB вместимость локального хранилища

let offsetGlobal = localStorage.getItem('widgetOffset') ? parseInt(localStorage.getItem('widgetOffset')) : 0;
let count = 10;
let cachedData = JSON.parse(localStorage.getItem('widgetPosts')) ? JSON.parse(localStorage.getItem('widgetPosts')) : [];

const list = document.querySelector('.list');

function getPosts(offset, count) {
    VK.Api.call('wall.get', {
        domain: "omanko",
        count: count,
        offset: offset,
        v: "5.131"
    }, function (data) {
        const posts = data.response.items;

        posts.forEach((post) => {
            list.append(templatePost(post));
        })

        offsetGlobal += count;

        if (calculateLocalStorageSize() >= MAX_LOCAL_STORAGE_SIZE) {
            cachedData.splice(0, 10);
        }

        cachedData = cachedData.concat(posts);

        saveLocalStorage('widgetPosts', cachedData);
        saveLocalStorage('widgetOffset', offsetGlobal);
    });
}

const templatePost = (post) => {
    const text = post.text;
    const photos = post.attachments ? post.attachments.filter((attachment) => attachment.type === 'photo') : [];
    const urlPhoto = [];
    photos.forEach((photo) => {
        urlPhoto.push(photo.photo.sizes[photo.photo.sizes.length - 1].url);
    })
    const photoElements = urlPhoto.map((url) => {
        return `<img src="${url}" />`;
    }).join('');
    const likes = post.likes.count;
    const views = post.views.count;

    const li = document.createElement('li');
    li.classList.add('list-item');

    li.innerHTML = `
    <pre>
${text}
    </pre>

    <div class="photo-block">
    ${photoElements}
    </div>

    <div class="likes-views">
    <span class="likes">Likes: ${likes}</span>
    <span class="views">Views: ${views}</span>
    </div>
    `
    return li
}

function loadCachedData() {
    const cachedDataStr = localStorage.getItem('widgetPosts');
    if (cachedDataStr) {
        cachedData = JSON.parse(cachedDataStr);
        cachedData.forEach((post) => {
            list.append(templatePost(post));
        });
    } else {
        getPosts(offsetGlobal, count);
    }
}

let loadTriggered = false;

list.addEventListener('scroll', function () {
    if (list.scrollHeight - list.scrollTop <= list.clientHeight + 200 && !loadTriggered) {
        loadTriggered = true;
        getPosts(offsetGlobal, count);
    }
});

const scrollHandler = function () {
    if (list.scrollHeight - list.scrollTop > list.clientHeight + 200) {
        loadTriggered = false;
    }
};
list.addEventListener('scroll', scrollHandler);

loadCachedData();





//20 задача
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

// Сохранение в локальное хранилище
const saveLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
    const localStorageSize = calculateLocalStorageSize();
    console.log(`Размер занятой памяти: ${localStorageSize} байт / Максимальный размер хранилища: ${MAX_LOCAL_STORAGE_SIZE} байт`);
}