import React from "react";
import { ProductConsumer } from "./context";
import { Link } from "react-router-dom";
import Button from "./button/Button";
import { formatMoney } from "./Tools/formatMoney";

const Detail = () => {
  return (
    <ProductConsumer>
      {value => {
        const {
          id,
          img,
          name,
          price,
          currency,
          info,
          inCart
        } = value.detailProduct;
        return (
          <div className="container py-5">
            <div className="row">
              <div className="col-10 mx-auto text-center text-blue text-slanted">
                <h2>{name}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <img src={img} className="img-fluid" alt="product" />
              </div>
              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h2>Name: {name}</h2>
                <h4 className="text-blue">
                  <strong>
                    price:{" "}
                    <span>
                      {formatMoney(price)} {currency}
                    </span>
                  </strong>
                </h4>
                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product
                </p>
                <p className="text-muted lead">{info}</p>
                <div className="d-flex justify-content-around">
                  <Link to="/">
                    <Button>Back To Shopping</Button>
                  </Link>
                  <Button
                    className="text-capitalize"
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openPopUp(id);
                    }}
                  >
                    {inCart ? "in cart" : "add to cart"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Detail;
