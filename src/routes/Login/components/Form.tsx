import React from "react";
import {Button, Form, Input, Space} from "antd";

interface IProps {
  onSubmit: (values: any) => void;
}

const LoginForm: React.FC<IProps> = (props) => {

  return (
    <div>
      <Space align="center">
        <Form
          onFinish={props.onSubmit}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{required: true, message: '请输入你的用户名!'}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{required: true, message: '请输入你的密码!'}]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>

        </Form>
      </Space>
    </div>
  );
}

export default LoginForm