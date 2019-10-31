function isDivisibleBy(divisor: number, number: number) {
  return number % divisor === 0;
}

export const toFizzBuzzString = (number: number) => {
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

export const fizzBuzz = () => {
  return Array(100)
    .fill(0)
    .map((_, index) => toFizzBuzzString(index + 1));
};
