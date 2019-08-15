import React from 'react';
import { connect } from 'react-redux';
import SearchCity from './components/SearchCity';
import { fetchWeatherForecast } from './actions/weatherForecastActions';

import './App.scss';

const App = ({ fetchWeatherForecast, weatherForecast }) => {
    console.log(weatherForecast);
    return (
        <div className="App">
            <SearchCity onSubmit={fetchWeatherForecast} />
        </div>
    );
}

const mapStateToProps = (state) => ({
    weatherForecast: state.weatherForecast
});

const mapDispatchToProps = { fetchWeatherForecast };

export default connect(mapStateToProps, mapDispatchToProps)(App);
