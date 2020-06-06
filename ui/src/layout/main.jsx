import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Container } from "react-bootstrap";
import Notification from '../../components/notification';

const Main = ({children}) => {
    return (
        <Fragment>
            <Container>
                <Notification />
                {children}
            </Container>
        </Fragment>
    )
}

Main.propTypes = {
    children: PropTypes.object
}
Main.displayName = 'Main';
export default Main;
