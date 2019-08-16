import React from 'react';
import { Card } from 'react-bootstrap';

const CityInfo = ({ city: { name, country } }) => (
    <Card body className="text-center">
        {name} <img src={`https://www.countryflags.io/${country}/flat/32.png`} />
    </Card>
);

export default CityInfo;
