import {
    FETCH_WEATHER_FORECAST_START,
    FETCH_WEATHER_FORECAST_SUCCESS,
    FETCH_WEATHER_FORECAST_FAILURE,
    SET_TEMPERATURE_UNITS
} from '../constants/actionTypes';
import { UNITS } from '../constants/units';

export const initialState = {
    dailyForecast: null,
    loading: false,
    city: null,
    error: null,
    units: UNITS.FAHRENHEIT
};

const takeFirstFiveElements = arr => arr.splice(0, 5);

const convertObjectForecastToArray = dailyForecastObj => {
    const dailyForecastArr = [];
    for (const date in dailyForecastObj) {
        dailyForecastArr.push({...dailyForecastObj[date], date })
    }
    return takeFirstFiveElements(dailyForecastArr);
};

const evaluateHighAndLowTemp = (currentDay, temp) => {
    currentDay.lowTemp = Math.min(currentDay.lowTemp, temp);
    currentDay.highTemp = Math.max(currentDay.highTemp, temp);
};

const getDailyForecast = records => {
    const dailyForecastObj = {};
    records.forEach(({ dt_txt, main: { temp }, weather }) => {
        const date = dt_txt.split(' ')[0];
        if (dailyForecastObj.hasOwnProperty(date)) {
            const currentDay = dailyForecastObj[date];
            evaluateHighAndLowTemp(currentDay, temp);
        } else {
            dailyForecastObj[date] = { lowTemp: temp, highTemp: temp, overallWeather: weather[0] };
        }
    });
    return convertObjectForecastToArray(dailyForecastObj);
};

const weatherForecastReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_WEATHER_FORECAST_START:
            return { ...state, loading: true };
        case FETCH_WEATHER_FORECAST_SUCCESS:
            const { city, list } = action.payload.weatherForecast;
            const dailyForecast = getDailyForecast(list);
            return { ...state, loading: false, dailyForecast, city, error: null };
        case FETCH_WEATHER_FORECAST_FAILURE:
            return { ...initialState, error: action.payload.error };
        case SET_TEMPERATURE_UNITS:
            return { ...state, units: action.payload.units };
        default:
            return state;
    }
};

export default weatherForecastReducer;
