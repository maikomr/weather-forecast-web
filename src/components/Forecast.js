import React from 'react';

const WEATHER_ICONS_URL = process.env.REACT_APP_WEATHER_ICONS_URL;

const Forecast = ({ forecast: { date, highTemp, lowTemp, overallWeather } }) => (
    <div>
        <span>{date}</span> | <strong>{`${highTemp}°C`}</strong> / {`${lowTemp}°C`}
        <img
            src={`${WEATHER_ICONS_URL}/${overallWeather.icon}@2x.png`}
            alt={overallWeather.description}
        />
    </div>
);

export default Forecast;
