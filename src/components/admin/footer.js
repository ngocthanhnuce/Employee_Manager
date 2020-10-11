import React from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const Footer = () => {
    return (
      <Navbar className="bg-dark" bg="dark" expand="md" style= {{backgroundColor: "#0A0A2A"}}>
        <Nav className="fixed-top justify-content-end">
            <div className="footer">
                <h3 style= {{color: "white"}}>Copyright © 2020 Fabbi JSC. All rights reserved.</h3>
                <NavLink> <IconFont type="icon-facebook" style = {{color: "white", paddingRight: "5%"}}/></NavLink>         
                <IconFont type="icon-twitter" style = {{color: "white"}}/>
            </div>
        </Nav>
      </Navbar>
    );
  };
export default Footer;