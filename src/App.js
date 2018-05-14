import React, { Component } from 'react';
import './App.css';
import Orderbook from './components/Orderbook'
import _ from 'lodash'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      buyData: [],
      sellData: []
    }
  }

  componentDidMount = () => {
    this.connection = new WebSocket('ws://localhost:7979');
    this.connection.onmessage = evt => { 
        let serverData = JSON.parse(evt.data)
        this.setState({
          buyData : _.filter(serverData, {type: `bid`}),
          sellData: _.filter(serverData, {type: `ask`})
      })
    };
  }

  render() {
    return (
      <div className="App">
        <Orderbook buyData={this.state.buyData} sellData={this.state.sellData}/>
      </div>
    );
  }
} 

export default App;
