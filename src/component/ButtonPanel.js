import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Button';
import './ButtonsPanel.css';

const ButtonsPanel = ({ clickHandler }) => (
  <>
    <div className="btnPanel">
      <div className="rows">
        <Buttons btnName="AC" clickHandler={clickHandler} />
        <Buttons btnName="+/-" clickHandler={clickHandler} />
        <Buttons btnName="%" clickHandler={clickHandler} />
        <Buttons btnName="÷" clickHandler={clickHandler} />
      </div>
      <div className="rows">
        <Buttons btnName="7" clickHandler={clickHandler} />
        <Buttons btnName="8" clickHandler={clickHandler} />
        <Buttons btnName="9" clickHandler={clickHandler} />
        <Buttons btnName="X" clickHandler={clickHandler} />
      </div>
      <div className="rows">
        <Buttons btnName="4" clickHandler={clickHandler} />
        <Buttons btnName="5" clickHandler={clickHandler} />
        <Buttons btnName="6" clickHandler={clickHandler} />
        <Buttons btnName="-" clickHandler={clickHandler} />
      </div>
      <div className="rows">
        <Buttons btnName="1" clickHandler={clickHandler} />
        <Buttons btnName="2" clickHandler={clickHandler} />
        <Buttons btnName="3" clickHandler={clickHandler} />
        <Buttons btnName="+" clickHandler={clickHandler} />
      </div>
      <div className="rows lastRow">
        <Buttons btnName="." clickHandler={clickHandler} />
        <Buttons btnName="0" clickHandler={clickHandler} />
        <Buttons btnName="=" clickHandler={clickHandler} />
      </div>
    </div>
  </>
);

ButtonsPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonsPanel;
