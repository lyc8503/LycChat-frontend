import {MenuDataItem, PageContainer, ProCard, ProLayout, ProSettings} from "@ant-design/pro-components";
import { Button, Divider, Dropdown, Input } from "antd";
import {
  CaretDownFilled,
  DoubleRightOutlined,
  GithubFilled,
  InfoCircleFilled,
  PlusCircleFilled,
  QuestionCircleFilled,
  SearchOutlined,
} from '@ant-design/icons';

import { css } from '@emotion/css';
import {useState} from "react";


const Item: React.FC<{ children: React.ReactNode }> = (props) => (
  <div
    className={css`
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
      cursor: pointer;
      line-height: 22px;
      margin-bottom: 8px;
      &:hover {
        color: #1890ff;
      }
    `}
    style={{
      width: '33.33%',
    }}
  >
    {props.children}
    <DoubleRightOutlined
      style={{
        marginInlineStart: 4,
      }}
    />
  </div>
);

const List: React.FC<{ title: string; style?: React.CSSProperties }> = (props) => {
  return (
    <div
      style={{
        width: '100%',
        ...props.style,
      }}
    >
      <div
        style={{
          fontSize: 16,
          color: 'rgba(0,0,0,0.85)',
          lineHeight: '24px',
          fontWeight: 500,
          marginBlockEnd: 16,
        }}
      >
        {props.title}
      </div>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {new Array(6).fill(1).map((_, index) => {
          return <Item key={index}>具体的解决方案-{index}</Item>;
        })}
      </div>
    </div>
  );
};

function MainPage() {
  const settings: ProSettings | undefined = {
    fixSiderbar: true,
    layout: 'mix',
    splitMenus: true,
  };

  const [pathname, setPathname] = useState('/list/sub-page/sub-sub-page1');

  return (
    <div
      id="test-pro-layout"
      style={{
        height: '100vh',
      }}
    >
      <ProLayout
        bgLayoutImgList={[
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            left: 85,
            bottom: 100,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
            bottom: -68,
            right: -45,
            height: '303px',
          },
          {
            src: 'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
            bottom: 0,
            left: 0,
            width: '331px',
          },
        ]}
        {...{
          route: {
            path: '/',
            routes: [
              {
                path: '/welcome',
                name: '欢迎',
                // icon: <SmileFilled />,
                component: './Welcome',
              },
              {
                path: '/admin',
                name: '管理页',
                // icon: <CrownFilled />,
                access: 'canAdmin',
                component: './Admin',
                routes: [
                  {
                    path: '/admin/sub-page1',
                    name: '一级页面',
                    icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
                    component: './Welcome',
                  },
                  {
                    path: '/admin/sub-page2',
                    name: '二级页面',
                    // icon: <CrownFilled />,
                    component: './Welcome',
                  },
                  {
                    path: '/admin/sub-page3',
                    name: '三级页面',
                    // icon: <CrownFilled />,
                    component: './Welcome',
                  },
                ],
              },
              {
                name: '列表页',
                // icon: <TabletFilled />,
                path: '/list',
                component: './ListTableList',
                routes: [
                  {
                    path: '/list/sub-page',
                    name: '列表页面',
                    // icon: <CrownFilled />,
                    routes: [
                      {
                        path: 'sub-sub-page1',
                        name: '一一级列表页面',
                        // icon: <CrownFilled />,
                        component: './Welcome',
                      },
                      {
                        path: 'sub-sub-page2',
                        name: '一二级列表页面',
                        // icon: <CrownFilled />,
                        component: './Welcome',
                      },
                      {
                        path: 'sub-sub-page3',
                        name: '一三级列表页面',
                        // icon: <CrownFilled />,
                        component: './Welcome',
                      },
                    ],
                  },
                  {
                    path: '/list/sub-page2',
                    name: '二级列表页面',
                    // icon: <CrownFilled />,
                    component: './Welcome',
                  },
                  {
                    path: '/list/sub-page3',
                    name: '三级列表页面',
                    // icon: <CrownFilled />,
                    component: './Welcome',
                  },
                ],
              },
              {
                path: 'https://ant.design',
                name: 'Ant Design 官网外链',
                // icon: <ChromeFilled />,
              },
            ],
          },
          location: {
            pathname: '/',
          },
          appList: [
            {
              icon: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
              title: 'Ant Design',
              desc: '杭州市较知名的 UI 设计语言',
              url: 'https://ant.design',
            },
            {
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/FLrTNDvlna/antv.png',
              title: 'AntV',
              desc: '蚂蚁集团全新一代数据可视化解决方案',
              url: 'https://antv.vision/',
              target: '_blank',
            },
            {
              icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
              title: 'Pro Components',
              desc: '专业级 UI 组件库',
              url: 'https://procomponents.ant.design/',
            },
            {
              icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
              title: 'umi',
              desc: '插件化的企业级前端应用框架。',
              url: 'https://umijs.org/zh-CN/docs',
            },

            {
              icon: 'https://gw.alipayobjects.com/zos/bmw-prod/8a74c1d3-16f3-4719-be63-15e467a68a24/km0cv8vn_w500_h500.png',
              title: 'qiankun',
              desc: '可能是你见过最完善的微前端解决方案🧐',
              url: 'https://qiankun.umijs.org/',
            },
            {
              icon: 'https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg',
              title: '语雀',
              desc: '知识创作与分享工具',
              url: 'https://www.yuque.com/',
            },
            {
              icon: 'https://gw.alipayobjects.com/zos/rmsportal/LFooOLwmxGLsltmUjTAP.svg',
              title: 'Kitchen ',
              desc: 'Sketch 工具集',
              url: 'https://kitchen.alipay.com/',
            },
            {
              icon: 'https://img.alicdn.com/tfs/TB1zomHwxv1gK0jSZFFXXb0sXXa-200-200.png',
              title: 'dumi',
              desc: '为组件开发场景而生的文档工具',
              url: 'https://d.umijs.org/zh-CN',
            },
          ],
        }}
        location={{
          pathname,
        }}
        menu={{
          type: 'group',
        }}
        avatarProps={{
          src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
          size: 'small',
          title: '七妮妮',
        }}
        actionsRender={(props) => {
          if (props.isMobile) return [];
          return [
            props.layout !== 'side' && document.body.clientWidth > 1400 ? (
              <div
                key="SearchOutlined"
                aria-hidden
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 24,
                }}
                onMouseDown={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
              >
                <Input
                  style={{
                    borderRadius: 4,
                    marginInlineEnd: 12,
                    backgroundColor: 'rgba(0,0,0,0.03)',
                  }}
                  prefix={
                    <SearchOutlined
                      style={{
                        color: 'rgba(0, 0, 0, 0.15)',
                      }}
                    />
                  }
                  placeholder="搜索方案"
                  bordered={false}
                />
                <PlusCircleFilled
                  style={{
                    color: 'var(--ant-primary-color)',
                    fontSize: 24,
                  }}
                />
              </div>
            ) : undefined,
            <InfoCircleFilled key="InfoCircleFilled" />,
            <QuestionCircleFilled key="QuestionCircleFilled" />,
            <GithubFilled key="GithubFilled" />,
          ];
        }}
        headerContentRender={(_, defaultDom) => {
          if (document.body.clientWidth < 1400) {
            return defaultDom;
          }
          if (_.isMobile) return defaultDom;
          return (
            <>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginInlineEnd: 52,
                }}
              >
                <Divider
                  style={{
                    height: '1.5em',
                  }}
                  type="vertical"
                />
                <Dropdown
                  placement="bottom"
                  overlay={
                    <div
                      style={{
                        padding: '32px 40px',
                        backgroundColor: '#fff',
                        width: 'calc(100vw - 4px)',
                        height: '307px',
                        boxShadow:
                          '0 8px 16px 0 rgba(0,0,0,0.03), 0 4px 8px 0 rgba(25,15,15,0.07), 0 2px 4px 0 rgba(0,0,0,0.08)',
                        borderRadius: '0 0 6px 6px',
                      }}
                    >
                      <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1 }}>
                          <List title="金融解决方案" />
                          <List
                            title="其他解决方案"
                            style={{
                              marginBlockStart: 32,
                            }}
                          />
                        </div>

                        <div
                          style={{
                            width: '308px',
                            borderInlineStart: '1px solid rgba(0,0,0,0.06)',
                            paddingInlineStart: 16,
                          }}
                        >
                          <div
                            className={css`
                              font-size: 14px;
                              color: rgba(0, 0, 0, 0.45);
                              line-height: 22px;
                            `}
                          >
                            热门产品
                          </div>
                          {new Array(3).fill(1).map((name, index) => {
                            return (
                              <div
                                key={index}
                                className={css`
                                  border-radius: 4px;
                                  padding: 16px;
                                  margin-top: 4px;
                                  display: flex;
                                  cursor: pointer;
                                  &:hover {
                                    background-color: rgba(0, 0, 0, 0.03);
                                  }
                                `}
                              >
                                <img src="https://gw.alipayobjects.com/zos/antfincdn/6FTGmLLmN/bianzu%25252013.svg" />
                                <div
                                  style={{
                                    marginInlineStart: 14,
                                  }}
                                >
                                  <div
                                    className={css`
                                      font-size: 14px;
                                      color: rgba(0, 0, 0, 0.85);
                                      line-height: 22px;
                                    `}
                                  >
                                    Ant Design
                                  </div>
                                  <div
                                    className={css`
                                      font-size: 12px;
                                      color: rgba(0, 0, 0, 0.45);
                                      line-height: 20px;
                                    `}
                                  >
                                    杭州市较知名的 UI 设计语言
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  }
                >
                  <div
                    style={{
                      color: 'rgba(0, 0, 0, 0.85)',
                      fontWeight: 500,
                      cursor: 'pointer',
                      display: 'flex',
                      gap: 4,
                      alignItems: 'center',
                      minWidth: '180px',
                    }}
                    className={css`
                      padding: 0 16px;
                      &:hover {
                        background-color: rgba(0, 0, 0, 0.03);
                      }
                    `}
                  >
                    <span> 企业级资产中心</span>
                    <CaretDownFilled />
                  </div>
                </Dropdown>
              </div>
            </>
          );
        }}
        menuFooterRender={(props) => {
          if (props?.collapsed) return undefined;
          return (
            <div
              style={{
                textAlign: 'center',
                paddingBlockStart: 12,
              }}
            >
              <div>© 2021 Made with love</div>
              <div>by Ant Design</div>
            </div>
          );
        }}
        onMenuHeaderClick={(e) => console.log(e)}
        menuItemRender={(item, dom) => (
          <div
            onClick={() => {
              setPathname(item.path || '/welcome');
            }}
          >
            {dom}
          </div>
        )}
        {...settings}
      >
        <PageContainer>
          <ProCard
            style={{
              height: '100vh',
              minHeight: 800,
            }}
          >
            <div />
          </ProCard>
        </PageContainer>
      </ProLayout>
    </div>
  )
}



export default MainPage