//
//
//
// Зная структуру html, с помощью изученных
// методов получить (в консоль):
// 1. head
// 2. body
// 3. все дочерние элементы body и вывести их в
// консоль.
// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
// б) вывести в консоль все дочерние узлы,
// кроме первого и последнего
// Для навигации по DOM использовать методы,
// которые возвращают только элементы
//
//
// 1
const head = document.querySelector("head");
console.log(head);
// 2
const body = document.querySelector("body");
console.log(body);
// 3
console.log(body.childNodes);
// 4
const div = document.querySelector("div");
console.log(div);
// 4a
console.log(div.children);
// 4б
let masDiv = Array.from(div.children);
console.log(masDiv.slice(1, -1));
//
