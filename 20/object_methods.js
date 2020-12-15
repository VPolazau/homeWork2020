(function () {
  //
  //
  //
  //
  let obj1 = {
    name: "Victor",
    info: {
      skills: ["html", "css"],
    },
  };
  let obj2 = { name: "Ivan", age: 20 };
  let newObj = Object.assign({}, obj1, obj2); // obj2 перезапишет obj1, не глубокое копирование, если будут вложенные объекты
  //                                             они будут копироваться по ссылке
  //
  //
  //
  let objJSON = JSON.stringify(obj1); // переводит объект в строку -->
  newObj = JSON.parse(objJSON); // глубокое копирование
  // newObj = JSON.parse(JSON.stringify(obj1)); // укороченный способ
  //
  //
  //
  console.log(Object.keys(obj1)); // -> массив ключей
  console.log(Object.values(obj2)); // -> массив значений
  console.log(Object.entries(obj2)); // -> массив массивов("ключ", "значение")
  console.log(
    Object.fromEntries([
      ["a", 21],
      ["b", "value"],
    ])
  ); // -> обратное действие
  //
  //
  //
  //
  const characters = ["Obi-Wan", "Vader", "Luke"];
  // const sortedCharacters = characters.sort(); это ссылочный вариант копирования массивов
  const sortedCharacters = characters.slice().sort(); // а уже лайфхак для копирования массивов, без ссылки
  sortedCharacters.push("Victor");
  console.log(characters); // [ 'Obi-Wan', 'Vader', 'Luke' ]
  console.log(sortedCharacters); // [ 'Luke', 'Obi-Wan', 'Vader', 'Victor' ]
  //
  //
  //
  //
  function deepFreeze(obj) {
    // Получаем имена свойств из объекта obj
    var propNames = Object.getOwnPropertyNames(obj);

    // Замораживаем свойства для заморозки самого объекта
    propNames.forEach(function (name) {
      var prop = obj[name];

      // Заморозка свойства prop, если оно объект
      if (typeof prop == "object" && prop !== null) deepFreeze(prop);
    });

    // Заморозить сам объект obj (ничего не произойдёт, если он уже заморожен)
    return Object.freeze(obj);
  }

  obj2 = {
    internal: {},
  };

  deepFreeze(obj2);
  obj2.internal.a = "другоеЗначение";
  obj2.internal.a; // undefined
})();
