import { LeftOutlined } from "@ant-design/icons";
import { Button, Col, Empty, Form, Input, Row, Typography } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const { Title } = Typography;

const mockBookingData = {
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
};

const UserSingleBookingScreen = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    setBooking(mockBookingData);
  }, [bookingId]);

  if (!booking) return <Empty />;

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Booking Details</Title>
      <Form layout="vertical" disabled>
        <Row gutter={[16, 16]}>
          {/* Workspace Information */}
          <Col span={12}>
            <Form.Item label="Workspace Name">
              <Input value={booking.workspace.name} />
            </Form.Item>
            <Form.Item label="Location">
              <Input value={booking.workspace.location} />
            </Form.Item>
            <Form.Item label="Description">
              <Input.TextArea value={booking.workspace.description} rows={3} />
            </Form.Item>
            <Form.Item label="Workspace Fee">
              <Input value={`${booking.workspace.fee} LKR`} />
            </Form.Item>
          </Col>

          {/* User Information */}
          <Col span={12}>
            <Form.Item label="Package">
              <Input
                value={
                  booking.package ? booking.package.name : "No Package Selected"
                }
              />
            </Form.Item>
            <Form.Item label="User Name">
              <Input value={booking.user.username} />
            </Form.Item>
            <Form.Item label="Email">
              <Input value={booking.user.email} />
            </Form.Item>
          </Col>

          {/* Package Information */}
          <Col span={12}></Col>
        </Row>

        <Row gutter={[16, 16]}>
          {/* Booking Information */}
          <Col span={12}>
            <Form.Item label="Booked Date">
              <Input
                value={new Date(booking.bookedDate).toLocaleDateString()}
              />
            </Form.Item>
            <Form.Item label="Booked Time">
              <Input value={booking.bookedTime.slice(0, 5)} />
            </Form.Item>
            <Form.Item label="Total Charges">
              <Input value={`${booking.totalCharges} LKR`} />
            </Form.Item>
            <Form.Item label="Payment Method">
              <Input value={booking.paymentMethod} />
            </Form.Item>
            <Form.Item label="Payment Status">
              <Input value={booking.paymentStatus} />
            </Form.Item>
            <Form.Item label="Slot">
              <Input value={booking.bookedSlot} />
            </Form.Item>
            <Form.Item label="Start Time">
              <Input value={booking.startTime} />
            </Form.Item>
            <Form.Item label="End Time">
              <Input value={booking.endTime} />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Row justify="end">
        <Col>
          <Button
            type="primary"
            onClick={() => navigate("/user-dashboard/bookings")}
            icon={<LeftOutlined />}
          >
            Back to Bookings
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default UserSingleBookingScreen;
