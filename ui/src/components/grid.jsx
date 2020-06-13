import React, { Fragment } from 'react';
import { Row, Col } from 'react-bootstrap';
import ColumnsToggler from "./columns-toggler";
import SearchBar from "./search-bar";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import NoDataIndication from "./no-data-indicaton";

const Grid = props => {
    return (
        <Fragment>
            <Row>
                <Col>
                    <SearchBar {...props.searchProps} />
                </Col>
                <Col>
                    <ColumnsToggler {...props.columnToggleProps} />
                </Col>
            </Row>
            <BootstrapTable
                {...props.baseProps}
                className="table-striped table-dark"
                pagination={paginationFactory()}
                noDataIndication={() => <NoDataIndication />}
                rowEvents={props.rowEvents || {}}
            />
        </Fragment>
    )
}

export default Grid;