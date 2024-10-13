import { CheckOutlined, LockOutlined } from "@ant-design/icons";
import { Button, Card, Col, DatePicker, Row, Typography } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const mockWorkspaceData = [
  {
    id: 1,
    name: "Conference Room A",
    description: "Spacious room with modern amenities for meetings.",
    location: "First Floor",
    fee: "5000.00",
    imageUrl: "https://via.placeholder.com/200", // Placeholder image URL
    workspace_type_id: 1,
    workspace_type: {
      id: 1,
      type_name: "Conference Room",
    },
    slot_1: "available",
    slot_2: "booked",
    slot_3: "available",
  },
  {
    id: 2,
    name: "Conference Room B",
    description: "Cozy room for team discussions and presentations.",
    location: "Second Floor",
    fee: "4000.00",
    imageUrl: "https://via.placeholder.com/200",
    workspace_type_id: 1,
    workspace_type: {
      id: 1,
      type_name: "Conference Room",
    },
    slot_1: "booked",
    slot_2: "booked",
    slot_3: "available",
  },
  {
    id: 3,
    name: "Private Office A",
    description: "Ideal for focused work or small team meetings.",
    location: "Third Floor",
    fee: "3000.00",
    imageUrl: "https://via.placeholder.com/200",
    workspace_type_id: 2,
    workspace_type: {
      id: 2,
      type_name: "Private Office",
    },
    slot_1: "available",
    slot_2: "available",
    slot_3: "booked",
  },
  {
    id: 4,
    name: "Coworking Space A",
    description: "Open-plan space with individual desks.",
    location: "Ground Floor",
    fee: "2000.00",
    imageUrl: "https://via.placeholder.com/200",
    workspace_type_id: 3,
    workspace_type: {
      id: 3,
      type_name: "Coworking Space",
    },
    slot_1: "available",
    slot_2: "available",
    slot_3: "available",
  },
  {
    id: 5,
    name: "Coworking Space B",
    description: "Shared workspace with great natural lighting.",
    location: "Ground Floor",
    fee: "1800.00",
    imageUrl: "https://via.placeholder.com/200",
    workspace_type_id: 3,
    workspace_type: {
      id: 3,
      type_name: "Coworking Space",
    },
    slot_1: "booked",
    slot_2: "available",
    slot_3: "available",
  },
];

const UserWorkspacesByTypeScreen = () => {
  const navigate = useNavigate();
  const [workspaces, setWorkspaces] = useState(mockWorkspaceData);
  //   const [selectedDate, setSelectedDate] = useState(dayjs());

  // Fetch workspaces on date or type change
  const fetchWorkspaces = async (date) => {
    try {
      const formattedDate = date.format("YYYY-MM-DD");
      const response = await axios.post("/api/workspaces", {
        workspace_type_id: workspaceTypeId,
        date: formattedDate,
      });
      setWorkspaces(response.data);
    } catch (error) {
      message.error("Failed to fetch workspaces");
    }
  };

  //   useEffect(() => {
  //     fetchWorkspaces(selectedDate); // Fetch workspaces for the current date on load
  //   }, [selectedDate]);

  //   const onDateChange = (date) => {
  //     setSelectedDate(date);
  //   };

  //   const navigateToBooking = (workspaceId, slot) => {
  //     // Navigate to the booking page with workspaceId and slot data
  //     navigate(`/${workspaceId}/create-booking`, {
  //       state: { workspaceId, slot, date: "2022-01-20" },
  //     });
  //   };

  const navigateToSingleWorkspaceView = (workspaceId) => {
    navigate(`${workspaceId}`, {
      state: { workspaceId },
    });
  };

  return (
    <div>
      <Title level={2} style={{ textAlign: "left", marginBottom: "30px" }}>
        Available Workspaces
      </Title>

      {/* Date Picker to select a date */}
      <DatePicker
        // defaultValue={selectedDate}
        // onChange={onDateChange}
        style={{ marginBottom: "20px" }}
      />

      {/* Workspace Cards */}
      <Row gutter={[16, 16]} justify="center">
        {workspaces.length ? (
          workspaces.map((workspace) => (
            <Col
              key={workspace.id}
              xs={24}
              sm={12}
              md={8}
              lg={6} // Responsive grid for workspaces
            >
              <Card
                hoverable
                cover={<img alt={workspace.name} src={workspace.imageUrl} />}
                style={{
                  textAlign: "center",
                  borderRadius: "10px",
                  backgroundColor: "white",
                }}
                onClick={() => navigateToSingleWorkspaceView(workspace.id)}
              >
                <Title level={4}>{workspace.name}</Title>
                <Text>{workspace.description}</Text>
                <br />
                <Text>Location: {workspace.location}</Text>
                <br />
                <Text>Fee: {workspace.fee} LKR</Text>
                <br />

                {/* Slot Availability */}
                <div style={{ marginTop: "10px" }}>
                  <Button
                    disabled={workspace.slot_1 === "booked"}
                    // onClick={() => navigateToBooking(workspace.id, 1)}
                    icon={
                      workspace.slot_1 === "booked" ? (
                        <LockOutlined />
                      ) : (
                        <CheckOutlined />
                      )
                    }
                    style={{ marginBottom: "10px", width: "100%" }}
                  >
                    {workspace.slot_1 === "booked"
                      ? "Slot 1 - Booked"
                      : "Slot 1 - Available"}
                  </Button>
                  <Button
                    disabled={workspace.slot_2 === "booked"}
                    // onClick={() => navigateToBooking(workspace.id, 2)}
                    icon={
                      workspace.slot_2 === "booked" ? (
                        <LockOutlined />
                      ) : (
                        <CheckOutlined />
                      )
                    }
                    style={{ marginBottom: "10px", width: "100%" }}
                  >
                    {workspace.slot_2 === "booked"
                      ? "Slot 2 - Booked"
                      : "Slot 2 - Available"}
                  </Button>
                  <Button
                    disabled={workspace.slot_3 === "booked"}
                    // onClick={() => navigateToBooking(workspace.id, 3)}
                    icon={
                      workspace.slot_3 === "booked" ? (
                        <LockOutlined />
                      ) : (
                        <CheckOutlined />
                      )
                    }
                    style={{ width: "100%" }}
                  >
                    {workspace.slot_3 === "booked"
                      ? "Slot 3 - Booked"
                      : "Slot 3 - Available"}
                  </Button>
                </div>
              </Card>
            </Col>
          ))
        ) : (
          <Text>No workspaces available for the selected date.</Text>
        )}
      </Row>
    </div>
  );
};

export default UserWorkspacesByTypeScreen;
