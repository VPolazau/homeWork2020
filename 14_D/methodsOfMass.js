(function(){






//  3-яя задачи самая сложная











  // 1)Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
  function camelize(str){
    var strWitoutDef = [];
    for (var variable of str.split('-')) {
      strWitoutDef += variable;
    }
    return strWitoutDef;
  }
  console.log(camelize('my-short-string')); // 'myShortString'

  // 2)Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
  let arr = [7, 3, 8, 1, 0, 5, 9, 4, 10, 6];
  function filterRange(arr, a, b){
    let arrFill = [];
    for (var el of arr) {
      if (el >= a && el <= b) {
        arrFill.push(el)
      }
    }
    return arrFill;
  }
  console.log(filterRange(arr, 3, 5));
  console.log(arr);

  // 3)Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b. Функция должна изменять принимаемый массив и ничего не возвращать.
  function filterRangeInPlace(arr, a, b){
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < a || arr[i] > b) {
        arr.splice(i, 1);
        i--;
      }
    }

  }
  console.log(filterRangeInPlace(arr, 5, 7));
  console.log(arr);

  // 4)функция для сортировки массивов по убыванию
  function sortMas(mas){
    for (var a = 0; a < mas.length; a++) {
      for (var b = a + 1; b < mas.length; b++) {
         if (mas[a] < mas[b]) {
           var buf = mas[a];
           mas[a] = mas[b];
           mas[b] = buf;
         }
      }
    }
    return mas
  }
  console.log(sortMas(arr));

  // 5)У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым. Создайте функцию copySorted(arr).
  let arrStr = ["HTML", "JavaScript", "CSS"];
  function copySorted(arr){
    return arr.slice().sort();
  }
  let sorted = copySorted(arrStr)
  console.log(sorted, arrStr);

  //6)Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
    // a)Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
    

    // б)Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.


  //7)У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.


  //8)У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.


  //9)Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.


  //10)Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.


  //11)Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.


  //12)Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.




})()
