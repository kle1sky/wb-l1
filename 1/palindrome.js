//Задача на палиндром 
function isPalindrome(str) {
    str = str.toUpperCase();
    str = str.replace(/[^А-Яа-я]/g, '')
    console.log(str);
    return str === str.split('').reverse().join('');
}