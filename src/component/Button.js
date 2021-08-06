/* eslint-disable react/require-default-props */

import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ btnName, clickHandler }) => (
  <button type="button" onClick={() => clickHandler(btnName)}>{btnName}</button>
);

Buttons.propTypes = {
  btnName: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
};

export default Buttons;
