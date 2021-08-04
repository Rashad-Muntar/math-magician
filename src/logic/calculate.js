/* eslint-disable consistent-return */
import operate from './operate';

const Calculator = ({ total, next, operation }, btnName) => {
  const symbols = ['+', '-', '*', '÷'];

  if (btnName === '+/-') {
    if (total) {
      return total * -1;
    }
    if (next) {
      return next * -1;
    }
  }
  if (btnName === 'AC') {
    return { total: null, next: null, operation: null };
  }

  if (btnName === '%') {
    if (total) {
      return (0.10 * total);
    }
    if (next) {
      return (0.10 * next);
    }
  }

  if (symbols.includes(btnName)) {
    if (btnName === '=' && symbols.includes(btnName)) {
      if (total && next && operation) {
        return { total: operate(total, next, operation), operation: null, next: null };
      }
      if (total && !next && !operation) {
        return total;
      } if (total && !next && operation) {
        return { total, operation, next: null };
      }
    }
  }
};

export default Calculator;

/* eslint-disable consistent-return */
