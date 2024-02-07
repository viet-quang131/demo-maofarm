import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input, InputNumber, message, Upload, Image } from "antd";

import { useAddProductMutation } from "@/api/product";

type FieldType = {
  name?: string;
  price?: number;
  image?: string;
};

const AdminProductAdd: React.FC = () => {
  const [form] = Form.useForm();
  const [addProduct] = useAddProductMutation();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  const onFinish = (values: any) => {
    addProduct({ ...values, image: imageSrc })
      .unwrap()
      .then(() => {
        messageApi.open({
          type: "success",
          content: "Thêm thành công",
        });
        navigate("/admin/product");
      });
    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("failed", errorInfo);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  return (
    <>
      <header>
        <h2>Thêm sản phẩm</h2>
      </header>
      {contextHolder}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true, message: "Nhập tên sản phẩm" }, { min: 3, message: "Ít nhất 3 ký tự" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Giá sản phẩm"
          name="price"
          rules={[{ required: true, message: "Nhập giá sản phẩm" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Ảnh"
          name="image"
          rules={[{ required: true, message: "Chọn ảnh" }]}
        >
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </Form.Item>

        <Form.Item label="Xem trước ảnh" wrapperCol={{ span: 16, offset: 8 }}>
          {imageSrc && <Image src={imageSrc} alt="Ảnh sản phẩm" width={200} />}
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AdminProductAdd;