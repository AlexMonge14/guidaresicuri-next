'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
      }}
    >
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src="/images/logo.png" alt="Logo Guidare Sicuri" style={{ maxWidth: '50px' }} className="me-2" />
          <span>Guidare Sicuri ASD</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: 'invert(100%)' }}
          ></span>
        </button>

        <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Chi Siamo</a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Servizi
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Corsi individuali</a></li>
                <li><a className="dropdown-item" href="#">Corsi per aziende</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contatti</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
