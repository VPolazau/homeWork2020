(function(){


  // Если мы не знаем сколько будет аргументов у функции, но нам нужно обращаться к ним. Работаем с forof и arguments
  // Аналогично с массивом неизвестного размера function foo (...mas) -> mas[.........]








  // 1.Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3) Если нет ни одного аргумента, вернуть ноль: multiply() // 0
  function multiply(...mass){
    let multiplyNum = 1;
    for (var el of mass) {
      multiplyNum *= el
    }
    for (var el of mass) {
      return multiplyNum;
    }
    return 0;
  }
  console.log(multiply(2,3,10,10,2,3));

  // 2.Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.
  function reverseString(str){
    let strRev = str.split('').reverse().join('');
    return strRev
  }
  console.log(reverseString('test')); //tset

  // 3.Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
  // getCodeStringFromText(‘hello’) // “104 101 108 108 111”
  // подсказка: для получения кода используйте специальный метод
  function getCodeStringFromText(str){
    strCode = '';
    for (var el of str.split('')) {
      strCode += el.charCodeAt() + ' '
    }
    return strCode;
  }
  console.log(getCodeStringFromText('hello'));

  // 4.Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0). Генерирует рандомное число от 1-10 и сравнивает с заданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.
  function randomizer(n){
    if (n > 10 || n < 0) {
      return console.error('Число выходит за границы. Введите число от 0 до 10');
    }
    let random = Math.floor(Math.random() * 11);
    if (n === random) {
      return console.log(`Угадали! Ваше число ${n}!`);
    }
    return console.log(`Неугадали(( ваше число ${n}, а выпало ${random}.`);
  }
  randomizer(7);

  // 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]
  function masNum(n){
    let arr = [];
    for (var i = 1; i <= n; i++) {
      arr.push(i)
    }
    return console.log(arr);
  }
  masNum(10)

  // 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива.
  // doubleArray([1,2,3]) // [1,2,3,1,2,3]
  function doubleArray(mas){
    return mas.concat(mas);
  }
  console.log(doubleArray([1,2,3]));
  // 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений.
  // changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.
  function changeCollection(){
    var mas = [];
    for (var variable of arguments) {
      variable.splice(0,1);
      mas.push(variable)
    }
    return console.log(mas);
  }
  changeCollection([1,2,3], ['a', 'b', 'c'])

  // 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
  // funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]
  let masUsers = [ {name: 'Denis', age: 29, gender: 'male', work: 'IBA'},
                   {name: 'Ivan', age: 20, gender: 'male', work: 'EPAM'},
                   {name: 'Katy', age: 22, gender: 'female', work: 'ITransition'}
                 ];
  function funcGetUsers(users, key, value) {
    let sortUsers = []
    for (variable of users) {
      if (variable[key] == value) {
        sortUsers.push(variable)
      }
    }
    console.log(sortUsers);
    return sortUsers;
  }
  funcGetUsers(masUsers, "gender", "male");


})()
