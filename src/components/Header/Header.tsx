import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import cartIcon from '~/assets/icons/cart.svg';
import userIcon from '~/assets/icons/user.svg';
import logo from '~/assets/icons/logo.png';

function Header() {
  const [menuActive, setMenuActive] = useState(false);

  function toggleMenu() {
    setMenuActive((prev) => !prev);
    if (menuActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }

  return (
    <header className="header">
      <NavLink
        className="header-logo"
        to="/"
        onClick={() => {
          if (menuActive) toggleMenu();
        }}
      >
        <img className="header-logo-img" src={logo} alt="" />
        <div className="header-logo-text">Medicines</div>
      </NavLink>
      <nav className="header-menu">
        <ul
          className={`header-menu--list ${menuActive ? 'header-menu--list--active' : ''}`}
        >
          <li className="header-list--item">
            <NavLink
              className="header-link"
              to="/"
              onClick={() => {
                if (menuActive) toggleMenu();
              }}
            >
              На главную
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header-link"
              to="/catalog"
              onClick={() => {
                if (menuActive) toggleMenu();
              }}
            >
              Каталог
            </NavLink>
          </li>
          <li>
            <NavLink
              className="header-link"
              to="/about"
              onClick={() => {
                if (menuActive) toggleMenu();
              }}
            >
              О компании
            </NavLink>
          </li>
        </ul>

        <div className="header-icons-wrap">
          <NavLink
            className="header-icon-link"
            to="/"
            onClick={() => {
              if (menuActive) toggleMenu();
            }}
          >
            <img className="header-icon" src={cartIcon} alt="Корзина" />
          </NavLink>
          <NavLink
            className="header-icon-link"
            to="/"
            onClick={() => {
              if (menuActive) toggleMenu();
            }}
          >
            <img className="header-icon" src={userIcon} alt="Кабинет" />
          </NavLink>
        </div>
        <button
          className={`header-burger ${menuActive ? 'header-burger--active' : ''}`}
          type="button"
          onClick={toggleMenu}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}

export default Header;
