(function () {
  //
  //
  // 1.На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
  //   каждый элемент которого будет хранить информацию о числе и его четности:
  //   [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]
  const numMas = [1, 2, 3, 5, 8, 9, 10];
  let newNumMas = numMas.map((el) => ({ digit: el, odd: !!(el % 2) }));
  console.log(newNumMas);
  //
  // 2.Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть true.
  let numMas2 = [12, 4, 50, 1, 0, 18, 40];
  console.log(numMas2.some((el) => el === 0)); //true
  //
  // 3.Проверить, все элементы массива имеют длину более 3х символов ['yes', 'hello', 'no', 'easycode', 'what']. Если да - вернуть true
  let strArr = ["yes", "hello", "no", "easycode", "what"];
  console.log(strArr.every((el) => el.length > 3)); //false
  //
  // 4.Дан массив объектов, где каждый объект содержит информацию о букве
  //   и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
  //
  //   [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
  //   {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
  //   {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
  //
  //   Напишите функцию, которая из элементов массива соберет и вернёт
  //   строку, основываясь на index каждой буквы. Например:
  //   [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
  const masObj = [
    { char: "a", index: 12 },
    { char: "w", index: 8 },
    { char: "Y", index: 10 },
    { char: "p", index: 3 },
    { char: "p", index: 2 },
    { char: "N", index: 6 },
    { char: " ", index: 5 },
    { char: "y", index: 4 },
    { char: "r", index: 13 },
    { char: "H", index: 0 },
    { char: "e", index: 11 },
    { char: "a", index: 1 },
    { char: " ", index: 9 },
    { char: "!", index: 14 },
    { char: "e", index: 7 },
  ];
  console.log(
    masObj
      .sort((prevIndex, nextIndex) => prevIndex.index - nextIndex.index)
      .map((str) => str.char)
      .join("")
  );
  //
  //
})();
