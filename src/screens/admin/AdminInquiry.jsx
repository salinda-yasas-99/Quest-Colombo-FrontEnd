import { Col, Row, Typography, Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import "./css/AdminInquiry.css";
import { getAllFeedBacks } from "../../services/feedBackService";

const AdminInquiry = () => {
  const { Title } = Typography;
  const [data, setData] = useState([]);

  const fetchInquiries = async () => {
    //setIsLoading(true);
    try {
      const response = await getAllFeedBacks();
      console.log("this is laki", response);
      if (response !== undefined) {
        setData(response);
      }
    } catch (error) {
      console.error("Error fetching departments:", error);
      // } finally {
      //   setIsLoading(false);
      // }
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Action",
      dataIndex: "",
      key: "x",
      render: () => <a>Delete</a>,
    },
  ];

  useEffect(() => {
    fetchInquiries();
  }, []);

  //   const data = [
  //     {
  //       key: "1",
  //       name: "John Brown",
  //       money: "￥300,000.00",
  //       address: "New York No. 1 Lake Park",
  //     },
  //     {
  //       key: "2",
  //       name: "Jim Green",
  //       money: "￥1,256,000.00",
  //       address: "London No. 1 Lake Park",
  //     },
  //     {
  //       key: "3",
  //       name: "Joe Black",
  //       money: "￥120,000.00",
  //       address: "Sydney No. 1 Lake Park",
  //     },
  //   ];

  return (
    <div>
      <Row
        justify="space-between"
        style={{ marginBottom: "30px", display: "flex", alignItems: "center" }}
      >
        <Col>
          <Title level={2}>Inquiries</Title>
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        pagination={false}
        //title={() => "Header"}
      />
    </div>
  );
};

export default AdminInquiry;
