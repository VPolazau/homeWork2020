let data = {
  name: "Victor",
};

export function getData() {
  return data;
}

// Аналогичным способом можно скрыть данные с использование symbol
const symbol = Symbol();
export default class User {
  constructor(firstName) {
    this[symbol] = firstName;
  }
  getFirstName() {
    return this[symbol];
  }
}
