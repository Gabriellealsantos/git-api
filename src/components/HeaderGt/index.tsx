import { NavLink } from 'react-router-dom';
import './styles.css';

export default function HeaderGT() {

  return (
    <header>

      <nav className="ds-nav-container">
        <NavLink to="/">
          <p>Github API</p>
        </NavLink>
      </nav>
    </header>
  )
}

