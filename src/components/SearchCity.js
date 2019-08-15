import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

const SearchCity = ({ onSubmit }) => {
    const [ searchText, setSearchText ] = useState('');

    const submitForm = e => {
        e.preventDefault();
        onSubmit(searchText);
    };

    const handleTextChange = e => {
        setSearchText(e.target.value);
    };

    return (
        <Form onSubmit={submitForm}>
            <InputGroup>
                <FormControl value={searchText} onChange={handleTextChange} placeholder="Search City..." />
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
