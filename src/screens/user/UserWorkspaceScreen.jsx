import { CheckOutlined, LockOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Empty,
  Form,
  notification,
  Row,
  Select,
  Spin,
  Typography,
} from "antd";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import Image360Viewer from "../../components/user/Image360Viewer";
import { getAllPackages } from "../../services/packagesService";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { createBooking } from "../../services/bookingService";

const { Text, Title } = Typography;
const { Option } = Select;

const UserWorkspaceScreen = () => {
  const location = useLocation();
  const { workspace, formattedDate } = location.state || {};
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [packageLoading, setPackageLoading] = useState(false);
  const [packages, setPackages] = useState([]);
  const [api, contextHolder] = notification.useNotification();
  const loggedUser = useSelector((state) => state.user.user);
  const [stripeToken, setStripeToken] = useState(null);
  const [selectedBookingData, setSelectedBookingData] = useState(null);

  const KEY =
    "pk_test_51PZDQYGtHEDchr7LN5VKrI4bTTedKBTYHe1KqSchbR8r8IteKIrjob2qLx71GnsjAQbp27jHd0vu0c2omHSxtE2C00MlvZAAUF";

  const onToken = (token) => {
    console.log("This is stripe token", token);
    setStripeToken(token);
  };

  const getTotalAmount = () => {
    const result = packages.find((pkg) => pkg.id === selectedPackage);
    const totalCharges =
      parseFloat(workspace.fee) + (result ? parseFloat(result.price) : 0);
    return totalCharges;
  };

  const onFinish = async (values) => {
    // Construct the new object with the form values

    const result = packages.find((pkg) => pkg.id === selectedPackage);

    let bookingStart = "";
    let bookingEnd = "";

    if (values.bookedSlot === "slot_1") {
      bookingStart = "10:00:00";
      bookingEnd = "12:00:00";
    }
    if (values.bookedSlot === "slot_2") {
      bookingStart = "13:00:00";
      bookingEnd = "15:00:00";
    }
    if (values.bookedSlot === "slot_3") {
      bookingStart = "17:00:00";
      bookingEnd = "19:00:00";
    }

    const totalCharges =
      parseFloat(workspace.fee) + (result ? parseFloat(result.price) : 0);

    console.log("This is package", result);
    console.log("This is booking start", bookingStart);
    console.log("This is booking end", bookingEnd);

    const bookingData = {
      // Assuming workspace ID exists
      totalCharges: totalCharges,
      bookedDate: values.bookedDate.format("YYYY-MM-DD"), // Formatting the date
      bookedTime: dayjs().format("HH:mm:ss"),
      paymentMethod: "Online",
      paymentStatus: "Paid",
      bookedSlot: values.bookedSlot,
      startTime: bookingStart,
      endTime: bookingEnd,
      user_id: loggedUser.id,
      workspace_id: workspace.id,
      //stripeToken: stripeToken.id,
      package_id: selectedPackage ? selectedPackage : null,
    };

    // Log the constructed object (for testing purposes)
    console.log("Booking Data: ", bookingData);
    //console.log("This token: ", bookingData.stripeToken);
    setSelectedBookingData(bookingData);
  };

  // useEffect(() => {
  //   if (stripeToken && selectedBookingData) {
  //     console.log("Success booking", selectedBookingData);
  //     createBooking(selectedBookingData, loggedUser.id)
  //       .then((response) => {
  //         // Handle success, such as showing notification or redirecting user
  //         console.log("Booking successfully created", response);
  //         alert(response);
  //         openNotificationWithIcon(
  //           "success",
  //           "Booking Successful",
  //           "Your booking has been confirmed."
  //         );
  //       })
  //       .catch((error) => {
  //         openNotificationWithIcon(
  //           "error",
  //           "Booking Failed",
  //           error?.data?.message || "An error occurred while booking"
  //         );
  //         console.error("Error occurred while creating booking: ", error);
  //         alert(error);
  //       });
  //   }
  // }, [stripeToken, selectedBookingData]);

  // useEffect(() => {
  //   if (stripeToken) {
  //     onFinish();
  //   }
  // }, [stripeToken]);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const bookingObj = {
          stripeToken: stripeToken.id,
          ...selectedBookingData,
        };

        const response = await createBooking(bookingObj, loggedUser.id);
        console.log("order placed", response);
        alert(response.data);
      } catch (err) {
        console.log(err);
        alert(err);
      }
    };
    if (stripeToken) {
      makeRequest();
    }
  }, [stripeToken]);

  const openNotificationWithIcon = (type, message, description) => {
    api[type]({
      message: message,
      description: description,
      placement: "bottomRight",
    });
  };

  const fetchAllPackages = async () => {
    setPackageLoading(true);
    try {
      const response = await getAllPackages();
      setPackages(response);
    } catch (error) {
      openNotificationWithIcon(
        "error",
        "Error",
        error?.data?.message || "An error occurred"
      );
      console.error("Erro ocurred while getting packages: ", error);
    } finally {
      setPackageLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPackages();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      {contextHolder}
      <DatePicker
        defaultValue={dayjs(formattedDate, "YYYY-MM-DD")}
        disabled
        style={{ marginBottom: "20px" }}
      />

      <Image360Viewer imageUrl={workspace.imageUrl} />

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
        {packageLoading ? (
          <Spin
            size="large"
            style={{
              display: "flex",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
        ) : (
          <Row gutter={[16, 16]}>
            {packages.length > 0 ? (
              packages.map((pkg) => (
                <Col key={pkg.id} xs={24} sm={12} md={8}>
                  <Card
                    hoverable
                    style={{
                      textAlign: "center",
                      borderRadius: "10px",
                      borderColor:
                        selectedPackage === pkg.id ? "#00b96b" : "#f0f0f0",
                      backgroundColor: "white",
                    }}
                    onClick={() => setSelectedPackage(pkg.id)}
                  >
                    <Title level={5}>{pkg.package_name}</Title>
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
              ))
            ) : (
              <Empty description={<Text>No Packages Available</Text>}></Empty>
            )}
          </Row>
        )}
      </div>

      {/* Book Now Form  */}
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      >
        <Title level={4}>Book Now</Title>
        <Form
          layout="vertical"
          name="create_booking"
          initialValues={{
            remember: true,
          }}
          style={{
            maxWidth: "100%",
          }}
          onFinish={onFinish}
        >
          <Form.Item
            label="Selected Date"
            name="bookedDate"
            rules={[
              { required: true, message: "Please select a booking date!" },
            ]}
            initialValue={dayjs(formattedDate, "YYYY-MM-DD")}
          >
            <DatePicker disabled style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Select Slot"
            rules={[
              {
                required: true,
                message: "Please select a slot!",
              },
            ]}
            name="bookedSlot"
          >
            <Select
              placeholder="Select a slot"
              value={selectedSlot}
              onChange={setSelectedSlot}
            >
              <Option value="slot_1" disabled={workspace.slot_1 === "booked"}>
                Slot 1:{" "}
                {workspace.slot_1 === "available" ? "Available" : "Booked"}
              </Option>
              <Option value="slot_2" disabled={workspace.slot_2 === "booked"}>
                Slot 2:{" "}
                {workspace.slot_2 === "available" ? "Available" : "Booked"}
              </Option>
              <Option value="slot_3" disabled={workspace.slot_3 === "booked"}>
                Slot 3:{" "}
                {workspace.slot_3 === "available" ? "Available" : "Booked"}
              </Option>
            </Select>
          </Form.Item>

          <Form.Item label="Select Package" name="package_id">
            <Select
              placeholder="Select a package"
              value={selectedPackage}
              onChange={setSelectedPackage}
            >
              {packages.map((pkg) => (
                <Select.Option key={pkg.id} value={pkg.id}>
                  {pkg.package_name} - {pkg.price} LKR
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item>
            <StripeCheckout
              name="Shoe Heaven"
              shippingAddress
              description={`Your total is Rs.${getTotalAmount()}`}
              amount={getTotalAmount() * 100} // Amount in cents
              token={onToken}
              stripeKey={KEY}
              currency="LKR"
            >
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                Book Now
              </Button>
            </StripeCheckout>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default UserWorkspaceScreen;
