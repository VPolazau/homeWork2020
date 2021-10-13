// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then((posts) => console.log(posts))
//   .catch((err) => console.log(err));

function getPost(id) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((post) => resolve(post))
      .catch((err) => reject(err));
  });
}
// Чтоб не мешал
// getPost(1).then((post) => console.log(post));

// Пример без промиса
function getPost2(id) {
  const [userType, userId] = id.split("-");
  return fetch(
    `https://jsonplaceholder.typicode.com/posts/${userId}`
  ).then((response) => response.json());
}

// getPost2("user-1") // Всё работает
//   // getPost2(1)    // Случайно упадёт сюда цифра, тогда не сработает ни .then() ни .catch(), значит нужна конструкция Promise.resolve.then()
//   .then((post) => console.log(post))
//   .catch((err) => console.log(err)); //

function getPost3(id) {
  return Promise.resolve().then(() => {
    const [userType, userId] = id.split("-");
    return fetch(
      `https://jsonplaceholder.typicode.com/posts/${userId}`
    ).then((response) => response.json());
  });
}

getPost3("user-1"); // Всё работает
getPost3(1) // сработает .catch() в таком случае
  .then((post) => console.log(post))
  .catch((err) => console.log(err)); //
