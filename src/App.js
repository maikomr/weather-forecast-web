import React from 'react';
import { connect } from 'react-redux';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import SearchCity from './components/SearchCity';
import DailyForecast from './components/DailyForecast';
import Welcome from './components/Welcome';
import CityNotFound from './components/CityNotFound';
import Loading from './components/Loading';
import { fetchWeatherForecast, setUnits } from './actions/weatherForecastActions';

import './App.scss';

const App = ({ fetchWeatherForecast, weatherForecast, setUnits }) => {
    const { dailyForecast, error, loading, units } = weatherForecast;
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
                        {!error && !dailyForecast && !loading && <Welcome />}
                        {error && error.message.includes('404') && !loading && <CityNotFound />}
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs>
                        {!loading && dailyForecast && <DailyForecast dailyForecast={dailyForecast} units={units} />}
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs>
                        {loading && <Loading />}
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
