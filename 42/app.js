// Custom http module
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open(`GET`, url);

        xhr.addEventListener(`load`, () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error! Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener(`error`, () => {
          console.log(`Error`);
        });

        xhr.send();
      } catch (e) {
        cb(e);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open(`POST`, url);

        xhr.addEventListener(`load`, () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error! Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.response);
          cb(null, response);
        });

        xhr.addEventListener(`error`, () => {
          console.log(`Error`);
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

const myhttp = customHttp();

// Слишком большая вложенность
// myhttp.get(`https://jsonplaceholder.typicode.com/posts`, (err, res) => {
//   if (err) {
//     console.log(`Error`, err);
//     return;
//   }
//   myhttp.get(
//     `https://jsonplaceholder.typicode.com/comments?postId=1`,
//     (err, res) => {
//       if (err) {
//         console.log(`Error`, err);
//         return;
//       }
//       myhttp.get(`https://jsonplaceholder.typicode.com/users/1`, (err, res) => {
//         if (err) {
//           console.log(`Error`, err);
//           return;
//         }
//         console.log(`наконец`);
//       });
//     }
//   );
// });

function getPost(id) {
  return new Promise(function (resolve, reject) {
    myhttp.get(`https://jsonplaceholder.typicode.com/posts/1`, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res);
    });
  });
}
function getPostComments(post) {
  const { id } = post;
  return new Promise(function (resolve, reject) {
    myhttp.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve({ post, comments: res });
      }
    );
  });
}
function getUserCreatedPost(data) {
  const {
    post: { userId },
  } = data;
  return new Promise(function (resolve, reject) {
    myhttp.get(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
      (err, res) => {
        if (err) {
          reject(err);
        }
        resolve({ ...data, user: res });
      }
    );
  });
}

getPost()
  .then((post) => getPostComments(post))
  .then((data) => getUserCreatedPost(data))
  .then((fullData) => console.log(fullData))
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("finally");
  }); // выполниться в любом случае, вне зависимости от ошибки
