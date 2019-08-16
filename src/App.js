import React from 'react';
import { connect } from 'react-redux';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import SearchCity from './components/SearchCity';
import DailyForecast from './components/DailyForecast';
import Welcome from './components/Welcome';
import CityNotFound from './components/CityNotFound';
import Loading from './components/Loading';
import CityInfo from './components/CityInfo';

import { fetchWeatherForecast, setUnits } from './actions/weatherForecastActions';

import './App.scss';

const App = ({ fetchWeatherForecast, weatherForecast, setUnits }) => {
    const { city, dailyForecast, error, loading, units } = weatherForecast;
    const currentYear = new Date().getFullYear();
    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Weather Forecast</Navbar.Brand>
                <SearchCity units={units} onSubmit={fetchWeatherForecast} onUnitsChange={setUnits} />
            </Navbar>
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs lg="8">
                        {!error && !dailyForecast && !loading && <Welcome />}
                        {error && error.message.includes('404') && !loading && <CityNotFound />}
                    </Col>
                </Row>
                {!loading && city && (
                    <Row className="city-info">
                        <Col xs lg="auto">
                            {!loading && dailyForecast &&(
                                <CityInfo city={city} />
                            )}
                        </Col>
                    </Row>
                )}
                {!loading && dailyForecast && (
                    <Row className="justify-content-md-center">
                        <Col xs>
                            <DailyForecast dailyForecast={dailyForecast} units={units} />
                        </Col>
                    </Row>
                )}
                <Row className="justify-content-md-center">
                    <Col xs>
                        {loading && <Loading />}
                    </Col>
                </Row>
                <Row className="text-center footer">
                    <Col xs>
                        <p>&copy; {currentYear} Maiko Morales</p>
                        <div className="attribution">
                            Station icon made by&nbsp;
                            <a href="https://www.flaticon.com/authors/flat-icons"
                                title="Flat Icons">Flat Icons</a> 
                            &nbsp;from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                            &nbsp;is licensed by&nbsp;
                            <a href="http://creativecommons.org/licenses/by/3.0/"
                                title="Creative Commons BY 3.0"
                                target="_blank"
                                rel="noopener noreferrer">CC 3.0 BY</a>
                        </div>
                        <div className="attribution">
                            Weather icons made by&nbsp;
                            <a href="https://www.flaticon.com/authors/linector"
                                title="Linector">Linector</a> 
                            &nbsp;from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
                            &nbsp;is licensed by&nbsp;
                            <a href="http://creativecommons.org/licenses/by/3.0/"
                                title="Creative Commons BY 3.0"
                                target="_blank"
                                rel="noopener noreferrer">CC 3.0 BY</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const mapStateToProps = state => state;
const mapDispatchToProps = { fetchWeatherForecast, setUnits };
export default connect(mapStateToProps, mapDispatchToProps)(App);
