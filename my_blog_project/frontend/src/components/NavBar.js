import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    setUserData(null);
    navigate('/login');
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <a href="/" style={styles.logo}>
          Furnitures
        </a>
        <div style={styles.navLinks}>
          <a href="/" style={styles.navLink}>Home</a>
          <a href="/about" style={styles.navLink}>About</a>
          <a href="/blog" style={styles.navLink}>Blog</a>
          <a href="/contact" style={styles.navLink}>Contact</a>

          {!isLoggedIn ? (
            <>
              <a href="/login" style={styles.navLink}>Login</a>
              <a href="/register" style={styles.navLink}>Register</a>
            </>
          ) : (
            <div style={styles.userMenu}>
              <span style={styles.userName}>{userData?.username}</span>
              <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#222',  // Dark background for contrast
    padding: '1rem 0',
    position: 'relative',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  container: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
  },
  logo: {
    color: '#fff',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',
  },
  navLink: {
    color: '#fff',
    fontSize: '1rem',
    textDecoration: 'none',
    transition: 'color 0.3s',
    padding: '0.5rem 0',
  },
  navLinkHover: {
    color: '#4CAF50',
  },
  userMenu: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  userName: {
    color: '#fff',
    fontSize: '1rem',
  },
  logoutButton: {
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  logoutButtonHover: {
    backgroundColor: '#45a049',
  },
};

export default NavBar;
