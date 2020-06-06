import React from 'react';
import { Form } from "react-bootstrap";

const ColumnItem = props => {

    const { Check, Group } = Form
    const { column, checked } = props;

    const onChange = e => {
        props.onColumnToggle(column.dataField);
    }

    return (
        <Group key={column.dataField}>
            <Check
                type="switch"
                label={ column.text }
                name={column.dataField}
                id={column.dataField}
                checked={checked}
                onChange={onChange}
            />
        </Group>
    )
}

export default ColumnItem;