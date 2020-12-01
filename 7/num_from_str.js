(function(){
  // Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом
  let name = 'victor'
  function ucFirst(str) {
    var string = [str.split('').shift().toUpperCase()].concat(str.split('').slice(1,str.length))
    return string.join('');
  }
  console.log(ucFirst(name));




  // Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
  function checkSpam(str){
    if (str.toLowerCase().indexOf('viagra') != -1 ||
        str.toUpperCase().indexOf('XXX') != -1
    )
        console.log(true);
    else console.log(false);
  }
  //let spamStr = prompt('Введите слова', 'free xxxxx')
  //checkSpam(spamStr)




  // Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
  function truncate(str,maxlength) {
    if (str.length > maxlength) {
      let tr = str.split('').slice(0, maxlength - 1).concat('…').join('')
      return console.log(tr);
    }else {
      return console.log(str);
    }
  }
  truncate("Вот, что мне хотелось бы сказать на эту тему:", 20)
  truncate("Всем привет!", 20)



  // Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число. Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
  function extractCurrencyValue(str) {
    console.log(str);
    masNuN = []
    masNum = []
    for (var el of str.split('')) {
      isFinite(el) ? masNum.push(el) : masNuN.push(el)
    }
    return console.log(masNum.join(''), masNuN.join(''));
  }
  extractCurrencyValue('$123$$$45$$$67');
})()
