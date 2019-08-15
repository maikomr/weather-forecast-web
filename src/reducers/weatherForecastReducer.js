import {
    FETCH_WEATHER_FORECAST_START,
    FETCH_WEATHER_FORECAST_SUCCESS,
    FETCH_WEATHER_FORECAST_FAILURE
} from '../constants/actionTypes';

export const initialState = {
    weatherForecast: null,
    loading: false,
    error: null
};

const weatherForecastReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_WEATHER_FORECAST_START:
            return { ...state, loading: true };
        case FETCH_WEATHER_FORECAST_SUCCESS:
            return { ...state, loading: false, weatherForecast: action.payload.weatherForecast };
        case FETCH_WEATHER_FORECAST_FAILURE:
            return { ...initialState, error: action.payload.error };
        default:
            return state;
    }
};

export default weatherForecastReducer;
