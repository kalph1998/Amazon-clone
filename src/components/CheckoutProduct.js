import React from "react";
import "./styles/checkoutProduct.scss";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = (props) => {
  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img
        className="checkoutProduct__image"
        src={props.image}
        alt="productImage"
      />
      <div className="checkoutProduct__details">
        <p className="checkoutProduct__title">{props.title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(props.rating)
            .fill()
            .map((_) => {
              return <span role="img">⭐</span>;
            })}
        </div>
        <button onClick={removeFromBasket} className="checkoutProduct__remove">
          Remove from basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
