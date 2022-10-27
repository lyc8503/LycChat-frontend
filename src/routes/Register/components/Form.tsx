import React from "react";
import {Button, Form, Input, Space} from "antd";

interface RegisterFormProps {
  onSubmit: (values: any) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = (props) => {

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
            label="昵称"
            name="nickname"
            rules={[{required: true}, {type: "string", min: 2, max: 16}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="邮箱"
            name="email"
            rules={[{required: true, type: "email"}]}
          >
            <Input/>
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{required: true}, {type: "string", min: 8, max: 56}, {
              pattern: /^[\x21-\x7e]*$/,
              message: "密码只能包含字母,数字和符号"
            }, {
              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\x21-\x7e]*$/,
              message: "密码未达到复杂性要求:密码必须包含大小写字母和数字"
            }]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item
            label="重复密码"
            name="repeatPassword"
            dependencies={['password']}
            rules={[{required: true},
              ({getFieldValue}) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次输入的密码不一致'));
                }
              })]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>

        </Form>
      </Space>
    </div>
  );
}

export default RegisterForm