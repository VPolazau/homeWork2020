// Custom http module
function customHttp() {
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
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
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
          cb(null, response);
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

const myhttp = http();

// Слишком большая вложенность, код не хочет обрабатываться
// myhttp.get(
//   'https://jsonplaceholder.tipecode.com/posts',
//   (err, res) => {
//     if (err) {
//       console.log('Error',err)
//       return;
//     }
//     myhttp.get(
//       'https://jsonplaceholder.tipecode.com/comments?postId=1',
//       (err, res) => {
//         if (err) {
//           console.log('Error',err)
//           return;
//         }
//         myhttp.get(
//           'https://jsonplaceholder.tipecode.com/users/1'
//           (err, res) => {
//             if (err) {
//               console.log('Error',err)
//               return;
//             }
//             console.log("наконец")
//           },
//         );
//       },
//     );
//   },
// );
