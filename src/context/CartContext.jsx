import React from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [qtyItems, setQtyItems] = React.useState(0);

  return (
    <CartContext.Provider value={{ qtyItems, setQtyItems }}>
      {children}
    </CartContext.Provider>
  );
};
