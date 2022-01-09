import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import rowStyles from './row.module.css';

const Row = ({
  className,
  children,
  reverse
}) => {
  const classes = classNames(rowStyles['row'], className, { [rowStyles['reverse']]: reverse });

  return (
    <div
      className={classes}
    >
      {children}
    </div>
  );
};

Row.propTypes = {
  className: PropTypes.string,
  reverse: PropTypes.bool,
  children: PropTypes.node
};

Row.defaultProps = {
  className: '',
  reverse: false,
  children: null
};

export default Row;
