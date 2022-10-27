import React from "react";
import {Button, Form, Input, Space} from "antd";

interface LoginFormProps {
  onSubmit: (values: any) => void;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {

  return (
    <div>
      <Space align="center">
        <Form
          labelCol={{span: 8}}
          wrapperCol={{span: 20}}
          onFinish={props.onSubmit}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[{required: true}, {type: "string", min: 4, max: 16}, {
              pattern: /^[a-zA-Z\d-_]*$/,
              message: "用户名只能包含字母,数字,下划线和连字符"
            }]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{required: true}, {type: "string", min: 8, max: 56}, {
              pattern: /^[\x21-\x7e]*$/,
              message: "密码只能包含字母,数字和符号"
            }]}
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