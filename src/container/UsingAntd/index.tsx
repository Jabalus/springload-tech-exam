import { Button, Form, Input, Select } from "antd";
import React from "react";
import { colours, animals } from "./constants";

const UsingAntd = () => {
  const [form] = Form.useForm();

  const animalValue = Form.useWatch("animals", form);

  const shouldRenderTiger = animalValue?.includes("Tiger");

  return (
    <Form layout="vertical" form={form}>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            type: "email",
            message: "must be a valid email e.g. abc@def.xyz",
          },
        ]}
      >
        <Input type="email" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ min: 9, message: "must be longer than 8 characters." }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item label="Colour" name="colour">
        <Select
          style={{ width: "100%" }}
          placeholder="Please select"
          options={colours}
        />
      </Form.Item>
      <Form.Item label="Animals" name="animals">
        <Select
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Please select"
          options={animals}
        />
      </Form.Item>
      {shouldRenderTiger && (
        <Form.Item
          label="Type of Tiger"
          name="tigerType"
          rules={[{ required: true, message: "Required" }]}
        >
          <Input />
        </Form.Item>
      )}
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default UsingAntd;
