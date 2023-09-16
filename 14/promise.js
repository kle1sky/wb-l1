//Задача на промисы
function loadImage(URL) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = URL;

        image.onload = () => {
            const imageData = {
                width: image.width,
                height: image.height,
                src: image.src
            };
            resolve(imageData);
        };

        image.onerror = () => {
            reject('Ошибка при загрузке изображения');
        };
    });
}