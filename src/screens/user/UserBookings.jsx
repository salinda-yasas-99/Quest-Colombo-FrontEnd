import { Button, Table, Tag, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const { Text, Title } = Typography;

const mockBookingData = [
  {
    id: 2,
    totalCharges: "100.00",
    bookedDate: "2024-10-13",
    bookedTime: "10:00:00",
    paymentMethod: "Online",
    paymentStatus: "Paid",
    bookedSlot: "slot_3",
    startTime: "10:00:00",
    endTime: "12:00:00",
    user_id: 1,
    workspace_id: 1,
    package_id: null,
    user: {
      id: 1,
      username: "testAdmin",
      email: "testAdmin@example.com",
      role: "admin",
    },
    workspace: {
      id: 1,
      name: "wok_1",
      description: "this is dummy desc",
      location: "first floor",
      fee: "3000.00",
      imageUrl: "img-src",
      workspace_type_id: 1,
    },
    package: null,
  },
];

const UserBookings = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  // Fetch bookings data (mocked for now, replace with actual API call)
  useEffect(() => {
    setBookings(mockBookingData);
    // Replace with real API call
  }, []);

  const columns = [
    {
      title: "Booked Date",
      dataIndex: "bookedDate",
      key: "bookedDate",
      render: (text) => <Text>{new Date(text).toLocaleDateString()}</Text>,
    },
    {
      title: "Booked Time",
      dataIndex: "bookedTime",
      key: "bookedTime",
      render: (time) => <Text>{time.slice(0, 5)}</Text>,
    },
    {
      title: "Workspace",
      dataIndex: ["workspace", "name"],
      key: "workspace",
    },
    {
      title: "Total Charges",
      dataIndex: "totalCharges",
      key: "totalCharges",
      render: (charges) => <Text>{`${charges} LKR`}</Text>,
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
      render: (method) => (
        <Tag color={method === "Online" ? "green" : "blue"}>{method}</Tag>
      ),
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
      key: "paymentStatus",
      render: (status) => (
        <Tag color={status === "Paid" ? "green" : "red"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button type="primary" onClick={() => navigate(`${record.id}`)}>
          View Details
        </Button>
      ),
    },
  ];
  return (
    <div style={{}}>
      <Title level={2}>Your Bookings</Title>
      <Table columns={columns} dataSource={bookings} rowKey="id" style={{}} />
    </div>
  );
};

export default UserBookings;
