// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(Math.random()), 2000);
// });
const promise = new Promise((resolve, reject) => {
  setTimeout(() => reject("error"), 2000);
});

// promise
//   .then((x) => console.log(x))    // 0.20716835090997754
//   .then((y) => console.log(y));   // undefined
promise
  .then((x) => {
    console.log(x); // 0.20716835090997754
    return x;
  })
  .then((y) => console.log(y)) // 0.20716835090997754
  .catch((err) => console.log(err));

promise.then((z) => console.log(z)); // 0.20716835090997754
