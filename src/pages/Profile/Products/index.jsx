import { Button } from "antd";
import { useState } from "react";
import ProductForm from "./ProductFom";

const Products = () => {
  const [showProductForm, setShowProductForm] = useState(false);
  return (
    <div>
      <div className="flex justify-end">
        <Button type="default" onClick={() => setShowProductForm(true)}>
          Add Product
        </Button>
      </div>
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
