let btn1 = document.querySelector("button");
btn1.onmousedown = function () {
  document.querySelector("div#text").remove();
};
btn1.onmouseup = function () {
  btn1.insertAdjacentHTML("afterend", '<div id="text">Text</div>');
};
let btn2 = document.querySelector("button.cl");
btn2.onclick = function () {
  btn2.remove();
};
//
const container = document.querySelector(".container");
let randDiv = document.querySelector("button.rand");
randDiv.addEventListener("click", (e) => {
  const rand = Math.random();
  const div = document.createElement("div");
  const btnFloor = document.createElement("button");
  //
  div.textContent = `${rand * 10} = `;
  btnFloor.textContent = "Округлить";
  //
  div.appendChild(btnFloor);
  container.appendChild(div);
});

container.addEventListener("click", (e) => {
  const rand = +e.target.textContent.split("").slice(0, -3).join("");

  if (e.target.tagName === "BUTTON") {
    const rand = Math.round(
      +e.target.parentElement.firstChild.data.split("").slice(0, -3).join("")
    );

    const floor = document.createElement("div");
    e.target.parentElement.insertAdjacentText("beforeend", rand);
    e.target.remove();
  }
  //
});
