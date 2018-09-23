import React, { Component } from "react";
import { Form, Input, Button, Select, DatePicker } from "antd";

class CreateResource extends Component {
  onSubmit = event => {
    event.preventDefault();
    this.props.form.validateFields(err => {
      if (!err) {
        if (typeof this.props.onSubmit === "function") {
          this.props.onSubmit();
        }
      }
    });
  };

  render() {
    return (
      <Form layout="vertical" onSubmit={this.onSubmit}>
        <Form.Item label="Name">
          {this.props.form.getFieldDecorator("name", {
            rules: [{ required: true, message: "Name is required!" }]
          })(<Input placeholder={"Name"} />)}
        </Form.Item>
        <Form.Item label="Description">
          {this.props.form.getFieldDecorator("description", {
            rules: [{ required: true, message: "Description is required!" }]
          })(<Input.TextArea rows={5} />)}
        </Form.Item>
        <Form.Item label="Type">
          {this.props.form.getFieldDecorator("type", {
            rules: [{ required: true, message: "Type is required!" }]
          })(
            <Select>
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="medical">Medical</Select.Option>
              <Select.Option value="education">Education</Select.Option>
              <Select.Option value="healthcare">Healthcare</Select.Option>
              <Select.Option value="clothing">Clothing</Select.Option>
              <Select.Option value="shelter">Shelter</Select.Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Start & End Date">
          {this.props.form.getFieldDecorator("date", {
            rules: [
              {
                type: "array",
                required: true,
                message: "Start & end time is required!"
              }
            ]
          })(<DatePicker.RangePicker />)}
        </Form.Item>
        <Form.Item label="Location">
          {this.props.form.getFieldDecorator("location", {
            rules: [{ required: true, message: "Location is required!" }]
          })(<Input placeholder={"Location"} />)}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              marginTop: "24px"
            }}
          >
            Create
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Form.create({
  onFieldsChange(props, changedFields) {
    props.onChange(changedFields);
  },
  mapPropsToFields(props) {
    return {
      name: Form.createFormField({
        ...props.name,
        value: props.name.value
      }),
      description: Form.createFormField({
        ...props.description,
        value: props.description.value
      }),
      type: Form.createFormField({
        ...props.type,
        value: props.type.value
      }),
      date: Form.createFormField({
        ...props.date,
        value: props.date.value
      }),
      location: Form.createFormField({
        ...props.location,
        value: props.location.value
      })
    };
  }
})(CreateResource);
