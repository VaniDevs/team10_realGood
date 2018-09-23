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
        <img alt="logo" src="/static/img/logo.jpg" />
        <span>weekendfuelbag</span>
        {this.state.auth === "true" && <Avatar />}
        {this.state.auth === "false" && <Login />}
      </Layout.Header>
    );
  }
}
