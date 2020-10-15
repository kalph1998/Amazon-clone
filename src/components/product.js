import React from "react";
import "./styles/product.scss";

const Product = (props) => {
  return (
    <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>

        <div className="product__rating">
          {Array(props.rating)
            .fill()
            .map((_) => {
              return <span role="img">⭐</span>;
            })}
        </div>
      </div>

      <img className="product__image" src={props.image} alt="product" />
      <button className="product__button">add to cart</button>
    </div>
  );
};

export default Product;
