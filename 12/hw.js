(function(){

  // 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
  // будут в верхнем регистре. Использовать for или while.
  let strLower = 'i am in the easycode'.split('');
  let strUpperLetter = []
  for (var i = 0; i < strLower.length; i++) {
    switch (i) {
      case 0:
        strUpperLetter += strLower[i].toUpperCase();
        break;
      case strLower.indexOf(' ', i):
        strUpperLetter += ' ' + strLower[strLower.indexOf(' ', i) + 1].toUpperCase();
        i++;
        break;
      default:
        strUpperLetter += strLower[i];
    }
  }
  console.log(strUpperLetter);

  // 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).
  let strRevers = 'tseb eht ma i'.split('')
  let strChanger = [];
  for (var i = strRevers.length - 1 ; i >= 0 ; i--) {
    strChanger += strRevers[i];
  }
  console.log(strChanger);


  // 3. Факториал числа - произведение всех натуральных чисел от 1 до n
  // включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10. Использовать for.
  let factorial = 1;
  let n = 5
  for (var i = 1; i <= n; i++) {
    factorial *= i;
  }
  console.log(factorial);

  // 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
  // где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.
  let strWithSpace = 'JavaScript is a pretty good language';
  let strWithoutSpace = []
  for (var i = 0; i < strWithSpace.length; i++) {
    switch (i) {
      case 0:
        strWithoutSpace += strWithSpace[i].toUpperCase();
        break;
      case strWithSpace.indexOf(' ', i):
        strWithoutSpace += strWithSpace[strWithSpace.indexOf(' ', i) + 1].toUpperCase();
        i++;
        break;
      default:
        strWithoutSpace += strWithSpace[i];
    }
  }
  console.log(strWithoutSpace);

  // 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.
  let masNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  let oddNum = [];
  for (var variable of masNum) {
    if (masNum[variable] % 2) {
      oddNum.push(masNum[variable]);
    }
    else if (variable == 1) {
      oddNum.push(masNum[variable - 1]);
    }
  }
  console.log(oddNum);

  // 6. Дан объект:
  let list = {
       name: 'denis',
       work: 'easycode',
       age: 29
  }
  // Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.
  for (var variable in list) {
    if (list.hasOwnProperty(variable)) {
      if (typeof list[variable] === 'string') {
        var buf = []
        buf = list[variable].toUpperCase();
        list[variable] = buf;
      }
    }
  }
  console.log(list);

})()
