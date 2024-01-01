import React from "react";
// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// ******** Best Practice ******

import { useCart } from "../context/CartContext";

function Item(props) {
  const cart = useCart();
  console.log("cart", cart);
  return (
    <div className="item-card">
      <h4>{props.name}</h4>
      <p>Price: {props.price}</p>
      <button
        onClick={() =>
          cart.setItems([
            ...cart.items,
            { name: props.name, price: props.price },
          ])
        }
      >
        Add to cart
      </button>
    </div>
  );
}

export default Item;
