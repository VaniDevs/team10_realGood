import { Avatar, Dropdown, Icon, Menu } from "antd";
import React, { Component } from "react";

export default class Persona extends Component {
  render() {
    return (
      <Dropdown
        overlay={
          <Menu
            style={{
              width: 200
            }}
            onClick={() => {
              window.location = "/logout";
            }}
          >
            <Menu.Item>
              <Icon
                type="logout"
                style={{
                  marginRight: "8px"
                }}
              />
              Log Out
            </Menu.Item>
          </Menu>
        }
        placement="bottomLeft"
        trigger={["click"]}
      >
        <Avatar
          style={{
            backgroundColor: "#71afe5",
            display: "inline-block",
            verticalAlign: "middle"
          }}
          size="large"
        >
          <Icon type="user" theme="outlined" />
        </Avatar>
      </Dropdown>
    );
  }
}
