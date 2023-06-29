import React, { useState } from 'react';

function AddItemForm() {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission and add a new item to the inventory
    console.log('Form submitted:', itemName, itemQuantity);
    // Clear form fields
    setItemName('');
    setItemQuantity('');
  };

  return (
    <div>
      <h2>Add Item</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="itemQuantity">Quantity:</label>
          <input
            type="number"
            id="itemQuantity"
            value={itemQuantity}
            onChange={(e) => setItemQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItemForm;