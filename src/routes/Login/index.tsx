import React, {useEffect, useState} from "react";
import LoginForm from "./components/Form";
import {service, getService} from "../../request";
import {Navigate} from "react-router-dom";
import {message} from "antd";


interface PostSessionRequest {
  username: string,
  password: string
}


function LoginPage() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  // 开始时检查是否已经登录, 如果已经登录则直接跳转主界面
  useEffect(
    () => {
      getService({showErrorOnPage: false}).get("/session").then(function (response: any) {
        message.success("已经登录: " + response.username)
        setIsLoggedIn(response.login)
      }).catch(() => 0)
    }, []
  )

  const onSubmit = (values: PostSessionRequest) => {
    console.log(values)

    service.post("/session", values)
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

      <a>点此注册账号</a>

    </div>
  )
}

export default LoginPage
