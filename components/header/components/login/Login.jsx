import { Button, Icon } from "antd";
import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <Button
        onClick={() => {
          window.location = "/login";
        }}
        icon="login"
      >
        Login
      </Button>
    );
  }
}
