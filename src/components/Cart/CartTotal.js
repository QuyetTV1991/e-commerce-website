import React from "react";
import { Link } from "react-router-dom";
import CartCheckout from "./CartCheckout";
import Button from "../button/Button";
import { formatMoney } from "../Tools/formatMoney";

const CartTotal = ({ value }) => {
  const { currency } = value.cart[0];
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitalize">
            <Link to="/">
              <Button
                className="btn btn-outline-danger text-uppercase mb-3 px-2 text-danger"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </Button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>
                {formatMoney(cartSubTotal)} {currency}
              </strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong>
                {formatMoney(cartTax)} {currency}
              </strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>
                {formatMoney(cartTotal)} {currency}
              </strong>
            </h5>
            <Link to="/checkouted">
              <CartCheckout
                className="btn btn-outline-danger text-uppercase mb-3 px-2 text-danger"
                onClick={() => clearCart()}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
