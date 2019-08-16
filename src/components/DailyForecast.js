import React from 'react';
import { CardDeck } from 'react-bootstrap';
import Forecast from './Forecast';

const DailyForecast = ({ dailyForecast = [], units }) => (
    <CardDeck>
        {dailyForecast.map(forecast => (
            <Forecast key={forecast.date} forecast={forecast} units={units} />
        ))}
    </CardDeck>
);

export default DailyForecast;
