let html = document.documentElement;
let body = document.body;
let div = body.querySelector("div");
let ul = body.querySelector("ul");
let li = body.querySelector("li");
let pause = 200;

// Bubble
html.addEventListener("click", callback, false);
body.addEventListener("click", callback, false);
div.addEventListener("click", callback, false);
html.addEventListener("click", callback, false);
ul.addEventListener("click", callback, false);
li.addEventListener("click", callback, false);

// Capture
html.addEventListener("click", callback, true);
body.addEventListener("click", callback, true);
div.addEventListener("click", callback, true);
html.addEventListener("click", callback, true);
ul.addEventListener("click", callback, true);
li.addEventListener("click", callback, true);

function callback(e) {
  let ms = (e.timeout = e.timeout + pause || 0);
  let target = e.currentTarget;

  setTimeout(function () {
    target.classList.add("highlight");
    setTimeout(function () {
      target.classList.remove("highlight");
    }, pause);
  }, ms);
}
