import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav className="light">
            <ul>
                <li id="home">
                    <Link to="/">UtiliTrifecta: Dashboard</Link>
                </li>
                <li>
                    <Link to="/forex">Forex Suite</Link>
                </li>
                <li>
                    <Link to="/determinant">Determinant</Link>
                </li>
                <li>
                    <Link to="/chronometer">ChronoMeter</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;