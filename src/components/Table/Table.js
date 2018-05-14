import React, { Component } from 'react'
import './Table.css';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap3/dist/css/bootstrap-theme.min.css';
import 'bootstrap3/dist/css/bootstrap.min.css'


const data = [
    {id: 1, price: 10, size: 10, total: 5},
    {id: 2, price: 10, size: 10, total: 5}
]

export default class Table extends Component {
  render() {
    return (
        <div style={{width: `600px`}}><BootstrapTable keyField='id' data={ this.props.data } noDataIndication="There are no Stocks." columns={ this.props.tableHeader } striped hover /></div>
    )
  }
}
