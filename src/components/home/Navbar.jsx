import React, { useState } from "react";
import { Button, Layout, Menu } from "antd";
import Logo from "../../assets/logo.png";
import { UserOutlined } from "@ant-design/icons";
import { NAVBAR_MENU_ITEMS } from "../../constants/constants";
import LoginRegisterModal from "./LoginRegisterModal";

const { Header } = Layout;

const Navbar = () => {
  const [current, setCurrent] = useState(NAVBAR_MENU_ITEMS[0].key);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

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
          type="primary"
          shape="round"
          icon={<UserOutlined />}
          onClick={showModal}
        >
          Login / Register
        </Button>
      </div>
      <LoginRegisterModal open={open} handleCancel={handleCancel} />
    </>
  );
};

export default Navbar;
