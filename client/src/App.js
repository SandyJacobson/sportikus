import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { getProducts } from "./services/products";
import Home from "./screens/Home/Home";
import Products from "./screens/Products/Products";
import ProductDetails from "./screens/ProductDetails/ProductDetails";
import Admin from "./screens/Admin/Admin";
import EditProduct from "./screens/EditProduct/EditProduct";
import { AZ, ZA, lowestFirst, highestFirst } from "./utils/sort";
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
    // setAllProducts(newQueriedProducts)
    setQueriedProducts(newQueriedProducts);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  // const products = queriedProducts ? queriedProducts : allProducts;

  // const mappedProducts = products.map((product, idx) => {
  //   return (
  //     <div className="container-separator-products">
  //       <div className="container-products">
  //         <div className="single-product">
  //           <div key={idx}>
  //             <Link to={`/products/${product._id}`}>
  //               <img
  //                 src={product.imgURLOne}
  //                 alt={product.name}
  //                 className="image-products"
  //               />
  //             </Link>
  //           </div>
  //         </div>
  //       </div>
  //       <div className="name-price-products">
  //         <ul key={idx} className="ul-products">
  //           <h5 className="font-products">{product.name}</h5>
  //           <h5 className="font-products">${product.price}</h5>
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // });

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/products">
          <Products allProducts={allProducts}/>
        </Route>
        <Route exact path="/products/:id">
          <ProductDetails />
        </Route>
        <Route exact path="/products/:id/edit">
          <EditProduct />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
