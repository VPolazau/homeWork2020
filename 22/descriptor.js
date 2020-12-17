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
    // debugger; // Способ перейти в нужную стопточку
  },
});

//
//
// Та самая функция с переменной
function foo() {
  globalVal = 10;
}
foo();
//
//
//
//
//
//
//
// Задача: Вам попал в руки код объекта User, который хранит имя и фамилию в свойстве this.fullName:
function user(fullName) {
  this.fullName = fullName;

  // Имя и фамилия всегда разделяются пробелом.
  // Сделайте, чтобы были доступны свойства firstName и lastName, причём не только на чтение, но и на запись.
  //
  //
  Object.defineProperties(this, {
    firstName: {
      get: function () {
        return fullName.split(" ")[0];
      },
      set: function (newFirstName) {
        this.fullName = newFirstName + " " + this.lastName;
      },
    },
    lastName: {
      get: function () {
        return fullName.split(" ")[1];
      },
      set: function (newLastName) {
        this.fullName = this.firstName + " " + newLastName;
      },
    },
  });
}
//
//
var vasya = new user("Василий Попкин");
console.log(vasya.firstName); // Василий
console.log(vasya.lastName); // Попкин
vasya.lastName = "Сидоров";
console.log(vasya.fullName); // Василий Сидоров
