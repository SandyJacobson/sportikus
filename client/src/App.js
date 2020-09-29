import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import Products from "./screens/Products/Products";
import ProductDetails from "./screens/ProductDetails/ProductDetails";
import Admin from "./screens/Admin/Admin";
import EditProduct from "./screens/EditProduct/EditProduct";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route exact path="/products/:id">
          <ProductDetails />
        </Route>
        <Route exact path='/products/:id/edit'>
          <EditProduct />
        </Route>
        <Route exact path='/admin'>
          <Admin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
