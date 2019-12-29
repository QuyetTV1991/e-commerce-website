import React, { Component } from "react";
import { Link } from "react-router-dom";
import shop_logo from "../images/funiture-logo.png";
import './Navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-primary navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={shop_logo} alt="shop logo" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Product
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button className="button">
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            My Cart
          </button>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
