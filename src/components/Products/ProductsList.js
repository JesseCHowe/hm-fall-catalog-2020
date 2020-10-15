import React from "react";
import "./ProductList.scss";
import { Link } from "react-router-dom";

const ProductsList = (props) => {
  return (
    <div className="items">
      {props.products.map((product) => {
        return (
          <div className="item" key={product.id}>
            <div color={product.color} className="item-no">
              <span className="no">no.</span>
              {product.id}
            </div>
            <div className="item-content">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div color={product.color} className="product-name">{product.name}</div>
              <div color={product.color}>${product.amount / 100}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
