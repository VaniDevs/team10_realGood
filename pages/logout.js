import { Layout, Modal, Button } from "antd";
import React, { Component } from "react";
import { Header, Footer } from "../components";
import res from "../res";

export default class Logout extends Component {
  componentDidMount() {
    localStorage.setItem(res.auth, "false");
  }

  render() {
    return (
      <Layout
        style={{
          minHeight: "100vh"
        }}
      >
        <Layout.Content
          style={{
            padding: "0 15vw"
          }}
        >
          <Modal
            title="Log Out"
            visible={true}
            footer={
              <Button
                onClick={() => {
                  window.location = "/";
                }}
              >
                Back to Home Page
              </Button>
            }
            closable={false}
          >
            <p>You have logged out successfully!</p>
          </Modal>
        </Layout.Content>
        <Footer />
      </Layout>
    );
  }
}
