console.log(1);
console.log(2);
console.log(3);

setTimeout(() => {
  console.log(4);
  setTimeout(() => {
    console.log(5);
  }, 200);
}, 300);

console.log(6);
console.log(7);

function a() {
  console.log("a");
}
function b() {
  console.log("b");
}

a();
b();
