import React, { Component } from "react";
import CodeMirror from "react-codemirror2";
import io from "socket.io-client/dist/socket.io.js";
import axios from "axios";
import { throttle } from "lodash";

import Stdout from "./StdOut/index.jsx";
import EditorHeader from "./EditorHeader";
import Button from "../globals/Button";

import "codemirror/mode/javascript/javascript.js";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/base16-dark.css";
import "./Sling.css";
import { animateDiv } from './fun/head.js';
import $ from 'jquery'

//set the test === ownerText
//if results of the test === the results of the ownerText, make it solved
class Sling extends Component {
  constructor() {
    super();
    this.state = {
      id: null,
      ownerText: null,
      challengerText: null,
      text: "",
      challenge: "",
      stdout: "",
      test: "",
      messages: [],
      users: {},
      head: null,
      image_url: null
      
    };
  }

<<<<<<< HEAD
<<<<<<< HEAD
  async componentDidMount() {

    this.invokeJohnny()
=======
  componentDidMount = async () => {
    var {data} = await axios.get('http://localhost:3396/api/users/fetchAllUsers');
    var userList = {};
    data.rows.forEach((user, i) => {
      userList[user.id] = user.username;
    })
    this.setState({users: userList})

>>>>>>> dat logo
=======
  componentDidMount () {
    const test = axios.get()
>>>>>>> dat logo
    const { socket, challenge } = this.props;
    const startChall =
      typeof challenge === "string" ? JSON.parse(challenge) : {};
    socket.on("connect", () => {
      socket.emit("client.ready", startChall);
   
    });

<<<<<<< HEAD
    socket.on("server.initialState", ({ id, text, challenge, test }) => {
=======
    socket.on('server.initialState', ({ id, text, challenge, test }) => {
>>>>>>> dat logo
      this.setState({
        id,
        ownerText: text,
        challengerText: text,
        challenge,
        test
      });
    });

    socket.on("server.changed", ({ text, email }) => {
      if (localStorage.getItem("email") === email) {
        this.setState({ ownerText: text });
      } else {
        this.setState({ challengerText: text });
      }
    });

<<<<<<< HEAD
    socket.on("server.run", ({ stdout, email }) => {
      const ownerEmail = localStorage.getItem("email");
=======
    socket.on('server.run', ({ stdout, email }) => {
      const ownerEmail = localStorage.getItem('email');
>>>>>>> dat logo
      email === ownerEmail ? this.setState({ stdout }) : null;
    });

    socket.on("server.message", (data) => {
      this.setState({ messages: [...this.state.messages, data[0]]});
    });

    window.addEventListener("resize", this.setEditorSize);

    
  }

<<<<<<< HEAD
<<<<<<< HEAD
  async invokeJohnny(){
    var {data} = await axios.get('http://localhost:3396/api/users/fetchAllUsers');
    var userList = {};
    data.rows.forEach((user, i) => {
      userList[user.id] = user.username;
    })
    this.setState({users: userList})
  }

=======
>>>>>>> dat logo
=======
>>>>>>> dat logo
  submitCode = () => {
    const { socket } = this.props;
    const { ownerText } = this.state;
    const email = localStorage.getItem('email');
    socket.emit('client.run', { text: ownerText, email });

  }

  handleChange = throttle((editor, metadata, value) => {
    const email = localStorage.getItem("email");
    this.props.socket.emit("client.update", { text: value, email });
  }, 250);

  setEditorSize = throttle(() => {
    this.editor.setSize(null, `${window.innerHeight - 80}px`);
  }, 100);

  initializeEditor = editor => {
    this.editor = editor;
    this.setEditorSize();
  };

  sendMessage =  () => {
    // const { socket } = this.props;
    
    var msg =  document.getElementById("message").value;
    if (msg) {
      this.props.socket.emit("client.message", { 
        sender_id: localStorage.getItem('id'),
        receiver_id: localStorage.getItem('id'),
        content: msg,
        
        
      });
      
    }
    (this.state.head === 'a')? this.state.image_url = 'https://i.imgur.com/NbIPnNl.png': null
    
  };


  

  render() {
    const { socket } = this.props;
    return (
<<<<<<< HEAD
<<<<<<< HEAD
 
=======
>>>>>>> dat logo
      <div className="sling-container">
      {console.log(this.state)}
        {animateDiv()}
      {this.state.messages.forEach(item=>{
        (item.content === 'james') ? this.state.head = 'a' :null
      })}

    

      
      
      
=======
      <div className="sling-container">
>>>>>>> dat logo
        <EditorHeader />
        <div className="code1-editor-container">
          <CodeMirror
            editorDidMount={this.initializeEditor}
            value={this.state.ownerText}
            options={{
              mode: "javascript",
              lineNumbers: true,
              theme: "base16-dark"
            }}
            onChange={this.handleChange}
          />
        </div>
        <div className="stdout-container">
          {this.state.challenge.title || this.props.challenge.title}
          <br />
          {this.state.challenge.content || this.props.challenge.content}
          <Stdout text={this.state.stdout} />
          <Button
            className="run-btn"
            text="Run Code"
            backgroundColor="red"
            color="white"
            onClick={() => this.submitCode()}
          />
          <div className="message-container">
            {this.state.messages.map( (msg, i) => {
              return <p key={i}>{`${this.state.users[msg.sender_id]} : ${msg.content}`}</p>;
            })}
            <input type="text" id="message" placeholder = 'Talk smack on your opponent'/>
    
            <button type="button" name="button" onClick={this.sendMessage} >
              Send
            </button>
            <div>
            <iframe
        src="https://tokbox.com/embed/embed/ot-embed.js?embedId=2fc8bd7f-0f5b-495e-bf9a-b85a9507407a&room=DEFAULT_ROOM&iframe=true"
        width={435}
        height={400}
        allow="microphone; camera"
      ></iframe>
      </div>
            
          </div>

        </div>
        
    
    

 
    
        
        <div className="code2-editor-container">
          <CodeMirror
            editorDidMount={this.initializeEditor}
            value={this.state.challengerText}
            options={{
              mode: "javascript",
              lineNumbers: true,
              theme: "base16-dark",
              readOnly: true
            }}
          />
        </div>
        <div  className = {this.state.head}> <img src = {this.state.image_url} /></div>
      </div>
      
    );
  }
}

export default Sling;
