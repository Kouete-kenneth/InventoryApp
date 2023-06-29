import './InventoryList.scss';
import React, { useState, useEffect } from 'react';

function InventoryList() {
  const [inventoryData, setInventoryData] = useState([]);

  // Simulating data fetching with useEffect hook
  useEffect(() => {
    // Fetch inventory data from an API or database
    // Example data for demonstration purposes
    const fetchData = async () => {
      // Simulating API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const data = [
        { id: 1, name: 'Item 1', quantity: 10 },
        { id: 2, name: 'Item 2', quantity: 5 },
        { id: 3, name: 'Item 3', quantity: 8 },
      ];
      setInventoryData(data);
    };

    fetchData();
  }, []);

  return (
    <div className='inventory-list'>
      <h2>Inventory List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryList;