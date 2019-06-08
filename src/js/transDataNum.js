// eslint-disable-next-line import/prefer-default-export
export function transDataNum(data) {
  let retValue = -10;
  try {
    const trimmedData = data.trim();
    retValue = parseFloat(trimmedData);
    // eslint-disable-next-line no-restricted-globals
    if (Number.isNaN(retValue)) {
      // eslint-disable-next-line no-throw-literal
      throw `Значение не является числом! '${trimmedData}'!`;
    }
    if (retValue.toString() !== trimmedData) {
      // eslint-disable-next-line no-throw-literal
      throw `Значение не являетсмя десятичным числом: '${trimmedData}'!`;
    }
  } catch (error) {
    retValue = error;
  }
  return retValue;
}
