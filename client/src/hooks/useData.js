import React, { useState, useEffect, useReducer } from 'react';
import reducer from "../state";
import flatten from "flat";
import {
    SET_USERS,
    TOGGLE_COLUMN,
    SHOW_LOADING,
    HIDE_LOADING,
    SET_CURRENT_USER_ID,
    SET_USER
} from "../contants";

const useData = (props) => {

    const init = {
        loading: true,
        current: null,
        columns: {
            id: {
                title: 'ID',
                dataIndex: 'id',
                type: 'string',
                visible: true
            },
            name: {
                title: 'Name',
                dataIndex: 'name',
                type: 'string',
                visible: true
            },
            username: {
                title: 'User Name',
                dataIndex: 'username',
                type: 'string',
                visible: true
            },
            email: {
                title: 'Email',
                dataIndex: 'email',
                type: 'string',
                visible: true
            },
            'address.street': {
                title: 'Street',
                dataIndex: 'address.street',
                type: 'string',
                visible: false
            },
            'address.suite': {
                title: 'Suite',
                dataIndex: 'address.suite',
                type: 'string',
                visible: false
            },
            'address.city': {
                title: 'City',
                dataIndex: 'address.city',
                type: 'string',
                visible: false
            },
            'address.zipcode': {
                title: 'Zip Code',
                dataIndex: 'address.zipcode',
                type: 'string',
                visible: false
            },
            'phone': {
                title: 'Phone',
                dataIndex: 'phone',
                type: 'string',
                visible: false
            },
            'website': {
                title: 'Website',
                dataIndex: 'website',
                type: 'string',
                visible: false
            },
            'company.name': {
                title: 'Company Name',
                dataIndex: 'company.name',
                type: 'string',
                visible: false
            },
            'company.catchPhrase': {
                title: 'Company Catch Phrase',
                dataIndex: 'company.catchPhrase',
                type: 'string',
                visible: false
            },
            'company.bs': {
                title: 'Company BS',
                dataIndex: 'company.bs',
                type: 'string',
                visible: false
            }
        },
        users: {
            list: [],
            byId: {}
        },
    }

    const [state, dispatch] = useReducer(reducer, init)

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = () => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(data => data.map(item => flatten(item)))
            .then(data => {
                dispatch({ type: SET_USERS, payload: data })
                dispatch({ type: HIDE_LOADING })
            })
            .catch(console.log)
    }

    const getUSer = id => {
        return fetch('http://jsonplaceholder.typicode.com/users/' + id)
            .then(data => data.json())

    }

    const onRowClick = record => event => {
        const { id } = record;
        if (!state.users.byId[id]) {
            return getUSer(id)
                .then(data => {
                    dispatch({ type: SET_USER, payload: data })
                    dispatch({
                        type: SET_CURRENT_USER_ID,
                        payload: data
                    })
                })
                .catch(console.log)
        }
        dispatch({
            type: SET_CURRENT_USER_ID,
            payload: state.users.byId[id]
        })
    }

    const clearSelection = () => {
        dispatch({
            type: SET_CURRENT_USER_ID,
            payload: null
        })
    }

    const toggleColumn = (column, visible) => {
        dispatch({
            type: TOGGLE_COLUMN,
            payload: {
                column,
                visible
            }
        })
    }


    return {
        loading: state.loading,
        current: state.current,
        users: state.users.list,
        user: state.users.byId,
        clearSelection,
        columns: Object.values(state.columns),
        toggleColumn,
        onRowClick
    }
}

export default useData