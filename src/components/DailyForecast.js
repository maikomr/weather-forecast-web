import React from 'react';
import { CardDeck } from 'react-bootstrap';
import Forecast from './Forecast';

const DailyForecast = ({ dailyForecast = [] }) => (
    <CardDeck>
        {dailyForecast.map(forecast => (
            <Forecast key={forecast.date} forecast={forecast} />
        ))}
    </CardDeck>
);

export default DailyForecast;
