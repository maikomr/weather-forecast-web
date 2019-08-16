import React from 'react';
import { Card } from 'react-bootstrap';

const CityInfo = ({ city: { name, country } }) => (
    <Card body className="text-center">
        <h4>{name} <img src={`https://www.countryflags.io/${country}/flat/32.png`} /></h4>
    </Card>
);

export default CityInfo;
