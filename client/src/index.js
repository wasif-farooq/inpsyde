import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import UserPage from './pages/users'

const Root = () => {
    return (
        <UserPage />
    )
};

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Root />, wrapper): false;
module.hot.accept();
