import React, { useState, useEffect } from 'react';

function EditItemForm({ match }) {
  const itemId = match.params.id;
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  useEffect(() => {
    // Implement logic to fetch item details based on itemId
    // Example data for demonstration purposes
    const fetchItemDetails = async () => {
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const itemDetails = {
        name: 'Item 1',
        quantity: 10,
      };
      setItemName(itemDetails.name);
      setItemQuantity(itemDetails.quantity);
    };

    fetchItemDetails();
  }, [itemId]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission for editing
    console.log('Form submitted:', itemId, itemName, itemQuantity);
  };

  return (
    <div>
      <h2>Edit Item</h2>
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
        <button type="submit">Update Item</button>
      </form>
    </div>
  );
}

export default EditItemForm;