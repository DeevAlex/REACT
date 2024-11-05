import "./Nav.css";

import React, { useState } from "react";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navLinks">
      <img src="IMG/logo.png" className="logo" alt="logo" />
      <button className="menuToggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`listLinks ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#test" className="link linkNav">
            Home
          </a>
        </li>
        <li>
          <a href="#test" className="link linkNav">
            Program
          </a>
        </li>
        <li>
          <a href="#test" className="link linkNav">
            Service
          </a>
        </li>
        <li>
          <a href="#test" className="link linkNav">
            About
          </a>
        </li>
        <li>
          <a href="#test" className="link linkNav">
            Community
          </a>
        </li>
        <li>
          <button className="btn btnNav active">Join Now</button>
        </li>
      </ul>
      <button className="btn btnNav">Join Now</button>
    </nav>
  );
};
