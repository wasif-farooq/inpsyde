import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    Form,
    Row,
    Col,
    Card
} from 'react-bootstrap';
import { useSelector } from "react-redux";
import actions from '../../actions';

const UsersDetail = props => {

    const user = useSelector(state => state.users.ById[props.match.params.id])
    const {
        Group,
        Control,
        Label
    } = Form;

    const { Header } = Card;

    useEffect(() => {
        actions.user.get.start.dispatch(props.match.params.id)
    }, [props.match.params.id])

    if (!user || Object.keys(user).length <= 0) {
        return null;
    }


    return (
        <Fragment>
            <Card as={Row}>
                <Header>Personal Information</Header>
                <Row>
                    <Group as={Col} md={3}>
                        <Label>Name : </Label>
                        <Control value={user.name} disabled />
                    </Group>

                    <Group as={Col} md={3}>
                        <Label>Username : </Label>
                        <Control value={user.username} disabled />
                    </Group>

                    <Group as={Col} md={3}>
                        <Label>Email : </Label>
                        <Control value={user.email} disabled />
                    </Group>

                    <Group as={Col} md={3}>
                        <Label>Phone : </Label>
                        <Control value={user.phone} disabled />
                    </Group>

                    <Group as={Col} md={3}>
                        <Label>Website : </Label>
                        <Control value={user.website} disabled />
                    </Group>
                </Row>
            </Card>
            <Card>
                <Header>Address Information</Header>
                <Row>
                    <Group as={Col} md={3}>
                        <Label>City : </Label>
                        <Control value={user.address.city} disabled />
                    </Group>
                    <Group as={Col} md={3}>
                        <Label>Zipcode : </Label>
                        <Control value={user.address.zipcode} disabled />
                    </Group>
                    <Group as={Col} md={3}>
                        <Label>Street : </Label>
                        <Control value={user.address.street} disabled />
                    </Group>
                    <Group as={Col} md={3}>
                        <Label>Suite : </Label>
                        <Control value={user.address.suite} disabled />
                    </Group>
                    <Group as={Col} md={3}>
                        <Label>LAtitude : </Label>
                        <Control value={user.address.geo.lat} disabled />
                    </Group>
                    <Group as={Col} md={3}>
                        <Label>Longitude : </Label>
                        <Control value={user.address.geo.lng} disabled />
                    </Group>
                </Row>
            </Card>
            <Card>
                <Header>Company Information</Header>
                <Row>
                    <Group as={Col} md={3}>
                        <Label>Name : </Label>
                        <Control value={user.company.name} disabled />
                    </Group>
                    <Group as={Col} md={3}>
                        <Label>Catch Phrase : </Label>
                        <Control value={user.company.catchPhrase} disabled />
                    </Group>
                    <Group as={Col} md={3}>
                        <Label>BS : </Label>
                        <Control value={user.company.bs} disabled />
                    </Group>
                </Row>
            </Card>
        </Fragment>
    )
}

UsersDetail.displayName = 'UsersDetail';
export default withRouter(UsersDetail);
