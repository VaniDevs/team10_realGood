import { Layout } from "antd";
import React, { Component } from "react";
import { Avatar, Login } from "./components";
import "./style.css";
import res from "../../res";

export default class Header extends Component {
  state = {
    auth: false
  };

  componentDidMount() {
    this.setState({
      auth:
        localStorage.getItem(res.auth) !== null
          ? localStorage.getItem(res.auth)
          : "false"
    });
  }

  render() {
    return (
      <Layout.Header className="header">
        <div>
          <img alt="logo" src="/static/img/logo.jpg" />
          <span className="text">weekendfuelbag</span>
        </div>
        <div>
          {this.state.auth === "true" && <Avatar />}
          {this.state.auth === "false" && <Login />}
        </div>
      </Layout.Header>
    );
  }
}
