import React from 'react';
import PropTypes from 'prop-types';
import iconStyles from './icon.module.css';

const Icon = ({
  children,
  onClick
}) => {
  return (
    <div className={iconStyles['icon']} onClick={onClick}>
      {children}
    </div>
  );
};

Icon.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
};

Icon.defaultProps = {
  children: null,
  onClick: () => null
};

export default Icon;
