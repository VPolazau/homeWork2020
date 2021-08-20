const btnGetUsers = document.querySelector(".btn-get-users");
const btnAddUser = document.querySelector(".btn-add-user");

function getUsers(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.response);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("Error");
  });

  xhr.send();
}

btnGetUsers.addEventListener("click", (e) => {
  getUsers((response) => {
    const accordion = document.querySelector(".accordion");
    // Чтобы аккордион раcкрывался по одному, а не все сразу, значения атрибутов: accordionBtn(data-bs-target, aria-controls) и accordionCollapse(id) должны отличаться на каждом шаге.  Поэтому добавил переменную 'n'
    let n = 1;
    response.forEach((user) => {
      // Создаём елементы с нужными атрибутами для аккордиона(bootstrap)
      const accordionItem = document.createElement("div");
      accordionItem.classList.add("accordion-item");
      accordionItem.classList.add("mt-2");

      const accordionBtn = document.createElement("button");
      accordionBtn.classList.add("accordion-button");
      accordionBtn.setAttribute("data-bs-toggle", "collapse");
      accordionBtn.setAttribute("data-bs-target", "#collapse" + n);
      accordionBtn.setAttribute("aria-expanded", "true");
      accordionBtn.setAttribute("aria-controls", "collapse" + n);

      const accordionTitle = document.createElement("div");
      accordionTitle.classList.add("accordion-title");
      //  Заполняем title
      accordionTitle.innerText = user.name;

      const accordionCollapse = document.createElement("div");
      accordionCollapse.classList.add("accordion-collapse");
      accordionCollapse.classList.add("collapse");
      accordionCollapse.setAttribute("id", "collapse" + n);
      accordionCollapse.setAttribute("aria-labelledby", "headingOne");

      const accordionBody = document.createElement("div");
      accordionBody.classList.add("accordion-body");
      // Заполняем body
      accordionBody.innerText = `Email: ${user.email},
        @Username: ${user.username},
        Phone: ${user.phone},
        Website: ${user.website}.`;

      // Вкладываем друг в друга
      accordionItem.appendChild(accordionBtn);
      accordionItem.appendChild(accordionCollapse);
      accordionBtn.appendChild(accordionTitle);
      accordionCollapse.appendChild(accordionBody);

      //добавляем в наш fragment accordionItem
      accordion.appendChild(accordionItem);
      n++;
    });
  });
});
