import {Drawer, Input, InputRef, List, Spin} from "antd";
import {LoadingOutlined, SearchOutlined} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import {searchUser} from "../../../request/user";

import {useRequest} from 'ahooks';
import React, {useState} from "react";

function AddFriendDrawer(props: { open: boolean, onClose: (e: React.MouseEvent | React.KeyboardEvent) => void }) {

  const {data, run: search, loading, error, mutate, cancel} = useRequest(searchUser, {
    debounceWait: 300,
    manual: true
  })

  const [inputText, setInputText] = useState("")

  function selfOnClose() {
    setInputText("")
    cancel()
    mutate(undefined)
  }

  return (
    <Drawer
      title="添加好友"
      placement="left"
      closable={true}
      open={props.open}
      onClose={(e) => {
        selfOnClose();
        props.onClose(e)
      }}
    >

      <Input size="large"
             value={inputText}
             placeholder="输入用户名搜索用户"
             prefix={<SearchOutlined/>}

             onChange={(e) => {
               setInputText(e.target.value)
               if (e.target.value !== "") {
                 search({keyword: e.target.value})
               } else {
                 cancel()
                 mutate([])
               }
             }}
             status={error ? "error" : ""}
      />

      <Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin/>} spinning={loading && !error}>
        <List
          itemLayout="horizontal"
          dataSource={error ? [] : data}
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                title={<a href="https://ant.design">{item.username}</a>}
                description="Ant Design"
              />
            </List.Item>
          )}
        />
      </Spin>

    </Drawer>

  )
}

export default AddFriendDrawer
