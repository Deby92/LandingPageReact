import React from "react";

export const Navbar = () => {
  return (
    <div className="container-fluid navbar navbar lg bg-dark">
      <a className="navbar-brand">Start React & Bootstrap</a>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Contact</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;