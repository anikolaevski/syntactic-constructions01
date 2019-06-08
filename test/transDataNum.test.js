import { transDataNum } from '../src/js/transDataNum';

test('Test transDataNum: 1', () => {
  const sourceData = '1';

  const result = transDataNum(sourceData);

  const expected = 1;

  expect(result).toBe(expected);
});

test('Test transDataNum: 155', () => {
  const sourceData = '155';

  const result = transDataNum(sourceData);

  const expected = 155;

  expect(result).toBe(expected);
});

test('Test transDataNum: 155 with extra spaces', () => {
  const sourceData = '  155';

  const result = transDataNum(sourceData);

  const expected = 155;

  expect(result).toBe(expected);
});

test('Test transDataNum: not a number', () => {
  const sourceData = 'много';

  const result = transDataNum(sourceData);

  const expected = 'Значение не является числом! \'много\'!';

  expect(result).toBe(expected);
});

test('Test transDataNum: not a decimal number', () => {
  const sourceData = '0xffaaaa';

  const result = transDataNum(sourceData);

  const expected = 'Значение не являетсмя десятичным числом: \'0xffaaaa\'!';

  expect(result).toBe(expected);
});
