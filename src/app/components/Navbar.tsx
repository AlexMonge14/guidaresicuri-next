'use client';

import { useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

const menuVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { when: 'beforeChildren', staggerChildren: 0.05 },
  },
  exit: { height: 0, opacity: 0 },
};

const itemVariants: Variants = {
  hidden: { x: -20, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: -20, opacity: 0 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const toggle = () => setIsOpen((v) => !v);
  const toggleSubmenu = () => setSubmenuOpen((v) => !v);

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        backgroundColor: '#000',
      }}
    >
      <div className="container d-flex align-items-center">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{ maxWidth: '50px' }}
            className="me-2"
          />
          <span className="text-white">Guidare Sicuri ASD</span>
        </a>

        {/* HAMBURGER */}
        <button
          onClick={toggle}
          aria-label="Toggle menu"
          className="border-0 bg-transparent"
          style={{ zIndex: 1000 }}
        >
          <motion.div
            animate={isOpen ? 'open' : 'closed'}
            variants={{ closed: { rotate: 0 }, open: { rotate: 45 } }}
            transition={{ duration: 0.2 }}
          >
            <div
              style={{
                width: 24,
                height: 2,
                backgroundColor: '#fff',
                position: 'relative',
              }}
            >
              <motion.span
                variants={{
                  closed: { y: -6, rotate: 0 },
                  open: { y: 0, rotate: 90 },
                }}
                transition={{ duration: 0.2 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: 24,
                  height: 2,
                  backgroundColor: '#fff',
                }}
              />
            </div>
          </motion.div>
        </button>

        {/* MENU */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="menu"
              className="w-100"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <ul className="navbar-nav ms-auto">
                {['Chi Siamo', 'La Struttura', 'Contatti'].map((label) => (
                  <motion.li
                    key={label}
                    className="nav-item"
                    variants={itemVariants}
                  >
                    <a className="nav-link text-white" href="#">
                      {label}
                    </a>
                  </motion.li>
                ))}

                {/* CORSI Dropdown */}
                <motion.li className="nav-item dropdown" variants={itemVariants}>
                  <span
                    className="nav-link dropdown-toggle text-white"
                    role="button"
                    onClick={toggleSubmenu}
                    style={{ cursor: 'pointer' }}
                  >
                    Corsi
                  </span>

                  <AnimatePresence initial={false}>
                    {submenuOpen && (
                      <motion.ul
                        className="dropdown-menu show position-static border-0 bg-transparent p-0"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <li>
                          <a className="dropdown-item text-white bg-dark" href="#">
                            Privati
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item text-white bg-dark" href="#">
                            Aziende
                          </a>
                        </li>
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
