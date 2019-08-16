import React from 'react';
import { Alert, Container } from 'react-bootstrap';

const CityNotFound = () => (
    <Alert variant="danger">
        <Alert.Heading>Oh snap! You got an error</Alert.Heading>
        <p><strong>404</strong> | We couldn't find a city with that name.</p>
    </Alert>
);

export default CityNotFound;
