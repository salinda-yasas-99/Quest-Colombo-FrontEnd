import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Modal } from "antd";

const CreateAdminModal = ({
  form,
  isCreateModalVisible,
  setIsCreateModalVisible,
  handleCreatePackage,
  //isCreateLoading,
}) => {
  return (
    <Modal
      title="Register New Admin"
      open={isCreateModalVisible}
      onCancel={() => {
        setIsCreateModalVisible(false);
        form.resetFields();
      }}
      footer={null}
    >
      <Form
        name="create-admin"
        form={form}
        layout="vertical"
        onFinish={handleCreatePackage}
        initialValues={{
          package_name: "",
          details: [" "],
          price: 0,
        }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="User Name"
          name="username"
          rules={[{ required: true, message: "Please enter the user name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter the password" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirmPassword"
          rules={[{ required: true, message: "Please enter confirm password" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100%" }}
            //loading={isCreateLoading}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateAdminModal;
