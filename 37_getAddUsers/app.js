const btnGetUsers = document.querySelector(".btn-get-users");
const btnAddUser = document.querySelector(".btn-add-user");
const accordion = document.querySelector(".accordion");

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

function createPost(body, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/users");

  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.response);
    cb(response);
  });

  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

  xhr.addEventListener("error", () => {
    console.log("Error");
  });

  xhr.send(JSON.stringify(body));
}

function accordionTemplate(user, n) {
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

  return accordionItem;
}

function renderUsers(response) {
  // Чтобы аккордион раcкрывался по одному, а не все сразу, значения атрибутов: accordionBtn(data-bs-target, aria-controls) и accordionCollapse(id) должны отличаться на каждом шаге.  Поэтому добавил переменную 'n';
  let n = Math.random().toFixed(3) * 1000;
  response.forEach((user, n) => {
    accordionItem = accordionTemplate(user, n);

    //добавляем в наш fragment accordionItem
    accordion.appendChild(accordionItem);
  });
}

btnGetUsers.addEventListener("click", (e) => {
  getUsers(renderUsers);
  btnGetUsers.setAttribute("disabled", "disabled");
});

btnAddUser.addEventListener("click", (e) => {
  const fullName = document.querySelector("#fullName");
  const email = document.querySelector("#email");
  const userName = document.querySelector("#userName");
  const phone = document.querySelector("#phone");
  const website = document.querySelector("#website");
  const newUser = {
    name: fullName.value,
    email: email.value,
    username: userName.value,
    phone: phone.value,
    website: website.value,
  };
  createPost(newUser, (response) => {
    console.log(response);
    let n = Math.random().toFixed(3) * 1000;
    accordionItem = accordionTemplate(response, n);
    accordion.appendChild(accordionItem);
  });
});
