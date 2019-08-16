import React from 'react';

const DailyForecast = ({ dailyForecast = [] }) => (
    <ul>
        {dailyForecast.map(forecast => (
            <li key={forecast.date}>
                <span>{forecast.date}</span> |  <strong>{`${forecast.highTemp}°C`}</strong> / {`${forecast.lowTemp}°C`}
            </li>
        ))}
    </ul>
);

export default DailyForecast;
