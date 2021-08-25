const btn = document.querySelector(".btn-get-posts");
const btnAddPost = document.querySelector(".btn-add-post");
const container = document.querySelector(".container");

function getPosts(cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");

  xhr.addEventListener("load", () => {
    const response = JSON.parse(xhr.response);
    cb(response);
  });

  xhr.addEventListener("error", () => {
    console.log("Error");
  });

  xhr.send();
}

function createPosts(body, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");

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

function cardTamlate(post) {
  const card = document.createElement("div");
  card.classList.add("card");
  const cardBody = document.createElement("div");
  cardBody.classList.add("cardBody");
  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = post.title;
  const article = document.createElement("p");
  article.classList.add("card-text");
  article.textContent = post.body;
  cardBody.appendChild(title);
  cardBody.appendChild(article);
  card.appendChild(cardBody);
  return card;
}

function renderPosts(response) {
  const fragment = document.createDocumentFragment();
  response.forEach((post) => {
    const card = cardTamlate(post);
    fragment.appendChild(card);
  });
  container.appendChild(fragment);
}

btn.addEventListener("click", (e) => {
  getPosts(renderPosts);
});

btnAddPost.addEventListener("click", function (e) {
  const newPost = {
    title: "foo",
    body: "bar",
    userId: 1,
  };
  createPosts(newPost, (response) => {
    const card = cardTamlate(response);
    container.insertAdjacentElement("afterbegin", card);
  });
});

// function myHttpRequest({ method, url } = {}, cb) {}

// myHttpRequest(
//   { method: "GET", url: "https://jsonplaceholder.typicode.com/posts" },
//   (err, res) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(res);
//   }
// );

function http() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error! Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.response);
          cb(response);
        });

        xhr.addEventListener("error", () => {
          console.log("Error");
        });

        xhr.send();
      } catch (e) {
        cb(e);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error! Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.response);
          cb(response);
        });

        xhr.addEventListener("error", () => {
          console.log("Error");
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (e) {
        cb(e);
      }
    },
  };
}

const myHttp = http();
myHttp.post(
  "https://jsonplaceholder.typicode.com/posts",
  {
    title: "foo",
    body: "bar",
    userId: 1,
  },
  { "Content-type": "application/json" },
  (err, res) => {
    console.log(err || res);
  }
);
