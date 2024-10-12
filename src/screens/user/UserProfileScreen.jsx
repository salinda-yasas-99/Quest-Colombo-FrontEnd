import { Avatar, Button, Card, Col, Row, Typography } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const { Title, Text } = Typography;

const UserProfileScreen = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <Row justify="center" style={{ padding: "20px" }}>
      <Col xs={24} sm={18} md={12} lg={10}>
        <Card
          style={{
            textAlign: "center",
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            backgroundColor: "white",
          }}
        >
          {/* Avatar */}
          {/* <Avatar
            size={120}
            src={`https://ui-avatars.com/api/?name=${user.username}&background=random`}
            style={{ marginBottom: "20px" }}
          /> */}

          <Avatar
            style={{
              backgroundColor: "#00b96b",
              verticalAlign: "middle",
              marginBottom: "20px",
            }}
            size={120}
            gap={0}
          >
            {user.username}
          </Avatar>

          {/* User Information */}
          <Title level={3} style={{ marginBottom: "10px" }}>
            {user.username}
          </Title>

          <Text type="secondary" style={{ fontSize: "16px" }}>
            {user.email}
          </Text>
        </Card>
      </Col>
    </Row>
  );
};

export default UserProfileScreen;
