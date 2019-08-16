import React from 'react';
import { Card } from 'react-bootstrap';

const WEATHER_ICONS_URL = process.env.REACT_APP_WEATHER_ICONS_URL;

const Forecast = ({ forecast: { date, highTemp, lowTemp, overallWeather } }) => (
    <Card>
        <Card.Body>
            <Card.Text>
                <strong>{`${highTemp}°C`}</strong> | {`${lowTemp}°C`}
            </Card.Text>
        </Card.Body>
        <Card.Img
            src={`${WEATHER_ICONS_URL}/${overallWeather.icon}@2x.png`}
            alt={overallWeather.description}
        />        
        <Card.Footer>
        <Card.Title>{date}</Card.Title>
        </Card.Footer>
    </Card>
);

export default Forecast;
