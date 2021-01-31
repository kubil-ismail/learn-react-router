import React from "react";

// Use Redux
import { connect } from "react-redux";

function handleLogin() {
  return {
    type: "SET_LOGIN"
  };
}

function Login(props) {
  return (
    <div>
      <h1>Login Login</h1>
      <button
        onClick={() => {
          props.handleLogin();
          props.history.push('/logout')
        }}
      >
        Click me for login
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { handleLogin };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
