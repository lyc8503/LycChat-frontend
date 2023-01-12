import {Input, Layout, Tooltip} from "antd";
import Sider from "antd/es/layout/Sider";
import {PlusOutlined, SearchOutlined} from "@ant-design/icons";
import AddFriendDrawer from "../components/AddFriendDrawer";
import {useState} from "react";


function Messages() {

  const [addFriendDrawerOpen, setAddFriendDrawerOpen] = useState(false)


  return (
    <>

      <AddFriendDrawer
        open={addFriendDrawerOpen}
        onClose={() => setAddFriendDrawerOpen(false)}></AddFriendDrawer>

      <Layout>
        <Sider collapsed={false} theme="light" width={200}>

          <Input placeholder="搜索聊天" prefix={<SearchOutlined/>}
                 style={{width: 150}}/>

          <Tooltip title="添加好友">
            <PlusOutlined style={{marginLeft: 10}} onClick={() => setAddFriendDrawerOpen(true)}/>
          </Tooltip>
        </Sider>
      </Layout>
    </>
  )
}


export default Messages