import { List } from "antd";
import React, { Component } from "react";

export default class CreateResourceContainer extends Component {
  render() {
    return (
      <List.Item>
        <List.Item.Meta
          title={<a href="https://ant.design">{this.props.name}</a>}
        />
      </List.Item>
    );
  }
}
