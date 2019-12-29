import React from "react";
import Title from "../Title";
import CartColumn from "./CartColumn";
import CartEmpty from "./CartEmpty";
import { ProductConsumer } from "../context";
import CartList from "./CartList";
import CartTotal from "./CartTotal";

const Cart = () => {
  return (
    <section>
      <ProductConsumer>
        {value => {
          const { cart } = value;
          if (cart.length > 0) {
            return (
              <>
                <Title name="your" title="cart" />
                <CartColumn />
                <CartList value={value} />
                <CartTotal value={value} />
              </>
            );
          } else {
            return <CartEmpty />;
          }
        }}
      </ProductConsumer>
    </section>
  );
};

export default Cart;
