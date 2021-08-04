import React from 'react';
import PropTypes from 'prop-types';

const Buttons = ({ btnName }) => <button type="button">{btnName}</button>;

Buttons.propTypes = {
  btnName: PropTypes.string,
};

Buttons.defaultProps = {
  btnName: '0',
};

export default Buttons;
