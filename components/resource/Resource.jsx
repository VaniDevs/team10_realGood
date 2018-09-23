import { Avatar, List, Icon } from "antd";
import React, { Component } from "react";

const string2date = input => {
  const date = new Date(input);
  return (
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
  );
};

export default class CreateResourceContainer extends Component {
  state = {
    star: Math.floor(Math.random() * 255),
    like: Math.floor(Math.random() * 255),
    likeable: true,
    starable: true
  };

  like = () => {
    this.setState({
      ...this.state,
      like: this.state.like + 1,
      likeable: false
    });
  };

  unlike = () => {
    this.setState({
      ...this.state,
      like: this.state.like - 1,
      likeable: true
    });
  };

  star = () => {
    this.setState({
      ...this.state,
      star: this.state.star + 1,
      starable: false
    });
  };

  unstar = () => {
    this.setState({
      ...this.state,
      star: this.state.star - 1,
      starable: true
    });
  };

  render() {
    return (
      <List.Item
        actions={[
          <span
            onClick={() => {
              if (this.state.likeable) {
                this.like();
              } else {
                this.unlike();
              }
            }}
          >
            {this.state.likeable ? (
              <Icon type="like" theme="twoTone" style={{ marginRight: 8 }} />
            ) : (
              <Icon type="dislike" theme="twoTone" style={{ marginRight: 8 }} />
            )}
            {this.state.like}
          </span>,
          <span
            onClick={() => {
              if (this.state.starable) {
                this.star();
              } else {
                this.unstar();
              }
            }}
          >
            {this.state.starable ? (
              <Icon type="smile" theme="twoTone" style={{ marginRight: 8 }} />
            ) : (
              <Icon type="frown" theme="twoTone" style={{ marginRight: 8 }} />
            )}
            {this.state.star}
          </span>
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar icon="user" />}
          title={this.props.name}
          description={`Location: ${this.props.location}`}
        />
        <p>
          From <b>{string2date(this.props.date.start)}</b> To{" "}
          <b>{string2date(this.props.date.end)}</b>
        </p>
      </List.Item>
    );
  }
}
