//Задача на числа фибоначчи
const MathX = (function () {
    function fibonacci(n) {
        if (n <= 1) {
            return n;
        }
        let prev = 0;
        let current = 1;
        for (let i = 2; i <= n; i++) {
            let temp = current;
            current = prev + current;
            prev = temp;
        }
        return current;
    }

    function fibonacciSeries(n) {
        const series = [];
        for (let i = 0; i <= n; i++) {
            series.push(fibonacci(i));
        }
        return series;
    }

    function isPrime(number) {
        if (number < 2) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    function primeNumbers(n) {
        const primes = [];
        for (let i = 2; i <= n; i++) {
            if (isPrime(i)) {
                primes.push(i);
            }
        }
        return primes;
    }

    return {
        fibonacci: fibonacci,
        fibonacciSeries: fibonacciSeries,
        primeNumbers: primeNumbers
    };
})();