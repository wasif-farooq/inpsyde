import React from 'react';
import { Drawer, Switch, Space } from 'antd';

const ColumnSwitcher = ({ columns, visible, onClose, onToggle }) => {

    const onChange = dataIndex => value => {
        if (typeof onToggle === 'function') {
            console.log("calling toggle")
            onToggle(dataIndex, value)
        }
    }

    return (
        <Drawer
            title="Columns"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
        >
            <Space direction="vertical">
            {columns.map(column => {
                return (
                    <div key={column.dataIndex}>
                        <Switch
                            checked={column.visible}
                            onChange={onChange(column.dataIndex)}
                        />
                        {column.title}
                    </div>
                )
            })}
            </Space>
        </Drawer>
    )
}

export default ColumnSwitcher