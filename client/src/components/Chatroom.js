import React from "react";

const Chatroom = ({ messages, handle, onClick }) => {
  return (
    <div className="container rounded bg-secondary p-3 mt-4">
      <div style={{ height: "600px", overflow: "auto" }}>
        {messages.map(msg =>
          msg.handle != handle ? (
            <p className="bg-primary text-white w-50 rounded p-3">
              <b>{msg.handle}</b> : {msg.msg}
            </p>
          ) : (
            <p className="bg-info text-white w-50 rounded p-3">
              <b>{msg.handle}</b> : {msg.msg}
            </p>
          )
        )}
      </div>
      <div class="input-group mb-3">
        <input id="input" type="text" class="form-control w-50" />
        <div class="input-group-append">
          <button
            onClick={e =>
              onClick(e, {
                handle: handle,
                msg: document.getElementById("input").value
              })
            }
            class="btn btn-light btn-outline-secondary"
            type="button"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatroom;
