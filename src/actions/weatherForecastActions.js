import axios from 'axios';
import queryString from 'query-string';
import {
    FETCH_WEATHER_FORECAST_START,
    FETCH_WEATHER_FORECAST_SUCCESS,
    FETCH_WEATHER_FORECAST_FAILURE
} from '../constants/actionTypes';

const OPEN_WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const FIVE_DAYS_URL = process.env.REACT_APP_FIVE_DAYS_URL;

export const fetchWeatherForecastStart = () => ({
    type: FETCH_WEATHER_FORECAST_START
});

export const fetchWeatherForecastSuccess = weatherForecast => ({
    type: FETCH_WEATHER_FORECAST_SUCCESS,
    payload: { weatherForecast }
});

export const fetchWeatherForecastFailure = error => ({
    type: FETCH_WEATHER_FORECAST_FAILURE,
    payload: { error }
});

export const fetchWeatherForecast = cityName => async dispatch => {
    dispatch(fetchWeatherForecastStart());
    const queryParams = queryString.stringify({
        q: cityName,
        units: 'metric',
        appid: OPEN_WEATHER_API_KEY
    });
    const url = `${FIVE_DAYS_URL}?${queryParams}`;
    try {
        const response = await axios(url);
        const weatherForecast = response.data;
        dispatch(fetchWeatherForecastSuccess(weatherForecast));
    } catch (exception) {
        dispatch(fetchWeatherForecastFailure(exception));
    }
};