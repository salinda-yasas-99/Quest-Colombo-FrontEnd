import React, { useEffect, useState } from "react";
import { Button, Menu } from "antd";
import Logo from "../../assets/logo.png";
import { UserOutlined } from "@ant-design/icons";
import LoginRegisterModal from "./LoginRegisterModal";

const Navbar = ({ currentSection }) => {
  const [current, setCurrent] = useState("home-section");
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      label: <a href="#home-section">Home</a>,
      key: "home-section",
    },
    {
      label: <a href="#features-section">Features</a>,
      key: "features-section",
    },
    {
      label: <a href="#about-us-section">About Us</a>,
      key: "about-us-section",
    },
    {
      label: <a href="#contact-us-section">Contact Us</a>,
      key: "contact-us-section",
    },
  ];

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const menuOnClick = (e) => {
    setCurrent(e.key);
  };

  useEffect(() => {
    setCurrent(currentSection);
  }, [currentSection]);

  return (
    <>
      <div className="navbar-logo">
        <img src={Logo} />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        selectedKeys={[current]}
        items={menuItems}
        onClick={menuOnClick}
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
