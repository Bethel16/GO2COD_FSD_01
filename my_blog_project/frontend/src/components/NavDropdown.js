import React from 'react';

const NavDropdown = ({ title, items }) => {
  return (
    <li className="nav-item dropdown">
      <button
        className="nav-link dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {title}
      </button>
      <ul className="dropdown-menu">
        {items.map((item, index) => (
          <li key={index}><a className="dropdown-item" href={item.href}>{item.label}</a></li>
        ))}
      </ul>
    </li>
  );
};

export default NavDropdown;
