import React, {useState} from "react";
import { Drawer, Divider, Menu, Image } from 'antd';
import { MailOutlined} from '@ant-design/icons';
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
      setVisible(false);
    };
    const { user, isAuthenticated } = useAuth0();
    
    return (
        <>
            <Menu
                mode="inline"
                theme="dark">
                <Menu.Item>
                    <p onClick={showDrawer} style = {{color: "white"}}>
                        <MailOutlined style={{marginRight:"5%"}}/>
                        View Profile
                    </p>,
                </Menu.Item>
            </Menu>
           {isAuthenticated ? (
               <>
                    <Drawer
                        width={640}
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                        >
                        <h1 className="site-description-item-profile-p" style={{ marginBottom: 24, textAlign: "center" }}>
                            Admin Profile
                        </h1>
                        <>
                            <div span={12} style={{textAlign: "center"}}>
                                <Image className="avatar" src = {user.picture}></Image>
                                <h3 style = {{fontWeight: "bold"}}>Account: {user.nickname}@gmail.com</h3>
                            </div>
                        </>
                        <Divider />
                    </Drawer>
               </>
           ) : ('')}
        </>
    );
};

export default Profile;