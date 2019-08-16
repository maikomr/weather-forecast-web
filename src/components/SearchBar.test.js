import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './SearchBar';
import { UNITS } from '../constants/units';

describe('<SearchBar />', () => {
    const handleUnitsChange = jest.fn();
    let wrapper;

    it('should call onUnitsChange with the new units', () => {
        wrapper = shallow(
            <SearchBar units={UNITS.CELCIUS} onUnitsChange={handleUnitsChange} />
        );
        wrapper.find('[data-test-id="unit-selector"]').simulate('change', UNITS.FAHRENHEIT);
        expect(handleUnitsChange).toHaveBeenCalledWith(UNITS.FAHRENHEIT);
    });
});
