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

import Navbar from '../Navbar/Navbar.jsx';

class Messages extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}

  }

  render(props) {
    return (<div id="messages">
      <Navbar/>
      <h1>WE GOT DA MESSAGES BOYEEE</h1>
    </div>)

  }

}

export default Messages;
