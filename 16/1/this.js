(function () {
  //
  // 1.Создать объект, который описывает ширину и высоту
  //   прямоугольника, а также может посчитать площадь фигуры:
  const rectangle = {
    width: 4,
    height: 5,
    getSquare() {
      return this.width * this.height;
    },
  };
  console.log(rectangle.getSquare());
  //
  //
  // 2.Создать объект, у которого будет цена товара и его скидка, а также
  //   два метода: для получения цены и для расчета цены с учетом скидки:
  const price = {
    price: 10,
    discount: "15%",
    getPrice() {
      console.log(this.price);
    },
    getPriceWithDiscount() {
      let x = (this.price * (100 - parseFloat(this.discount))) / 100;
      console.log(x);
    },
  };
  price.getPrice(); // 10
  price.getPriceWithDiscount(); // 8.5
  //
  //
  // 3.Создать объект, у которого будет поле высота и метод “увеличить
  //   высоту на один”. Метод должен возвращать новую высоту:
  const growth = {
    height: 10,
    increaseBy1() {
      return this.height++;
    },
  };
  console.log(growth.height); // 10
  growth.increaseBy1();
  console.log(growth.height); // 11;
  //
  //
  // 4. Создать объект “вычислитель”, у которого есть числовое свойство
  //   “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
  //   Методы можно вызывать через точку, образуя цепочку методов:
  const numerator = {
    value: 1,
    double: function () {
      this.value *= 2;
      return this;
    },
    plusOne: function () {
      this.value++;
      return this;
    },
    minusOne: function () {
      this.value--;
      return this;
    },
  };
  numerator.double().plusOne().plusOne().minusOne();
  console.log(numerator.value); // 3
  //
  //
})();
