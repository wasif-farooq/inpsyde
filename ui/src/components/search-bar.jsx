import React from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const SearchBar = props => {

    const { Control } = Form;

    const onChange = e => {
        props.onSearch(e.target.value || '')
    }

    const clear = () => {
        props.onClear();
    }

    return (
        <InputGroup className="mb-3">
            <Control
                type="text"
                placeholder="Search"
                onChange={onChange}
                value={props.searchText}
            />
            {props.searchText &&
            <InputGroup.Append>
                <Button variant="danger"  onClick={clear}>x</Button>
            </InputGroup.Append>
            }
        </InputGroup>
    )
}

export default SearchBar;