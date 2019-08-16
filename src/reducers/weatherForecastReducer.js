import {
    FETCH_WEATHER_FORECAST_START,
    FETCH_WEATHER_FORECAST_SUCCESS,
    FETCH_WEATHER_FORECAST_FAILURE
} from '../constants/actionTypes';

export const initialState = {
    dailyForecast: null,
    loading: false,
    city: null,
    error: null
};

const MID_DAY_TIME = '12:00:00';

const getDailyForecast = records => {
    const dailyForecast = {};
    records.forEach(({ dt_txt, main: { temp }, weather }) => {
        const [ date, time ] = dt_txt.split(' ');
        if (dailyForecast.hasOwnProperty(date)) {
            const currentDay = dailyForecast[date];
            currentDay.lowTemp = Math.min(currentDay.lowTemp, temp);
            currentDay.highTemp = Math.max(currentDay.highTemp, temp);
            if (time === MID_DAY_TIME) {
                currentDay.overallWeather = weather[0];
            }
        } else {
            dailyForecast[date] = {
                lowTemp: temp,
                highTemp: temp
            };
        }
    });
    return dailyForecast;
};

const weatherForecastReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_WEATHER_FORECAST_START:
            return { ...state, loading: true };
        case FETCH_WEATHER_FORECAST_SUCCESS:
            const { city, list } = action.payload.weatherForecast;
            const dailyForecast = getDailyForecast(list);
            return { ...state, dailyForecast, loading: false, city };
        case FETCH_WEATHER_FORECAST_FAILURE:
            return { ...initialState, error: action.payload.error };
        default:
            return state;
    }
};

export default weatherForecastReducer;
