(function(){

  //1. Создать объект с полем product, равным ‘iphone’
  let obj = { product: 'iphone' };
  // 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
  obj.price = 1000;
  obj.currency = '$';
  // 3. Добавить поле details, которое будет содержать объект с полями model и color
  obj.details = { model: "11 pro",
                  color: 'Gray space'
                };
  console.table(obj);
})()
