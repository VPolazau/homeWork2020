// 1. Найти параграф и получить его текстовое содержимое (только текст!)
let p = document.querySelector("p");
console.log(p.textContent);
//
//
// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию (в виде объекта) о типе узла,
//    об имени узла и о количестве дочерних узлов (если детей нет - 0).
function nodeInf(domNode) {
  const objNodeInf = {};
  switch (
    domNode.nodeType // тип узла
  ) {
    case 1:
      objNodeInf.type = "ELEMENT_NODE";
      break;
    case 2:
      objNodeInf.type = "ATTRIBUTE_NODE";
      break;
    case 3:
      objNodeInf.type = "TEXT_NODE";
      break;
    case 4:
      objNodeInf.type = "CDATA_SECTION_NODE";
      break;
    case 5:
      objNodeInf.type = "ENTITY_REFERENCE_NODE";
      break;
    case 6:
      objNodeInf.type = "ENTITY_NODE";
      break;
    case 7:
      objNodeInf.type = "PROCESSING_INSTRUCTION_NODE";
      break;
    case 8:
      objNodeInf.type = "COMMENT_NODE";
      break;
    case 9:
      objNodeInf.type = "DOCUMENT_NODE";
      break;
    case 10:
      objNodeInf.type = "DOCUMENT_TYPE_NODE";
      break;
    case 11:
      objNodeInf.type = "DOCUMENT_FRAGMENT_NODE";
      break;
    case 12:
      objNodeInf.type = "NOTATION_NODE";
      break;
  }
  //
  //
  objNodeInf.name = domNode.nodeName.toLowerCase(); // имя узла
  //
  //
  if (domNode.children.length) {
    objNodeInf.children = domNode.children.length; // кол-во дочерних узлов
  } else objNodeInf.children = 0; // если их нет

  return console.log(objNodeInf);
}
nodeInf(p);
//
//
//
// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка: getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
function getTextFromUl(ul) {
  masLink = [];
  for (var variable of ul.children) {
    masLink.push(variable.innerText);
  }
  console.log(masLink);
}
let ul = document.querySelector("ul");
getTextFromUl(ul);
//
//
//
// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны остаться). Конечный результат:
// -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
[...p.childNodes].forEach((text) => (text.data = "-text-"));
console.log(p.innerHTML);
