import axios from "axios";
import { Spin, List, Button, Select } from "antd";
import React, { Component, Fragment } from "react";
import { Resource } from "../../components";
import res from "../../res";
import "./style.css";

const INIT_STATE = {
  resources: null,
  auth: null
};

export default class CreateResourceContainer extends Component {
  state = INIT_STATE;

  async componentDidMount() {
    const response = await axios.get(`${res.api}/all`);
    this.setState({
      ...this.state,
      resources: response.data,
      auth: localStorage.getItem(res.auth)
        ? localStorage.getItem(res.auth)
        : "false"
    });
  }

  render() {
    return (
      <Fragment>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <div>
            <span>Filter By Resource: </span>
            <Select
              defaultValue="all"
              style={{ width: 120 }}
              onChange={async value => {
                if (value !== "all") {
                  this.setState({
                    ...this.state,
                    resources: null
                  });
                  const response = await axios.get(
                    `${res.api}/filtertype/${value}`
                  );
                  this.setState({
                    ...this.state,
                    resources: response.data
                  });
                } else {
                  const response = await axios.get(`${res.api}/all`);
                  this.setState({
                    ...this.state,
                    resources: response.data
                  });
                }
              }}
            >
              <Select.Option value="all">All</Select.Option>
              <Select.Option value="healthcare">Healthcare</Select.Option>
              <Select.Option value="medical">Medical</Select.Option>
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="clothing">Clothing</Select.Option>
              <Select.Option value="shelter">Shelter</Select.Option>
              <Select.Option value="education">Education</Select.Option>
            </Select>
          </div>
          {this.state.auth === "true" && (
            <Button
              onClick={() => {
                window.location = "/create";
              }}
            >
              Create Resource
            </Button>
          )}
        </div>
        {this.state.resources === null && (
          <div className="loading">
            <Spin />
          </div>
        )}
        {this.state.resources !== null && (
          <div
            style={{
              marginTop: "20px"
            }}
          >
            <List
              itemLayout="vertical"
              size="large"
              dataSource={this.state.resources}
              renderItem={(resource, key) => (
                <Resource key={key} {...resource} />
              )}
            />
          </div>
        )}
      </Fragment>
    );
  }
}
