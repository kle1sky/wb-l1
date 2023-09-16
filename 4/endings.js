//Задача на окончания слов
const wordEndingModule = (function () {
    function getLastDigit(number) {
        return number % 10;
    }

    function getSecondToLastDigit(number) {
        return Math.floor((number % 100) / 10);
    }

    function getEndingByCase(number, endings) {
        const lastDigit = getLastDigit(number);
        const secondToLastDigit = getSecondToLastDigit(number);

        if (secondToLastDigit === 1) {
            return endings[2];
        } else {
            if (lastDigit === 1) {
                return endings[0];
            } else if (lastDigit >= 2 && lastDigit <= 4) {
                return endings[1];
            } else {
                return endings[2];
            }
        }
    }

    return {
        changeEnding: function (number, endings) {
            const ending = getEndingByCase(number, endings);
            return `${number} ${ending}`;
        }
    };
})();


//Тест
const number = 102;
const wordEndings = ['сообщение', 'сообщения', 'сообщений'];

const result = wordEndingModule.changeEnding(number, wordEndings);
console.log(result);