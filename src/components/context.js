import React, { Component } from "react";
import { data, detailProduct } from "../data";

const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    popUpOpen: false,
    popUpProduct: detailProduct
  };
  componentDidMount() {
    this.setProducts();
  }
  setProducts = () => {
    let tempProduct = [];
    data.forEach(item => {
      const singleItem = { ...item };
      tempProduct = [...tempProduct, singleItem];
    });
    this.setState(() => {
      return {
        products: tempProduct
      };
    });
  };
  getSingleProductData = id => {
    const singleProduct = this.state.products.find(
      product => product.id === id
    );
    return singleProduct;
  };
  handleDetail = id => {
    const singleProduct = this.getSingleProductData(id);
    this.setState(() => {
      return { detailProduct: singleProduct };
    });
  };
  addToCart = id => {
    const tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getSingleProductData(id));
    const productAdded = tempProducts[index];
    productAdded.inCart = true;
    productAdded.count = 1;
    productAdded.total = productAdded.price * productAdded.count;
    this.setState(
      () => {
        return {
          products: tempProducts,
          cart: [...this.state.cart, productAdded]
        };
      },
      () => this.calculateTotal()
    );
  };
  openPopUp = id => {
    const product = this.getSingleProductData(id);
    this.setState(() => {
      return {
        popUpProduct: product,
        popUpOpen: true
      };
    });
  };
  closePopUp = () => {
    this.setState(() => {
      return {
        popUpOpen: false
      };
    });
  };
  increment = id => {
    let tempCart = [...this.state.cart];
    let index = tempCart.indexOf(this.getSingleProductData(id));
    let selectedItem = tempCart[index];

    selectedItem.count += 1;
    selectedItem.total = selectedItem.count * selectedItem.price;
    this.setState(() => {
      return {
        cart: [...tempCart]
      };
    }, this.calculateTotal());
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    let index = tempCart.indexOf(this.getSingleProductData(id));
    let selectedItem = tempCart[index];

    selectedItem.count -= 1;
    if (selectedItem.count === 0) {
      this.removeItem(id);
    } else {
      selectedItem.total = selectedItem.count * selectedItem.price;
      this.setState(() => {
        return {
          cart: [...tempCart]
        };
      }, this.calculateTotal());
    }
  };
  removeItem = id => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.products];
    tempCart = tempCart.filter(item => item.id !== id);
    const index = tempProducts.indexOf(this.getSingleProductData(id));
    let removedItem = tempProducts[index];
    removedItem.inCart = false;
    removedItem.count = 0;
    removedItem.total = 0;
    this.setState(() => {
      return {
        cart: [...tempCart],
        products: [...tempProducts]
      };
    }, this.calculateTotal());
  };
  clearCart = () => {
    this.setState(
      () => {
        return {
          cart: []
        };
      },
      () => {
        this.setProducts();
        this.calculateTotal();
      }
    );
  };
  calculateTotal = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const total = subTotal + tempTax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tempTax,
        cartTotal: total
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openPopUp: this.openPopUp,
          closePopUp: this.closePopUp,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
