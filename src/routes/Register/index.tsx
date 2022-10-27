import {Navigate, NavLink} from "react-router-dom";
import React, {useState} from "react";
import RegisterForm from "./components/Form";
import {postUser} from "../../request/user";
import {message} from "antd";


function RegisterPage() {

  const [isRegistered, setIsRegistered] = useState(false);

  const onSubmit = (values: any) => {
    delete values.repeatPassword

    postUser(values).then(() => {
      message.success("注册成功")
      setIsRegistered(true)
    }).catch(() => 0)
  }

  return (
    <div>
      <h1>注册</h1>
      <RegisterForm onSubmit={onSubmit}/>

      {
        /* 重定向至登录页面 */
        isRegistered && <Navigate to="/login"/>
      }

      <NavLink to="/login">点此登录现有账号</NavLink>

    </div>
  )
}

export default RegisterPage
