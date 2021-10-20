// Создать функцию, которая возвращает промис.  Функция принимает два аргумента - время, через которое промис должен выполниться, и значение, с которым промис будет выполнен.
//
// function promiseCreator(...) {...}
// const prom = promiseCreator(500, 'Ok');
// prom.then(console.log);
// Ok!

function promiseCreator(time, val) {
  return new Promise((resolve, reject) => {
    if (typeof time !== "number") {
      reject(`Time must be indicated in numbers, not <<${time}>>`);
    }
    setTimeout(() => {
      resolve(`${val}, Launched after ${time / 1000} seconds`);
    }, time);
  });
}

const prom = promiseCreator(2000, "Ok");
prom.then((res) => console.log(res)).catch((err) => console.log(err));
