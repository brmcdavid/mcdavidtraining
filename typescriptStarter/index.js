"use strict";
exports.__esModule = true;
function currencyFormat(pennies) {
    return "$ " + (pennies / 100).toFixed(2);
}
exports.currencyFormat = currencyFormat;
function getFib(i) {
    var a = 1;
    var b = 1;
    var c;
    if (i < 3) {
        return 1;
    }
    for (var n = 3; n <= i; n++) {
        c = a + b;
        a = b;
        b = c;
    }
    return c;
}
exports.getFib = getFib;
function fizzbuzz(n) {
    var a = '';
    if (n % 3 == 0) {
        a += 'fizz';
    }
    if (n % 5 == 0) {
        a += 'buzz';
    }
    if (a === '') {
        a = n.toString();
    }
    return a;
}
exports.fizzbuzz = fizzbuzz;
var hello = function (name) {
    return "Hello " + name;
};
var sayHi = hello('Ben');
console.log(sayHi);
