import React from 'react'
import { Table, Input, Space, Button, Switch, Radio, Form } from 'antd';
import { DownOutlined, SearchOutlined } from '@ant-design/icons';
import Filter from './filter'

const Grid = ({ loading, columns, data, onRowClick }) => {

    const getColumnSearchProps = dataIndex => ({
        filterDropdown: Filter,
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) => record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        sorter: (a, b) => a[dataIndex] - b[dataIndex],
        render: (text, record, index) => {
            if (['id', 'name', 'username'].indexOf(dataIndex) > -1) {
                return <Button type="link" onClick={onRowClick(record)}>{text}</Button>
            }
            return text
        }
    })


    const pagination = { position: 'bottom' };

    const state = {
        bordered: false,
        pagination: true,
        size: 'default',
        expandable: false,
        title: '',
        showHeader: true,
        footer: false,
        rowSelection: false,
        scroll: {
            x: '100vw',
            y: '450px'
        },
        hasData: true,
        tableLayout: undefined,
        top: 'none',
        bottom: 'bottomRight',
    };

    const columnsWithFiters = columns
        .map(column => ({...column, ...getColumnSearchProps(column.dataIndex)}))
        .filter(column => column.visible)

    state.scroll.x = columnsWithFiters.length * 20 + 'vw'

    console.log("loading : ", loading)
    return (
        <Table
            {...state}
            loading={loading}
            columns={columnsWithFiters}
            dataSource={data.length > 0 ? data: null}
        />
    );
}

export default Grid