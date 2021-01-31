import React from "react";

// Use Redux
import { connect } from "react-redux";

const handleLogout = () => {
  return {
    type: "SET_LOGOUT",
  };
};

function Page(props) {
  return (
    <div>
      <h1>Logout Page</h1>
      <button
        onClick={() => {
          props.handleLogout();
          props.history.push("/login");
        }}
      >
        Click me for logout
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { handleLogout };

export default connect(mapStateToProps, mapDispatchToProps)(Page);
