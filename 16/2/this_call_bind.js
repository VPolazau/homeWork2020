(function () {
  //
  //
  // 1.Создать объект с розничной ценой и количеством продуктов. Этот
  //   объект должен содержать метод для получения общей стоимости
  //   всех товаров (цена * количество продуктов)
  const apples = {
    price: "1$",
    quantity: 100,
    totalCost() {
      console.log(parseFloat(this.price) * this.quantity);
      return this;
    },
  };
  apples.totalCost();
  //
  //
  // 2.Создать объект из предыдущей задачи. Создать второй объект,
  //   который описывает количество деталей и цену за одну деталь. Для
  //   второго объекта нужно узнать общую стоимость всех деталей, но
  //   нельзя создавать новые функции и методы. Для этого
  //   “позаимствуйте” метод из предыдущего объекта.
  const details = {
    price: "5$",
    quantity: 40,
  };
  details.totalCost = apples.totalCost;
  details.totalCost();
  //
  //
  // 3.Даны объект и функция:
  let sizes = { width: 5, height: 10 },
    getSquare = function () {
      return this.width * this.height;
    };
  //   Не изменяя функцию или объект, получить результат функции
  //   getSquare для объекта sizes
  console.log(getSquare.call(sizes));
  //
  //
  // 4.let element = {
  //       height: 25,
  //       getHeight: function () {return this.height;}
  //   };
  //
  //   let getElementHeight = element.getHeight;
  //   getElementHeight(); // undefined
  //
  //   Измените функцию getElementHeight таким образом, чтобы можно
  //   было вызвать getElementHeight() и получить 25.
  let element = {
    height: 25,
    getHeight: function () {
      return this.height;
    },
  };

  let getElementHeight = element.getHeight.bind(element); // bind создаёт новую функцию, которая при вызове устанавливает
  ////////////////////////////////////////////////////////// в качестве контекста выполнения this предоставленное значение.
  ////////////////////////////////////////////////////////// Bind также позволяет привязывать к функции аргументы

  console.log(getElementHeight()); // 25
  //
  //
})();
