import React, { Component } from "react";
import axios from "axios";

import Input from "../../globals/forms/Input";
import Button from "../../globals/Button/";
import Logo from "../../globals/Logo";

import "./Auth.css";

class AddChallenge extends Component {
  state = {
    title: "",
    content: "",
    difficulty: null,
    testContent: ""
  };

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

      <div className="login-form-container">
    
        <Logo className="landing-page-logo" />
        <form className="auth-form">
          <Input
            name="title"
            type="title"
            placeholder={"enter title"}
            onChange={this.handleChallengeInput}
          />
          <Input
            name="content"
            type="content"
            placeholder={"enter content"}
            onChange={this.handleChallengeInput}
          />
          <Input
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
          <Input
            name="testContent"
            type="content"
            placeholder={"enter Test content"}
            onChange={this.handleTestChallengeInput}
          />
        </form>
      </div>
    );
  }
}

export default AddChallenge;
