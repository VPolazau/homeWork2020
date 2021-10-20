// 1.  Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):
//
//     function Component(tagName) {
//       this.tagName = tagName || 'div';
//       this.node = document.createElement(tagName);
//     }
//
//     Пример вызова:
//     const comp = new Component('span');

class Component {
  constructor(tagName) {
    this.tagName = tagName || "div";
    this.node = document.createElement(tagName);
  }
}
// const comp = new Component("span");

//
//
//
// 2.  Реализовать конструктор и методы в ES6 синтаксисе:
//
//     function Component(tagName) {
//       this.tagName = tagName || 'div';
//       this.node = document.createElement(tagName);
//     }
//
//     Component.prototype.setText = function (text) {
//       this.node.textContent = text;
//     };

class Component2 {
  constructor(tagName) {
    this.tagName = tagName || "div";
    this.node = document.createElement(tagName);
  }
  get tag() {
    return this.tagName;
  }
  set tag(newTagName) {
    this.tagName = newTagName;
  }
}

Component2.prototype.setText = function (text) {
  this.node.textContent = text;
};
const comp = new Component2("span");

// 3.  Создать класс калькулятора который будет принимать стартовое значение и у него будут
//     методы сложить, вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.
