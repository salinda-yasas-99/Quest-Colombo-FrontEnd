import React from "react";
import { Avatar, Breadcrumb, Layout, Menu, theme } from "antd";
import Logo from "../../assets/logo.png";
import { UserOutlined } from "@ant-design/icons";
import "../../styles/user-dashboard-layout.styles.css";
const { Header, Content, Footer } = Layout;

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const UserDashboardLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header className="user-dashbaord-layout-header">
        <img
          className="user-dashbaord-layout-logo-image"
          src={Logo}
          alt="logo-image"
        />

        <Menu
          className="user-dashbaord-layout-menu"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
        />

        <Avatar
          className="user-dashbaord-layout-avatar"
          icon={<UserOutlined />}
        />
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
  );
};

export default UserDashboardLayout;
