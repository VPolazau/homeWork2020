(function () {
  // 1.Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов
  //   и возвращает объект, содержащий первый аргумент и массив из остатка:
  //
  //   func(‘a’, ‘b’, ‘c’, ‘d’) →
  //   {
  //     first: ‘a’,
  //     other: [‘b’, ‘c’, ‘d’]
  //   }
  function foo() {
    const [first_el, ...other] = arguments;
    const obj = { first_el, other };
    console.log(obj);
    return obj;
  }
  foo("a", "b", "c", "d", "e");
  //
  //
  //
  // 2. Организовать функцию getInfo, которая принимает объект вида
  //   { name: ...,  info: { employees: [...], partners: [ … ]  } }
  //   и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
  //
  //   const organisation = {
  //     name: 'Google',
  //     info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing']   }
  //   };
  //   getInfo(organisation); →
  //   Name: Google
  //   Partners: Microsoft Facebook
  const organisation = {
    name: "",
    info: {
      employees: ["Vlad", "Olga"],
      partners: ["Microsoft", "Facebook", "Xing"],
    },
  };

  function getInfo({
    name,
    info: {
      partners: [firstPartner, secondPartner],
    },
  }) {
    if (name.length == 0) {
      name = "Unknown";
    }
    console.log(`Name: ${name},\nPartners: ${firstPartner}, ${secondPartner}`);
  }
  getInfo(organisation);
})();
