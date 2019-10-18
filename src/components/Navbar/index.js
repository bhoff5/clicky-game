import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar(props) {
  return (
    <nav
      className={
        (props.lose === true ? "incorrect navbar" : "navbar") +
        (props.win === true ? " correct" : " navbar")
      }
    >
      <ul>
        <li>
          {" "}
          <Link className="navbar-brand" to="/">
            Freshwater Fish Game
          </Link>
          <div className="subheader">Click each fish one time to win!</div>
        </li>
        <li>Current Score: {props.score}</li>
        <li>High Score: {props.highscore}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
