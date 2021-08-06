import Big from 'big.js';

let result;
const operate = (numberOne, numberTwo, operation) => {
  const [one, two] = [Big(numberOne), Big(numberTwo)];
  if (operation === '+') {
    result = one.plus(two).toString();
  } if (operation === '-') {
    result = one.minus(two).toString();
  } if (operation === 'X') {
    result = one.times(two).toString();
  } if (operation === '÷') {
    result = one.div(two).toString();
  }
  return result.toString();
};

export default operate;
