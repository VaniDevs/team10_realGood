import axios from "axios";
import { Spin, notification } from "antd";
import React, { Component } from "react";
import { CreateRecourse } from "../../components";
import res from "../../res";

const INIT_STATE = {
  form: {
    name: {
      value: null
    },
    description: {
      value: null
    },
    type: {
      value: null
    },
    date: {
      value: null
    },
    location: {
      value: null
    }
  },
  loading: null
};

export default class CreateResourceContainer extends Component {
  state = INIT_STATE;

  onChange = changedFields => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        ...changedFields
      }
    });
  };

  onSubmit = async () => {
    this.setState({
      ...this.state,
      loading: true
    });
    const request = await axios.post(res.api, {
      name: this.state.form.name.value,
      description: this.state.form.description.value,
      type: this.state.form.type.value,
      location: this.state.form.location.value,
      date: {
        start: this.state.form.date.value[0],
        end: this.state.form.date.value[1]
      }
    });
    this.setState({
      ...this.state,
      loading: false
    });
    if (request.status === 200) {
      notification.success({
        message: "Resource Created",
        description: "You have created a resource!"
      });
    } else {
      notification.error({
        message: "Action Failed",
        description: "Please contact us!"
      });
    }
    this.setState(INIT_STATE);
  };

  render() {
    return (
      <div>
        {!this.state.loading && (
          <CreateRecourse
            {...this.state.form}
            onChange={this.onChange}
            onSubmit={this.onSubmit}
          />
        )}
        {this.state.loading && (
          <Spin>
            <CreateRecourse
              {...this.state.form}
              onChange={this.onChange}
              onSubmit={this.onSubmit}
            />
          </Spin>
        )}
      </div>
    );
  }
}
