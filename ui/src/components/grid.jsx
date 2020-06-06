import React, { Fragment } from 'react';
import ColumnsToggler from "./columns-toggler";
import SearchBar from "./search-bar";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import NoDataIndication from "./no-data-indicaton";

const Grid = props => {
    return (
        <Fragment>
            <SearchBar { ...props.searchProps } />
            <ColumnsToggler { ...props.columnToggleProps } />
            <BootstrapTable
                { ...props.baseProps }
                pagination={ paginationFactory() }
                noDataIndication={ () => <NoDataIndication /> }
                rowEvents={props.rowEvents || {}}
            />
        </Fragment>
    )
}

export default Grid;