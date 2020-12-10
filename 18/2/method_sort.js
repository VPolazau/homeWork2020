(function () {
  //
  //
  // 1.Отсортируйте массив массивов так, чтобы вначале
  //   располагались наименьшие массивы (размер массива определяется его длиной):
  //   [  [14, 45],  [1],  ['a', 'c', 'd']  ] → [ [1], [14, 45], ['a', 'c', 'd'] ]
  const masArr = [[14, 45], [1], ["a", "c", "d"]];
  masArr.sort((prev, next) => prev.length - next.length);
  console.log(masArr); // [1], [14, 45], ["a", "c", "d"]
  //
  // 2.Есть массив объектов:
  //   [
  //       {cpu: 'intel', info: {cores:2, сache: 3}},
  //       {cpu: 'intel', info: {cores:4, сache: 4}},
  //       {cpu: 'amd', info: {cores:1, сache: 1}},
  //       {cpu: 'intel', info: {cores:3, сache: 2}},
  //       {cpu: 'amd', info: {cores:4, сache: 2}}
  //   ]
  //   Отсортировать их по возрастающему количеству ядер (cores).
  const coresInf = [
    { cpu: "intel", info: { cores: 2, сache: 3 } },
    { cpu: "intel", info: { cores: 4, сache: 4 } },
    { cpu: "amd", info: { cores: 1, сache: 1 } },
    { cpu: "intel", info: { cores: 3, сache: 2 } },
    { cpu: "amd", info: { cores: 4, сache: 2 } },
  ];
  console.log(coresInf.sort((prev, next) => prev.info.cores - next.info.cores));
  //
  // 3.Создать функцию, которая будет принимать массив продуктов и две цены.
  //   Функция должна вернуть все продукты, цена которых находится в указанном
  //   диапазоне, и сортировать от дешевых к дорогим:
  //   let products = [
  //       {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
  //       {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
  //       {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
  //       {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
  //   ];
  //   filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]
  let products = [
    { title: "prod1", price: 5.2 },
    { title: "prod2", price: 0.18 },
    { title: "prod3", price: 15 },
    { title: "prod4", price: 25 },
    { title: "prod5", price: 18.9 },
    { title: "prod6", price: 8 },
    { title: "prod7", price: 19 },
    { title: "prod8", price: 63 },
  ];
  function filterCollection(mas, minPrice, maxPrice) {
    console.log(
      mas
        .filter((el) => el.price >= minPrice && el.price <= maxPrice)
        .sort((prev, next) => prev.price - next.price)
    );
  }
  filterCollection(products, 15, 30);
  //
  //
})();
