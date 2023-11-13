import React from 'react';
import { Link } from 'react-router-dom';

function InventoryItem({ item }) {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>Quantity: {item.quantity}</p>
      <p>Price: {item.price}</p>
      <Link to={`/edit-item/${item.id}`}>Edit</Link>
    </div>
  );
}

export default InventoryItem;
