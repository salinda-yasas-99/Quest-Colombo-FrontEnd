import { RightOutlined } from "@ant-design/icons";
import { Card, Col, Row, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const UserWorkspaceTypes = () => {
  const navigate = useNavigate();
  const workspaceTypes = [
    { id: 1, name: "Development" },
    { id: 2, name: "Design" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" },
    { id: 5, name: "Support" },
    { id: 6, name: "HR" },
    { id: 7, name: "Finance" },
    { id: 8, name: "Legal" },
  ];

  const onCardClick = (workspaceType) => {
    // Navigate to the page corresponding to the workspace type
    navigate(`workspace-types/${workspaceType.id}`);
  };
  return (
    <div>
      <Title level={2} style={{ textAlign: "left", marginBottom: "30px" }}>
        Select Your Workspace
      </Title>

      <Row gutter={[16, 16]} justify="center">
        {workspaceTypes.map((workspaceType) => (
          <Col
            key={workspaceType.id}
            xs={24}
            sm={12}
            md={8}
            lg={6} // Responsive layout: 1 card on extra-small, 2 cards on small, 3 on medium, 4 on large+
          >
            <Card
              hoverable
              className="workspace-card"
              style={{
                textAlign: "center",
                borderRadius: "10px",
                backgroundColor: "white",
              }}
              onClick={() => onCardClick(workspaceType)}
            >
              <Title level={4}>
                {workspaceType.name} <RightOutlined />
              </Title>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default UserWorkspaceTypes;
