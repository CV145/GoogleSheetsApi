import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addInventoryItem } from '../APIService';

function AddEditItem() {
  const [item, setItem] = useState({ name: '', quantity: '', price: '' });
  const history = useNavigate(); // To redirect after form submission

  const handleInputChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addInventoryItem(item).then(() => history.push('/')); // Redirect after add
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields here */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddEditItem;
