import React, { useState, useEffect } from "react";
import { Router, navigate } from "@reach/router";
import Alert from "./components/Alert";
import Chatroom from "./components/Chatroom";
import logo from "./logo.svg";
import io from "socket.io-client";
import "./App.css";

function App() {
  const [socket] = useState(() => io(":8000"));
  const [handle, setHandle] = useState("");
  const [messages, setMessage] = useState([]);

  useEffect(() => {
    socket.on("welcome", data => {
      console.log(data.msg);
    });
    socket.on("new_user", data => {
      setMessage(prevMsgs => [data, ...prevMsgs]);
    });
    socket.on("msg_received", data => {
      console.log(data);
      setMessage(prevMsgs => [data, ...prevMsgs]);
    });
  }, []);

  const onJoin = () => {
    socket.emit("handle_input", handle);
    navigate("/chatroom");
  };
  const onClick = (e, msg) => {
    socket.emit("client_msg_sent", msg);
  };
  return (
    <div className="App">
      <Router>
        <Alert setHandle={setHandle} onJoin={onJoin} path="/" />
        <Chatroom
          messages={messages}
          handle={handle}
          onClick={onClick}
          path="/chatroom"
        />
      </Router>
    </div>
  );
}

export default App;
