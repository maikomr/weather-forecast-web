import weatherForecastReducer, { initialState } from './weatherForecastReducer';
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
        const city = { id: 1851632, name: 'Shuzenji' };
        const list = [
            { main: { temp: 9.15 }, weather:[{ id: 804 }], dt_txt: '2019-08-15 03:00:00' },
            { main: { temp: 20.08 }, weather:[{ id: 801 }], dt_txt: '2019-08-15 06:00:00' },
            { main: { temp: 8.20 }, weather:[{ id: 700 }], dt_txt: '2019-08-15 12:00:00' }
        ];
        const weatherForecast = { code: 200, city, list };
        const newState = weatherForecastReducer(undefined, fetchWeatherForecastSuccess(weatherForecast));
        const expectedDailyForecast = [
            { date: '2019-08-15', highTemp: 20.08, lowTemp: 8.2, overallWeather: { id: 700 } }
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
