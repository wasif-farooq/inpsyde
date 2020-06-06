import React, { Fragment, useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import Item from '../column-item';

const ColumnsToggler = props => {

    const [open, setOpen] = useState(false);
    const { Header, Title, Body, Footer } = Modal;
    const { columns, onColumnToggle, toggles } = props;

    const toggle = () => {
        setOpen(open ? false: true);
    }

    return (
        <Fragment>
            <Button variant="default" onClick={toggle}>Customize</Button>
            <Modal
                size="md"
                show={open}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Header>
                    <Title id="contained-modal-title-vcenter">
                        Columns
                    </Title>
                </Header>
                <Body as={Row}>

                    {columns.map(column => {
                        return (
                            <Col md={6} key={column.dataField}>
                                <Item
                                    column={column}
                                    checked={toggles[column.dataField]}
                                    onColumnToggle={onColumnToggle}
                                />
                            </Col>
                        )
                    })}

                </Body>
                <Footer>
                    <Button onClick={toggle}>Close</Button>
                </Footer>
            </Modal>
        </Fragment>
    );
}

export default ColumnsToggler;
