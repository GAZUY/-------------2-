document.write("<p>\u0417\u0430\u0434\u0430\u043D\u0438\u0435</p>");
document.write("<p>1\n\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 2 \u0441\u0442\u0440\u043E\u043A\u0438 \u0438 \u0441\u0440\u0430\u0432-\n\u043D\u0438\u0432\u0430\u0435\u0442 \u0438\u0445 \u0434\u043B\u0438\u043D\u0443. \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 1, \u0435\u0441\u043B\u0438 \u0432 \u043F\u0435\u0440\u0432\u043E\u0439\n\u0441\u0442\u0440\u043E\u043A\u0435 \u0431\u043E\u043B\u044C\u0448\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u0447\u0435\u043C \u0432\u043E \u0432\u0442\u043E\u0440\u043E\u0439; -1 \u2013 \u0435\u0441\u043B\u0438 \u0432\u043E \u0432\u0442\u043E-\n\u0440\u043E\u0439 \u0431\u043E\u043B\u044C\u0448\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u0447\u0435\u043C \u0432 \u043F\u0435\u0440\u0432\u043E\u0439; \u0438\u043B\u0438 0 \u2013 \u0435\u0441\u043B\u0438 \u0441\u0442\u0440\u043E\u043A\u0438\n\u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u043E\u0439 \u0434\u043B\u0438\u043D\u044B.</p>");
function comparingTheLines(w, e) {
    if (w.length > e.length) {
        return "1- \u043F\u0435\u0440\u0432\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 \u0432\u0442\u043E\u0440\u043E\u0439";
    }
    else if (w.length < e.length) {
        return "-1 - \u0432\u0442\u043E\u0440\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u0434\u043B\u0438\u043D\u043D\u0435\u0435 \u043F\u0435\u0440\u0432\u043E\u0439";
    }
    else {
        return "0 - \u0441\u0442\u0440\u043E\u043A\u0438 \u0440\u0430\u0432\u043D\u043E\u0439 \u0434\u043B\u0438\u043D\u044B";
    }
}
var the_string_compared_1 = "lorem ipsum dolor, sit amet consectetur adipisicing elit.";
var the_string_compared_2 = "Praesentium quisquam, similique natus repellendus velit sed nostrum eaque iste libero fugit\nlaboriosam temporibus itaque accusantium nisi doloribus dicta soluta sunt iure.";
document.write(comparingTheLines(the_string_compared_1, the_string_compared_2).toString());
document.write("<hr>");
document.write("<p>2\n\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0435\u0440\u0435\u0432\u043E\u0434\u0438\u0442 \u0432 \u0432\u0435\u0440\u0445\u043D\u0438\u0439 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\n\u043F\u0435\u0440\u0432\u044B\u0439 \u0441\u0438\u043C\u0432\u043E\u043B \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0438.</p>");
document.write("<p>\u041F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 : " + the_string_compared_1 + "</p>");
function changingTheCase(w) {
    document.write("<p>\u041F\u043E\u043C\u0435\u043D\u044F\u043D \u0440\u0435\u0433\u0438\u0441\u0442\u0440 \u043F\u0435\u0440\u0432\u043E\u0439 \u0431\u0443\u043A\u0432\u044B: " + (w[0].toUpperCase() + w.slice(1)) + "</p>");
}
changingTheCase(the_string_compared_1);
// switch(a) {
//     case 'o':
//     case 'a':
//         count++
// }
document.write("<hr>");
document.write("<p>3\n\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0433\u043B\u0430\u0441\u043D\u044B\u0445\n\u0431\u0443\u043A\u0432 \u0432 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0439 \u0441\u0442\u0440\u043E\u043A\u0435.</p>");
document.write("<p>\u041F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430:" + the_string_compared_2);
function countingVowels(w) {
    var a = 0;
    for (var i = 0; i < w.length; i++) {
        switch (w[i]) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                a += 1;
        }
    }
    document.write("<p>\u0412 \u0441\u0442\u0440\u043E\u043A\u0435 " + a + " \u0433\u043B\u0430\u0441\u043D\u044B\u0445</p>");
}
countingVowels(the_string_compared_2);
document.write("<hr>");
document.write("<p>4\n\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0434\u043B\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0438 \u0441\u043F\u0430\u043C\u0430 \u0432 \u043F\u0435\u0440\u0435\u0434\u0430\u043D\u043D\u043E\u0439\n\u0441\u0442\u0440\u043E\u043A\u0435. \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 true, \u0435\u0441\u043B\u0438 \u0441\u0442\u0440\u043E\u043A\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u0442\n\u0441\u043F\u0430\u043C. \u0421\u043F\u0430\u043C\u043E\u043C \u0441\u0447\u0438\u0442\u0430\u0442\u044C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0435 \u0441\u043B\u043E\u0432\u0430: 100% \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E,\n\u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0430\u0436, \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F, \u043D\u0435 \u0443\u0434\u0430\u043B\u044F\u0439\u0442\u0435, \u0445\u0445\u0445.\n\u0424\u0443\u043D\u043A\u0446\u0438\u044F \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u043D\u0435\u0447\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u0430 \u043A \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0443.</p>");
var the_string_compared_rus1 = "\u0412 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F \u0432 \u0441\u0432\u044F\u0437\u0438 \u0441 \u043A\u0440\u0438\u0437\u0438\u0441\u043E\u043C \u043C\u043D\u0435, \u043A\u0430\u043A \u0431\u0438\u0437\u043D\u0435\u0441-\u043A\u043E\u043D\u0441\u0443\u043B\u044C\u0442\u0430\u043D\u0442\u0443,\n \u043E\u0447\u0435\u043D\u044C \u043C\u043D\u043E\u0433\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u0437\u0430\u0434\u0430\u044E\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u044B, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0435 \u0441 \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0434\u0430\u0436 \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F.";
var the_string_compared_rus2 = "\"\u0423 \u0431\u0438\u0437\u043D\u0435\u0441\u043C\u0435\u043D\u043E\u0432 \u043F\u043E\u0447\u0442\u0438 \u043D\u0435 \u0432\u043E\u0437\u043D\u0438\u043A\u0430\u0435\u0442 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432, \u0441\u0432\u044F\u0437\u0430\u043D\u043D\u044B\u0445 \u0441 \u043F\u043E\u0438\u0441\u043A\u043E\u043C \u0438 \u0437\u0430\u043A\u0443\u043F\u043A\u043E\u0439\n \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u043E\u0432 \u0438\u043B\u0438 \u0433\u043E\u0442\u043E\u0432\u044B\u0445 \u0442\u043E\u0432\u0430\u0440\u043E\u0432.\"";
function checkSpam(str) {
    var lowerStr = str.toLowerCase();
    return (lowerStr.includes('увеличение продаж') ||
        lowerStr.includes('только сегодня') ||
        lowerStr.includes('100% бесплатно') ||
        lowerStr.includes('не удаляйте') ||
        lowerStr.includes('xxx')) && 'спам' || 'не спам';
}
document.write("<p> \u0421\u0442\u0440\u043E\u043A\u0430: " + the_string_compared_rus1 + " - " + checkSpam(the_string_compared_rus1) + "</p> ");
document.write("<p> \u0421\u0442\u0440\u043E\u043A\u0430: " + the_string_compared_rus2 + " - " + checkSpam(the_string_compared_rus2) + "</p> ");
//   console.log (checkSpam(the_string_compared_rus2))
document.write("<hr>");
document.write("<p>5\n\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u0438\u044F \u0441\u0442\u0440\u043E\u043A\u0438. \u0424\u0443\u043D\u043A\u0446\u0438\u044F \u043F\u0440\u0438\u043D\u0438-\n\u043C\u0430\u0435\u0442 \u0441\u0442\u0440\u043E\u043A\u0443 \u0438 \u0435\u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0443\u044E \u0434\u043B\u0438\u043D\u0443. \u0415\u0441\u043B\u0438 \u0434\u043B\u0438\u043D\u0430 \u0441\u0442\u0440\u043E\u043A\u0438\n\u0431\u043E\u043B\u044C\u0448\u0435, \u0447\u0435\u043C \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F, \u0442\u043E \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0442\u0431\u0440\u043E\u0441\u0438\u0442\u044C\n\u043B\u0438\u0448\u043D\u0438\u0435 \u0441\u0438\u043C\u0432\u043E\u043B\u044B, \u0434\u043E\u0431\u0430\u0432\u0438\u0432 \u0432\u043C\u0435\u0441\u0442\u043E \u043D\u0438\u0445 \u0442\u0440\u043E\u0435\u0442\u043E\u0447\u0438\u0435.\n\u041D\u0430\u043F\u0440\u0438\u043C\u0435\u0440: truncate(\u201CHello, world!\u201D, 8) \u0434\u043E\u043B\u0436\u043D\u0430 \u0432\u0435\u0440\u043D\u0443\u0442\u044C\n\u201CHello...\u201D.</p>");
function trimTheLine(my_line, max_line) {
    if (my_line.length > max_line) {
        return my_line.slice(0, max_line) + '...' + my_line.slice(my_line.length - 2, my_line.length);
    }
    else {
        return my_line;
    }
}
document.write("<p>\u0421\u0442\u0440\u043E\u043A\u0443:'" + the_string_compared_rus2 + "' \u0443\u043A\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u043C \u0434\u043E 25 \u043F\u043E\u0437\u0438\u0446\u0438\u0439</p>");
document.write("<p> " + trimTheLine(the_string_compared_rus2, 25) + "</p>");
document.write("<hr>");
document.write("<p>6\n\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u044F\u0435\u0442, \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043B\u0438 \u043F\u0435\u0440\u0435-\n\u0434\u0430\u043D\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430 \u043F\u0430\u043B\u0438\u043D\u0434\u0440\u043E\u043C.</p>");
function checkingThePalindrome(my_line) {
    var a = (my_line.length) / 2;
    for (var i = 0; i < parseInt(a); i++) {
        if (my_line[i] == my_line.slice(-1 - i)[0]) {
            return 'Палиндром';
        }
        else {
            return 'НЕ палиндром';
        }
    }
}
document.write("<p>\u0412\u044B\u0440\u043E\u0436\u0435\u043D\u0438\u0435 \"\u0430 \u0440\u043E\u0437\u0430 \u0443\u043F\u0430\u043B\u0430 \u043D\u0430 \u043B\u0430\u043F\u0443 \u0430\u0437\u043E\u0440\u0430\" - " + checkingThePalindrome('а роза упала на лапу азора') + "</p>");
document.write("<p>\u0412\u044B\u0440\u043E\u0436\u0435\u043D\u0438\u0435 \"\u044F \u0438\u0434\u0443 \u0432 \u0448\u043A\u043E\u043B\u0443\" - " + checkingThePalindrome('я иду в школу') + "</p>");
document.write("<hr>");
document.write("<p>7\n\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043B\u043E\u0432 \u0432\n\u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0438.</p>");
function countingWords(my_line) {
    var w = 0;
    for (var i = 0; i < my_line.length; i++) {
        if (my_line.at(i) === ' ') {
            w++;
        }
    }
    return w + 1;
}
document.write("<p>\u0412 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0438: " + the_string_compared_rus2 + "</p><p>\u041A\u043E\u043B\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441\u043B\u043E\u0432: " + countingWords(the_string_compared_rus2));
document.write("<hr>");
document.write("<p>8\n\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0441\u0430\u043C\u043E\u0435 \u0434\u043B\u0438\u043D\u043D\u043E\u0435\n\u0441\u043B\u043E\u0432\u043E \u0438\u0437 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F.</p>");
function lookingForALongWord(my_line) {
    var my_line1;
    my_line1 = my_line.replace(/[,.]/g, '');
    var w_line = my_line1.split(' ');
    var w = w_line[0].length;
    for (var i = 0; i < w_line.length; i++) {
        if (w < w_line[i].length) {
            w = w_line[i];
        }
    }
    return (w);
}
document.write("<p>\u041F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0435: '" + the_string_compared_1 + "'</p>");
document.write("<p> \u0421\u0430\u043C\u043E\u0435 \u0434\u043B\u0438\u043D\u043D\u043E\u0435 \u0441\u043B\u043E\u0432\u043E \u0438\u0437 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u044F:\"" + lookingForALongWord(the_string_compared_1) + "\"</p>");
document.write("\u041C\u043E\u0436\u043D\u043E \u0431\u044B\u043B\u043E \u0432 \u043C\u0430\u0441\u0441\u0438\u0432 \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432\u0441\u0435 \u0441\u043B\u043E\u0432\u0430 \u043D\u0430\u0438\u0431\u043E\u043B\u044C\u0448\u0435\u0439 \u043E\u0434\u0438\u043D\u0430\u043A\u043E\u0432\u043E\u0439 \u0434\u043B\u0438\u043D\u044B \u0438 \u0432\u044B\u0432\u0435\u0441\u0442\u0438 \u0438\u0445.");
document.write("<hr>");
document.write("<p>9\n    \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0441\u0447\u0438\u0442\u0430\u0435\u0442 \u0441\u0440\u0435\u0434\u043D\u044E\u044E \u0434\u043B\u0438\u043D\u0443 \u0441\u043B\u043E\u0432\u0430\n    \u0432 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0438..</p>");
function calculateTheAverageLengthOfWords(my_line) {
    var my_line1;
    my_line1 = my_line.replace(/[,.]/g, '');
    var w_line = my_line1.split(' ');
    var w = 0;
    var sum = 0;
    for (var i = 0; i < w_line.length; i++) {
        sum += w_line[i].length;
        w += 1;
    }
    return (Math.round((sum / w) * 10)) / 10;
}
document.write("<p> \u0412 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0438: " + the_string_compared_2 + "</p><p> \u0441\u0440\u0435\u0434\u043D\u044F\u044F \u0434\u043B\u0438\u043D\u0430 \u0441\u043B\u043E\u0432\u0430 \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442: " + calculateTheAverageLengthOfWords(the_string_compared_2));
document.write("<hr>");
document.write("<p>10 \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0444\u0443\u043D\u043A\u0446\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442 \u0441\u0442\u0440\u043E\u043A\u0443 \u0438 \u0441\u0438\u043C\u0432\u043E\u043B\n\u0438 \u0432\u044B\u0432\u043E\u0434\u0438\u0442 \u0438\u043D\u0434\u0435\u043A\u0441\u044B, \u043F\u043E \u043A\u043E\u0442\u043E\u0440\u044B\u043C \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u044D\u0442\u043E\u0442 \u0441\u0438\u043C\u0432\u043E\u043B \u0432\n\u0441\u0442\u0440\u043E\u043A\u0435. \u0422\u0430\u043A\u0436\u0435 \u0432\u044B\u0432\u0435\u0441\u0442\u0438, \u0441\u043A\u043E\u043B\u044C\u043A\u043E \u0432\u0441\u0435\u0433\u043E \u0440\u0430\u0437 \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044F \u044D\u0442\u043E\u0442\n\u0441\u0438\u043C\u0432\u043E\u043B \u0432 \u0441\u0442\u0440\u043E\u043A\u0435.</p>");
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
function lookingForASymbol(my_line, q) {
    var str = [];
    var i = -1;
    while ((i = my_line.indexOf(q, i + 1)) != -1) {
        str.push(my_line.indexOf(q, i));
    }
    console.log(str);
    document.write("<p> \u0412 \u0441\u0442\u0440\u043E\u043A\u0435: " + my_line + "</p>");
    document.write("<p> \u0417\u043D\u0430\u043A: '" + q + "' \u0432\u0441\u0442\u0440\u0435\u0447\u0430\u0435\u0442\u0441\u044F " + str.length + " \u0440\u0430\u0437, \u043F\u043E \u043F\u043E\u0437\u0438\u0446\u0438\u044F\u043C " + str);
}
console.log(lookingForASymbol(the_string_compared_1, 'o'));
document.write("<hr>");
// Задание 1
// Создать массив из 10 случайных чисел и написать несколько
// функций для работы с ним.
// 1
// Функция принимает массив и выводит его на экран.
// 2
// Функция принимает массив и выводит только четные
// элементы.
// 3
// Функция принимает массив и возвращает сумму всех
// элементов массива.
// 4
// Функция принимает массив и возвращает его максималь-
// ный элемент.
// 5
// Функция добавления нового элемента в массив по ука-
// занному индексу.
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
/*
let tenNumbers: any = []
let min = 3
let max = 50
for (let i = 0; i < 10; i ++) {
 tenNumbers [i] = Math.floor(Math.random() * (max - min + 1) + min - 0.5)
}


function outputToTheScreen (arr: any []) {
    document.write (`<p>${arr}</p>`)
}
outputToTheScreen(tenNumbers)

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

document.write (`<p> ${weOutputEvenElements (tenNumbers)}</p> `)

function sumOfValues (arr: any []) {
    let s = 0
    for (let i = 0; i < 10; i ++){
        s += arr [i]
    }
    document.write (`<p>Сумма элементов равна:${s}</p>`)
}
sumOfValues (tenNumbers)

*/
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
