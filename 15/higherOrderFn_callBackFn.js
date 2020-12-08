(function () {
  // во 2-ом задании проверка: является ли массив массивом и является ли функция функцией

  // 1. Создать две функции и дать им осмысленные названия:
  //   - первая функция принимает массив и колбэк (одна для всех вызовов)
  //   - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
  //
  //   Первая функция возвращает строку “New value: ” и результат обработки:
  //
  //   firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
  //   firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
  //   firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
  //   “New value: Jhon is 45, Aaron is 20,”
  //   firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
  //
  //
  //   Подсказка: secondFunc должна быть представлена функцией, которая принимает
  //   один аргумент (каждый элемент массива) и возвращает результат его обработки
  function mapArray(mas, fn) {
    const arr = [];
    for (var el of mas) {
      arr.push(fn(el));
    }
    return `New value: ${arr.join("")}`;
  }
  function delSpace(el) {
    return (
      el.split("").slice(0, 1).join("").toUpperCase() +
      el.split("").slice(1, el.length).join("")
    );
  }
  function multiply10(el) {
    el *= 10;
    return `${el}, `;
  }
  function age(el) {
    return `${el.name} is ${el.age}, `;
  }
  function reversStr(el) {
    return `${el.split("").reverse().join("")}, `;
  }

  console.log(mapArray(["my", "name", "is", "Trinity"], delSpace));
  console.log(mapArray([10, 20, 30], multiply10));
  console.log(
    mapArray(
      [
        { age: 45, name: "Jhon" },
        { age: 20, name: "Aaron" },
      ],
      age
    )
  );
  console.log(mapArray(["abc", "123"], reversStr));

  // 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно
  //    проверьте что передан массив) вторым аргументом callback (обязательно проверьте что передана функция)
  //    функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5). Callback
  //    должен принимать один элемент массива, его индекс в массиве и весь массив.
  function every(mas, fn) {
    if (Array.isArray(mas) && typeof fn === "function") {
      for (var el of mas) {
        if (fn(el, mas.indexOf(el), mas) === false) {
          return false;
        } continue
      }
      return true
    } else
      console.error("Входящие параметры не являются массивом или функцией");
  }
  function check(el, index, mas) {
    if (el < 5) return false;
  }

  console.log(every([10, 7, 9, 15, 40, 35, 6, 7, 12, 9, 11], check));
})();
