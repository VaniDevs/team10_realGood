import axios from "axios";
import { Spin, List, Button, Select } from "antd";
import React, { Component, Fragment } from "react";
import { Resource } from "../../components";
import res from "../../res";
import "./style.css";

const INIT_STATE = {
  resources: null
};

export default class CreateResourceContainer extends Component {
  state = INIT_STATE;

  async componentDidMount() {
    const response = await axios.get(`${res.api}/all`);
    this.setState({
      ...this.state,
      resources: response.data
    });
  }

  render() {
    return (
      <Fragment>
        {this.state.resources === null && (
          <div className="loading">
            <Spin />
          </div>
        )}
        {this.state.resources !== null && (
          <div>
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
                  style={{ width: 120 }}
                  onChange={async value => {
                    const response = await axios.get(`${res.api}/${value}`);
                    this.setState({
                      ...this.state,
                      resources: response.data
                    });
                  }}
                >
                  <Select.Option value="healthcare">Healthcare</Select.Option>
                  <Select.Option value="medical">Medical</Select.Option>
                  <Select.Option value="food">Food</Select.Option>
                  <Select.Option value="clothing">Clothing</Select.Option>
                  <Select.Option value="shelter">Shelter</Select.Option>
                  <Select.Option value="education">Education</Select.Option>
                </Select>
              </div>
              {localStorage.getItem(res.auth) === "true" && (
                <Button
                  onClick={() => {
                    window.location = "/create";
                  }}
                >
                  Create Resource
                </Button>
              )}
            </div>
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
          </div>
        )}
      </Fragment>
    );
  }
}
