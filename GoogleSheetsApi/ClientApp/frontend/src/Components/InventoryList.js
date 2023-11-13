import React, { useEffect, useState } from 'react';
import { getInventoryItems } from '../APIService'; // Adjust based on your actual API service

function InventoryList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getInventoryItems().then(setItems).catch(console.error);
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Inventory List</h1>
      <a href="https://docs.google.com/spreadsheets/d/1V2FkH3bQJx-175oa7Ju408tW8D2o-xOes99e4uOakGc/edit#gid=0" target="_blank" rel="noopener noreferrer">
        Open Google Sheet
      </a>
      <table className="table">
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.itemName}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
}

export default InventoryList;
