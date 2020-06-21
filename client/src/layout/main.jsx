import React from 'react';
import { Layout, Menu } from 'antd';
const { Header, Footer } = Layout;

const Main = ({ children }) => {
    return (
        <Layout className="layout">
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                </Menu>
            </Header>
            {children}
        </Layout>
    )
}

export default Main;