import React, { useState } from 'react';
import { addInventoryItem } from '../APIService'; 

function AddItem() {
  const [item, setItem] = useState({
    itemName: '',
    quantity: 0,
    price: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addedItem = await addInventoryItem(item);
      console.log('Added Item:', addedItem);
      // Optionally, handle any actions post item addition (like updating state or showing a message)
    } catch (error) {
      // Handle any errors here, such as updating the UI to show an error message
      console.error('Error adding item:', error);
    }
    // Reset form
    setItem({ itemName: '', quantity: 0, price: 0 });
  };

  return (
    <div className="container mt-4">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label htmlFor="itemName" className="form-label">Item Name:</label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            name="itemName"
            value={item.itemName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="quantity" className="form-label">Quantity:</label>
          <input
            type="number"
            className="form-control"
            id="quantity"
            name="quantity"
            value={item.quantity}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={item.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
