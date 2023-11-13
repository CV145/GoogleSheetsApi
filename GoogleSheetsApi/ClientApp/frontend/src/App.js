import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import InventoryList from './Components/InventoryList';
import AddEditItem from './Components/AddEditItem';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<InventoryList/>} />
        <Route path="/add-item" element={<AddEditItem/>} />
        <Route path="/edit-item/:id" element={<AddEditItem/>} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;