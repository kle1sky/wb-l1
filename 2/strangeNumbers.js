//Задача на странные числа
function isStrangeNumber(num) {
  let divisorsSum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      divisorsSum += i;
    }
  }
  return divisorsSum === num;
}