const tasks = [];

(function (arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});

  //Elements UI
  const listContainer = document.querySelector(
    ".tasks-list-section .list-group"
  );

  //в ".forms" содержит коллекцию всех форм, можно найти по имени
  const form = document.forms["addTask"];
  //в "form.elements" аналогично по имени
  const inputTitle = form.elements["title"];
  const inputBody = form.elements["body"];

  //Events
  renderAllTasks(objOfTasks);
  form.addEventListener("submit", onFormSubmitHandler);
  listContainer.addEventListener("click", onDeleteHandler);

  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.error("Передайте список задач!");
      return;
    }

    const fragment = document.createDocumentFragment();

    // Object.values() -> принимаем объект и возвращаем ввиде массива, соответсвенно можем его теперь перебрать
    Object.values(tasksList).forEach((task) => {
      const li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

  // Наполняю ЛИшку содержимым
  function listItemTemplate({ _id, title, body } = {}) {
    const li = document.createElement("li");
    li.classList.add(
      "list-group-item",
      "d-flex", // display для создания гибкого контейнера, трансформирует прямые дочерние элементы в «гибкие»
      "align-items-center", // относится к d-flex, для выравнивания по высоте
      "flex-wrap", // обертка или выравнивание содержимого
      "mt-2" // marginTop-2
    );

    li.setAttribute("data-task-id", _id);

    const span = document.createElement("span");
    span.textContent = title;
    span.style.fontWeight = "bold";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete task";
    deleteBtn.classList.add("btn", "btn-danger", "ml-auto", "delete-btn"); //marginLeft

    const article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100"); // width 100%

    li.appendChild(span);
    li.appendChild(article);
    li.appendChild(deleteBtn);

    return li;
  }

  function onFormSubmitHandler(e) {
    e.preventDefault();
    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert("Введите Title и Body");
      return;
    }

    const task = createNewTask(titleValue, bodyValue);
    const listItem = listItemTemplate(task);
    listContainer.insertAdjacentElement("afterbegin", listItem);
    form.reset();
  }

  function createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `task-${Math.random()}`,
    };

    objOfTasks[newTask._id] = newTask;
    return { ...newTask };
  }

  function deleteTask(id) {
    const { title } = objOfTasks[id];
    const isConfirm = confirm(
      `Вы действительно хотите удалить задачу: ${title} ?`
    );
    if (!isConfirm) return isConfirm;
    delete objOfTasks[id];
    return isConfirm;
  }

  function deleteTaskFromHtml(confirmed, el) {
    if (!confirmed) return;
    el.remove();
  }

  function onDeleteHandler({ target }) {
    if (target.classList.contains("delete-btn")) {
      const parent = target.closest("[data-task-id]");
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromHtml(confirmed, parent);
    }
  }
})(tasks);
