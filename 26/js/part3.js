console.clear();
// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:
//   <ul>
//   <li><a href="#">Link1</a></li>
//   ...
//   <li class=”new-item”>item 5</li>
//   <li class=”new-item”>item 6</li>
//   </ul>
//   Вручную номер li не ставить оно должно подставляться в зависимости от кол-ва лишек в списке.
console.dir(ul);
while (ul.childElementCount < 7) {
  ul.insertAdjacentHTML(
    "beforeend",
    `<li class='new-item'> item ${ul.childElementCount + 1}</li>`
  );
}
console.log(ul);
//
//
//
// 2. В каждую ссылку, которая находятся внутри списка ul  добавить по тегу strong (в каждую ссылку один - strong).
let ulLinks = document.querySelectorAll("ul a");
ulLinks.forEach((link) => {
  link.insertAdjacentHTML("afterbegin", "<strong></strong>");
});
//
//
//
// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами).
//    В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.
//
console.dir(document.body);
let newDiv = document.createElement("div");
let divFirst = document.body.firstElementChild;
newDiv.insertAdjacentHTML(
  "afterbegin",
  '<img src="https://fbdev.mpsecure.com/groupon/201301_dir/images/upload/1361099975_dogs.jpg" alt="Dog">'
);
document.body.insertBefore(newDiv, divFirst);
//
//
//
// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green
let mark = document.querySelector("mark");
mark.insertAdjacentText("beforeend", " green");
mark.classList.add("green");
console.log(mark);
//
//
//
console.clear();
// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
// liS = ul.children;
// let sorted = [...liS]
//   .map((el) => el)
//   .sort((a, b) => {
//     console.log(a.innerText, b.innerText);
//     console.log(a.innerText > b.innerText);
//     a.innerText > b.innerText;
//   });
// console.dir(sorted);
//
//
//
//
//
// не получилось!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
