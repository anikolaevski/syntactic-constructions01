/* eslint-disable no-console */
// TODO: write code here
import { transDataNum } from './transDataNum';

console.log('app.js bundled');

const sourceData = [
  10,
  25,
  58,
  'много',
  61,
  30,
];

console.log(sourceData);
sourceData.forEach(element => console.log(element, transDataNum(element)));
