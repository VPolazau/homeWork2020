(function(){
  // 1)Записать в виде switch case следующее условие:
  //   if (a === ‘block’) {
  //   	console.log(‘block’)
  //   } else if (a === ‘none’) {
  //   	console.log(‘none’)
  //   } else if (a === ‘inline’) {
  //   console.log(‘inline’)
  //   } else {
  //   	console.log(‘other’)
  //   }
  //   Записать условие, используя конструктор switch. В консоли должно отразиться только одно значение.
  let a = 'qwerty';
    switch (a) {
      case 'block':
        console.log('block');
        break;
      case 'none':
        console.log('none');
        break;
      case 'inline':
        console.log('inline');
        break;
      default: console.log('other');
    }

  // Eсли переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
  let x = 'hidden';
  x = x == 'hidden' ? 'visible' : 'hidden';
  console.log(x);

  // 2)а)если переменная равна нулю, присвоить ей 1;
  //   b)если меньше нуля - строку “less then zero”;
  //   c)если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
  let value = -123;
  value = value == 0 ? 0 : value < 0 ? 'less then zero' : value * 10;
  console.log(value);

})()
