import { useGetProductsQuery, useRemoveProductMutation } from "@/api/product";
import { IProduct } from "@/interfaces/product";
import { Button, Table, Popconfirm } from "antd";
import { Link } from "react-router-dom";

type Props = {};

const AdminProduct = (props: Props) => {
    const { data: productData } = useGetProductsQuery();
    const [removeProduct, { isLoading: isRemoveLoading }] = useRemoveProductMutation();
    const dataSource = productData?.map((product: IProduct) => ({
        key: product.id,
        name: product.name,
        price: product.price,
        image: product.image
    }));
    const confirm = (id: number | string) => {
        removeProduct(id);
    };
    const columns = [
        {
            title: "Tên sản phẩm",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "gia sp",
            dataIndex: "price",
            key: "price",
        },
        
        {
            title: "img",
            dataIndex: "image",
            key: "image",
            render: (img: string) =>  <img src={img} alt="Product" style={{ maxWidth: "100px" }} />,
        },
        
        
        {
            render: ({ key: id }: { key: number | string }) => {
                return (
                    <>
                        <Button>
                            <Link to={`/admin/product/${id}/edit`}>Sửa</Link>
                        </Button>
                        <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={() => confirm(id)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button type="primary" danger className="ml-2">
                            Xóa
                        </Button>
                        </Popconfirm>
                    </>
                );
            },
        },
    ];

    return (
        <div>
            <header className="flex items-center justify-between mb-4">
                <h2 className="text-2xl">Quản lý sản phẩm</h2>
                <Button type="primary" danger>
                    <Link to="/admin/product/add">Thêm sản phẩm</Link>
                </Button>
            </header>
            <Table dataSource={dataSource} columns={columns} />;
        </div>
    );
};

export default AdminProduct;
