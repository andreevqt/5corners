import React from 'react';
import PropTypes from 'prop-types';
import colStyles from './col.module.css';

const Col = ({
  className,
  mod,
  children
}) => (
  <div
    className={`${colStyles[`col${mod ? `-${mod}` : ''}`]} ${className}`}
  >
    {children}
  </div>
);

Col.propTypes = {
  mod: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

Col.defaultProps = {
  className: '',
  mod: '',
};

export default Col;
