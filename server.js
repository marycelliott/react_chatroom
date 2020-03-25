const express = require("express");
const app = express();

const server = app.listen(8000);

const io = require("socket.io")(server);

io.on("connection", socket => {
  socket.emit("welcome", {
    handle: "Server",
    msg: "Thanks for joining us! What's your handle?"
  });
  socket.on("handle_input", handle => {
    console.log(handle);
    io.emit("new_user", {
      handle: "Server",
      msg: `${handle} has joined the chat!`
    });
  });
  socket.on("client_msg_sent", data => {
    console.log(data);
    io.emit("msg_received", data);
  });
});
