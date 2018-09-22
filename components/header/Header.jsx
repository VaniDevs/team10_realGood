import { Layout } from "antd";
import React, { Component } from "react";
import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <Layout.Header className="header">
        <img alt="logo" src="/static/img/logo.jpg" />
        <span>weekendfuelbag</span>
      </Layout.Header>
    );
  }
}
