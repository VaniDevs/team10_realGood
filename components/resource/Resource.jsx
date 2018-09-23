import { Avatar, List, Icon } from "antd";
import React, { Component } from "react";

const string2date = input => {
  const date = new Date(input);
  return (
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
  );
};

const images = [
  "https://cdn.freebiesupply.com/logos/large/2x/ubc-logo-png-transparent.png",
  "https://salvationarmy.ca/wp-content/uploads/2017/10/cropped-site-icon-512.png",
  "https://yt3.ggpht.com/a-/AN66SAyUQZoyeyIwRjioT5JQDZIghHUnNwkCT9FZ3w=s900-mo-c-c0xffffffff-rj-k-no",
  "http://fraservalleynewsnetwork.com/wp-content/uploads/2015/05/BC-Childrens-Hospital-logo-1.jpeg",
  "https://s3-media3.fl.yelpcdn.com/bphoto/38AD4nuLdivhFXirrSRwUQ/o.jpg"
];

export default class CreateResourceContainer extends Component {
  state = {
    star: Math.floor(Math.random() * 255),
    like: Math.floor(Math.random() * 255),
    likeable: true,
    starable: true,
    image: images[Math.floor(Math.random() * images.length)]
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
        extra={<img width={200} alt="logo" src={this.state.image} />}
      >
        <List.Item.Meta
          avatar={<Avatar icon="user" />}
          title={
            <a href={`/resource?id=${this.props.id}`}>{this.props.name}</a>
          }
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
