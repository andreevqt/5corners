import React from 'react';
import PropTypes from 'prop-types';

const Hamburger = ({
  className,
  width,
  height,
  onClick
}) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 28 22"
      onClick={onClick}
    >
      <path stroke="currentColor" strokeWidth="2" d="M0 1L28 1" />
      <path stroke="currentColor" strokeWidth="2" d="M0 11L28 11" />
      <path stroke="currentColor" strokeWidth="2" d="M0 21L28 21" />
    </svg>
  );
};

Hamburger.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Hamburger.defaultProps = {
  className: '',
  width: '28',
  height: '22',
  onClick: () => null
};

export default Hamburger;
