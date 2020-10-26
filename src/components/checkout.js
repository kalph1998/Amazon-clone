import React from "react";
import { useStateValue } from "../StateProvider";
import "./styles/checkout.scss";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img16/vineet/editorialjup/Jupiter_GW-Editorial_1150x323_NCE._CB418800911_.jpg"
          alt="advertisment"
        />
        {basket?.length === 0 ? (
          <div className="checkout__empty">
            <img
              src="https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg"
              alt="emptyBasket"
              className="checkout__empty--image"
            />
            <div className="checkout__basket">
              <h1>Your Amazon Basket is empty</h1>
              <Link to="/">
                <button> shop todays deals</button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">your shopping basket</h2>
            {basket?.map((item) => {
              return (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket?.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
