import React from 'react';
import { Link } from "react-router-dom";
import forexImg from '../../images/forex.gif';
import determinantImg from '../../images/determinant.gif';
import chronometerImg from '../../images/chronometer.gif';
import './home.css';

function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to UtiliTrifecta!</h1>
            <p className="home-intro">Your go-to suite of utilities for everyday efficiency.</p>
            <div className="utility-container">
                <figure className="utility-item">
                    <Link to="/forex">
                        <img src={forexImg} alt="Forex Suites"/>
                        <figcaption>Real-Time Forex Rates</figcaption>
                    </Link>
                </figure>
                <figure className="utility-item">
                    <Link to="/determinant">
                        <img src={determinantImg} alt="Determinant Calculator"/>
                        <figcaption>Matrix Determinant Calculator</figcaption>
                    </Link>
                </figure>
                <figure className="utility-item">
                    <Link to="/chronometer">
                        <img src={chronometerImg} alt="Chronometer"/>
                        <figcaption>Simple ChronoMeter</figcaption>
                    </Link>
                </figure>
            </div>
        </div>
    );
}

export default Home;
