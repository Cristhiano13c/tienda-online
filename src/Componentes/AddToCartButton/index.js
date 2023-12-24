import React, { useContext } from "react";
import { DataContext } from "../../contexto/DataProvider";

const AddToCartButton = ({ productId }) => {
  const value = useContext(DataContext);
  const addCarrito = value.addCarrito;

  return (
    <button className="btn" onClick={() => addCarrito(productId)}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
