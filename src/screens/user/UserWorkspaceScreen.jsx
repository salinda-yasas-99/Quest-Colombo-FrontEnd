import { CheckOutlined, LockOutlined } from "@ant-design/icons";
import {
  Button,
  Calendar,
  Card,
  Col,
  DatePicker,
  Form,
  Row,
  Select,
  Typography,
} from "antd";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const { Text, Title } = Typography;
const { Option } = Select;

const Image360View = ({ imageUrl }) => (
  <img
    src={imageUrl}
    alt="360 view"
    style={{
      width: "100%",
      height: "500px",
      borderRadius: "10px",
      fill: "cover",
    }}
  />
);

const mockPackages = [
  { id: 1, name: "Basic", price: 1000, details: "2-hour access" },
  { id: 2, name: "Standard", price: 3000, details: "Half-day access" },
  {
    id: 3,
    name: "Premium",
    price: 5000,
    details: "Full-day access with premium services",
  },
];

const UserWorkspaceScreen = () => {
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Mock workspace data
  const workspace = {
    id: 1,
    name: "Conference Room A",
    description: "Spacious room with modern amenities for meetings.",
    location: "First Floor",
    fee: "5000.00",
    imageUrl: "https://via.placeholder.com/360", // Placeholder image for 360 view
    slot_1: "available",
    slot_2: "booked",
    slot_3: "available",
  };

  const selectedDate = dayjs().format("YYYY-MM-DD"); // Hardcoded selected date

  // Handle form submit
  const handleBooking = (values) => {
    navigate(`/create-booking`, {
      state: {
        workspaceId: workspace.id,
        selectedSlot,
        selectedPackage,
        date: selectedDate,
      },
    });
  };
  return (
    <div style={{ padding: "20px" }}>
      {/* Date Picker to select a date */}
      <DatePicker
        // defaultValue={selectedDate}
        // onChange={onDateChange}
        disabled
        style={{ marginBottom: "20px" }}
      />

      {/* 360 Image View */}
      <Image360View imageUrl={workspace.imageUrl} />

      {/* Workspace Details */}
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <Title level={3} style={{ marginBottom: "10px" }}>
          {workspace.name}
        </Title>
        <Text>{workspace.description}</Text>
        <div
          style={{ marginTop: "10px", fontWeight: "bold", color: "#1890ff" }}
        >
          <Text>Location: {workspace.location}</Text>
        </div>
        <div
          style={{ marginTop: "10px", fontWeight: "bold", color: "#ff4d4f" }}
        >
          <Text>Price: {workspace.fee} LKR</Text>
        </div>
      </div>

      {/* Slot Availability */}
      <div style={{ marginTop: "20px" }}>
        <Title level={4}>Available Slots</Title>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12}>
            <Button
              disabled={workspace.slot_1 === "booked"}
              icon={
                workspace.slot_1 === "booked" ? (
                  <LockOutlined />
                ) : (
                  <CheckOutlined />
                )
              }
              style={{ width: "100%" }}
              onClick={() => setSelectedSlot(1)}
            >
              Slot 1: {workspace.slot_1 === "booked" ? "Booked" : "Available"}
            </Button>
          </Col>
          <Col xs={24} sm={12}>
            <Button
              disabled={workspace.slot_2 === "booked"}
              icon={
                workspace.slot_2 === "booked" ? (
                  <LockOutlined />
                ) : (
                  <CheckOutlined />
                )
              }
              style={{ width: "100%" }}
              onClick={() => setSelectedSlot(2)}
            >
              Slot 2: {workspace.slot_2 === "booked" ? "Booked" : "Available"}
            </Button>
          </Col>
          <Col xs={24} sm={12}>
            <Button
              disabled={workspace.slot_3 === "booked"}
              icon={
                workspace.slot_3 === "booked" ? (
                  <LockOutlined />
                ) : (
                  <CheckOutlined />
                )
              }
              style={{ width: "100%" }}
              onClick={() => setSelectedSlot(3)}
            >
              Slot 3: {workspace.slot_3 === "booked" ? "Booked" : "Available"}
            </Button>
          </Col>
        </Row>
      </div>

      {/* Packages Section */}
      <div style={{ marginTop: "30px" }}>
        <Title level={4}>Packages Available</Title>
        <Row gutter={[16, 16]}>
          {mockPackages.map((pkg) => (
            <Col key={pkg.id} xs={24} sm={12} md={8}>
              <Card
                hoverable
                style={{
                  textAlign: "center",
                  borderRadius: "10px",
                  borderColor:
                    selectedPackage === pkg.id ? "#1890ff" : "#f0f0f0",
                  backgroundColor: "white",
                }}
                onClick={() => setSelectedPackage(pkg.id)}
              >
                <Title level={5}>{pkg.name}</Title>
                <Text>{pkg.details}</Text>
                <div
                  style={{
                    marginTop: "10px",
                    fontWeight: "bold",
                    color: "#ff4d4f",
                  }}
                >
                  <Text>{pkg.price} LKR</Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Book Now Form */}
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      >
        <Title level={4}>Book Now</Title>
        <Form layout="vertical" onFinish={handleBooking}>
          <Form.Item label="Selected Date">
            <DatePicker value={dayjs()} disabled style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Select Slot">
            <Select
              placeholder="Select a slot"
              value={selectedSlot}
              onChange={setSelectedSlot}
            >
              <Option value={1} disabled={workspace.slot_1 === "booked"}>
                Slot 1:{" "}
                {workspace.slot_1 === "available" ? "Available" : "Booked"}
              </Option>
              <Option value={2} disabled={workspace.slot_2 === "booked"}>
                Slot 2:{" "}
                {workspace.slot_2 === "available" ? "Available" : "Booked"}
              </Option>
              <Option value={3} disabled={workspace.slot_3 === "booked"}>
                Slot 3:{" "}
                {workspace.slot_3 === "available" ? "Available" : "Booked"}
              </Option>
            </Select>
          </Form.Item>

          <Form.Item label="Select Package">
            <Select
              placeholder="Select a package"
              value={selectedPackage}
              onChange={setSelectedPackage}
            >
              {mockPackages.map((pkg) => (
                <Option key={pkg.id} value={pkg.id}>
                  {pkg.name} - {pkg.price} LKR
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
            Book Now
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UserWorkspaceScreen;
