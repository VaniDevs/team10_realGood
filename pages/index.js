import React, { Component } from "react";
import { DisplayResourcesContainer } from "../containers";
import { Header, Footer } from "../components";
import { Layout } from "antd";

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
            padding: "0 15vw"
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "10vh 5vw"
            }}
          >
            <DisplayResourcesContainer />
          </div>
        </Layout.Content>
        <Footer />
      </Layout>
    );
  }
}
