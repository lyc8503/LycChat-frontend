import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from "./App";
import {BrowserRouter} from "react-router-dom";

import zhCN from 'antd/es/locale/zh_CN';
import {ConfigProvider} from "antd";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ConfigProvider locale={zhCN}>
        <App/>
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode>
);
