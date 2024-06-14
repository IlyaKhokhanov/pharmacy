import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Catalog</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
