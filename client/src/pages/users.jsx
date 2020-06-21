import React, { useState } from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
import Main from '../layout/main';
import { Button, Space } from 'antd';
import ColumnSwitcher from '../components/column-switcher';
import Grid from '../components/grid'
import useData from '../hooks/useData'
import UserDetails from '../components/user-details'

const UsersPage = () => {
    const {
        loading,
        users,
        columns,
        toggleColumn,
        onRowClick,
        current,
        clearSelection
    } = useData();
    const [visible, setVisible] = useState(false)

    const toggle = () => {
        setVisible(!visible);
    }

console.log("users : ", users)
    return (
        <Main>
            <Content className="site-layout" style={{ padding: '0 50px' }}>
                <Space  className="site-layout-background" style={{ padding: 24 }}>
                    Users
                    <Button onClick={toggle}>Customize</Button>
                </Space>
                <Grid
                    onRowClick={onRowClick}
                    loading={loading}
                    columns={columns}
                    data={users}
                />

            </Content>
            <ColumnSwitcher
                columns={columns}
                visible={visible}
                onToggle={toggleColumn}
                onClose={toggle}
            />
            {current && <UserDetails current={current} onClose={clearSelection} />}
        </Main>
    )
}

export default UsersPage