// Все внутренности в открытом доступе
// -----------------------------------------------
// const User = {
//   name: "Victor",
//   getName() {
//     return this.name;
//   },
//   setName(name) {
//     this.name = name;
//   },
// };

// Замыкание помогает спрятать данные, но в данном случае можно перезаписать функции
// НП
// victor.getName = function(){return 'Ups...'}
// victor.getName() =======>>>>>> 'Ups...'
// -----------------------------------------------
// function User(name) {
//   let userName = name;
//
//   return {
//     getName() {
//       return userName;
//     },
//     setName(name) {
//       userName = name;
//     },
//   };
// }
// const victor = new User("Victor");

// В данном же случае мы запретили изменение наших методов
//// -----------------------------------------------
// function User(name) {
//   let userName = name;
//
//   return Object.freeze({
//     getName() {
//       return userName;
//     },
//     setName(name) {
//       userName = name;
//     },
//   });
// }
// const victor = new User("Victor");

// Скрытие имени свойсва
// В таком случае мы скрываем имя метода в переменной symbol и теперь не имеем доступа из вне, тк не знаем по какому имени этод метод обращается внутри
//// -----------------------------------------------
function User(name) {
  const symbol = Symbol();

  return {
    [symbol]: name,
    getName() {
      return this[symbol];
    },
    setName(name) {
      this[symbol] = name;
    },
  };
}
const victor = new User("Victor");
