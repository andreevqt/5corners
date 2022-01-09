import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({
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
      viewBox="0 0 25 27"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.833 1L1 6v17.5c0 .663.27 1.299.748 1.768.48.469 1.13.732 1.808.732h17.888c.678 0 1.328-.263 1.808-.732.479-.47.748-1.105.748-1.768V6l-3.833-5H4.833zM1 6h23"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M17.611 11a4.945 4.945 0 01-1.497 3.536A5.17 5.17 0 0112.5 16a5.17 5.17 0 01-3.614-1.464A4.945 4.945 0 017.389 11"
      />
    </svg>
  );
};

Cart.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
};

Cart.defaultProps = {
  className: '',
  width: '25',
  height: '27'
};

export default Cart;
