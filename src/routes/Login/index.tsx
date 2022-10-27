import React, {useEffect, useState} from "react";
import LoginForm from "./components/Form";
import {Navigate, NavLink} from "react-router-dom";
import {message} from "antd";
import {getSession, postSession, PostSessionRequest} from "../../request/session";


function LoginPage() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // 开始时检查是否已经登录, 如果已经登录则直接跳转主界面
  useEffect(
    () => {
      getSession().then(response => {
        if (response.login) {
          message.success("已经登录: " + response.username)
          setIsLoggedIn(response.login)
        }
      }).catch(() => 0)
    }, []
  )

  const onSubmit = (values: PostSessionRequest) => {

    postSession(values)
      .then(function (response: any) {
        window.localStorage.setItem('token', response.token)
        message.success("登录成功")
        setIsLoggedIn(true)
      }).catch(() => 0)
  }


  return (
    <div>
      <h1>登录</h1>
      <LoginForm onSubmit={onSubmit}/>

      {
        /* 重定向至主页面 */
        isLoggedIn && <Navigate to="/main"/>
      }

      <NavLink to="/register">点此注册新账号</NavLink>

    </div>
  )
}

export default LoginPage
