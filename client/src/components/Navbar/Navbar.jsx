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
import "./Navbar.css";
import $ from 'jquery';

class Navbar extends React.Component {

  constructor(props) {
    super(props)

    this.state = {}
 this.scrollMe = this.scrollMe.bind(this);
  }

  scrollMe() {
    $(window).scroll(function() {
      var sc = $(window).scrollTop()
      if (sc > 50) {
        $("#header-sroll").addClass("small")
      } else {
        $("#header-sroll").removeClass("small")
      }
    });
  }

  render(props) {
    return (<div onScroll={this.scrollMe}>
      <div id="header">
        <div id="header-sroll">
          <h1>

            Code Wars

            <Link align="right" className="mastb" to="/friends">
              <span className="showme">Friends</span>
            </Link>
            <Link align="right" className="mastb" to="/history">
              <span className="showme">Histories</span>
            </Link>

            <Link align="right" className="mastb" to="/messages">
              <span className="showme">Messages</span>
            </Link>
          </h1>

        </div>
      </div>
    </div>)

      }


    }


export default Navbar;
