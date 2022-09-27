import {Button, Form, Input, Space} from "antd";
import React from "react";
import axios from "axios";



interface PostSessionRequest {
  username: string,
  password: string
}


class LoginPage extends React.Component<any, any> {

  onFinish = (values: PostSessionRequest) => {
    console.log(values);

    axios.post('http://localhost:8080/session', values)
      .then(function (response) {
        console.log(response);

      }).catch(function (error) {

    });

  };

  render() {
    return (
      <div>
        <h1>
          Login
        </h1>

        <Space align="center">
          <Form
            onFinish={this.onFinish}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{required: true, message: 'Please input your username!'}]}
            >
              <Input/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{required: true, message: 'Please input your password!'}]}
            >
              <Input.Password/>
            </Form.Item>

            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>

                <Button type="primary" htmlType="submit">
                  Register a new account?
                </Button>
              </Space>
            </Form.Item>

          </Form>
        </Space>

      </div>
    );
  }
}


export default LoginPage;
