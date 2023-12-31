import React, { useState } from 'react';
import './determinant.css';

function Determinant() {
    const [matrix, setMatrix] = useState({ a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0 });
    const [result, setResult] = useState(null);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setMatrix(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
    };

    const calculateDet = () => {
        const { a, b, c, d, e, f, g, h, i } = matrix;
        const determinant = a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
        setResult(determinant);
    };

    const resetMatrix = () => {
        setMatrix({ a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0 });
        setResult(null);
    };

    return (
        <div className="determinant-container">
            <h1>Matrix Determinant Calculator</h1>
            <p>Enter the matrix coefficients and calculate the determinant.</p>
            <div className="matrix-inputs">
                {[...Array(3)].map((_, rowIndex) => (
                    <div key={rowIndex} className="matrix-row">
                        {[...Array(3)].map((_, colIndex) => {
                            const cellName = String.fromCharCode(97 + rowIndex * 3 + colIndex);
                            return (
                                <input
                                    key={cellName}
                                    type="number"
                                    name={cellName}
                                    value={matrix[cellName]}
                                    onChange={handleInput}
                                />
                            );
                        })}
                    </div>
                ))}
            </div>
            <button onClick={calculateDet}>Calculate</button>
            {result !== null && <p className="result">Determinant: {result}</p>}
            <button onClick={resetMatrix}>Reset</button>
        </div>
    );
}

export default Determinant;
