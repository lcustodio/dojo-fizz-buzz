"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isDivisibleBy(divisor, number) {
    return number % divisor === 0;
}
exports.toFizzBuzzString = function (number) {
    if (isDivisibleBy(15, number)) {
        return 'FizzBuzz';
    }
    if (isDivisibleBy(5, number)) {
        return 'Buzz';
    }
    if (isDivisibleBy(3, number)) {
        return 'Fizz';
    }
    return number.toString();
};
exports.fizzBuzz = function () {
    return Array(100)
        .fill()
        .map(function (_, index) { return exports.toFizzBuzzString(index + 1); });
};
