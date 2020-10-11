import { Avatar, Menu } from 'antd';
import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Admin from '../admin/admin';
import Profile from './profile';

const { SubMenu } = Menu;

const MenuHome = () => {
  return (
    <div className="d-flex justify-content-between styles">
      <Menu
        style={{ width: 256, height: 900 }}
        className="menu"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['']}
        theme='dark'
        mode="inline">
        <div className="logo">
          <Avatar size={100} src = {`/images/img.png`} />
          <h2 style = {{paddingTop: 40,paddingLeft: 20, color: "white"}}>ThanhDN</h2>
        </div>
        <SubMenu key="sub1" icon={<MailOutlined />} title="Quản lý nhân viên">
          <Menu.Item key="5">Option 1</Menu.Item>
          <Menu.Item key="6">Option 2</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 1</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 3</Menu.Item>
            <Menu.Item key="8">Option 4</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <SettingOutlined />
              <span>Navigation </span>
            </span>
          }>
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
        <Profile/>
      </Menu>
      <Admin/>
    </div>
  );
}
export default MenuHome;