import React from 'react';
import { Card } from 'react-bootstrap';
import { UNIT_SYMBOLS } from '../constants/units';

const WEATHER_ICONS_URL = process.env.REACT_APP_WEATHER_ICONS_URL;

const Forecast = ({ forecast: { date, highTemp, lowTemp, overallWeather }, units }) => (
    <Card className="text-center">
        <Card.Body>
            <Card.Text>
                <strong>{`${highTemp}${UNIT_SYMBOLS[units]}`}</strong> 
                <br />
                {`${lowTemp}${UNIT_SYMBOLS[units]}`}
            </Card.Text>
            <Card.Img
                src={`${WEATHER_ICONS_URL}/${overallWeather.icon.replace('n', 'd')}@2x.png`}
                alt={overallWeather.description}
            />
            <Card.Text className="text-muted">
                {overallWeather.description}
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        <Card.Title>{date}</Card.Title>
        </Card.Footer>
    </Card>
);

export default Forecast;
