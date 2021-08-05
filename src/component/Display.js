import React from 'react';
import PropTypes from 'prop-types';
import './ButtonsPanel.css';

const Display = ({ result }) => (
  <div className="displayArea">
    <h2>{result}</h2>
  </div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
