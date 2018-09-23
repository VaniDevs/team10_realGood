import { Layout } from "antd";
import { Header, Footer, LoginForm } from "../components";
import React, { Component } from "react";

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
            padding: "0 15vw"
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "10vh 5vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <LoginForm />
          </div>
        </Layout.Content>
        <Footer />
      </Layout>
    );
  }
}
