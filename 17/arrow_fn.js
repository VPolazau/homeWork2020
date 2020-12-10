(function () {
  const mas = [5, 2, 6, 9, 2, 1, 0, 4, 7, 8, 10, 3];
  mas.sort((a, b) => a - b);
  console.log(mas.filter((a) => a % 2));
  console.log(mas.map((n) => ({ digit: n })));

  // 1.Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):
  //
  //   function sum() {
  //     const params = Array.prototype.slice.call(arguments);
  //
  //     if (!params.length) return 0;
  //
  //     return params.reduce(function (prev, next) { return prev + next; });
  //   }
  //
  //   sum(1, 2, 3, 4); // 10
  //   sum(); // 0

  const sum = (...masNum) => {
    return !masNum.length ? 0 : masNum.reduce((prev, next) => next + prev);
  }; // короткий способ записи
  ////////////////////////////////////////////////////////////////////////////////////////////////////////

  //Более читабельный вариант
  // const sum = (...masNum) => {
  //   if (!masNum.length) {
  //     return 0;
  //   }
  //   return masNum.reduce((prev, next) => next + prev)
  // }

  console.log(sum(1, 2, 3, 4)); // 10
  console.log(sum()); // 0
})();
