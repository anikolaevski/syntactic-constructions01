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

test('Test transDataNum: не число', () => {
  const sourceData = 'много';

  const result = transDataNum(sourceData);

  const expected = 'Ошибка преобразования: \'много\'!';

  expect(result).toBe(expected);
});
