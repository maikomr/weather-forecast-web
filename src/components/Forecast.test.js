import React from 'react';
import { shallow, mount } from 'enzyme';
import Forecast from './Forecast';
import { UNITS, UNIT_SYMBOLS } from '../constants/units';
import { dailyForecast } from '../__mocks__/weatherForecast.mock';

describe('<Forecast />', () => {
    const forecast = dailyForecast[0];
    let wrapper;

    it('should render fahrenheit units symbol', () => {
        wrapper = shallow(
            <Forecast forecast={forecast} units={UNITS.FAHRENHEIT} />
        );
        expect(wrapper.find('.high-temp').text()).toContain(UNIT_SYMBOLS[UNITS.FAHRENHEIT]);
    });

    it('should render celcius units symbol', () => {
        wrapper = shallow(
            <Forecast forecast={forecast} units={UNITS.CELCIUS} />
        );
        expect(wrapper.find('.high-temp').text()).toContain(UNIT_SYMBOLS[UNITS.CELCIUS]);
    });

    it('should convert night icon 01n to day icon 01d', () => {
        wrapper = mount(
            <Forecast forecast={forecast} units={UNITS.CELCIUS} />
        );
        const weatherIcon = wrapper.find('[data-test-id="weather-icon"]').find('img');
        const expectedIconSrc = '/forecast-icons/01d.svg';
        expect(weatherIcon.prop('src')).toBe(expectedIconSrc);
    });
});
