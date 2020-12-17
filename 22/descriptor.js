//
//
//
const name = {
  firstName: "Victor",
  lastName: "Polozov",
  yo: 21,
  // get age() {
  //   return this.age;
  // },
  // set age(value) {
  //   this.age = value;
  // },
};
//
//
Object.defineProperty(name, "lastName", {
  configurable: false, // не можем удалить св-во, но можем перезаписывать
  enumerable: false, // св-во становится не итерируемым(не перебираемым).Оно не будет выдно для циклов, Object.Key(values) ...
  writable: false, // данное св-во нельза пере/записывать, зато можно удалить
  // get: function () {},
  // set: function () {},     //  так же гет и сет можно указывать в обьекте ^^^^^^^^
});

//
//
//
//
//
//
// Таким образов мы можем найти в большом коде функцию(в Call Stack), записывающая глобальную переменную, которая ломает весь код
Object.defineProperty(window, "globalVal", {
  set: function (value) {
    console.log(value);
    debugger; // Способ перейти в нужную стопточку
  },
});

//
//
// Та самая функция с переменной
function foo() {
  globalVal = 10;
}
foo();
