import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Link,
  IndexRoute,
  BrowserRouter,
  withRouter
} from "react-router-dom";

import axios from 'axios';
import Navbar from "../Navbar/Navbar.jsx";

class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      friends: []
    }
  }

  componentDidMount = async () => {
    const id = localStorage.getItem("id");
    const { data } = await axios.get(
      `http://localhost:3396/api/messages/${id}`
    );
    this.setState({ messages: data });
    const allFriends = await axios.get(
      `http://localhost:3396/api/friends/fetchAllFriends/${localStorage.getItem(
        "id"
      )}/`
    );
    this.setState({ friends: allFriends.data });
    console.log('mesages here ', data)
  };

  render(props) {
    return (
      <div id="messages">
        <Navbar />
        <h1>Messages List</h1>
        <ul>
        {this.state.messages.map( (msg, i) => {
          //will fix this later on if necessary. shows only msgs user sent
          return <li key={i}>{`${msg.sender_id} : ${msg.content}`}</li>
        })}

        </ul>
      </div>
    );
  }
}

export default Messages;
