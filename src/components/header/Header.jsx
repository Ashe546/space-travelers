/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import img from '../../asset/planet.png';
import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={img} alt="planet" />
        <h1>Space Traveler&apos;s Hub</h1>
      </div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link to="/">Rockets</Link>
          </li>
          <li>
            <Link to="/mission">Missions</Link>
          </li>
          <li>
            <Link to="/profile">My Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
