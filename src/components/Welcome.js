import React from 'react';
import { Jumbotron } from 'react-bootstrap';

import stationLogo from './stationLogo.svg';

import './Welcome.scss';

const Welcome = () => (
    <Jumbotron className="welcome">
        <div>
            <h3>Welcome to Weather Forecast</h3>
            <hr />
            <p>
                This is a simple weather forecast app that display 
                High and Low temperature values for the next five days.
            </p>
            <p>You can start typing the name of a city in the search bar above...</p>
        </div>
        <div className="station-wrapper">
            <img src={stationLogo} className="station-logo" alt="station logo" />
        </div>
    </Jumbotron>
);

export default Welcome;
