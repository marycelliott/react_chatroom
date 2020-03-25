import React from "react";

const Alert = ({ setHandle, onJoin }) => {
  return (
    <div class="alert alert-info text-center container mt-4" role="alert">
      <h3>Group Chat</h3>
      <p>Welcome! Pick a handle before joining the group!</p>
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control w-50"
          onChange={e => setHandle(e.target.value)}
        />
        <div class="input-group-append">
          <button
            onClick={onJoin}
            class="btn btn-light btn-outline-secondary"
            type="button"
          >
            Join
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
