import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav className="light">
      <ul>
        <li id="home">
          <Link to="/utilitrifecta">UtiliTrifecta: Dashboard</Link>
        </li>
        <li>
          <Link to="/utilitrifecta/forex">Forex Suite</Link>
        </li>
        <li>
          <Link to="/utilitrifecta/determinant">Determinant</Link>
        </li>
        <li>
          <Link to="/utilitrifecta/chronometer">ChronoMeter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;