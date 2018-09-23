import axios from "axios";
import { Spin } from "antd";
import React, { Component, Fragment } from "react";
import res from "../../res";

const INIT_STATE = null;

const string2date = input => {
  const date = new Date(input);
  return (
    date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()
  );
};

export default class CreateResourceContainer extends Component {
  state = INIT_STATE;

  async componentDidMount() {
    const response = await axios.get(`${res.api}/${this.props.id}`);
    this.setState(response.data);
  }

  render() {
    return (
      <Fragment>
        {this.state === null && (
          <div className="loading">
            <Spin />
          </div>
        )}
        {this.state !== null && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <div>
              <h1>{this.state.name}</h1>
              <p>
                <h3>{this.state.location}</h3>
                <br />
                From <b>{string2date(this.state.date.start)}</b> To{" "}
                <b>{string2date(this.state.date.end)}</b>
              </p>
              <br />
              <p>{this.state.description}</p>
            </div>
            {/* <img
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              style={{
                maxWidth: "100%",
                maxHeight: "100%"
              }}
            /> */}
          </div>
        )}
      </Fragment>
    );
  }
}
