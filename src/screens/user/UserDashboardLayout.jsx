import React, { useState } from "react";
import {
  Avatar,
  Dropdown,
  Layout,
  Menu,
  Modal,
  Space,
  theme,
  Typography,
} from "antd";
import Logo from "../../assets/logo.png";
import { ExclamationCircleOutlined, UserOutlined } from "@ant-design/icons";
import "../../styles/user-dashboard-layout.styles.css";
import UserProtectedRoute from "../../components/user/UserProtectedRoute";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

const { Header, Content, Footer } = Layout;

const navItems = [];

const UserDashboardLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const dispatch = useDispatch();
  const [modal, contextHolder] = Modal.useModal();
  const confirmLogout = () => {
    modal.confirm({
      title: "Confirm",
      icon: <ExclamationCircleOutlined />,
      content: "Do you want to logout from the session?",
      okText: "Logout",
      cancelText: "cancel",
      onOk: () => {
        dispatch(logout());
      },
    });
  };
  const profileItems = [
    {
      key: "1",
      label: "My Account",
      disabled: true,
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: "Profile",
    },
    {
      key: "3",
      label: "Logout",
      onClick: confirmLogout,
    },
  ];

  return (
    <UserProtectedRoute>
      {contextHolder}
      <Layout className="user-dashboard-layout">
        <Header className="user-dashbaord-layout-header">
          <img
            className="user-dashbaord-layout-logo-image"
            src={Logo}
            alt="logo-image"
          />
          <Typography style={{ color: "white" }}>Quest Colombo</Typography>

          <Menu
            className="user-dashbaord-layout-menu"
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={navItems}
          />

          <Dropdown
            menu={{
              items: profileItems,
            }}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar
                  className="user-dashbaord-layout-avatar"
                  icon={<UserOutlined />}
                />
              </Space>
            </a>
          </Dropdown>
        </Header>
        <Content className="user-dashbaord-layout-content-container">
          <div
            className="user-dashbaord-layout-content"
            style={{
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </div>
        </Content>
        <Footer className="user-dashbaord-layout-footer">
          Quest Colombo ©{new Date().getFullYear()} Created by Quest Colombo
        </Footer>
      </Layout>
    </UserProtectedRoute>
  );
};

export default UserDashboardLayout;
