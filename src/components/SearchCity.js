import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, FormControl, InputGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';
import { UNITS } from '../constants/units';

const SearchCity = ({ onSubmit, units, onUnitsChange }) => {
    const searchText = React.createRef();

    const submitForm = e => {
        e.preventDefault();
        onSubmit(searchText.current.value);
    };

    return (
        <Form onSubmit={submitForm} inline className="ml-auto">
            <ToggleButtonGroup type="radio" name="options" value={units} onChange={onUnitsChange}>
                <ToggleButton value={UNITS.FAHRENHEIT} variant="light">°F</ToggleButton>
                <ToggleButton value={UNITS.CELCIUS} variant="light">°C</ToggleButton>
            </ToggleButtonGroup>
            <InputGroup>
                <FormControl ref={searchText} autoFocus placeholder="Search city..." />
                <InputGroup.Append>
                    <Button variant="outline-secondary" type="submit" >
                        <FontAwesomeIcon icon={faSearch} />
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    );
};

export default SearchCity;
