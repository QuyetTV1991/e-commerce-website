import React from "react";
import { ProductConsumer } from "./context";
import "./PopUp.css";
import { Link } from "react-router-dom";

const PopUp = () => {
  return (
    <ProductConsumer>
      {value => {
        const { popUpOpen, closePopUp } = value;
        const { img, name, price, currency } = value.popUpProduct;
        if (!popUpOpen) {
          return null;
        } else {
          return (
            <div className="wrap-container">
              <div className="container">
                <div className="row">
                  <div className="pop-up col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize pt-2">
                    <h4>Item Added To The Cart</h4>
                    <img src={img} alt="product" className="img-fluid" />
                    <h2>{name}</h2>
                    <h5 className="text-muted">
                      <strong>price: </strong>
                      {price} {currency}
                    </h5>
                    <div className="d-flex justify-content-around pb-1 mb-1">
                      <Link to="/">
                        <button
                          className="btn-primary text-capitalize"
                          onClick={() => closePopUp()}
                        >
                          continue shopping
                        </button>
                      </Link>
                      <Link to="/cart">
                        <button
                          className="btn-primary text-capitalize"
                          onClick={() => closePopUp()}
                        >
                          go to cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      }}
    </ProductConsumer>
  );
};

export default PopUp;
