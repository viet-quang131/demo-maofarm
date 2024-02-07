import { useGetUserQuery } from "@/api/user";
import { IUser } from "@/interfaces/user";
import { Table, Button, Skeleton, Popconfirm, Alert } from "antd";
import { AiOutlineLoading } from "react-icons/ai";
import { Link } from "react-router-dom";

type Props = {};

const AdminUser = () => {
    const { data: userData } = useGetUserQuery();
    const dataSource = userData?.users?.map((user: IUser) => ({
    key: user.id,
    name: user.name,
    fullname: user.fullname,
    ngaysinh: user.ngaysinh,
    email: user.email,
    password: user.password,
    role: user.role,
    status: user.status,
    favoriteProducts: user.favoriteProducts,
    addressUser: user.addressUser
  }));
  
  const columns = [
    {
      title: "Tên khách hàng",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Họ và tên",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Ngày sinh",
      dataIndex: "ngaysinh",
      key: "ngaysinh",
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
    },
    // {
    //   title: "password",
    //   dataIndex: "password",
    //   key: "password",
    // },
    {
      title: "role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "favoriteProducts",
      dataIndex: "favoriteProducts",
      key: "favoriteProducts",
    },
    {
      title: "addressUser",
      dataIndex: "addressUser",
      key: "addressUser",
    },
    {
      title: "",
      render: ({ key: _id }: any) => {
        return (
          <>
              <div className="flex space-x-2">
                  <Popconfirm
                      title="Are you fucking sure?"
                      onConfirm={() => confirm(_id)}
                      okText="Yes"
                      cancelText="No"
                  >
                      <Button type="primary" danger>
                          Xóa
                      </Button>
                  </Popconfirm>

                  <Button type="primary" danger>
                      <Link to={`/admin/product/${_id}/edit`}>Sửa</Link>
                  </Button>
              </div>
          </>
      );
  },
},
];

return (
<>
  <header className="mb-4 flex justify-between items-center">
      <h2 className="font-bold text-2xl">Quản lý sản phẩm</h2>
      <Button type="primary" danger>
          <Link to="/admin/product/add" className="flex items-center space-x-2">
              Thêm sản phẩm
          </Link>
      </Button>
  </header>
  <Table dataSource={dataSource} columns={columns} />

       
</>
);
};

export default AdminUser;