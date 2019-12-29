import React from "react";
import { Link } from "react-router-dom";

const CartTotal = ({ value }) => {
  const { currency } = value.cart[0];
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right text-capitalize">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-2"
                type="button"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>
                {cartSubTotal} {currency}
              </strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong>
                {cartTax} {currency}
              </strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>
                {cartTotal} {currency}
              </strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
