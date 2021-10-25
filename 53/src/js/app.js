// import { config, myFunction} from "./module_1";
// console.log(config);
// myFunction();

import { config as conf, myFunction as foo } from "./module_1";
console.log(conf);
foo();

import Product from "./module_2";
// Если класс(функция, обьект...) были экспортированы через default, то переименовать нельзя
console.log(new Product("Apple"));
