import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="light">
      <ul>
        <li id="home">
          <Link to="/UtiliTrifecta">UtiliTrifecta: Dashboard</Link>
        </li>
        <li>
          <Link to="/UtiliTrifecta/forex">Forex Suite</Link>
        </li>
        <li>
          <Link to="/UtiliTrifecta/determinant">Determinant</Link>
        </li>
        <li>
          <Link to="/UtiliTrifecta/chronometer">ChronoMeter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;