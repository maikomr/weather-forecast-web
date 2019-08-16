import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Welcome = () => (
    <Jumbotron>
        <h1>Welcome to Weather Forecast</h1>
        <p>
            This is a simple weather forecast app that display High and Low temperature values for the next five days.
            You can start typing the name of a city in the search bar above..
        </p>
    </Jumbotron>
);

export default Welcome;
