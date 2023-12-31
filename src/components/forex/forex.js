import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './forex.css';

const currencies = {
    CAD: { name: "Canadian Dollar" },
    MXN: { name: "Mexican Peso" },
    ARS: { name: "Argentine Peso" },
    BRL: { name: "Brazilian Real" },
    GBP: { name: "British Pound" },
    EUR: { name: "Euro" },
    CHF: { name: "Swiss Franc" },
    TRY: { name: "Turkish Lira" },
    JPY: { name: "Japanese Yen" },
    CNY: { name: "Chinese Yuan" },
    HKD: { name: "Hong Kong Dollar" },
    SGD: { name: "Singapore Dollar" },
    AUD: { name: "Australian Dollar" },
    NZD: { name: "New Zealand Dollar" }
};

const apiHeaders = {
    'Key': process.env.REACT_APP_API_KEY,
    'Host': 'currency-conversion-and-exchange-rates.p.rapidapi.com'
};

const useConverter = (USD) => {
    const [conversionData, setConversionData] = useState({});
    const [lastFetchedDate, setLastFetched] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const setConversion = (data, date) => {
        setConversionData(data);
        setLastFetched(date);
    };

    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchRates = async () => {
            try {
                const responses = await Promise.all(Object.keys(currencies).map(currency => 
                    axios.get(`https://${apiHeaders['Host']}/convert`, {
                        params: { from: 'USD', to: currency, amount: USD },
                        headers: {
                            'X-RapidAPI-Key': apiHeaders['Key'],
                            'X-RapidAPI-Host': apiHeaders['Host']
                        }
                    })
                ));
                const data = responses.reduce((acc, response, index) => {
                    if(response.data.info.rate !== 'N/A') {
                        acc[Object.keys(currencies)[index]] = response.data;
                    }
                    return acc;
                }, {});
                setConversion(data, responses[0].data.date);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        if (USD > 0) {
            fetchRates();
        } else if (USD < 0) {
            fetchRates();
        } else {
            setConversion({}, 'Awaiting Input...');
        }
    }, [USD]);

    return { conversionData, lastFetchedDate, loading, error };
};

function CurrencyConverter() {
    const [USD, setUSD] = useState(0);
    const { conversionData, lastFetchedDate, loading, error } = useConverter(USD);

    return (
        <div className="currency-container">
            <h1>Real-Time Currency Exchange Rates</h1>
            <div>Seamlessly convert various global currencies with up-to-date exchange rates.</div>
            {lastFetchedDate && <h3>Date of Rates: {lastFetchedDate}</h3>}
            <label>
                Enter USD Amount: &nbsp;
                <input type="number" value={USD} onChange={(e) => setUSD(e.target.value)} />
                <strong>
                    {loading 
                        ? <span style={{color: 'orange'}}> &nbsp; Awaiting Input...</span> 
                        : error 
                            ? <span style={{color: 'red'}}>&nbsp; {error}</span> 
                            : <span style={{color: 'green'}}>&nbsp; Forex Updated.</span>}
                </strong>
            </label>
            <table className="currency-table">
                <thead>
                    <tr>
                        <th>Currency Code</th>
                        <th>Currency Name</th>
                        <th>Exchange Rate</th>
                        <th>Converted Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(currencies).map(currency => (
                        <tr key={currency}>
                            <td>{currency}</td>
                            <td>{currencies[currency].name}</td>
                            <td>{typeof conversionData[currency]?.info.rate === 'number' 
                                ? conversionData[currency]?.info.rate.toFixed(6).padStart(9, '0').replace(/^0+/g, ' ') 
                                : conversionData[currency]?.info.rate}
                            </td>
                            <td>{typeof conversionData[currency]?.result === 'number' 
                                ? conversionData[currency]?.result.toFixed(2).padStart(9, '0').replace(/^0+/g, ' ') 
                                : conversionData[currency]?.result}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="currency-ref"> 
            Data courtesy of <a href="https://rapidapi.com/principalapis/api/currency-conversion-and-exchange-rates">Principal APIs'</a><em>Currency Conversion and Exchange Rates</em> Service
            </div>
        </div>
    );
}

export default CurrencyConverter;
