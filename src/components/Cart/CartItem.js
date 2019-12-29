import React from "react";
import { formatMoney } from "../Tools/formatMoney";

const CartItem = ({ item, value }) => {
  const { id, img, name, price, currency, count, total } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt="product"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none text-capitalize">product :</span>
        {name}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none text-capitalize">price :</span>
        {formatMoney(price)} {currency}
      </div>
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <span className="btn btn-black mx-1" onClick={() => decrement(id)}>
              -
            </span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => increment(id)}>
              +
            </span>
          </div>
        </div>
      </div>
      <div
        className="remove-icon col-10 mx-auto col-lg-2"
        onClick={() => removeItem(id)}
      >
        <i className="fas fa-trash" />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        {formatMoney(total)} {currency}
      </div>
    </div>
  );
};

export default CartItem;
