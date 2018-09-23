import React, { Component } from "react";
import { CreateResourceContainer } from "../containers";
import { Layout } from "antd";
import { Footer, Header } from "../components";

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
            <CreateResourceContainer />
          </div>
        </Layout.Content>
        <Footer />
      </Layout>
    );
  }
}
