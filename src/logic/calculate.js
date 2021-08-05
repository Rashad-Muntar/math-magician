/* eslint-disable consistent-return */
import operate from './operate';

const Calculator = (data, btnName) => {
  const symbols = ['+', '-', '*', '÷'];
  let { total, next, operation } = data;
  const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  if (btnName === '+/-') {
    if (total) (total *= (-1));
    if (next) (next *= (-1));
  } else if (btnName === 'AC') {
    return { total: null, next: null, operation: null };
  } else if (btnName === '%') {
    if (total && next && operation) {
      next = (0.01 * operate(total, next, operation)).toString();
    } else {
      next = (0.01 * total).toString();
    }
  } else if (btnName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
      operation = null;
    }
  } else if (btnName === '.') {
    if (next) {
      return { total, next: `${next}.`, operation };
    }
    if (total) {
      return { total: `${total}.`, next, operation };
    }
    return { total: '0.', next, operation };
  }

  if ((total && next && operation) && symbols.includes(btnName)) {
    total = operate(total, next, operation);
    next = null;
    operation = '=';
  }

  if (symbols.includes(btnName)) {
    operation = btnName;
  } else if (operation && nums.includes(btnName)) {
    next = next ? next + btnName : btnName;
  } else if (nums.includes(btnName)) {
    total = total ? total + btnName : btnName;
  }

  return { total, next, operation };
};

export default Calculator;

/* eslint-disable consistent-return */
