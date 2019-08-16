import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    FETCH_WEATHER_FORECAST_START,
    FETCH_WEATHER_FORECAST_SUCCESS,
    FETCH_WEATHER_FORECAST_FAILURE
} from '../constants/actionTypes';
import { fetchWeatherForecast } from '../actions/weatherForecastActions';
import { initialState } from '../reducers/weatherForecastReducer';
import axiosMock from 'axios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchWeatherForecast', () => {
    let store;

    it('calls FETCH_WEATHER_FORECAST_START and FETCH_WEATHER_FORECAST_SUCCESS', async () => {
        const cityName = 'Shuzenji';
        const weatherForecast = { code: 200, city: { id: 1851632, name: cityName } };

        axiosMock.mockImplementationOnce(() => Promise.resolve({ data: weatherForecast }));

        const expectedActions = [
            { type: FETCH_WEATHER_FORECAST_START },
            { type: FETCH_WEATHER_FORECAST_SUCCESS, payload: { weatherForecast } }
        ]
        store = mockStore({ weatherForecast: initialState });

        await store.dispatch(fetchWeatherForecast(cityName));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('calls FETCH_WEATHER_FORECAST_START and FETCH_WEATHER_FORECAST_FAILURE', async () => {
        const cityName = 'Shuzenji';
        const error = new Error("test error");

        axiosMock.mockImplementationOnce(() => Promise.reject(error));

        const expectedActions = [
            { type: FETCH_WEATHER_FORECAST_START },
            { type: FETCH_WEATHER_FORECAST_FAILURE, payload: { error } }
        ]
        store = mockStore({ weatherForecast: initialState });

        await store.dispatch(fetchWeatherForecast(cityName));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
