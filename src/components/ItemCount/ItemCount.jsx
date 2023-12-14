import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

const ItemCount = () => {
  const { qtyItems, setQtyItems } = useContext(CartContext);

  const [count, setCount] = useState(qtyItems);

  const handleAddProduct = () => {
    const newCount = count + 1;
    setCount(newCount);
    setQtyItems(newCount);
  };

  const handleRemoveProduct = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      setQtyItems(newCount);
    }
  };

  const handleInputChange = (e) => {
    const newCount = parseInt(e.target.value, 10);
    if (!isNaN(newCount) && newCount >= 0) {
      setCount(newCount);
      setQtyItems(newCount);
    }
  };

  return (
    <div>
      <Button onClick={handleAddProduct}>+</Button>
      <input
        type="number"
        value={count}
        onChange={handleInputChange}
        min="0"
      />
      <Button onClick={handleRemoveProduct}>-</Button>
    </div>
  );
};

export default ItemCount;
