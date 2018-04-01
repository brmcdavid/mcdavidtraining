var index = require('./index')


test('100 cents is a dollar', () => {
    expect(index.currencyFormat(100)).toBe("$ 1.00");
});

test('-100 cents is a lost dollar', () => {
    expect(index.currencyFormat(-100)).toBe("$ -1.00");
});

test('fib 1 is 1', () => {
  expect(index.getFib(1)).toBe(1);
})

test('fib 2 is 1', () => {
  expect(index.getFib(2)).toBe(1);
})

test('fib 3 is 2', () => {
  expect(index.getFib(3)).toBe(2);
})

test('fib 6 is 8', () => {
  expect(index.getFib(6)).toBe(8);
})

test('fizzbuzz 3 is fizz', () => {
  expect(index.fizzbuzz(3)).toBe('fizz');
})

test('fizzbuzz 5 is buzz', () => {
  expect(index.fizzbuzz(5)).toBe('buzz');
})

test('fizzbuzz 15 is fizzbuzz', () => {
  expect(index.fizzbuzz(15)).toBe('fizzbuzz');
})

test('fizzbuzz 2 is 2', () => {
  expect(index.fizzbuzz(2)).toBe('2');
})

test('fizzbuzz 4 is 4', () => {
  expect(index.fizzbuzz(4)).toBe('4');
})

test('fizzbuzz 7 is 7', () => {
  expect(index.fizzbuzz(7)).toBe('7');
})
/*
test('fizzbuzz 11 is 11', () => {
  expect(index.fizzbuzz(11).toBe('11');
})
*/
test('fizzbuzz 16 is 16', () => {
  expect(index.fizzbuzz(16)).toBe('16');
})
