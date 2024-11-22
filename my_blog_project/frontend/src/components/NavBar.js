import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/theme.min.css';
import '../assets/css/user.min.css';
import NavDropdown from './NavDropdown';
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

  const blogItems = [
    { label: 'Blog List', href: '/blog' },
    { label: 'my blog', href: '/my-posts' },
  ];

  return (
    <div className="fixed-top">
      <div className="container px-0">
        <nav className="navbar navbar-expand-lg navbar-freya navbar-light">
          <a className="navbar-brand" href="/">
            <div className="freya-logo">Freya</div>
          </a>

          <button
            className="navbar-toggler p-0 border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#primaryNavbarCollapse"
            aria-controls="primaryNavbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
          >
            <span className="hamburger hamburger--emphatic" style={{ color: '#333' }}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="primaryNavbarCollapse">
            <ul className="navbar-nav me-auto d-flex align-items-center">
              <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
              <NavDropdown title="Blog" items={blogItems} />
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
            </ul>

            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item">
                <a className="nav-link px-2" href="header-slider-classic.html">
                  <span className="fab fa-facebook-f" data-fa-transform="shrink-2"></span>
                </a>
              </li>
              {!isLoggedIn ? (
                <>
                  <li className="nav-item"><a className="nav-link" href="/login">Login</a></li>
                  <li className="nav-item"><a className="nav-link" href="/register">Register</a></li>
                </>
              ) : (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {userData && (
                      <>
                        <img
                          src={userData.profile_image_url}
                          alt="Profile"
                          className="rounded-circle"
                          style={{ width: '30px', height: '30px', marginRight: '8px' }}
                        />
                        {userData.username}
                      </>
                    )}
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a className="dropdown-item" href="/profile">Profile</a></li>
                    <li><a className="dropdown-item" href="/settings">Settings</a></li>
                    <li><a className="dropdown-item" href="/" onClick={handleLogout}>Logout</a></li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
