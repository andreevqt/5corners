import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import buttonStyles from './button.module.css';

/* eslint-disable react/button-has-type */

const Button = ({
  children,
  htmlType
}) => {
  const classes = classNames(buttonStyles['button'], 'text-headings text-headings--default');

  return (
    <button className={classes} type={htmlType}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  htmlType: PropTypes.oneOf(['submit', 'button', 'reset'])
};

Button.defaultProps = {
  htmlType: 'button'
};

export default Button;
