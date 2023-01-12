import React from 'react';
import {DesktopOutlined, FileOutlined, PieChartOutlined,} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Menu} from 'antd';

import {MenuInfo} from 'rc-menu/lib/interface';
import {Navigate, useLocation, useNavigate, useRoutes} from "react-router-dom";
import Messages from "./container/Messages";

const {Header, Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('消息', 'messages', <PieChartOutlined/>),
  getItem('选项1', 'o1', <DesktopOutlined/>),
  getItem('选项2', 'o2', <FileOutlined/>),
];


function MainPage() {

  const location = useLocation()
  const navigate = useNavigate()

  return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider theme="dark" collapsed={true} collapsedWidth="48">
        <div style={{height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)'}}/>
        <Menu theme="dark" selectedKeys={[location.pathname.split("/").pop() || 'messages']}
              onClick={(info: MenuInfo) => navigate(info.key)} mode="inline" items={items}/>
      </Sider>

      {useRoutes([
        {
          path: '/messages',
          element: <Messages></Messages>
        },
        {
          path: '/o1',
          element: <div> Test2 </div>
        },
        {
          path: '/o2',
          element: <div> Test3 </div>
        },
        {
          path: '*',
          element: <Navigate to="messages"/>
        }
      ])}

      {/*<Layout className="site-layout">*/}

      {/*  <Sider theme="light" collapsed={false}>*/}
      {/*    <Menu defaultSelectedKeys={['1']} mode="inline" items={items}/>*/}
      {/*  </Sider>*/}

      {/*  <Content style={{margin: '0 16px'}}>*/}
      {/*    <Breadcrumb style={{margin: '16px 0'}}>*/}
      {/*      <Breadcrumb.Item>User</Breadcrumb.Item>*/}
      {/*      <Breadcrumb.Item>Bill</Breadcrumb.Item>*/}
      {/*    </Breadcrumb>*/}
      {/*    <div style={{padding: 24, minHeight: 360}}>*/}
      {/*      Bill is a cat.*/}
      {/*    </div>*/}
      {/*  </Content>*/}

      {/*  <Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Footer>*/}

      {/*</Layout>*/}
    </Layout>
  )
}


export default MainPage