import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import Logo from "../../assets/logo.png";
import { UserOutlined } from "@ant-design/icons";
import { NAVBAR_MENU_ITEMS } from "../../constants/constants";

const { Header } = Layout;

const Navbar = () => {
  const [current, setCurrent] = useState(NAVBAR_MENU_ITEMS[0].key);

  return (
    <>
      <div className="navbar-logo">
        <img src={Logo} />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[current]}
        onClick={(e) => {
          console.log("clicked: ", e.key);
          setCurrent(e.key);
        }}
        items={NAVBAR_MENU_ITEMS}
      />
      <div className="navbar-btn-container">
        <Button
          //   className="login-register-btn"
          type="primary"
          shape="round"
          icon={<UserOutlined />}
        >
          Login / Register
        </Button>
      </div>
    </>
  );
};

export default Navbar;
