import React from "react";
import "./styles/product.scss";
import { useStateValue } from "../StateProvider";

const Product = (props) => {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };

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
      <button onClick={addToBasket} className="product__button">
        add to cart
      </button>
    </div>
  );
};

export default Product;
