(function(){

  let string = 'some test string';
  //
  // 1. Получить первую и последнюю буквы строки
  let firstLast = string.split('').slice(0,1) + string.split('').slice(string.length - 1 ,string.length)
  // 2. Сделать первую и последнюю буквы в верхнем регистре
  let upCase = string.split('')
                     .slice(0,1)
                     .join('')
                     .toUpperCase()
             + string.split('')
                     .splice(1, string.length-2)
                     .join('')
             + string.split('')
                     .slice(string.length - 1 ,string.length)
                     .join('')
                     .toUpperCase();
  // 3. Найти положение слова ‘string’ в строке
  let indexWord = string.split(' ').indexOf('string') + 1;
  // 4. Найти положение второго пробела (“вручную” ничего не считать)
  let indexFirstSpace = string.split('').indexOf(' ');
  let indexSecondSpase = string.split('').indexOf(' ', indexFirstSpace+1);
  // 5. Получить строку с 5-го символа длиной 4 буквы
  let strFrom5length4 = string.split('').splice(5,4).join('');    // test
  // 6. Получить строку с 5-го по 9-й символы
  let strFrom5to9 = string.split('').slice(5,9+1).join('');   // test
  // 7. Получить новую строку из исходной путем удаления последних 6-и символов
  // (то есть исходная строка без последних 6и символов)
  let without6 = string.split('').slice(0,string.length - 6).join('')   // some test
  // 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет
  // содержаться текст “2016”
  let a = 20, b = 16
  string = +[].concat(a, b).join('')


  console.log(firstLast);
  console.log(upCase);
  console.log(indexWord);
  console.log(indexSecondSpase);
  console.log(strFrom5length4);
  console.log(strFrom5to9);
  console.log(without6);
  console.log(string);
})()
