

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

/*
function lookingForASymbol (my_line,q) {
    let str: any = []
    for (let i = 0; i < my_line.length; i ++){
        if ( my_line.indexOf(q,i-1) != my_line.indexOf(q,i) ){
                str.push ( my_line.indexOf(q,i))
        }
        
    }
    return str
}
console.log(lookingForASymbol (the_string_compared_1,'o'))
*/

function lookingForASymbol (my_line,q) {
    let str: any = []
    let i = -1
    while ((i = my_line.indexOf(q, i + 1)) != -1) {
        str.push ( my_line.indexOf(q,i))
    }
    console.log (str)
    document.write (`<p> В строке: ${my_line}</p>`)
    document.write (`<p> Знак: '${q}' встречается ${str.length} раз, по позициям ${str}`)
}
console.log(lookingForASymbol (the_string_compared_1,'o'))
document.write (`<hr>`)

document.write (`<p>=====================================================================================================</p>`)
document.write (`<p>Задание 1</p>`)
document.write (`<p>Создать массив из 10 случайных чисел и написать несколько
функций для работы с ним.</p>`)
let tenNumbers: any = []
let min = 3
let max = 50
for (let i = 0; i < 10; i ++) {
 tenNumbers [i] = Math.floor(Math.random() * (max - min + 1) + min - 0.5)   
}
document.write (`<p>Создаем массив из случайных чисел в диапазоне от ${min} до ${max}</p>`)

document.write (`<hr>`)

document.write (`<p>1 Функция принимает массив и выводит его на экран.</p>`)

function outputToTheScreen (arr: any []) {
    document.write (`<p>Массив из 10 случайных чисел: ${arr}</p>`)
}
outputToTheScreen(tenNumbers)

document.write (`<hr>`)

document.write (`<p>2 Функция принимает массив и выводит только четные элементы.</p>`)


function weOutputEvenElements (arr: any []) {
    let arr1 = []
    for (let i = 0; i <10; i++){
       if (arr[i] % 2 == 0) {
        //@ts-ignore 
           arr1.push( arr[i])
       } 
    }
    return arr1
}

document.write (`<p>Четные числа из этого массива : ${weOutputEvenElements (tenNumbers)}</p> `)

document.write (`<hr>`)

document.write (`<p>3 Функция принимает массив и возвращает сумму всех элементов массива.</p>`)

function sumOfValues (arr: any []) {
    let s = 0
    for (let i = 0; i < 10; i ++){
        s += arr [i]
    }
    document.write (`<p>Сумма элементов массива равна:${s}</p>`)
}
sumOfValues (tenNumbers)

document.write (`<hr>`)

document.write (`<p>4 Функция принимает массив и возвращает его максимальный элемент.</p>`)

function lookingForTheMaximumElement (arr: any []) {
    let max = arr[0]
    for (let i = 1; i < arr.length; i ++){
        if (max < arr[i]){
            max = arr[i]
        }
    }
    document.write (`<p>Максимальный элемент в массиве : ${max}</p>`)
}
lookingForTheMaximumElement (tenNumbers)

document.write (`<hr>`)

document.write (`<p>5 Функция добавления нового элемента в массив по указанному индексу.</p>`)







// 6
// Функция удаления элемента из массива по указанному
// индексу.
// Задание 2
// Создать еще один массив из 5 случайных чисел и написать
// следующие функции.
// 1
// Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из двух массивов
// без повторений.










// Задание 2
// Функция принимает 2 массива и возвращает новый массив,
// в котором собраны общие элементы (то есть элементы,
// которые встречаются и в первом и во втором массивах)
// без повторений.
// 3
// Функция принимает 2 массива и возвращает новый мас-
// сив, в котором собраны все элементы из первого массива,
// которых нет во втором массиве.
// Задание 3
// Создать массив фруктов и отсортировать его по алфавиту.
// Написать следующие функции.
// 1
// Вывод на экран с помощью document.write() в виде списка
// (с помощью тегов ul и li).
// 2
// Поиск фрукта в массиве. Функция принимает название
// фрукта и возвращает индекс найденного элемента или -1,
// если не найден. Поиск должен быть нерегистрозависимым.