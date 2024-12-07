import React from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./ReduxStore/CartSlice";

export default function Product() {
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  console.log(products);

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <div className="product-info">
            <h2 className="product-title">{product.title}</h2>
            <p className="product-description">
              This is available book on store
            </p>
          </div>
          <div className="product-actions">
            <div className="product-price">${product.price}</div>
            <Button
              btnclass="product-button"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
