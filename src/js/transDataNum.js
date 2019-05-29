// eslint-disable-next-line import/prefer-default-export
export function transDataNum(data) {
  let retValue = -10;
  try {
    retValue = parseInt(data, 10);
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(retValue)) {
      // eslint-disable-next-line no-throw-literal
      throw (`Ошибка преобразования: '${data}'!`);
    }
  } catch (error) {
    retValue = error;
  }
  return retValue;
}
