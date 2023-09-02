import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './layout.module.css';
import { AuthentificationContext } from '../components/authentification';

export default function Layout() {
  const { authenticated, setAuthenticated } = useContext(AuthentificationContext);

  // Function to handle logout
  const handleLogout = () => {
    setAuthenticated(null);
  };

  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/" className={styles.navLink}>Home</Link></li>
          <li><Link to="/about" className={styles.navLink}>About</Link></li>
          <li><Link to="/stories" className={styles.navLink}>Stories</Link></li>
          <li><Link to="/stories/add-new" className={styles.navLink}>Create Stories</Link></li>

          {authenticated !== null ? (
            <>
            
              <li><button onClick={handleLogout} className={styles.button}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/login" className={styles.navLink}>Login 👥</Link></li>
          )}
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
