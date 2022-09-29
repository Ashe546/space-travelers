/* eslint-disable jsx-a11y/anchor-is-valid */
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
            <a>Rockets</a>
          </li>
          <li>
            <a>Missions</a>
          </li>
          <li>
            <a>My Profile</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
