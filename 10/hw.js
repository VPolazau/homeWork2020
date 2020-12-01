(function(){

  // 1)Используя if, записать условие:
  let value = 123;
  //   а)если переменная равна нулю, присвоить ей 1;
  if (value == 0) value = 1
  console.log(value);
  //   b)если меньше нуля - строку “less then zero”;
  if (value < 0) console.log('less then zero');
  //   c)если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись).
  else if (value > 0) console.log(value *= 10);

  // 2)Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
  //   Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair
  //   в объекте car изменить на true; иначе изменить на false.
  let car = {
    name: 'Lexus',
    age: 10,
    create: 2008,
    needRepair: false
  }
  if (car.age >= 5) {
    console.log('Need Repair');
    car.needRepair = true
  }
  console.log(car);

  // 3)Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
  //   Написать условие если у item есть поле discount и там есть значение которое не NaN а также есть поле price значение которого также не NaN то в объекте item создать поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить расчет. иначе если поля discount нет то вывести просто поле price в консоль.
  let item = {
    name: 'Intel Core i7',
    price: '100$',
    // discount: '15%'
  }
  if (item.hasOwnProperty('discount') && item.discount !== NaN && item.hasOwnProperty('price') && item.price !== NaN) {
    item.priceWithDiscount = parseFloat(item.price)*(100 - parseFloat(item.discount))/100;
    console.log(item.priceWithDiscount);
  }
  else console.log(item.price);

  // Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.
  let product = {
    name: 'Яблоко',
    price: '10$'
  };

  let min = 10; // минимальная цена
  let max = 20; // максимальная цена
  if (parseFloat(product.price) >= min && parseFloat(product.price) <= max ){
    console.log(product.name);
  } else console.log('Products not found');
})()
