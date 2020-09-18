//  Summing a number's digits
//  https://www.codewars.com/kata/52f3149496de55aded000410

function sumDigits(number) {
    return Math.abs(number).toString().split("").reduce(function (a, b) {
        return parseInt(a) + parseInt(b);
    }, 0);
}