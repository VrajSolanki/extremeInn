import React, { Component } from 'react'
import './Orderbook.css';
import Table from '../Table'
import _ from 'lodash'

const buyTableHeader = [
  {
      dataField: 'id',
      text: 'Product ID'
  }, 
  {
      dataField: 'price',
      text: 'Price',
      classes: (cell, row, rowIndex, colIndex) => {
          return 'buyColumnColor';
        }
  }, 
  {
      dataField: 'total',
      text: 'Total',
      classes: (cell, row, rowIndex, colIndex) => {
        return 'buyTotalColor';
      }
  }
];

const sellTableHeader = [
  {
      dataField: 'id',
      text: 'Product ID'
  }, 
  {
      dataField: 'price',
      text: 'Price',
      classes: (cell, row, rowIndex, colIndex) => {
          return 'sellColumnColor';
        }
  }, 
  {
      dataField: 'total',
      text: 'Total',
      classes: (cell, row, rowIndex, colIndex) => {
        return 'sellTotalColor';
      }
  }
];

export default class Orderbook extends Component {
  render() {
    let sellArray = this.props.sellData;
    let sellArrayLength = sellArray.length;
    let sellCurrentValue = sellArray[sellArrayLength-1];
    let priceSell = _.get(sellCurrentValue, `price`,`0.0`)

    let buyArray = this.props.buyData;
    let buyArrayLength = buyArray.length;
    let buyCurrentValue = buyArray[buyArrayLength-1];
    let priceBuy = _.get(buyCurrentValue, `price`,`0.0`)
 
    return (
      <div className='container'>
        <div className='header'>
          <div>{`Orderbook (XBTUSD)`}</div>
          <div className='icons'>
            <img src="https://cdn1.iconfinder.com/data/icons/flat-web-browser/100/settings-512.png" height="20" width="20" style={{marginLeft:`12px`}}></img>
            <img src="https://image.flaticon.com/icons/svg/53/53804.svg" height="12" width="12" style={{marginLeft:`12px`}}></img>
          </div>
        </div>
        <Table data={this.props.buyData} tableHeader={buyTableHeader}/>
      
        <div className={`cumulative`}>
          <div className={`value`}>{`${priceSell} `}&#9660;</div>
          <div className={`currentState`}>{`${priceSell} / ${priceBuy}`}</div>
        </div>

        <Table data={this.props.sellData} tableHeader={sellTableHeader}/>
      </div>
    )
  }
}
