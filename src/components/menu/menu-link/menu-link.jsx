import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import menuLinkStyles from './menu-link.module.css';

const MenuLink = ({
  className,
  href,
  children
}) => {
  return (
    <a href={href} className={classNames(menuLinkStyles['link'], className, 'text-regular text-regular--medium')}>
      {children}
    </a>
  );
};

MenuLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node
};

MenuLink.defaultProps = {
  className: '',
  children: null,
  href: '#'
};

export default MenuLink;
