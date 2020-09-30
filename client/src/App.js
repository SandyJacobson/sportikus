import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { getProducts } from "./services/products";
import Home from "./screens/Home/Home";
import Products from "./screens/Products/Products";
import ProductDetails from "./screens/ProductDetails/ProductDetails";
import Admin from "./screens/Admin/Admin";
import EditProduct from "./screens/EditProduct/EditProduct";
import { AZ, ZA, lowestFirst, highestFirst } from "./utils/sort";
import Layout from "./components/shared/Layout/Layout";
import "./App.css";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState(false);
  const [sortType, setSortType] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
    };
    fetchProducts();
  }, [reset]);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "price-ascending":
        setAllProducts(lowestFirst(allProducts));
        break;
      case "price-descending":
        setAllProducts(highestFirst(allProducts));
        break;
      case "name-ascending":
        setAllProducts(AZ(allProducts));
        break;
      case "name-descending":
        setAllProducts(ZA(allProducts));
        break;
      default:
        break;
    }
  };

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setReset(!reset);
    }
    const newQueriedProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    console.log(event.target.value);
    setQueriedProducts(newQueriedProducts);
  };

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Layout onChange={handleSort} search={handleSearch}>
            <Home />
          </Layout>
        </Route>
        <Route exact path="/products">
          <Layout onChange={handleSort} search={handleSearch}>
            <Products allProducts={allProducts} queriedProducts={queriedProducts}/>
          </Layout>
        </Route>
        <Route exact path="/products/:id">
          <Layout onChange={handleSort} search={handleSearch}>
            <ProductDetails />
          </Layout>
        </Route>
        <Route exact path="/products/:id/edit">
          <Layout onChange={handleSort} search={handleSearch}>
            <EditProduct />
          </Layout>
        </Route>
        <Route exact path="/admin">
          <Layout onChange={handleSort} search={handleSearch}>
            <Admin />
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
