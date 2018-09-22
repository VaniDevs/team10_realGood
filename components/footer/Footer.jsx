import { Layout } from "antd";
import React, { Component } from "react";
import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <Layout.Footer className="footer">
        <div>© 2018 weekendfuelbag</div>
        <div>
          <a href="weekendfuelbag@shaw.ca">Contact Us</a>
        </div>
      </Layout.Footer>
    );
  }
}
