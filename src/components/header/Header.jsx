/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';
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
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
              to="/"
            >
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
              to="/mission"
            >
              Missions
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.active : styles.inActive)}
              to="/profile"
            >
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
