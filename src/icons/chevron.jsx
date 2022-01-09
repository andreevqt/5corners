import React from 'react';
import PropTypes from 'prop-types';

const Chevron = ({
  width,
  height,
  className
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 9"
    >
      <path stroke="currentColor" d="M14.667 1L8 7.667 1.333 1" />
    </svg>
  );
};

Chevron.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
};

Chevron.defaultProps = {
  width: '16',
  height: '9',
  className: ''
};

export default Chevron;
