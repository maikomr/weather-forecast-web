import React from 'react';
import { connect } from 'react-redux';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import SearchCity from './components/SearchCity';
import DailyForecast from './components/DailyForecast';
import Welcome from './components/Welcome';
import { fetchWeatherForecast } from './actions/weatherForecastActions';

import './App.scss';

const App = ({ fetchWeatherForecast, weatherForecast }) => {
    const { dailyForecast } = weatherForecast;
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <SearchCity onSubmit={fetchWeatherForecast} />
            </Navbar>
            <Container className="App">
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        {!dailyForecast && <Welcome />}
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs>
                        {dailyForecast && <DailyForecast dailyForecast={dailyForecast} />}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const mapStateToProps = state => state;
const mapDispatchToProps = { fetchWeatherForecast };
export default connect(mapStateToProps, mapDispatchToProps)(App);
