import React from 'react';
import PropTypes from 'prop-types';
import Buttons from './Button';
import './ButtonsPanel.css';

const ButtonsPanel = ({ clickHandler }) => {
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <>
      <div className="btnPanel">
        <div className="rows">
          <Buttons btnName="AC" clickHandler={handleClick} />
          <Buttons btnName="+/-" clickHandler={handleClick} />
          <Buttons btnName="%" clickHandler={handleClick} />
          <Buttons btnName="÷" clickHandler={handleClick} />
        </div>
        <div className="rows">
          <Buttons btnName="7" clickHandler={handleClick} />
          <Buttons btnName="8" clickHandler={handleClick} />
          <Buttons btnName="9" clickHandler={handleClick} />
          <Buttons btnName="X" clickHandler={handleClick} />
        </div>
        <div className="rows">
          <Buttons btnName="4" clickHandler={handleClick} />
          <Buttons btnName="5" clickHandler={handleClick} />
          <Buttons btnName="6" clickHandler={handleClick} />
          <Buttons btnName="-" clickHandler={handleClick} />
        </div>
        <div className="rows">
          <Buttons btnName="1" clickHandler={handleClick} />
          <Buttons btnName="2" clickHandler={handleClick} />
          <Buttons btnName="3" clickHandler={handleClick} />
          <Buttons btnName="+" clickHandler={handleClick} />
        </div>
        <div className="rows lastRow">
          <Buttons btnName="." clickHandler={handleClick} />
          <Buttons btnName="0" clickHandler={handleClick} />
          <Buttons btnName="=" clickHandler={handleClick} />
        </div>
      </div>
    </>
  );
};

ButtonsPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonsPanel;
