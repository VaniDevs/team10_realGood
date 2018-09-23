import { Layout, Input, Button } from "antd";
import React, { Component } from "react";
import { Header, Footer } from "../components";
import res from "../res";

export default class Logout extends Component {
  render() {
    return (
      <Layout
        style={{
          minHeight: "100vh"
        }}
      >
        <Header />
        <Layout.Content
          style={{
            padding: "0 5vw"
          }}
        >
          <Input placeholder="User Name" />
          <Input placeholder="Password" />
          <Button
            onClick={() => {
              localStorage.setItem(res.auth, "true");
              window.location = "/";
            }}
          >
            Log In
          </Button>
        </Layout.Content>
        <Footer />
      </Layout>
    );
  }
}
