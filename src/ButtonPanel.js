import React from 'react';
import Buttons from './button';

const ButtonsPanel = () => (

  <div>
    <div>
      <Buttons btnName="AC" />
      <Buttons btnName="+/-" />
      <Buttons btnName="%" />
      <Buttons btnName="÷" />
    </div>
    <div>
      <Buttons btnName="7" />
      <Buttons btnName="8" />
      <Buttons btnName="9" />
      <Buttons btnName="X" />
    </div>
    <div>
      <Buttons btnName="4" />
      <Buttons btnName="5" />
      <Buttons btnName="6" />
      <Buttons btnName="-" />
    </div>
    <div>
      <Buttons btnName="1" />
      <Buttons btnName="2" />
      <Buttons btnName="3" />
      <Buttons btnName="+" />
    </div>
    <div>
      <Buttons btnName="0" />
      <Buttons btnName="." />
      <Buttons btnName="=" />
    </div>
  </div>

);

export default ButtonsPanel;
