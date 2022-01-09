import React from 'react';
import PropTypes from 'prop-types';

const Search = ({
  width,
  height,
  className
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 27 27"
      className={className}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12.111 23.222c6.137 0 11.111-4.974 11.111-11.11C23.222 5.974 18.248 1 12.112 1 5.974 1 1 5.975 1 12.111c0 6.137 4.975 11.111 11.111 11.111zM26 26l-6.042-6.042"
      />
    </svg>
  );
};

Search.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  className: PropTypes.string
};

Search.defaultProps = {
  width: '27',
  height: '27',
  className: ''
};

export default Search;
