import React from 'react';
import PropTypes from 'prop-types';

const Minus = ({
  className,
  width,
  height
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16 9H0V7h16v2z"
        clipRule="evenodd"
      />
    </svg>
  );
};

Minus.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
};

Minus.defaultProps = {
  className: '',
  width: '16',
  height: '16'
};

export default Minus;
