import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const [one, two] = [Big(numberOne), Big(numberTwo)];
  if (operation === '+') {
    return one.plus(two).toString();
  } if (operation === '-') {
    return one.minus(two).toString();
  } if (operation === 'X') {
    return one.times(two).toString();
  } if (operation === '÷') {
    return one.div(two).toString();
  }
  return 0;
};

export default operate;
