// Можно сразу добавлять приставку экспорт
// export const config = {
const config = {
  apiUrl: "demo.com",
};

// export function myFunction() {
function myFunction() {
  console.log("module_1, myFunction()");
}

// А можно в конце заэкспортировать всё, что нам нужно
export { config, myFunction };

// Так же можно сразу экспортировать с новыми именами, с которыми будут работать другие файлы
// export { config as conf, myFunction as foo};
