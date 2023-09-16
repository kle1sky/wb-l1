//Задача на модули и использование внешних библиотек
const moment = require('moment');

module.exports = {
    getCurrentDate: function () {
        return moment().format('YYYY-MM-DD');
    },
    formatDate: function (date) {
        return moment(date).format('MMMM Do, YYYY');
    },
    getDayOfWeek: function (date) {
        return moment(date).format('dddd');
    },
    getMonth: function (date) {
        return moment(date).format('MMMM');
    },
    getNextWeek: function () {
        return moment().add(1, 'week').format('YYYY-MM-DD');
    },
    getPreviousWeek: function () {
        return moment().subtract(1, 'week').format('YYYY-MM-DD');
    }
};