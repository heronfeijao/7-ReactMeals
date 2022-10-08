import React from "react";
import CartIcon from "../Cart/CartIcon.jsx";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3 (HC)</span>
    </button>
  );
};

export default HeaderCartButton;
