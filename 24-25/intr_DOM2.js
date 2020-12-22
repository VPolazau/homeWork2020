console.log(" - ctrl+option+k");
console.clear();
// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
//
//   isParent(parent, child);
//   isParent(document.body.children[0], document.querySelector('mark'));
//   // true так как первый див является родительским элементом для mark
//
//   isParent(document.querySelector('ul'), document.querySelector('mark'));
//   // false так ul НЕ является родительским элементом для mark
//   Функция принимает только DOM объекты.
//
function isParent(parent, child) {
  // console.log(parent === child.parentElement.parentElement.parentElement);
  let ch = child;
  console.log(ch.localName);
  while (parent !== child) {
    child = child.parentElement;
    console.log(child.localName);
    if (parent === child)
      return console.log(
        true,
        `${parent.localName} является родительским элементом для ${ch.localName}`
      );
    if (child === document.body.parentElement)
      return console.log(
        false,
        `${parent.localName} НЕ является родительским элементом для ${ch.localName}`
      );
  }
}
isParent(document.body.children[0], document.querySelector("mark"));
//
//
// 2. Получить список всех ссылок, которые не находятся внутри списка ul
let link = document.querySelectorAll("body a");
console.log("");
console.log([...link].filter((link) => !link.closest("ul")));
//
//
// 3. Найти элемент, который находится перед и после списка ul
let ul = document.querySelector("body ul");
let prev = ul.previousElementSibling;
let next = ul.nextElementSibling;
console.log("");
console.log(next.localName);
console.log(prev.localName);
