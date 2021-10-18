// Object.create - специальный метод, который позволяет создать новый объект с указаным объектом прототипа и свойствами
const protoForObj = {
  sayHello() {
    return "Hello";
  },
};

// const obj = Object.create(protoForObj);
// console.log(obj); // в __proto__ пустого объекта obj появился метод sayHello()

const obj = Object.create(protoForObj, {
  firstName: {
    value: "Victor",
  },
});

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype.sayHello = function () {
  return `Hello ${this.firstName} ${this.lastName}`;
};

const user = new User("Victor", "Polozov");

// Customer
function Customer(firstName, lastName, membership) {
  User.apply(this, arguments);
  // User(this); // Так вызывать нельзя

  this.membership = membership;
}
// чтобы забрать прототиты ЮЗЕРА и передать КАСТОМЕРУ нужно сделать прототипное наследование
// 1) Прототипное наследование - после объявление класса КАСТОМЕРА
Customer.prototype = Object.create(User.prototype);
// прототипы ЮЗЕРА добавились, но мы потеряли(заменили родные) родное свойство КАСТОМЕРА - constructor, которое содержит ссылку на саму функцию КАСТОМЕРА, поэтому 2)
// 2) Нужно вернуть родные свойства КАСТОМЕРА на место
Customer.prototype.constructor = Customer;

Customer.prototype.getMembership = function () {
  return this.membership.toUpperCase();
};

const customer = new Customer("Ivan", "Ivanov", "basic");

// Для проверки в косоле: customer.getMembership();
//                        customer.sayHello();
