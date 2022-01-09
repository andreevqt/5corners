import React from 'react';
import { useSelector } from 'react-redux';
import Container from '../grid/container/container';
import Menu from '../menu/menu';
import MenuLink from '../menu/menu-link/menu-link';
import headerStyles from './header.module.css';
import logo from '../../images/logo.svg';
import TextField from '../form/text-field/text-field';
import SearchIcon from '../../icons/search';
import CartIcon from '../../icons/cart';
import FavoriteIcon from '../../icons/favorite';
import ProfileIcon from '../../icons/profile';
import withCount from '../../hoc/with-count/with-count';
import MobileMenu from './mobile-menu/mobile-menu';

const Cart = withCount(CartIcon);

const Header = () => {
  const count = useSelector((store) => store.cart.items.length);

  return (
    <header>
      <Container>
        <div className={headerStyles['top']}>
          <MobileMenu />
          <TextField className={headerStyles['search']} startIcon={<SearchIcon />} name="query" label="Поиск" />
          <Menu className={headerStyles['top-nav']}>
            <MenuLink href="/cart"><ProfileIcon /></MenuLink>
            <MenuLink href="/cart"><FavoriteIcon /></MenuLink>
            <MenuLink href="/cart"><Cart count={count} /></MenuLink>
          </Menu>
        </div>
        <div className={headerStyles['bottom']}>
          <Menu>
            <MenuLink>Страница 1</MenuLink>
            <MenuLink>Страница 2</MenuLink>
            <MenuLink>Страница 3</MenuLink>
          </Menu>
          <a href="/">
            <img src={logo} alt="Logo" />
          </a>
          <Menu>
            <MenuLink>Страница 4</MenuLink>
            <MenuLink>Страница 5</MenuLink>
            <MenuLink>Страница 6</MenuLink>
          </Menu>
        </div>
      </Container>
    </header>
  );
};

export default Header;
