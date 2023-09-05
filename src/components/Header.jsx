import React from "react";

import { Link } from "react-router-dom";

import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header} id="header">
      <h1>Playwright Demo</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" id="header-home-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" id="header-about-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/tasks" id="header-tasks-link">
              Tasks
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
