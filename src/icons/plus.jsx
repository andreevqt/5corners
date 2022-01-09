import React from 'react';
import PropTypes from 'prop-types';

const Plus = ({
  className,
  width,
  height
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 16 16"
    >
      <path stroke="currentColor" strokeWidth="2" d="M0 8L16 8" />
      <path stroke="currentColor" strokeWidth="2" d="M8 16L8 0" />
    </svg>
  );
};

Plus.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
};

Plus.defaultProps = {
  className: '',
  width: '16',
  height: '16'
};

export default Plus;
