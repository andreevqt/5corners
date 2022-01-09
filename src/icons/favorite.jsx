import React from 'react';
import PropTypes from 'prop-types';

const Favorite = ({
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
      viewBox="0 0 30 27"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M26.84 3.21a7.357 7.357 0 00-2.39-1.636 7.22 7.22 0 00-5.64 0 7.359 7.359 0 00-2.39 1.636L15 4.664 13.58 3.21A7.284 7.284 0 008.369 1a7.284 7.284 0 00-5.21 2.21A7.635 7.635 0 001 8.544c0 2 .776 3.92 2.158 5.334l1.42 1.454L15 26 25.42 15.332l1.42-1.454a7.556 7.556 0 001.598-2.447 7.698 7.698 0 000-5.774A7.557 7.557 0 0026.84 3.21v0z"
      />
    </svg>
  );
};

Favorite.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
};

Favorite.defaultProps = {
  className: '',
  width: '30',
  height: '27'
};

export default Favorite;
