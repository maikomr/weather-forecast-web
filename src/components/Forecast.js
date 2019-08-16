import React from 'react';
import { Card } from 'react-bootstrap';
import { UNIT_SYMBOLS } from '../constants/units';
import highTempIcon from './high-temp.svg';
import lowTempIcon from './low-temp.svg';

import './Forecast.scss';

const isToday = date => {
    const today = new Date();
    return date.getDate() === today.getDate()
        && date.getMonth() === today.getMonth()
        && date.getFullYear() === today.getFullYear();
};

const stringifyDate = date => {
    if (isToday(date)) {
        return 'Today';
    }
    return date.toLocaleString('en-US', { weekday: 'long' });
};

const Forecast = ({ forecast: { date, highTemp, lowTemp, overallWeather }, units }) => (
    <Card className="text-center forecast">
        <Card.Body>
            <Card.Text>
                <img className="temp-icon" src={highTempIcon} alt="High temperature" />&nbsp;
                <span className="high-temp">{`${highTemp}${UNIT_SYMBOLS[units]}`}</span>
                <br />
                <img className="temp-icon" src={lowTempIcon} alt="Low temperature" />&nbsp;
                <span className="low-temp">{`${lowTemp}${UNIT_SYMBOLS[units]}`}</span>
            </Card.Text>
            <Card.Img data-test-id="weather-icon"
                src={`/forecast-icons/${overallWeather.icon.replace('n', 'd')}.svg`}
                alt={overallWeather.description}
            />
            <Card.Text className="text-muted">
                {overallWeather.description}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <Card.Text><strong>{stringifyDate(new Date(date))}</strong></Card.Text>
        </Card.Footer>
    </Card>
);

export default Forecast;
