import { Avatar, Dropdown, Icon, Menu } from "antd";
import React, { Component } from "react";
import res from "../../../../res";
import "./style.css";

export default class Persona extends Component {
  render() {
    return (
      <span className="avatar-dropdown">
        <Dropdown
          overlay={
            <Menu
              style={{
                width: 200
              }}
              onClick={() => {
                localStorage.setItem(res.auth, "false");
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
            icon="user"
          />
        </Dropdown>
      </span>
    );
  }
}
