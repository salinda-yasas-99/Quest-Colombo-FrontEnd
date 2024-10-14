import { Button, notification, Table, Tag, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBoookingByUserId } from "../../services/bookingService";
import { useSelector } from "react-redux";

const { Text, Title } = Typography;

// const mockBookingData = [
//   {
//     id: 2,
//     totalCharges: "100.00",
//     bookedDate: "2024-10-13",
//     bookedTime: "10:00:00",
//     paymentMethod: "Online",
//     paymentStatus: "Paid",
//     bookedSlot: "slot_3",
//     startTime: "10:00:00",
//     endTime: "12:00:00",
//     user_id: 1,
//     workspace_id: 1,
//     package_id: null,
//     user: {
//       id: 1,
//       username: "testAdmin",
//       email: "testAdmin@example.com",
//       role: "admin",
//     },
//     workspace: {
//       id: 1,
//       name: "wok_1",
//       description: "this is dummy desc",
//       location: "first floor",
//       fee: "3000.00",
//       imageUrl: "img-src",
//       workspace_type_id: 1,
//     },
//     package: null,
//   },
// ];

const UserBookings = () => {
  const [loading, setLoading] = useState(false);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification();
  const user = useSelector((state) => state.user.user);

  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
      placement: "bottomRight",
    });
  };

  const fetchAllBookingsByUserId = async (userId) => {
    setLoading(true);
    try {
      const response = await getAllBoookingByUserId(userId);
      setBookings(response);
    } catch (error) {
      openNotificationWithIcon(
        "error",
        "Error",
        error?.data?.message || "An error occurred"
      );
      console.error("Erro ocurred while getting booking list: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchAllBookingsByUserId(user.id);
    }
  }, [user]);

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
        <Button
          type="primary"
          onClick={() =>
            navigate(`${record.id}`, {
              state: { record },
            })
          }
        >
          View Details
        </Button>
      ),
    },
  ];
  return (
    <div style={{}}>
      {contextHolder}
      <Title level={2}>Your Bookings</Title>
      <Table
        columns={columns}
        dataSource={bookings}
        rowKey="id"
        style={{}}
        loading={loading}
      />
    </div>
  );
};

export default UserBookings;
