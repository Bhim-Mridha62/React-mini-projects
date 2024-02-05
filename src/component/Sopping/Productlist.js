import React from "react";
import "./Header.css"
function Productlist({ product, addTocart }) {
  return (
    <div className="flex">
      {product.map((productitem, productindex) => {
        return (
          <div style={{ width: '50%' }}>
            <div style={{ padding: '25px' }}>
              <img src={productitem.url} width="60%" />
              <p>{productitem.name} | {productitem.catagory}</p>
              <p></p>
              <p> Rs.{productitem.price}/- </p>
              <button onClick={() => addTocart(productitem)}>Add to cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Productlist;
