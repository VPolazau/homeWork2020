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

class Calc {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get val_x() {
    return this.x;
  }
  set val_x(x) {
    this.x = x;
  }
  get val_y() {
    return this.y;
  }
  set val_y(y) {
    this.y = y;
  }

  sum() {
    return this.x + this.y;
  }
  diff() {
    return Math.abs(this.x - this.y);
  }
  mul() {
    return this.x * this.y;
  }
  div() {
    if (this.x > this.y) {
      return Math.round((this.x / this.y) * 100) / 100; // округление до 2 знаков после запятой
    }
    return Math.round((this.y / this.x) * 100) / 100;
  }
}

const value = new Calc(512312, 13414);
console.log(`Сложить ${value.val_x} и ${value.val_y}. Ответ: ${value.sum()}`);
console.log(`Вычесть ${value.val_x} и ${value.val_y}. Ответ: ${value.diff()}`);
console.log(`Умножить ${value.val_x} и ${value.val_y}. Ответ: ${value.mul()}`);
console.log(`Разделить ${value.val_x} и ${value.val_y}. Ответ: ${value.div()}`);
