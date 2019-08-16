import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, FormControl, InputGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

const UNITS = {
    FAHRENHEIT: 'imperial',
    CELCIUS: 'metric',
};

const SearchCity = ({ onSubmit }) => {
    const searchText = React.createRef();
    const units = React.createRef();

    const submitForm = e => {
        e.preventDefault();
        onSubmit(searchText.current.value, units.current.value);
    };

    return (
        <Form onSubmit={submitForm} inline className="ml-auto">
            <ToggleButtonGroup ref={units} type="radio" name="options" defaultValue={UNITS.FAHRENHEIT}>
                <ToggleButton value={UNITS.FAHRENHEIT} variant="light">°F</ToggleButton>
                <ToggleButton value={UNITS.CELCIUS} variant="light">°C</ToggleButton>
            </ToggleButtonGroup>
            <InputGroup>
                <FormControl ref={searchText} autoFocus placeholder="Search City..." />
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
