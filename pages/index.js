import { Layout } from "antd";
import React, { Component } from "react";
import { Header, Footer } from "../components";
import { DisplayResourcesContainer } from "../containers";

export default class Index extends Component {
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
          <DisplayResourcesContainer />
        </Layout.Content>
        <Footer />
      </Layout>
    );
  }
}
