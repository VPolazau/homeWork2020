// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
//
// let num1 = parseFloat(prompt(`Введите число`))
// let num2 = parseFloat(prompt(`Введите число повторно`))
// alert(`Сумма чисел равна ` + (num1+num2));




// Получить число pi из Math и округлить его до 2-х знаков после точки
//
let pi_num2 = Math.PI.toFixed(2)
console.log(pi_num2);




// Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
//
let numArr = [15, 11, 16, 12, 51, 12, 13, 51]
console.log(Math.max.apply(null, numArr));
console.log(Math.min.apply(null, numArr));



//  Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
// b. Получить случайное целое число от 0 до X. X - любое произвольное число.
let randomNum = +Math.random().toFixed(2)
console.log(randomNum);


let randomNum0_X;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
// randomNum0_X = getRandomIntInclusive(0, prompt(`Введите число`, 10))
console.log(randomNum0_X);




// Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)
let sum = (0.6 + 0.7).toFixed(2)
console.log(sum);




// Получить число из строки ‘100$’
let strToNum = parseFloat('100$')
console.log(strToNum);
