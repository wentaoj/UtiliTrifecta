import React from 'react';
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
                    <a href="/UtiliTrifecta/forex">
                        <img src={forexImg} alt="Forex Suites"/>
                        <figcaption>Real-Time Forex Rates</figcaption>
                    </a>
                </figure>
                <figure className="utility-item">
                    <a href="/UtiliTrifecta/determinant">
                        <img src={determinantImg} alt="Determinant Calculator"/>
                        <figcaption>Matrix Determinant Calculator</figcaption>
                    </a>
                </figure>
                <figure className="utility-item">
                    <a href="/UtiliTrifecta/chronometer">
                        <img src={chronometerImg} alt="chronometer"/>
                        <figcaption>Simple ChronoMeter</figcaption>
                    </a>
                </figure>
            </div>
        </div>
    );
}

export default Home;
