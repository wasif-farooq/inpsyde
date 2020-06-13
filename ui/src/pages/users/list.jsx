import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import ToolkitProvider, { ColumnToggle, Search } from 'react-bootstrap-table2-toolkit';
import Grid from '../../components/grid';
import { useSelector } from "react-redux";
import actions from '../../actions';

const UsersList = props => {

    const users = useSelector(state => state.users.list);

    useEffect(() => {
        actions.users.list.fetch.start.dispatch();
    }, [])

    const onClick = (e, row, rowIndex) => {
        props.history.push('/' + row.id);
    }

    const columns = [{
        dataField: 'id',
        text: 'ID',
        sort: true
    }, {
        dataField: 'name',
        text: 'Name',
        sort: true
    }, {
        dataField: 'username',
        text: 'User Name',
        sort: true
    }, {
        dataField: 'email',
        text: 'Email',
        sort: true
    }, {
        dataField: 'address.street',
        text: 'Street',
        sort: true
    }, {
        dataField: 'address.suite',
        text: 'Suite',
        sort: true
    }, {
        dataField: 'address.city',
        text: 'City',
        sort: true
    }, {
        dataField: 'address.zipcode',
        text: 'Zip Code',
        sort: true
    }, {
        dataField: 'phone',
        text: 'Phone No',
        sort: true
    }, {
        dataField: 'website',
        text: 'Website',
        sort: true
    }, {
        dataField: 'company.name',
        text: 'Company name',
        sort: true
    }, {
        dataField: 'company.catchPhrase',
        text: 'Company Catch Phrase',
        sort: true
    }, {
        dataField: 'company.bs',
        text: 'BS',
        sort: true
    }];


    return (
        <Container fluid>
            
            <Row>
                <Col>
                    <h3 className="border-bottom py-2 mb-5">USERS</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ToolkitProvider
                        keyField='id'
                        data={users}
                        columns={columns}
                        columnToggle
                        search
                    >
                        {props => <Grid {...props} rowEvents={{ onClick }} />}
                    </ToolkitProvider>
                </Col>
            </Row>
        </Container>

    )
}

UsersList.displayName = 'UsersList';
export default withRouter(UsersList);
