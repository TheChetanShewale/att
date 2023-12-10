import { useState, useEffect, Fragment } from "react";
import "./Home.css";

import { useDispatch, useSelector } from "react-redux";
import { add } from "../../store/cartSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => {
        setProducts(result);
      })
      .catch((error) => console.log(error));
  }, []);

  const checkProduct = (product) => {
    return productsInCart.find((item) => item.id === product.id);
  };

  const renderItem = ({ item }) => (
    <div className="card">
      <img src={item.image} alt={item.title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{item.title}</h2>
        <p className="product-description">{item.description}</p>
      </div>
      <div>{`Price: RS ${item.price}/-`}</div>
      <button
        className="add-to-cart"
        onClick={() => {
          checkProduct(item)
            ? alert("Product already present in cart")
            : dispatch(add(item));
        }}
      >
        Add to Cart
      </button>
    </div>
  );

  return (
    <div className="container">
      {!products.length ? (
        <div>Loading...</div>
      ) : (
        products.map((item) => (
          <Fragment key={item.id}>{renderItem({ item })}</Fragment>
        ))
      )}
    </div>
  );
};

export default Home;
