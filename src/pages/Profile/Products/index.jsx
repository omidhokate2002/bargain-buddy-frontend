/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Button, Table, message } from "antd";
import { useEffect, useState } from "react";
import ProductForm from "./ProductFom";
import { useDispatch } from "react-redux";
import { SetLoader } from "../../../redux/loaderSlice";
import { GetProducts } from "../../../apicalls/product";



const Products = () => {
  const [products, setProducts] = useState([])
  const [showProductForm, setShowProductForm] = useState(false);
  const dispatch = useDispatch()

  const getData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetProducts();
      dispatch(SetLoader(false));
      if (response.success) {
        setProducts(response.products);
      } else {
        message.error('API error: ' + response.error);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error('Unexpected error: ' + error.message);
    }

  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return <div className="flex gap-5">
          <i className="ri-delete-bin-line"></i>
          <i className="ri-pencil-line"></i>
        </div>
      }
    },
  ]

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <div className="flex justify-end mb-2">
        <Button type="default" onClick={() => setShowProductForm(true)}>
          Add Product
        </Button>
      </div>

      <Table columns={columns} dataSource={products} />

      {showProductForm && (
        <ProductForm
          showProductForm={showProductForm}
          setShowProductForm={setShowProductForm}
        />
      )}
    </div>
  );
};

export default Products;
