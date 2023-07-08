/*
document.write (`<p>Задание</p>`)
document.write (`<p>1
Написать функцию, которая принимает 2 строки и срав-
нивает их длину. Функция возвращает 1, если в первой
строке больше символов, чем во второй; -1 – если во вто-
рой больше символов, чем в первой; или 0 – если строки
одинаковой длины.</p>`)

function comparingTheLines (w,e) {
    if (w.length > e.length) {
        return `1- первая строка длиннее второй`
    }else if (w.length < e.length) {
        return `-1 - вторая строка длиннее первой`
    }else {
        return `0 - строки равной длины`
    }
}

let the_string_compared_1 = `lorem ipsum dolor, sit amet consectetur adipisicing elit.`
let the_string_compared_2 = `Praesentium quisquam, similique natus repellendus velit sed nostrum eaque iste libero fugit
laboriosam temporibus itaque accusantium nisi doloribus dicta soluta sunt iure.`
document.write(comparingTheLines (the_string_compared_1,the_string_compared_2).toString())

document.write (`<hr>`)

document.write (`<p>2
Написать функцию, которая переводит в верхний регистр
первый символ переданной строки.</p>`)
document.write (`<p>Переданная строка : ${the_string_compared_1}</p>`)
function changingTheCase (w) {
    document.write (`<p>Поменян регистр первой буквы: ${w[0].toUpperCase()+ w.slice(1)}</p>`)
}
changingTheCase (the_string_compared_1)

// switch(a) {
//     case 'o':
//     case 'a':
//         count++
// }
document.write (`<hr>`)
document.write (`<p>3
Написать функцию, которая считает количество гласных
букв в переданной строке.</p>`)

document.write (`<p>Переданная строка:${the_string_compared_2}`)
function countingVowels (w) {
    let a = 0
    for (let i = 0; i < w.length; i ++){
        switch (w[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            a += 1
        }
    }
    document.write (`<p>В строке ${a} гласных</p>`)
}
countingVowels (the_string_compared_2)

document.write (`<hr>`)


document.write (`<p>4
Написать функцию для проверки спама в переданной
строке. Функция возвращает true, если строка содержит
спам. Спамом считать следующие слова: 100% бесплатно,
увеличение продаж, только сегодня, не удаляйте, ххх.
Функция должна быть нечувствительна к регистру.</p>`)

let the_string_compared_rus1 = `В последнее время в связи с кризисом мне, как бизнес-консультанту,
 очень многие клиенты задают вопросы, связанные с увеличение продаж только сегодня.`
let the_string_compared_rus2 = `"У бизнесменов почти не возникает вопросов, связанных с поиском и закупкой
 материалов или готовых товаров."`

 function checkSpam(str) {
    let lowerStr = str.toLowerCase()
    return (lowerStr.includes('увеличение продаж') ||
            lowerStr.includes('только сегодня') ||
            lowerStr.includes('100% бесплатно') ||
            lowerStr.includes('не удаляйте') ||
            lowerStr.includes('xxx')) && 'спам' || 'не спам'
    // ne srabotaet t.k. nado proverit na vhozdenie, a ne ravenstvo
    // switch (lowerStr) {
    //     case('увеличение продаж'):
    //     case('только сегодня'):
    //     case('100% бесплатно'):
    //     case('не удаляйте'):
    //     case('xxx'):
    //         return 'спам'
    //     return 'не спам'
    // }
}
   document.write (`<p> Строка: ${the_string_compared_rus1} - ${checkSpam(the_string_compared_rus1)}</p> `)
   document.write (`<p> Строка: ${the_string_compared_rus2} - ${checkSpam(the_string_compared_rus2)}</p> `)
//   console.log (checkSpam(the_string_compared_rus2))
document.write (`<hr>`)
document.write (`<p>5
Написать функцию сокращения строки. Функция прини-
мает строку и ее максимальную длину. Если длина строки
больше, чем максимальная, то необходимо отбросить
лишние символы, добавив вместо них троеточие.
Например: truncate(“Hello, world!”, 8) должна вернуть
“Hello...”.</p>`)


function trimTheLine (my_line, max_line){
    if (my_line.length > max_line){
        return my_line.slice(0,max_line) + '...' + my_line.slice(my_line.length - 2, my_line.length )
    }else {
        return my_line
    }
}
document.write (`<p>Строку:'${the_string_compared_rus2}' укорачиваем до 25 позиций</p>`)
document.write (`<p> ${trimTheLine (the_string_compared_rus2, 25,)}</p>`)
document.write (`<hr>`)

document.write (`<p>6
Написать функцию, которая проверяет, является ли пере-
данная строка палиндром.</p>`)


function checkingThePalindrome (my_line) {
    let a: any =( my_line.length) / 2
    for (let i = 0; i < parseInt(a); i ++) {
        if ( my_line[i] == my_line.slice(-1-i)[0]){
            return 'Палиндром'
        } else {
            return 'НЕ палиндром'
        }
    }
}
document.write (`<p>Вырожение "а роза упала на лапу азора" - ${checkingThePalindrome ('а роза упала на лапу азора')}</p>`)
document.write (`<p>Вырожение "я иду в школу" - ${checkingThePalindrome ('я иду в школу')}</p>`)
document.write (`<hr>`)

document.write (`<p>7
Написать функцию, которая считает количество слов в
предложении.</p>`)

function countingWords (my_line) {
    let w = 0
    for (let i = 0; i < my_line.length; i ++){
        if (my_line.at(i) === ' ') {
            w ++
        }
    }
    return w + 1
}
document.write (`<p>В предложении: ${the_string_compared_rus2}</p><p>Колличество слов: ${countingWords (the_string_compared_rus2)}`)
document.write (`<hr>`)

document.write (`<p>8
Написать функцию, которая возвращает самое длинное
слово из предложения.</p>`)

function lookingForALongWord (my_line){
    let my_line1
    my_line1 = my_line.replace(/[,.]/g, '')
    my_line1 = my_line.replaceAll(',', '').replaceAll('.', '')
    let w_line = my_line1.split (' ')
    let w = w_line[0].length
    for (let i = 0; i < w_line.length; i ++){
        if ( w < w_line[i].length) {
            w = w_line[i]
        }
    }
    return (w)
}
document.write(`<p>Предложение: '${the_string_compared_1}'</p>`)
document.write (`<p> Самое длинное слово из предложения:"${lookingForALongWord (the_string_compared_1)}"</p>`)

document.write (`Можно было в массив записать все слова наибольшей одинаковой длины и вывести их.`)
    document.write (`<hr>`)

    document.write (`<p>9
    Написать функцию, которая считает среднюю длину слова
    в предложении..</p>`)

    function calculateTheAverageLengthOfWords (my_line) {
    let my_line1
    my_line1 = my_line.replace(/[,.]/g, '')
    let w_line = my_line1.split (' ')
    let w = 0
    let sum = 0
    for (let i = 0; i < w_line.length; i ++){
        sum += w_line[i].length
        w+=1
    }
    return (Math.round((sum / w)*10))/10
}
document.write(`<p> В предложении: ${the_string_compared_2}</p><p> средняя длина слова составляет: ${calculateTheAverageLengthOfWords (the_string_compared_2)}`)

document.write (`<hr>`)

document.write (`<p>10 Написать функцию, которая принимает строку и символ
и выводит индексы, по которым находится этот символ в
строке. Также вывести, сколько всего раз встречается этот
символ в строке.</p>`)
*/
/*
function lookingForASymbol (my_line,q) {
    let str: any = []
    for (let i = 0; i < my_line.length; i++){
        const findIndex = my_line.indexOf(q,i)
        if ( findIndex != -1){
            str.push (findIndex)
            i = findIndex
        }
    }
    return str
}
console.log(lookingForASymbol (the_string_compared_1,'o'))
*/
// function lookingForASymbol (my_line,q) {
//     let str: any = []
//     let i = -1
//     while ((i = my_line.indexOf(q, i + 1)) != -1) {
//         str.push ( my_line.indexOf(q,i))
//     }
//     console.log (str)
//     document.write (`<p> В строке: ${my_line}</p>`)
//     document.write (`<p> Знак: '${q}' встречается ${str.length} раз, по позициям ${str}`)
// }
// console.log(lookingForASymbol (the_string_compared_1,'o'))
// document.write (`<hr>`)
document.write("<p>=====================================================================================================</p>");
document.write("<p>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 1</p>");
document.write("<p>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 10 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B \u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E\n\u0444\u0443\u043D\u043A\u0446\u0438\u0439 \u0434\u043B\u044F \u0440\u0430\u0431\u043E\u0442\u044B \u0441 \u043D\u0438\u043C.</p>");
var tenNumbers = [];
var min = 3;
var max = 50;
for (var i = 0; i < 10; i++) {
    tenNumbers[i] = Math.floor(Math.random() * (max - min + 1) + min - 0.5);
}
document.write("<p>\u0421\u043E\u0437\u0434\u0430\u0435\u043C \u043C\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B \u0432 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0435 \u043E\u0442 " + min + " \u0434\u043E " + max + "</p>");
document.write("<hr>");
document.write("<p>1 \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043C\u0430\u0441\u0441\u0438\u0432 \u0438 \u0432\u044B\u0432\u043E\u0434\u0438\u0442 \u0435\u0433\u043E \u043D\u0430 \u044D\u043A\u0440\u0430\u043D.</p>");
function outputToTheScreen(arr) {
    document.write("<p>\u041F\u043E\u043B\u0443\u0447\u0435\u043D\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B: " + arr + "</p>");
}
outputToTheScreen(tenNumbers);
document.write("<hr>");
document.write("<p>2 \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043C\u0430\u0441\u0441\u0438\u0432 \u0438 \u0432\u044B\u0432\u043E\u0434\u0438\u0442 \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0435\u0442\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B.</p>");
function weOutputEvenElements(arr) {
    var arr1 = [];
    for (var i = 0; i < 10; i++) {
        if (arr[i] % 2 == 0) {
            //@ts-ignore 
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
document.write("<p>\u0427\u0435\u0442\u043D\u044B\u0435 \u0447\u0438\u0441\u043B\u0430 \u0438\u0437 \u044D\u0442\u043E\u0433\u043E \u043C\u0430\u0441\u0441\u0438\u0432\u0430 : " + weOutputEvenElements(tenNumbers) + "</p> ");
document.write("<hr>");
document.write("<p>3 \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043C\u0430\u0441\u0441\u0438\u0432 \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0443\u043C\u043C\u0443 \u0432\u0441\u0435\u0445 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0430.</p>");
function sumOfValues(arr) {
    var s = 0;
    for (var i = 0; i < 10; i++) {
        s += arr[i];
    }
    document.write("<p>\u0421\u0443\u043C\u043C\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0440\u0430\u0432\u043D\u0430:" + s + "</p>");
}
sumOfValues(tenNumbers);
document.write("<hr>");
document.write("<p>4 \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043C\u0430\u0441\u0441\u0438\u0432 \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0435\u0433\u043E \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442.</p>");
function lookingForTheMaximumElement(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    document.write("<p>\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435 : " + max + "</p>");
}
lookingForTheMaximumElement(tenNumbers);
document.write("<hr>");
document.write("<p>5 \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043D\u043E\u0432\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432 \u043F\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C\u0443 \u0438\u043D\u0434\u0435\u043A\u0441\u0443.</p>");
var index = 7;
var elem = 100;
document.write("<p>\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 " + elem + " \u043D\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u044E " + index + " </p>");
// function addingAnAlementToTheArray (arr: any [], i,e,) {
//     arr.splice(i, 0, e, )
//     document.write (`<p>Измененный массив ${arr} </p>`) 
// }
// addingAnAlementToTheArray (tenNumbers, index, elem,)
var addingAnAlementToTheArray = function (arr, i, e) {
    arr.splice(i, 0, e);
    document.write("<p>\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 " + arr + " </p>");
};
addingAnAlementToTheArray(tenNumbers, index, elem);
document.write("<hr>");
document.write("<p>6 \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u0437 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u043F\u043E \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u043E\u043C\u0443 \u0438\u043D\u0434\u0435\u043A\u0441\u0443.</p>");
document.write("<p>\u0423\u0434\u0430\u043B\u044F\u0435\u043C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 " + elem + " \u043D\u0430 \u043F\u043E\u0437\u0438\u0446\u0438\u044E " + index + " </p>");
var deleteAnAlementToTheArray = function (arr, i, e) {
    arr.splice(i, 1);
    document.write("<p>\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 " + arr + " </p>");
};
deleteAnAlementToTheArray(tenNumbers, index, elem);
document.write("<hr>");
document.write("<p>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 2</p>");
document.write("<p>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0435\u0449\u0435 \u043E\u0434\u0438\u043D \u043C\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 5 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B \u0438 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C\n\u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438.</p>");
var fiveNumbers = [];
for (var i = 0; i < 5; i++) {
    fiveNumbers[i] = Math.floor(Math.random() * (max - min + 1) + min - 0.5);
}
document.write("<p>\u0421\u043E\u0437\u0434\u0430\u0435\u043C \u043C\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 \u0441\u043B\u0443\u0447\u0430\u0439\u043D\u044B\u0445 \u0447\u0438\u0441\u0435\u043B \u0432 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D\u0435 \u043E\u0442 " + min + " \u0434\u043E " + max + "</p>");
outputToTheScreen(fiveNumbers);
document.write("<hr>");
document.write("<p>1 \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 2 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043D\u043E\u0432\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0441\u043E\u0431\u0440\u0430\u043D\u044B \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0438\u0437 \u0434\u0432\u0443\u0445 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u0432 \u0431\u0435\u0437 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0439.</p>");
document.write("<p>\u041C\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 10 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432: " + tenNumbers + "</p>");
document.write("<p>\u041C\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 5 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432: " + fiveNumbers + "</p>");
function CombiningArrays(arr10, arr5) {
    var arr = [];
    for (var _i = 0, arr10_1 = arr10; _i < arr10_1.length; _i++) {
        var el = arr10_1[_i];
        if (!arr.includes(el))
            arr.push(el);
    }
    for (var _a = 0, arr5_1 = arr5; _a < arr5_1.length; _a++) {
        var el = arr5_1[_a];
        if (!arr.includes(el))
            arr.push(el);
    }
    return arr;
}
document.write("<p>\u041D\u043E\u0432\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 \u0431\u0435\u0437 \u043F\u043E\u0432\u0442\u043E\u0440\u0430 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432: " + CombiningArrays(tenNumbers, fiveNumbers) + "</p>");
//========================================================================================
// Удалил все числа из массива 10, которые есть в 5
/*
function CombiningArrays (arr10: any [],arr5: any [],) {
    let arr: any =[]
    for (let i = 0; i < arr10.length; i++) {
      if (!arr5.includes(arr10[i])) {
        arr.push(arr10[i]);
      }
    }
    console.log (arr)
  }
  CombiningArrays (tenNumbers,fiveNumbers,)
*/
//===========================================================================================
document.write("<hr>");
document.write("<p>2 \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 2 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043D\u043E\u0432\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432,\n\u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0441\u043E\u0431\u0440\u0430\u043D\u044B \u043E\u0431\u0449\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B (\u0442\u043E \u0435\u0441\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B,\n\u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u044E\u0442\u0441\u044F \u0438 \u0432 \u043F\u0435\u0440\u0432\u043E\u043C \u0438 \u0432\u043E \u0432\u0442\u043E\u0440\u043E\u043C \u043C\u0430\u0441\u0441\u0438\u0432\u0430\u0445)\n\u0431\u0435\u0437 \u043F\u043E\u0432\u0442\u043E\u0440\u0435\u043D\u0438\u0439.</p>");
document.write("<p>\u041C\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 10 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432: " + tenNumbers + "</p>");
document.write("<p>\u041C\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 5 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432: " + fiveNumbers + "</p>");
function CombiningArrays_1(arr10, arr5) {
    var arr = [];
    for (var _i = 0, arr5_2 = arr5; _i < arr5_2.length; _i++) {
        var el = arr5_2[_i];
        if (arr10.includes(el))
            arr.push(el);
    }
    // for (let i = 0; i < arr10.length; i++) {
    //   if (arr5.includes(arr10[i])) {
    //     arr.push(arr10[i]);
    //   }
    // }
    if (arr.length == 0) {
        return 'НЕТ одинаковых элементов';
    }
    else {
        return (arr);
    }
}
document.write("<p>\u041C\u0430\u0441\u0441\u0438\u0432 \u0441 \u043E\u0431\u0449\u0438\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438 \u0431\u0435\u0437 \u043F\u043E\u0432\u0442\u043E\u0440\u043E\u0432: " + CombiningArrays_1(tenNumbers, fiveNumbers) + "</p>");
document.write("<hr>");
document.write("<p>3 \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 2 \u043C\u0430\u0441\u0441\u0438\u0432\u0430 \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043D\u043E\u0432\u044B\u0439 \u043C\u0430\u0441\n  \u0441\u0438\u0432, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0441\u043E\u0431\u0440\u0430\u043D\u044B \u0432\u0441\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0438\u0437 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043C\u0430\u0441\u0441\u0438\u0432\u0430,\n  \u043A\u043E\u0442\u043E\u0440\u044B\u0445 \u043D\u0435\u0442 \u0432\u043E \u0432\u0442\u043E\u0440\u043E\u043C \u043C\u0430\u0441\u0441\u0438\u0432\u0435.</p>");
function CombiningArrays_2(arr10, arr5) {
    var arr = [];
    for (var i = 0; i < arr10.length; i++) {
        if (!arr5.includes(arr10[i])) {
            arr.push(arr10[i]);
        }
    }
    return (arr);
}
document.write("<p>\u0418\u0437\u043C\u0435\u043D\u0435\u043D\u043D\u044B\u0439 \u043C\u0430\u0441\u0441\u0438\u0432 \u0438\u0437 10 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432, \u0433\u0434\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u044B \u043E\u0431\u0449\u0438\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B \u0441 \u043C\u0430\u0441\u0441\u0438\u0432\u043E\u043C \u0438\u0437 5 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432: " + CombiningArrays_2(tenNumbers, fiveNumbers) + "</p>");
document.write("<hr>");
document.write("<p>\u0417\u0430\u0434\u0430\u043D\u0438\u0435 3</p>");
document.write("<p>\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043C\u0430\u0441\u0441\u0438\u0432 \u0444\u0440\u0443\u043A\u0442\u043E\u0432 \u0438 \u043E\u0442\u0441\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0435\u0433\u043E \u043F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443.\n  \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0444\u0443\u043D\u043A\u0446\u0438\u0438.</p>");
var fruitList = ['lemon', 'watermelon', 'quince', 'mango', 'tangerine', 'melon',];
document.write("<p>" + (fruitList.sort(function (a, b) { return a.localeCompare(b); }).join(', ')) + "</p>");
document.write("<hr>");
document.write("<p>1 \u0412\u044B\u0432\u043E\u0434 \u043D\u0430 \u044D\u043A\u0440\u0430\u043D \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E document.write() \u0432 \u0432\u0438\u0434\u0435 \u0441\u043F\u0438\u0441\u043A\u0430\n  (\u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0442\u0435\u0433\u043E\u0432 ul \u0438 li).</p>");
//const printUl = document.querySelector('.fruits')
function printFruitList(arr) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        // return printUl.innerHTML += `<li>${el}</li>`
        document.write("<ul><li>" + el + "</li></ul>");
    }
}
printFruitList(fruitList);
document.write("<hr>");
document.write("<p>2 \u041F\u043E\u0438\u0441\u043A \u0444\u0440\u0443\u043A\u0442\u0430 \u0432 \u043C\u0430\u0441\u0441\u0438\u0432\u0435. \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435\n  \u0444\u0440\u0443\u043A\u0442\u0430 \u0438 \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0438\u043D\u0434\u0435\u043A\u0441 \u043D\u0430\u0439\u0434\u0435\u043D\u043D\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0438\u043B\u0438 -1,\n  \u0435\u0441\u043B\u0438 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D. \u041F\u043E\u0438\u0441\u043A \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043D\u0435\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u043E\u0437\u0430\u0432\u0438\u0441\u0438\u043C\u044B\u043C.</p>");
function lookingForFruit(f) {
    return fruitList.indexOf(f);
}
document.write("<p>\u0418\u0449\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \"quince\" \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C \u0438\u043D\u0434\u0435\u043A\u0441: " + lookingForFruit('quince') + "</p>");
document.write("<p>\u0418\u0449\u0438\u043C \u044D\u043B\u0435\u043C\u0435\u043D\u0442 \"apple\" \u0438 \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u043C: " + lookingForFruit('apple') + "</p>");
/*
document.write (`<p></p>`)





2
Поиск фрукта в массиве. Функция принимает название
фрукта и возвращает индекс найденного элемента или -1,
если не найден. Поиск должен быть нерегистрозависимым.
*/ 
