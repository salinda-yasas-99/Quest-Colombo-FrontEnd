import { Button, Typography } from "antd";
import React from "react";

const { Title, Text } = Typography;

const HeroSection = () => {
  return (
    <div className="home-hero-section">
      <div>
        <Title style={{ color: "#fff", boxShadow: 1 }}>
          Your Ideal Co-working Space
        </Title>
        <Text style={{ fontSize: "18px", color: "#fff" }}>
          Efficiently book and manage your workspace today.
        </Text>
        <br />
        <Button
          type="primary"
          shape="round"
          size="large"
          style={{
            marginTop: "20px",
            backgroundColor: "#0d8751",
            borderColor: "#0d8751",
          }}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
