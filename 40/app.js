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
    topHeadlines(country = "ua", cb) {
      http.get(
        `${apiUrl}/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`,
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
  newsService.topHeadlines("ua", onGetResponse);
}

// Function on get response from server
function onGetResponse(res) {
  renderNews(res.articles);
}

// Function render news
function renderNews(news) {
  const newsContainer = document.querySelector(".news-container .row");
  let fragment = "";
  news.forEach((newsItem) => {
    const el = newsTemplate(newsItem);
    fragment += el;
  });

  newsContainer.insertAdjacentHTML("afterbegin", fragment);
}

// News item template function
function newsTemplate({ urlToImage, title, url, description }) {
  return `
    <div class="col m6">
      <div class="card z-depth-5">
        <div class="card-image">
          <img src="${urlToImage}">
          <span class="card-title grey darken-4">${title || ""}</span>
        </div>
        <div class="card-content">
        <p>${description || ""}</p>
        </div>
        <div class="card-action">
        <a href="${url}">Read more</a>
        </div>
      </div>
    </div>
  `;
}
