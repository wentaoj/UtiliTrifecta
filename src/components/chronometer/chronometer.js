import React, { useState, useRef } from 'react';
import './chronometer.css';

function ChronoMeter() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [laps, setLaps] = useState([]);
    const intervalRef = useRef(null);

    const toggleTimer = () => {
        setIsActive(!isActive);
        if (!isActive) {
            intervalRef.current = setInterval(() => {
                setSeconds(prev => prev + 0.01);
            }, 10);
        } else {
            clearInterval(intervalRef.current);
        }
    };

    const recordLap = () => {
        setLaps(prev => [...prev, seconds]);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setIsActive(false);
        setSeconds(0);
        setLaps([]);
    };

    return (
        <div className="timer-container">
            <h1>ChronoMeter</h1>
            <div className="display-time">
                {seconds.toFixed(2)}
            </div>
            <div className="display-formatter">seconds</div>
            <div className="timer-buttons">
                <button onClick={toggleTimer}>
                    {isActive ? 'Stop' : 'Start'}
                </button>
                <button onClick={recordLap} disabled={!isActive}>Lap</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
            <ul class="timer-list">
                {laps.map((lap, index) => {
                    const difference = index === 0 ? 0 : lap - laps[index - 1];
                    return (
                    <li key={index}>
                        Lap {index + 1}: {lap.toFixed(2)} seconds 
                        {index !== 0 && ` (Difference: ${difference.toFixed(2)} seconds)`}
                    </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ChronoMeter;
