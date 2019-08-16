import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    FETCH_WEATHER_FORECAST_START,
    FETCH_WEATHER_FORECAST_SUCCESS,
    FETCH_WEATHER_FORECAST_FAILURE,
    SET_TEMPERATURE_UNITS
} from '../constants/actionTypes';
import { UNITS } from '../constants/units';
import { fetchWeatherForecast, fetchUnitsIfNeeded } from '../actions/weatherForecastActions';
import { initialState } from '../reducers/weatherForecastReducer';
import axiosMock from 'axios';
import { city, dailyForecast } from '../__mocks__/weatherForecast.mock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

let store;

describe('fetchWeatherForecast', () => {
    it('calls FETCH_WEATHER_FORECAST_START and FETCH_WEATHER_FORECAST_SUCCESS', async () => {
        const weatherForecast = { code: 200, city };

        axiosMock.mockImplementationOnce(() => Promise.resolve({ data: weatherForecast }));

        const expectedActions = [
            { type: FETCH_WEATHER_FORECAST_START },
            { type: FETCH_WEATHER_FORECAST_SUCCESS, payload: { weatherForecast } }
        ]
        store = mockStore({ weatherForecast: initialState });

        await store.dispatch(fetchWeatherForecast(city.name));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('calls FETCH_WEATHER_FORECAST_START and FETCH_WEATHER_FORECAST_FAILURE', async () => {
        const error = new Error('test error');

        axiosMock.mockImplementationOnce(() => Promise.reject(error));

        const expectedActions = [
            { type: FETCH_WEATHER_FORECAST_START },
            { type: FETCH_WEATHER_FORECAST_FAILURE, payload: { error } }
        ]
        store = mockStore({ weatherForecast: initialState });

        await store.dispatch(fetchWeatherForecast(city.name));
        expect(store.getActions()).toEqual(expectedActions);
    });
});

describe('fetchUnitsIfNeeded', () => {
    const units = UNITS.CELCIUS;
    
    it('sets new units but does not fetch data', async () => {
        const expectedActions = [{ type: SET_TEMPERATURE_UNITS, payload: { units } }];
        store = mockStore({ weatherForecast: initialState });

        await store.dispatch(fetchUnitsIfNeeded(units));
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('sets new units and also fetches new data', async () => {
        store = mockStore({ weatherForecast: { ...initialState, city, dailyForecast } });
        const weatherForecast = { code: 200, city };
        axiosMock.mockImplementationOnce(() => Promise.resolve({ data: weatherForecast }));

        const expectedActions = [
            { type: FETCH_WEATHER_FORECAST_START },
            { type: FETCH_WEATHER_FORECAST_SUCCESS, payload: { weatherForecast } },
            { type: SET_TEMPERATURE_UNITS, payload: { units } }
        ];
        
        await store.dispatch(fetchUnitsIfNeeded(units));
        expect(store.getActions()).toEqual(expectedActions);
    });
});
