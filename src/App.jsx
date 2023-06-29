import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InventoryList from './components/InventoryList/InventoryList';
import ItemDetails from './components/ItemDetails/ItemDetails';
import AddItemForm from './components/AddItemForm/AddItemForm';
import EditItemForm from './components/EditItem/EditItemForm';

function App() {
  return (
    <Router>
      <div>
        <h1>Inventory Management App</h1>
        <Routes>
          <Route exact path="/" component={InventoryList} />
          <Route path="/item/:id" component={ItemDetails} />
          <Route path="/add" component={AddItemForm} />
          <Route path="/edit/:id" component={EditItemForm} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;