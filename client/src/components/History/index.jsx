import React, { Component } from 'react';
import axios from 'axios';

import { HistoryList } from './HistoryList.jsx';
import Navbar from '../Navbar/Navbar.jsx';

import Friends from '../Friends/index.jsx'
class History extends Component {
  constructor(props){
    super(props)
    this.state = {
      friends: [],
      history: []
    }
  }

  componentDidMount= async () => {
    const id = localStorage.getItem('id');
    const { data } =  await axios.get(`http://localhost:3396/api/history/fetchAllHistory/${id}`);
    this.setState({ history: data });
    const allFriends = await axios.get(`http://localhost:3396/api/friends/fetchAllFriends/${localStorage.getItem('id')}/`);
    this.setState({friends: allFriends.data})
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        <Navbar/>
              <h1>WE GOT DA HISTORIES BOYEEE</h1>
        <HistoryList friends={this.state.friends} history={this.state.history}/>
      </div>
    );
  }
}

export default History;
