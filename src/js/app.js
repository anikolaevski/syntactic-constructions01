/* eslint-disable no-console */
// TODO: write code here
import { transDataNum } from './transDataNum';

console.log('app.js bundled');

const sourceData = [
  ' 10.2',
  '25E-1',
  '0xffaaaa',
  '-1',
  '58',
  'много',
  '61',
  '30',
];

console.log(sourceData);
sourceData.forEach((element) => {
  const retValue = transDataNum(element);
  console.log(
    element,
    retValue,
  );
});
