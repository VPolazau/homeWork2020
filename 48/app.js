function Product(brand, price, discount) {
  this.brand = brand;
  this.price = price;
  this.discount = discount;
}

//
//
//

// Свойство .prototype добавляет в __Proto__ новый метод, чем очищает сам коструктор. This указывает на внутренности экземпляра(НП: apple). Ими можно так же пользоваться как и обычными методами объекта.
Product.prototype.getPriceWithDiscount = function () {
  return (this.price * (100 - this.discount)) / 100;
};
Product.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
};

const apple = new Product("Apple", 100, 15);
const samsung = new Product("Samsung", 200, 25);
console.log(apple);
console.log(apple.getPriceWithDiscount());
console.log(samsung);
// samsung.setPrice(500);
console.log(samsung.getPriceWithDiscount());
