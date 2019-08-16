import weatherForecastReducer, { initialState } from './weatherForecastReducer';
import {
    fetchWeatherForecastStart,
    fetchWeatherForecastSuccess,
    fetchWeatherForecastFailure
} from '../actions/weatherForecastActions';
import { city, weatherForecast } from '../__mocks__/weatherForecast.mock';

describe('weatherForecastReducer', () => {
    it('should return the initial state', () => {
        expect(weatherForecastReducer(undefined, {})).toEqual(initialState);
    });

    it('should set loading to true on start', () => {
        const newState = weatherForecastReducer(undefined, fetchWeatherForecastStart());
        expect(newState.loading).toBe(true);
    });

    it('should set loading to false and store the weather forecast on success', () => {
        const newState = weatherForecastReducer(undefined, fetchWeatherForecastSuccess(weatherForecast));
        const expectedDailyForecast = [
            { date: '2019-08-15', highTemp: 20.08, lowTemp: 8.2, overallWeather: { id: 804 } }
        ];
        expect(newState.loading).toBe(false);
        expect(newState.dailyForecast).toEqual(expectedDailyForecast);
        expect(newState.city).toEqual(city);
        expect(newState.error).toBe(null);
    });

    it('should set loading to false, clean the weather forecast and store error on failure', () => {
        const error = new Error('test error');
        const newState = weatherForecastReducer(undefined, fetchWeatherForecastFailure(error));
        expect(newState.loading).toBe(false);
        expect(newState.dailyForecast).toBe(null);
        expect(newState.city).toBe(null);
        expect(newState.error).toEqual(error);
    });
});
