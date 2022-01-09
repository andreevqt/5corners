import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import menuStyles from './menu.module.css';

const Menu = ({
  children,
  className
}) => {
  return (
    <nav className={classNames(menuStyles['menu'], className)}>
      {children}
    </nav>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
};

Menu.defaultProps = {
  className: '',
  children: null
};

export default Menu;
