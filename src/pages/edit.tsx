import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, InputNumber, message, Image } from "antd";
import { useUpdateProductMutation, useGetProductByIdQuery } from "@/api/product";

type FieldType = {
  name?: string;
  price?: number;
  image?: string;
};

const AdminProductEdit: React.FC = () => {
  const [form] = Form.useForm();
  const [updateProduct] = useUpdateProductMutation();
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const { idProduct } = useParams<{ idProduct: string }>();
  const { data: productData } = useGetProductByIdQuery(idProduct || "");
  const [imageSrc, setImageSrc] = useState<string | undefined>(productData?.image);

  useEffect(() => {
    form.setFieldsValue(productData);
    setImageSrc(productData?.image);
  }, [form, productData]);

  const onFinish = (values: any) => {
    updateProduct({ ...values, id: idProduct, image: imageSrc })
      .unwrap()
      .then(() => {
        messageApi.open({
          type: "success",
          content: "Cập nhật thành công",
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
        <h2>Cập nhật sản phẩm</h2>
      </header>
      {contextHolder}
      <Form
        form={form}
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
          rules={[{ required: true, message: "Nhập tên ảnh" }]}
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

export default AdminProductEdit;