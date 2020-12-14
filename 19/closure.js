(function () {
  //
  //
  function updateValue(val = 0) {
    let x = val;
    return function (num = 0) {
      return (x += num);
    };
  }
  // const updVal = updateValue(2);
  // console.log(updVal(1));
  console.log(updateValue(2)(1)); // СОКРАЩЁННЫЙ СПОСОБ ВЫЗОВА
  //
  //
  //
  function checkCred() {
    const login = "test";
    const password = "1111";
    return {
      checkLogin(val) {
        return login === val;
      },
      checkPassword(val) {
        return password === val;
      },
    };
  }

  const check = checkCred();
  console.log(check);
  console.log(check.checkLogin("test"));
  //
  //
  function clousureExample() {
    const arrOfFunc = [];
    let value = "";

    for (let i = 0; i < 10; i++) {
      value += i;
      arrOfFunc.push(function () {
        console.log(value, i);
      });
    }
    return arrOfFunc;
  }

  const res = clousureExample();
  res[0]();
  //
  //
  //
  //
  //
  // 1.Создайте функцию которая бы умела делать:
  //   minus(10)(6); // 4
  //   minus(5)(6); // -1
  //   minus(10)(); // 10
  //   minus()(6); // -6
  //   minus()(); // 0
  //   Подсказка, функция minus должна возвращать другую функцию.
  function minus(x = 0) {
    return function (y = 0) {
      return console.log(x - y);
    };
  }
  minus(10)(6); // 4
  minus(5)(6); // -1
  minus(10)(); // 10
  minus()(6); // -6
  minus()(); // 0
  console.log("");
  // 2.Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
  //   function multiplyMaker ...
  //   const multiply = multiplyMaker(2);
  //   multiply(2); // 4 (2 * 2)
  //   multiply(1); // 4 (4 * 1)
  //   multiply(3); // 12 (4 * 3)
  //   multiply(10); // 120 (12 * 10)
  function multiplyMaker(x = 1) {
    const masNum = [];
    return function (y = 1) {
      masNum.push((x *= y));
      console.log(masNum[masNum.length - 1]);
    };
  }
  const multiply = multiplyMaker(2);
  multiply(2); // 4 (2 * 2)
  multiply(1); // 4 (4 * 1)
  multiply(3); // 12 (4 * 3)
  multiply(10); // 120 (12 * 10)
  console.log("");
  // 3.Реализовать модуль, который работает со строкой и имеет методы:
  //   a. установить строку
  //   i. если передано пустое значение, то установить пустую строку
  //   ii. если передано число, число привести к строке
  //   b. получить строку
  //   c. получить длину строки
  //   d. получить строку-перевертыш
  //   Пример:
  //   модуль.установитьСтроку(‘abcde’);
  //   модуль.получитьСтроку(); // ‘abcde’
  //   модуль.получитьДлину(); // 5
  function modul() {
    return {
      setStr(str) {
        if (typeof str === "number") {
          return (str = String(str));
        } else if (str === "") {
          return str;
        } else return str;
      },
      getStr() {
        return console.log(str);
      },
      getLength() {
        return console.log(str.length);
      },
      getRev() {
        return console.log(str.split("").reverse().join(""));
      },
    };
  }
  const str = "abcde";
  const mod = modul();
  mod.setStr();
  mod.getStr();
  mod.getLength();
  mod.getRev();
  console.log("");
  // 4.Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень.
  //   Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
  //
  //   модуль.установитьЗначение(10); // значение = 10
  //   модуль.прибавить(5); // значение += 5
  //   модуль.умножить(2); // значение *= 2
  //   модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
  //
  //   Также можно вызывать методы цепочкой:
  //   модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100
  function calc() {
    let num;
    return {
      setNum(x) {
        num = x;
        return this;
      },
      numSum(x) {
        num += x;
        return this;
      },
      numMinus(x) {
        num -= x;
        return this;
      },
      numMul(x) {
        num *= x;
        return this;
      },
      numDivide(x) {
        num /= x;
        return this;
      },
      numExpon(x) {
        // num = Math.pow(num, x);
        num **= x;
        return this;
      },
      findOut() {
        +num.toFixed(2);
        console.log(num);
      },
    };
  }
  // calc().setNum(10).numExpon(2).findOut();
  let calcNum = calc()
    .setNum(5)
    .numSum(4) // 9
    .numMinus(1) // 8
    .numMul(2) // 16
    .numDivide(8) // 2
    .numExpon(10) // 1024
    .findOut();
})();
