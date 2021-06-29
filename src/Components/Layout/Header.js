import React from "react";
import styles from "./Header.module.css";
import CartIcon from "../Cart/CartIcon";
import * as Icon from "react-bootstrap-icons";

import MealsImage from "../../assets/meals.jpg";

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>Fill-Ur-Belly</h1>
        <CartIcon onClick={props.showCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={MealsImage} alt="Table of yummy fooooddd" />
      </div>
    </>
  );
}

export default Header;
