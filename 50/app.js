// ES6
class ProductES6 {
  constructor(brand, price, discount) {
    this._brand = brand;
    this.price = price;
    this.discount = discount;
  }

  // Get
  get brand() {
    return this._brand;
  }

  // Set
  set brand(name) {
    this._brand = name;
  }

  getPriceWithDiscount() {
    return (this.price * (100 - this.discount)) / 100;
  }

  // Название метода может быть сложным, поэтому есть возможность объявление следующим образом
  // Так же "setPrice" можно сделать через переменную
  // Таким образом можно скрывать название методов
  ["setPrice"](newPrice) {
    this.price = newPrice;
  }

  // Классы es6 дают возможность создавать СТАТИЧЕСКИЕ методы.
  // Статические методы - это методы которые могут вызываться без инстенциации класса, то есть отдельно от экземпляра(без его создания).
  // Они НЕ ИМЕЮТ доступа к this, поэтому экземпляры не имеют к ним доступ
  //НП
  static plus(x, y) {
    return x + y;
  }
}

const newProduct = new ProductES6("samsung", 200, 10);
console.log(newProduct.brand);
newProduct.brand = "apple";
console.log(newProduct.brand);
console.log(newProduct.getPriceWithDiscount());
newProduct.setPrice(300);
console.log(newProduct.getPriceWithDiscount());
console.log("");
console.log("Вызов СТАТИЧЕСКОГО метода: ProductES6.plus(1, 2) ===> 3");
