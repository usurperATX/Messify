import React from "react";
import "./Navbar.css";

const Navbar = ({ setActivePage }) => {
  return (
    <nav className="navbar">
      <h2 className="logo">Messify</h2>
      <ul className="nav-links">
        <li onClick={() => setActivePage("welcome")}>Home</li>
        <li onClick={() => setActivePage("veg-mess")}>Veg Mess</li>
        <li onClick={() => setActivePage("non-veg-mess")}>Non-Veg Mess</li>
        <li onClick={() => setActivePage("special-mess")}>Special Mess</li>
        <li onClick={() => setActivePage("night-mess")}>Night Mess</li>
        <li onClick={() => setActivePage("dashboard")}>Dashboard</li>
      </ul>
    </nav>
  );
};

export default Navbar;
