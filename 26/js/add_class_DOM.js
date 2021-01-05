// 1. Найти в коде список ul и добавить класс “list”
/* let ul = document.querySelector("ul");  уже был инициализирован в дргом файле, поэтому можно уже использовать*/
ul.classList.add("list");
//
//
//
// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link
let a = ul.nextElementSibling.nextElementSibling;
a.setAttribute("id", "list");
//
//
//
// 3. На li через один (начиная с самого первого) установить класс “item”
let [...liS] = ul.children;
for (var i = 0; i < liS.length; i++) {
  if (!(i % 2)) {
    liS[i].classList.add("item");
  }
}
console.log(liS);
// let el0 = ul.children[0]; // легче, но приходится создавать много переменных
// el0.classList.add("item");
// let el2 = ul.children[2];
// el2.classList.add("item");
// console.log(el0, el2);
//
//
//
// 4. На все ссылки в примере установить класс “custom-link”
let [...links] = document.querySelectorAll("a"); // можно просто работать с NodeListом не обязательно переводить его в массив
console.log(links);
links.forEach((el) => {
  el.classList.add("custom-link");
});
//
//
//
//
// let mas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
// console.log(mas.map((num) => !(num % 2)));
