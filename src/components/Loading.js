import React from 'react';
import { Spinner } from 'react-bootstrap';

import './Loading.scss';

const Loading = () => (
    <div className="loading text-center">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="primary" />
    </div>
);

export default Loading;
