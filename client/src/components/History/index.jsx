import React, { Component } from 'react';
import axios from 'axios';

import { HistoryList } from './HistoryList.jsx';
import Navbar from '../Navbar/Navbar.jsx';

class History extends Component {
  state = {
    history: []
  }

  async componentDidMount() {
    const id = localStorage.getItem('id');
    const { data } =  await axios.get(`http://localhost:3396/api/history/fetchAllHistory/${id}`);
    this.setState({ history: data });
  }

  render() {
    return (
      <div>
        <Navbar/>
              <h1>WE GOT DA HISTORIES BOYEEE</h1>
        <HistoryList history={this.state.history}/>
      </div>
    );
  }
}

export default History;
