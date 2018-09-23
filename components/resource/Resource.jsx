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
    var imgarray = [
      "https://www.logolynx.com/images/logolynx/6c/6ce8bf3f5c5b7fbbb67b51227fd3cc54.jpeg",
      "https://www.logolynx.com/images/logolynx/d4/d4e05edd2d225022bfd1f3331b532e53.png",
      "https://www.logolynx.com/images/logolynx/fa/fa924fb79d10bb32cb5d2c0db50e993c.jpeg",
      "https://www.ethiopianairlines.com/Cms_Data/Contents/EthiopianAirlines/Media/FlyEthiopian/MedicalImage/Hallelujah-General-Hospital-Logo.png",
      "https://image.freepik.com/free-vector/hospital-logo-in-green-and-blue_1043-66.jpg",
      "https://vignette.wikia.nocookie.net/clubpenguinfanon/images/3/34/001_hospital_logo.png/revision/latest?cb=20090908121630"
    ];

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
            width={200}
            alt="logo"
            // src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            src={imgarray[Math.floor(Math.random() * imgarray.length)]}
          />
        }
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
