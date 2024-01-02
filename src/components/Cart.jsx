import React from "react";
// import React, { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// ******** Best Practice ******
import { useCart } from "../context/CartContext";

function Cart() {
  const cart = useCart();

  const total = cart.items.reduce((a, b) => {
    console.log(a);
    console.log(b);
    return a + b.price;
  }, 0);
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart &&
        cart.items.map((item, index) => (
          <li key={index}>
            {item.name} - $ {item.price}
          </li>
          <button onClick={()=>cart.removeFromCart()}>Remove from cart</button>
        ))}
      <h2>Total Bill - $ {total}</h2>
    </div>
  );
}

export default Cart;
