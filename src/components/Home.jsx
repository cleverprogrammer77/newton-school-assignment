import React from "react";
import { CartState } from "../context/Context";
import SingleProduct from "./SingleProduct";
import "../styles/home.css";
import Filters from "./Filters";

const Home = () => {
  const {
    state: { products },
    productState: { sort, byRating, searchQuery, byCategory },
  } = CartState();

  // console.log(products);
  const transformProducts = () => {
    let sortedProducts = products;
    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.rating.rate >= byRating
      );
    }
    if (searchQuery) {
      sortedProducts = sortedProducts.filter((prod) =>
        prod.title.toLowerCase().includes(searchQuery)
      );
    }
    if (byCategory) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.category === byCategory
      );
    }
    return sortedProducts;
  };
  return (
    <div className="home">
      <Filters />
      <div className="productContainer">
        {transformProducts().map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
