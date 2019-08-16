import React from 'react';
import { connect } from 'react-redux';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import SearchCity from './components/SearchCity';
import DailyForecast from './components/DailyForecast';
import Welcome from './components/Welcome';
import CityNotFound from './components/CityNotFound';
import { fetchWeatherForecast, setUnits } from './actions/weatherForecastActions';

import './App.scss';

const App = ({ fetchWeatherForecast, weatherForecast, setUnits }) => {
    const { dailyForecast, error, units } = weatherForecast;
    const currentYear = new Date().getFullYear();
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Weather Forecast</Navbar.Brand>
                <SearchCity units={units} onSubmit={fetchWeatherForecast} onUnitsChange={setUnits} />
            </Navbar>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="8">
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
const mapDispatchToProps = { fetchWeatherForecast, setUnits };
export default connect(mapStateToProps, mapDispatchToProps)(App);
