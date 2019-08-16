import React from 'react';
import { Card } from 'react-bootstrap';
import { UNIT_SYMBOLS } from '../constants/units';

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
    <Card className="text-center">
        <Card.Body>
            <Card.Text>
                <strong>{`${highTemp}${UNIT_SYMBOLS[units]}`}</strong> 
                <br />
                {`${lowTemp}${UNIT_SYMBOLS[units]}`}
            </Card.Text>
            <Card.Img
                src={`/forecast-icons/${overallWeather.icon.replace('n', 'd')}.svg`}
                alt={overallWeather.description}
            />
            <Card.Text className="text-muted">
                {overallWeather.description}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Title>{stringifyDate(new Date(date))}</Card.Title>
        </Card.Footer>
    </Card>
);

export default Forecast;
