import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'antd';

const Signup = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      onClick={() =>
        loginWithRedirect({
          screen_hint: "signup",
        })
      }
      type="primary"
    >
      Sign Up
    </Button>
  );
};

export default Signup;