import React from 'react';
import { connect } from 'react-redux';
import SearchCity from './components/SearchCity';
import { fetchWeather } from './actions/weatherForecastActions';

import './App.scss';

const App = ({ fetchWeather, weatherForecast }) => {
  console.log(weatherForecast);
  return (
    <div className="App">
      <SearchCity onSubmit={fetchWeather} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  weatherForecast: state.weatherForecast
});

const mapDispatchToProps = { fetchWeather };

export default connect(mapStateToProps, mapDispatchToProps)(App);
