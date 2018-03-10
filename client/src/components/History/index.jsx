import React, { Component } from "react";
import axios from "axios";

import { HistoryList } from "./HistoryList.jsx";
import Navbar from "../Navbar/Navbar.jsx";

import Friends from "../Friends/index.jsx";

const REST_SERVER_URL = process.env.REST_SERVER_URL;
class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      history: []
    };
  }

  componentDidMount = async () => {
    const id = localStorage.getItem("id");
    const { data } = await axios.get(
      `${REST_SERVER_URL}/api/history/fetchAllHistory/${id}`
    );
    this.setState({ history: data });
    const allFriends = await axios.get(
      `${REST_SERVER_URL}/api/friends/fetchAllFriends/${localStorage.getItem(
        "id"
      )}/`
    );
    this.setState({ friends: allFriends.data });
  };

  render() {
    return (
      <div>
        {console.log(this.state)}
        <Navbar />
        <h1>Challenge History</h1>
        <HistoryList
          friends={this.state.friends}
          history={this.state.history}
        />
      </div>
    );
  }
}

export default History;
