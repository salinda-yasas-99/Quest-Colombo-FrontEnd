import {
  CalendarOutlined,
  DashboardOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import React from "react";

const { Meta } = Card;
const { Title } = Typography;

const FeaturesSection = () => {
  return (
    <div
      style={{
        padding: "20px 20px 50px 20px",
        backgroundColor: "white",
        borderRadius: "12px",
      }}
    >
      <Title style={{ textAlign: "center", color: "#00b96b" }}>
        Our Features
      </Title>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            cover={
              <CalendarOutlined
                style={{
                  fontSize: "64px",
                  color: "#00b96b",
                  marginTop: "24px",
                }}
              />
            }
            style={{
              borderRadius: "12px",
            }}
          >
            <Meta
              title="Real-Time Bookin"
              description="Book and manage spaces easily with real-time updates."
              style={{
                textAlign: "center",
              }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            cover={
              <VideoCameraOutlined
                style={{
                  fontSize: "64px",
                  color: "#00b96b",
                  marginTop: "24px",
                }}
              />
            }
            style={{
              borderRadius: "12px",
            }}
          >
            <Meta
              title="360-Degree View"
              description="Visualize the space before booking with a 360-degree view."
              style={{
                textAlign: "center",
              }}
            />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Card
            hoverable
            cover={
              <DashboardOutlined
                style={{
                  fontSize: "64px",
                  color: "#00b96b",
                  marginTop: "24px",
                }}
              />
            }
            style={{
              borderRadius: "12px",
            }}
          >
            <Meta
              title="Admin Dashboard"
              description="Manage the entire system with a powerful admin dashboard."
              style={{
                textAlign: "center",
              }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FeaturesSection;
