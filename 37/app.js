const btnGetUsers = document.querySelector(".btn-get-users");
const btnAddUser = document.querySelector(".btn-add-user");
const container = document.querySelector(".container");

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
  getUsers((respons) => {
    // const fragment = document.createDocumentFragment();
    response.forEach((user) => {
      //   const accordion = document.createDocumentFragment();
    });
  });
});
