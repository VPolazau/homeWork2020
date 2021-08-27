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

// Init http module
const http = customHttp();

const newsService = (function () {
  const apiKey = "46a06bd43565432e99ed0a89d1b5a86b";
  const apiUrl = "https://newsapi.org/v2";

  return {
    topHeadlinse(country = "ua", cb) {
      http.get(
        `${apiUrl}/top-headlines?country=${country}&apiKey=${apiKey}`,
        cb
      );
    },
    everything(query, cb) {
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb);
    },
  };
})();

// Init selects
document.addEventListener("DOMContentLoaded", () => {
  M.AutoInit();
  loadNews();
});

// Load news function
function loadNews() {
  newsService.topHeadlinse("ua", onGetResponse);
}

// Function on get response from server
function onGetResponse(err, res) {
  console.log(res);
  renderNews(res.article);
}

// Function render news
function renderNews(news) {
  const newsContainer = document.querySelector(".news-container .row");

  news.forEach((newsItem) => {
    const el = newsTemplate(newsItem);
  });
}

// News item template function
function newsTemplate(news) {
  console.log(news);
}
