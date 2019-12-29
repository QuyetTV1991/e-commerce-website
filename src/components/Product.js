import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ProductConsumer } from "./context";
import { formatMoney } from "./Tools/formatMoney";

const Product = props => {
  const { id, name, img, price, currency, inCart } = props.product;
  return (
    <div className="product-card col-9 mx-auto col-md-6 col-lg-4 my-3">
      <div className="card">
        <ProductConsumer>
          {value => (
            <div
              className="img-container p-5"
              onClick={() => value.handleDetail(id)}
            >
              <Link to="/detail">
                <img src={img} alt="product" className="card-img-top" />
              </Link>
              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(id);
                  value.openPopUp(id);
                }}
              >
                {inCart ? (
                  <p className="text-capitalize mb-0">in cart</p>
                ) : (
                  <i className="fas fa-cart-plus" />
                )}
              </button>
            </div>
          )}
        </ProductConsumer>
        <div className="card-footer d-flex justify-content-between">
          <p className="align-seft-center mb-0">{name}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">
              {formatMoney(price)} {currency}
            </span>
          </h5>
        </div>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string,
    inCart: PropTypes.bool
  }).isRequired
};

export default Product;
