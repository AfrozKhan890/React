import React, { useState } from "react";
import "./Navbar.css";


function Navbar(){
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
