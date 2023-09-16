//Задача на работу с объектами

const book = {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    year: 1991,

    getTitle: function () {
        return this.title;
    },

    getAuthor: function () {
        return this.author;
    },

    getYear: function () {
        return this.year;
    },

    setTitle: function (newTitle) {
        this.title = newTitle;
    },

    setAuthor: function (newAuthor) {
        this.author = newAuthor;
    },

    setYear: function (newYear) {
        this.year = newYear;
    }
}