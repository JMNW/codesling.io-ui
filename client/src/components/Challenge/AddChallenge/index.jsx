import React, { Component } from "react";
import axios from "axios";

import Input from "../../globals/forms/Input";
import Button from "../../globals/Button/";
import Logo from "../../globals/Logo";

import "./Auth.css";
//
// var inputStyle = {
//   width: '1000px',
//   height: '1000px'
// };



class AddChallenge extends Component {
  state = {
    title: "",
    content: "",
    difficulty: null,
    testContent: ""
  };</textarea>





  submitChallenge = async e => {


    e.preventDefault();
    const { title, content, difficulty, testContent } = this.state;
    const id = localStorage.getItem("id");
    const body = {
      title,
      content,
      difficulty,
      testContent,
      user_id: id,
      type: 0
    };
    // const { testContent } = this.state;

    const result = await axios.post(
      "http://localhost:3396/api/challenges",
      body
    );
    console.log(result)

    const testBody = {
      content: testContent,
      challenge_id: result.data.id,


    };

    const testResult = await axios.post(
      "http://localhost:3396/api/testCases",
      testBody
    );

    this.props.history.push("/home");

  };

  handleChallengeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleTestChallengeInput = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (

      <div align="center" className="login-form-container">

        <Logo className="landing-page-logo" />
        <form className="auth-form">
          <Input
            className="small-input"
            name="title"
            type="title"
            placeholder={"enter title"}
            onChange={this.handleChallengeInput}
          />
        <Input

             className="big-input"
            name="content"
            type="content"
            placeholder={"enter content"}
            onChange={this.handleChallengeInput}
          />
        <Input
            className="small-input"
            name="difficulty"
            type="difficulty"
            placeholder={"enter your difficulty"}
            onChange={this.handleChallengeInput}
          />
          <Button
            backgroundColor="red"
            color="white"
            text="Add Challenge"
            onClick={e => this.submitChallenge(e)}
          />
        <textarea>
               className="big-input"
            width="50"
            height="150"
            name="testContent"
            type="content"
            placeholder={"enter EXPECTED VALUE and ARGUMENTS comma delineated"}
            onChange={this.handleTestChallengeInput}
          >
{`var funcName = PUT_NAME_HERE

var expect = PUT_EXPECTED_VALUE_HERE

var args = PUT_ARGS_HERE

const assertEquals = function(callback, expected, ...args) {
	if (callback(...args) === expected) {
		 console.log('true')
	} else {
		console.log('false');
	}
};
assertEquals(funcName, expect, ...args)`}
</textarea>



        </form>
      </div>
    );
  }
}

export default AddChallenge;
