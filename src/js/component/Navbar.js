import React from "react";

export const Navbar = () => {
  return (
    <div className="container-fluid navbar navbar lg bg-dark">
      <a className="navbar-brand text-light">Start React & Bootstrap</a>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link text-secondary" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-secondary" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary">Contact</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;