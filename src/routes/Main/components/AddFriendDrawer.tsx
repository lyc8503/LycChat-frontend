import {Drawer, Input, List, Skeleton, Spin} from "antd";
import {LoadingOutlined, SearchOutlined} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import {searchUser} from "../../../request/user";

import { useRequest } from 'ahooks';

function AddFriendDrawer(props: { open: boolean, onClose: () => void }) {

  const { data, run: search, loading, error } = useRequest(searchUser, {
    debounceWait: 300,
    manual: true
  });

  return (
    <Drawer
      title="添加好友"
      placement="left"
      closable={true}
      open={props.open}
      onClose={props.onClose}
    >

      <Input size="large"
             placeholder="输入用户名搜索用户"
             prefix={<SearchOutlined/>}
             onChange={(e) => search({keyword: e.target.value})}
             status={error ? "error" : ""}
      />

      {loading && !error ? (<Spin indicator={<LoadingOutlined style={{fontSize: 24}} spin/>}/>) : (<List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
              title={<a href="https://ant.design">{item.username}</a>}
              description="Ant Design"
            />
          </List.Item>
        )}
      />)}

    </Drawer>

  )
}

export default AddFriendDrawer
