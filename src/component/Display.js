import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result }) => (
  <h2>{result}</h2>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
