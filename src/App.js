import React from 'react';
import { connect } from 'react-redux';
import SearchCity from './components/SearchCity';
import DailyForecast from './components/DailyForecast';
import Welcome from './components/Welcome';
import { fetchWeatherForecast } from './actions/weatherForecastActions';

import './App.scss';

const App = ({ fetchWeatherForecast, weatherForecast }) => {
    const { dailyForecast } = weatherForecast;
    return (
        <div className="App">
            <SearchCity onSubmit={fetchWeatherForecast} />
            {!dailyForecast && <Welcome />}
            {dailyForecast && <DailyForecast dailyForecast={dailyForecast} />}
        </div>
    );
};

const mapStateToProps = state => state;
const mapDispatchToProps = { fetchWeatherForecast };
export default connect(mapStateToProps, mapDispatchToProps)(App);
