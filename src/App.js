import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart/Cart";
import Default from "./components/Default";
import Detail from "./components/Detail";
import PopUp from "./components/PopUp";
import Checkouted from "./components/Checkouted";
import Contac from "./components/contact/Contac";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/detail" component={Detail} />
          <Route path="/contact" component={Contac} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkouted" component={Checkouted} />
          <Route component={Default} />
        </Switch>
        <PopUp />
      </>
    );
  }
}

export default App;
