import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersList from '../pages/users/list';
import UserDetail from '../pages/users/detail';

const MainRoutes = () => {
    return (
        <Switch>
            <Route path="/" exact component={UsersList} />
            <Route path="/:id" exact component={UserDetail} />
        </Switch>
    );
};

MainRoutes.displayName = 'MainRoutes';
export default MainRoutes;
