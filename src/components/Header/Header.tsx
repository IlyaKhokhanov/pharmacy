import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import cartIcon from '../../assets/icons/cart.svg';
import userIcon from '../../assets/icons/user.svg';
import logo from '../../assets/icons/logo.png';

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
      <Link className="header-logo" to="/" onClick={() => toggleMenu()}>
        <img className="header-logo-img" src={logo} alt="" />
        <h2 className="header-logo-text">Medicines</h2>
      </Link>
      <nav className="header-menu">
        <ul
          className={`header-menu--list ${menuActive ? 'header-menu--list--active' : ''}`}
        >
          <li className="header-list--item">
            <Link
              to="/"
              onClick={() => {
                if (menuActive) toggleMenu();
              }}
            >
              На главную
            </Link>
          </li>
          <li>
            <Link
              to="/catalog"
              onClick={() => {
                if (menuActive) toggleMenu();
              }}
            >
              Каталог
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => {
                if (menuActive) toggleMenu();
              }}
            >
              О компании
            </Link>
          </li>
        </ul>

        <div className="header-icons-wrap">
          <Link
            to="/"
            onClick={() => {
              if (menuActive) toggleMenu();
            }}
          >
            <img className="header-icon" src={cartIcon} alt="Корзина" />
          </Link>
          <Link
            to="/"
            onClick={() => {
              if (menuActive) toggleMenu();
            }}
          >
            <img className="header-icon" src={userIcon} alt="Вход" />
          </Link>
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
