import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import containerStyles from './container.module.css';

const Container = ({
  className,
  children
}) => {
  const classes = classNames(containerStyles['container'], className);

  return (
    <div
      className={classes}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

Container.defaultProps = {
  className: '',
  children: null
};

export default Container;
