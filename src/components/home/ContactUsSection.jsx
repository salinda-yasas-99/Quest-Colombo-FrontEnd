import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { Button, Col, Form, Input, Row, Space, Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const ContactUsSection = () => {
  const onFinish = (values) => {
    console.log("Form Submitted: ", values);
  };
  return (
    <section className="home-contact-section">
      <div className="contact-container">
        <Row gutter={[32, 32]}>
          <Col xs={24} md={12}>
            <div className="contact-info">
              <Title className="contact-title">Get In Touch</Title>
              <Paragraph>
                We would love to hear from you! Fill out the form and we will
                get back to you shortly.
              </Paragraph>

              <Space
                direction="vertical"
                size="middle"
                className="home-contact-section-details"
                
              >
                <div>
                  <MailOutlined /> Email: info@questcolombo.com
                </div>
                <div>
                  <PhoneOutlined /> Phone: +94 123 456 789
                </div>
                <div>
                  <EnvironmentOutlined /> Location: Colombo, Sri Lanka
                </div>
              </Space>
            </div>
          </Col>

          <Col xs={24} md={12}>
            <Form
              layout="vertical"
              onFinish={onFinish}
              className="contact-form"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>

              <Form.Item
                label="Subject"
                name="subject"
                rules={[
                  { required: true, message: "Please enter the subject" },
                ]}
              >
                <Input placeholder="Subject" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <TextArea rows={4} placeholder="Your Message" />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  shape="round"
                  size="large"
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default ContactUsSection;
