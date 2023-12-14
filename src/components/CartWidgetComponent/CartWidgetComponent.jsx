import React from "react";
import { ShoppingBag } from "react-feather";

const CartWidgetComponent = () => {
  const iconStyles = {
    fontSize: "1.3rem",
    paddingRight: "10px",
  };

  const itemCount = 11; 

  return (
    <div>
      <ShoppingBag style={iconStyles} />
      <span style={{ fontSize: "1.3rem" }}>{itemCount}</span>
    </div>
  );
};

export default CartWidgetComponent;
