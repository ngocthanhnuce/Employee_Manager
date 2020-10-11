import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() => loginWithRedirect()}
      type="primary"
    >
     <LoginOutlined />
      Log In
    </Button>
  );
};

export default Login;