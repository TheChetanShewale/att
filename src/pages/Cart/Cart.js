import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../store/cartSlice";

import "./Cart.css";

const Cart = () => {
  const productsInCart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const calculateTotal = () => {
    let total = 0;
    productsInCart.forEach((product) => {
      total += product.price;
    });
    return total;
  };

  return (
    <div className="cart-product-list">
      {productsInCart.length > 0 && (
        <div className="cart-total-wrapper">
          <div className="cart-total">Total: </div>
          <div>{`RS ${calculateTotal().toFixed(2)}`}/-</div>
        </div>
      )}
      {!productsInCart.length ? (
        <div>Cart is empty</div>
      ) : (
        productsInCart.map((product) => (
          <div key={product.id} className="cart-product-item">
            <div className="cart-product-image-container">
              <img
                src={product.image}
                alt={product.title}
                className="cart-product-image"
              />
            </div>
            <div className="cart-product-info">
              <h2 className="cart-product-title">{product.title}</h2>
              <p className="cart-product-description">{product.description}</p>
              <p className="cart-product-price">{`Price: RS ${product.price.toFixed(
                2
              )}/-`}</p>
              <div
                className="remove-from-cart"
                onClick={() => dispatch(remove(product.id))}
              >
                Remove
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
