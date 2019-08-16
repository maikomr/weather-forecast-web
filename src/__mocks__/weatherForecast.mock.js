export const city = { id: 1851632, name: 'Shuzenji' };

export const list = [
    { main: { temp: 9.15 }, weather:[{ id: 804 }], dt_txt: '2019-08-15 03:00:00' },
    { main: { temp: 20.08 }, weather:[{ id: 801 }], dt_txt: '2019-08-15 06:00:00' },
    { main: { temp: 8.20 }, weather:[{ id: 700 }], dt_txt: '2019-08-15 12:00:00' }
];

export const weatherForecast = { code: 200, city, list };

export const dailyForecast = [
    { date: '2019-08-15', highTemp: 20.08, lowTemp: 8.2, overallWeather: { id: 804, icon: '01n' } }
];
