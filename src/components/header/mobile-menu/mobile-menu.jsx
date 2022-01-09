import React, { useState } from 'react';
import Hamburger from '../../../icons/hamburger';
import mobileMenuStyles from './mobile-menu.module.css';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false); // eslint-disable-line
  const handleClick = () => setIsOpen(true);

  return (
    <Hamburger className={mobileMenuStyles['toggle']} onClick={handleClick} />
  );
};

export default MobileMenu;
