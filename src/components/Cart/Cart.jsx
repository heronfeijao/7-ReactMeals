import React, { useState } from "react";
import Modal from "../UI/Modal.jsx";
import classes from "./Cart.module.css";

const Cart = () => {
  const [showCart, setShowCart] = useState(true);

  const toggleModal = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <>
      {showCart && (
        <Modal>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
          </div>
          <div className={classes.actions}>
            <button onClick={toggleModal} className={classes["button--alt"]}>
              Close
            </button>
            <button className={classes.button}>Order</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Cart;
