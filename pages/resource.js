import React, { Component } from "react";
import { Layout } from "antd";
import { Footer, Header } from "../components";
import { DetailResourceContainer } from "../containers";

export default class Resource extends Component {
  static async getInitialProps({ query }) {
    return {
      id: query.id
    };
  }

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
            <DetailResourceContainer id={this.props.id} />
          </div>
        </Layout.Content>
        <Footer />
      </Layout>
    );
  }
}
