import React from 'react';
import { Button, Form  } from 'react-bootstrap';

const SearchBar = props => {

    const { Control } = Form;

    const onChange = e => {
        props.onSearch(e.target.value || '')
    }

    const clear = () => {
        props.onClear();
    }

    return (
        <div>
            <Control
                type="email"
                placeholder="Search"
                onChange={onChange}
                value={props.searchText}
            />
            <Button
                onClick={ clear }
            >
                <i>x</i>
            </Button>
        </div>
    )
}

export default SearchBar;