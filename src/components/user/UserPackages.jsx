import { Card, Col, List, Row, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;

const UserPackages = () => {
  const packages = [
    {
      id: 1,
      package_name: "Base Package",
      details: [
        "Basic refreshments (coffee, tea, water)",
        "Onsite technical support (standard IT assistance)",
        "Basic printing services (up to 20 pages, black & white)",
        "Standard free Wi-Fi",
      ],
      price: "3000.00",
      created_at: "2024-10-10T14:08:22.000000Z",
      updated_at: "2024-10-10T14:08:22.000000Z",
    },
    {
      id: 2,
      package_name: "Essential Package",
      details: [
        "Basic refreshments (coffee, tea, water)",
        "Onsite technical support (standard IT assistance)",
        "Basic printing services (up to 20 pages, black & white)",
        "Standard free Wi-Fi",
      ],
      price: "3000.00",
      created_at: "2024-10-10T14:08:22.000000Z",
      updated_at: "2024-10-10T14:08:22.000000Z",
    },
    {
      id: 3,
      package_name: "Premium Package",
      details: [
        "Premium refreshments",
        "Extended onsite technical support",
        "Unlimited printing services",
        "High-speed Wi-Fi",
        "Access to premium lounges",
      ],
      price: "7000.00",
    },
  ];
  return (
    <div>
      <Title level={2} style={{ textAlign: "left", marginBottom: "30px" }}>
        Available Packages
      </Title>

      <Row gutter={[16, 16]} justify="center">
        {packages.map((pkg) => (
          <Col
            key={pkg.id}
            xs={24}
            sm={12}
            md={8}
            lg={6} // Responsive layout: 1 card on extra-small, 2 cards on small, 3 on medium, 4 on large+
          >
            <Card
              hoverable
              className="package-card"
              style={{
                textAlign: "left",
                borderRadius: "10px",
                backgroundColor: "white",
              }}
            >
              <Title level={4}>{pkg.package_name}</Title>
              <List
                dataSource={pkg.details}
                renderItem={(detail) => <List.Item>• {detail}</List.Item>}
                style={{ marginBottom: "15px" }}
              />
              <Text strong style={{ fontSize: "16px", color: "#1890ff" }}>
                Price: {pkg.price} LKR
              </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UserPackages;
