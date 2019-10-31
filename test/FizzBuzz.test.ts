import { fizzBuzz, toFizzBuzzString } from '../src/FizzBuzz';
import { expect } from 'chai';

/*
Write a program that prints one line for each number from 1 to 100
For multiples of three print Fizz instead of the number
For the multiples of five print Buzz instead of the number
For numbers which are multiples of both three and five print FizzBuzz instead of the number
 */

describe('Fizz Buzz', () => {
  it('should print Fizz for multiples of 3 but not 15', () => {
    expect(toFizzBuzzString(3)).to.equal('Fizz');
    expect(toFizzBuzzString(6)).to.equal('Fizz');
    expect(toFizzBuzzString(9)).to.equal('Fizz');
  });

  it('should print Buzz for multiples of 5 but not 15', () => {
    expect(toFizzBuzzString(5)).to.equal('Buzz');
    expect(toFizzBuzzString(10)).to.equal('Buzz');
  });

  it('should print FizzBuzz for multiples of 15', () => {
    expect(toFizzBuzzString(15)).to.equal('FizzBuzz');
    expect(toFizzBuzzString(30)).to.equal('FizzBuzz');
    expect(toFizzBuzzString(45)).to.equal('FizzBuzz');
  });

  it('should return the number if it is not a multiple of 3 or 5', () => {
    expect(toFizzBuzzString(1)).to.equal('1');
    expect(toFizzBuzzString(2)).to.equal('2');
    expect(toFizzBuzzString(4)).to.equal('4');
  });

  it('FizzBuzz should work as expected"', () => {
    expect(JSON.stringify(fizzBuzz())).to.equal(JSON.stringify(expectedOutput));
  });
});

const expectedOutput = [
  '1',
  '2',
  'Fizz',
  '4',
  'Buzz',
  'Fizz',
  '7',
  '8',
  'Fizz',
  'Buzz',
  '11',
  'Fizz',
  '13',
  '14',
  'FizzBuzz',
  '16',
  '17',
  'Fizz',
  '19',
  'Buzz',
  'Fizz',
  '22',
  '23',
  'Fizz',
  'Buzz',
  '26',
  'Fizz',
  '28',
  '29',
  'FizzBuzz',
  '31',
  '32',
  'Fizz',
  '34',
  'Buzz',
  'Fizz',
  '37',
  '38',
  'Fizz',
  'Buzz',
  '41',
  'Fizz',
  '43',
  '44',
  'FizzBuzz',
  '46',
  '47',
  'Fizz',
  '49',
  'Buzz',
  'Fizz',
  '52',
  '53',
  'Fizz',
  'Buzz',
  '56',
  'Fizz',
  '58',
  '59',
  'FizzBuzz',
  '61',
  '62',
  'Fizz',
  '64',
  'Buzz',
  'Fizz',
  '67',
  '68',
  'Fizz',
  'Buzz',
  '71',
  'Fizz',
  '73',
  '74',
  'FizzBuzz',
  '76',
  '77',
  'Fizz',
  '79',
  'Buzz',
  'Fizz',
  '82',
  '83',
  'Fizz',
  'Buzz',
  '86',
  'Fizz',
  '88',
  '89',
  'FizzBuzz',
  '91',
  '92',
  'Fizz',
  '94',
  'Buzz',
  'Fizz',
  '97',
  '98',
  'Fizz',
  'Buzz',
];
