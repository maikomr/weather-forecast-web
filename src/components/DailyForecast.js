import React from 'react';
import Forecast from './Forecast';

const DailyForecast = ({ dailyForecast = [] }) => (
    <div>
        {dailyForecast.map(forecast => (
            <Forecast key={forecast.date} forecast={forecast} />
        ))}
    </div>
);

export default DailyForecast;
