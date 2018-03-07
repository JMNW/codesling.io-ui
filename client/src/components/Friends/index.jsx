import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Input from '../globals/forms/Input/index.js';
import Button from '../globals/Button/index.js';

import './Friend.css';

class Friends extends Component {
  state = {
    user_id: localStorage.getItem('id'),
    friend_username: '',
  }
  handleFriendUsernameInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
  submitFriendRequest = async (e) => {
    e.preventDefault();
    const { user_id, friend_username } = this.state;
    const allUsers = await axios.get('http://localhost:3396/api/users/fetchAllUsers');
    console.log('ALL USERS HERE: ', allUsers)
    let user = allUsers.data.rows.filter(user => friend_username === user.username);
    const body = {
      user_id,
      friend_id: user[0].id
    };
    const result = await axios.post('http://localhost:3396/api/friends/addFriend', body);
    this.props.history.push('/home');
  }
  fetchAllFriends  = async () => {
    const allFriends = await axios.get(`http://localhost:3396/api/friends/fetchAllFriends/${this.state.user_id}/`);
    console.log('ALL FRIENDS HERE: ', allFriends)
    
  }
  componentDidMount () {
    this.fetchAllFriends();
  }
  render () {
    return (
      <div className="friend-form-container">

        <form className="friend-form">
          <Input
            name='friend_username'
            type='friend_username'
            placeholder={'enter friend username'}
            onChange={this.handleFriendUsernameInput}
          />
          <Button
            backgroundColor="red"
            color="white"
            text="Add Friend"
            onClick={(e) => this.submitFriendRequest(e)}
            />
        </form>
      </div>
    );
  }
}

export default Friends;