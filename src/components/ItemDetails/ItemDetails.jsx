import React from 'react';

const inventoryItems = [
  { id: 1, name: 'Item 1', quantity: 10 },
  { id: 2, name: 'Item 2', quantity: 5 },
  { id: 3, name: 'Item 3', quantity: 8 },
];

function ItemDetails({ match }) {
  const itemId = parseInt(match.params.id);

  // Find the item with the matching ID
  const item = inventoryItems.find((item) => item.id === itemId);

  return (
    <div>
      <h2>Item Details</h2>
      {item ? (
        <div>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
        </div>
      ) : (
        <p>Item not found</p>
      )}
    </div>
  );
}

export default ItemDetails;