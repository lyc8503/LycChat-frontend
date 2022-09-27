import {Button, Form, Input, Space} from "antd";

function LoginPage() {
  return (
    <div>

      <h1>
        Login
      </h1>

      <Space align="center">
        <Form>
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

          <Form.Item wrapperCol={{offset: 8, span: 16}}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

        </Form>
      </Space>

    </div>
  );
}

export default LoginPage;
