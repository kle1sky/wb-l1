//Добавить анимацию для элемента

function animateElement(element, targetX, targetY, duration) {
    const startX = element.offsetLeft;
    const startY = element.offsetTop;
    const distanceX = targetX - startX;
    const distanceY = targetY - startY;
    const startTime = performance.now();

    function updatePosition(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const newX = startX + distanceX * progress;
        const newY = startY + distanceY * progress;

        element.style.left = newX + 'px';
        element.style.top = newY + 'px';

        if (progress < 1) {
            requestAnimationFrame(updatePosition);
        }
    }

    requestAnimationFrame(updatePosition);
}

const element = document.querySelector('.circle');
animateElement(element, 500, 500, 1000);