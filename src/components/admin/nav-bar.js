import React, { Fragment } from "react";
import { Container, Nav, Navbar } from "react-bootstrap"
import { useAuth0 } from "@auth0/auth0-react";
import Logout from "../login/logout";
import Login from "../login/login";
import SingUp from "../login/singup";

const AuthNav = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <Nav className="fixed-top justify-content-end">
      <h1 className="admin" style= {{color: "white"}}>Quản lý nhân viên</h1>
      <Fragment>
        <div className="login"> {isAuthenticated ? <Logout /> : <Login />}</div>
        <SingUp/>
      </Fragment>
    </Nav>
  );
};
  const NavBar = () => {
    return (
      <Navbar className="bg-dark" bg="dark" expand="md" style= {{backgroundColor: "#0A0A2A"}}>
        <Container>
          <AuthNav />
        </Container>
      </Navbar>
    );
  };
export default NavBar;