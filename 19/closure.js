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
  /*Создайте функцию которая бы умела делать:
    minus(10)(6); // 4
    minus(5)(6); // -1
    minus(10)(); // 10
    minus()(6); // -6
    minus()(); // 0
    Подсказка, функция minus должна возвращать другую функцию.*/
  function minus(num = 0) {
    let x = num;
    return function (buf = 0) {
      return (x -= buf);
    };
  }
  console.log(minus(10)(6));
  console.log(minus(5)(6));
  console.log(minus(10)());
  console.log(minus()(6));
  console.log(minus()());
  //
  //
  //
  //
  //
  //
  console.log("");
  console.log("");
  /*Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
function multiplyMaker ...
const multiply = multiplyMaker(2);
multiply(2); // 4 (2 * 2)
multiply(1); // 4 (4 * 1)
multiply(3); // 12 (4 * 3)
multiply(10); // 120 (12 * 10)*/
  function multiplyMaker(numb = 1) {
    let numArr = [];
    return function (value = 1) {
      numArr.push((numb *= value));
      console.log(numArr[numArr.length - 1]);
      return numArr;
    };
  }
  multiplyMaker()();
  multiplyMaker(2)(2);
  multiplyMaker(2)(1);
  multiplyMaker(2)(3);
  multiplyMaker(2)(10);
  //
  //
  //
  //
  //
  //
  console.log("");
  console.log("");
  /*Реализовать модуль, который работает со строкой и имеет методы:
a. установить строку
i. если передано пустое значение, то установить пустую строку
ii. если передано число, число привести к строке
b. получить строку
c. получить длину строки
d. получить строку-перевертыш
Пример:
модуль.установитьСтроку(‘abcde’);
модуль.получитьСтроку(); // ‘abcde’
модуль.получитьДлину(); // 5 */
  function modul() {
    let str;
    return {
      setStr(value) {
        if (typeof value === "string") {
          str = value;
          return str;
        } else if (typeof value === "number") {
          str = String(value);
          return str;
        }
      },
      getStr() {
        return console.log(str);
      },
      getLength() {
        return console.log(str.length);
      },
      reversStr() {
        let strR = str.split("").reverse().join("");
        return console.log(strR);
      },
    };
  }
  let str = prompt("Введите строку", "abcde");
  const mod = modul();
  mod.setStr(str);
  mod.getStr();
  mod.getLength();
  mod.reversStr();
  //
  //
  //
  //
  //
  //
  console.log("");
  console.log("");
  /*Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).

  модуль.установитьЗначение(10); // значение = 10
  модуль.прибавить(5); // значение += 5
  модуль.умножить(2); // значение *= 2
  модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)

  Также можно вызывать методы цепочкой:
  модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100 */
  function calc() {
    let num = 0;
    return {
      setNum(value) {
        num = value;
        return num;
      },
      numSum(x) {
        num += x;
        return num;
      },
      numMinus(x) {
        num -= x;
        return num;
      },
      numMul(x) {
        num *= x;
        return num;
      },
      numDivide(x) {
        num /= x;
        return num;
      },
      numExpon(x) {
        let y = num;
        for (var i = 0; i < x - 1; i++) {
          num *= y;
        }
        return num;
      },
      findOut() {
        console.log(num);
      },
    };
  }
  let num = prompt("Введите строку", 5);
  let calcNum = calc();
  calcNum.setNum(+num);
  calcNum.numSum(4); // 9
  calcNum.numMinus(1); // 8
  calcNum.numMul(2); // 16
  calcNum.numDivide(8); // 2
  calcNum.numExpon(10); // 1024
  calcNum.findOut();
})();
