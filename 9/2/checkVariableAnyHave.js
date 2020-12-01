(function(){

  // Создайте пустой объект user.
  // Добавьте свойство name со значением John.
  // Добавьте свойство surname со значением Smith.
  // Измените значение свойства name на Pete.
  // Удалите свойство name из объекта.
  user = {};
  user.name = 'John';
  user.surname = 'Smith';
  console.log(user);
  user.name = 'Pete';
  console.log(user);
  delete user.name;
  console.log(user);

  // Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
  let obj1 = { /*name: 'Victor'*/ }
  function isEmpty(obj) {
    for (var variable in obj) {
      return false;
    }
    return true;
  }
  console.log(isEmpty(obj1));

  // Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum = 0;
   for (var variable in salaries) {
     sum += salaries[variable];  // salaries.variable -> "John", "Ann", "Pete"        Обращение к СВОЙСТВАМ
   }                             // salaries[variable] -> 100, 160, 130               Обращение к ЗНАЧЕНИЯМ
   console.log(salaries, `  =  `, sum);


   //Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.
   function multiplyNumeric(obj) {
     for (var key in obj) {
       if (typeof(obj[key]) == 'number') {
         obj[key] *= 2;
       }
     }
   }
   let menu = {
     width: 200,
     height: 300,
     title: "My menu"
   };
   multiplyNumeric(menu);
   console.log(menu);
   
})()
