import { Button, Form } from "react-bootstrap";
// import { CartState } from "../context/Context";
import "../styles/filters.css";
import Rating from "./Rating";
import { useState } from "react";
import { CartState } from "../context/Context";
import { products } from "../data/products";

const Filters = () => {
  const {
    productDispatch,
    productState: { sort, byRating, searchQuery, byCategory },
  } = CartState();

  return (
    <div className="filters">
      <span className="title">Filter Products</span>
      <span>
        <Form.Check
          inline
          label="Low to High"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh",
            })
          }
          checked={sort === "lowToHigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="High to Low"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "highToLow",
            })
          }
          checked={sort === "highToLow" ? true : false}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="Jewelery"
          name="group2"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_CATEGORY",
              payload: "jewelery",
            })
          }
          checked={byCategory === "jewelery" ? true : false}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="men's clothing"
          name="group2"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_CATEGORY",
              payload: "men's clothing",
            })
          }
          checked={byCategory === "men's clothing" ? true : false}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="women's clothing"
          name="group2"
          type="checkbox"
          id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_CATEGORY",
              payload: "women's clothing",
            })
          }
          checked={byCategory === "women's clothing" ? true : false}
        />
      </span>

      <span>
        <Form.Check
          inline
          label="electronics"
          name="group2"
          type="checkbox"
          // id={`inline-4`}
          onChange={() =>
            productDispatch({
              type: "SORT_BY_CATEGORY",
              payload: "electronics",
            })
          }
          checked={byCategory === "electronics" ? true : false}
        />
      </span>

      <span>
        <label style={{ paddingRight: 10 }}>Rating: </label>
        <Rating
          rating={byRating}
          onClick={(i) =>
            productDispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
          style={{ cursor: "pointer" }}
        />
      </span>

      <Button
        variant="light"
        onClick={() =>
          productDispatch({
            type: "CLEAR_FILTERS",
          })
        }
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
