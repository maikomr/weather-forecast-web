import weatherForecastReducer, { initialState } from './weatherForecastReducer';
import {
    FETCH_WEATHER_FORECAST_START,
    FETCH_WEATHER_FORECAST_SUCCESS,
    FETCH_WEATHER_FORECAST_FAILURE
} from '../constants/actionTypes';
import {
    fetchWeatherForecastStart,
    fetchWeatherForecastSuccess,
    fetchWeatherForecastFailure
} from '../actions/weatherForecastActions';

describe('weatherForecastReducer', () => {
    it('should return the initial state', () => {
        expect(weatherForecastReducer(undefined, {})).toEqual(initialState);
    });

    it('should set loading to true on start', () => {
        const newState = weatherForecastReducer(undefined, fetchWeatherForecastStart());
        expect(newState.loading).toBe(true);
    });

    it('should set loading to false and store the weather forecast on success', () => {
        const expectedForecast = { code: 200, city: { id: 1851632, name: "Shuzenji" } };
        const newState = weatherForecastReducer(undefined, fetchWeatherForecastSuccess(expectedForecast));
        expect(newState.loading).toBe(false);
        expect(newState.weatherForecast).toEqual(expectedForecast);
    });

    it('should set loading to false, clean the weather forecast and store error on failure', () => {
        const error = new Error("test error");
        const newState = weatherForecastReducer(undefined, fetchWeatherForecastFailure(error));
        expect(newState.loading).toBe(false);
        expect(newState.weatherForecast).toBe(null);
        expect(newState.error).toEqual(error);
    });
});
