import React, { Component } from 'react';
import Display from './Display';
import ButtonsPanel from './ButtonPanel';
import Calculator from '../logic/calculate';

class CalculatorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    this.setState((prevState) => Calculator(prevState, btnName));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="App">
        <Display result={next || total || '0'} operation={operation} />
        <ButtonsPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default CalculatorPage;
