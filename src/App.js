import React from 'react';
import { connect } from 'react-redux';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import SearchCity from './components/SearchCity';
import DailyForecast from './components/DailyForecast';
import Welcome from './components/Welcome';
import CityNotFound from './components/CityNotFound';
import { fetchWeatherForecast } from './actions/weatherForecastActions';

import './App.scss';

const App = ({ fetchWeatherForecast, weatherForecast }) => {
    const { dailyForecast, error } = weatherForecast;
    const currentYear = new Date().getFullYear();
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <SearchCity onSubmit={fetchWeatherForecast} />
            </Navbar>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        {!dailyForecast && !error && <Welcome />}
                        {!dailyForecast && error && error.message.includes('404') && <CityNotFound />}
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs>
                        {dailyForecast && <DailyForecast dailyForecast={dailyForecast} />}
                    </Col>
                </Row>
                <Row className="text-center footer">
                    <Col xs>
                        <p>&copy; {currentYear} Maiko Morales</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const mapStateToProps = state => state;
const mapDispatchToProps = { fetchWeatherForecast };
export default connect(mapStateToProps, mapDispatchToProps)(App);
