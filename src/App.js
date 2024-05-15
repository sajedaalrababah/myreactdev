import './App.css';
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import Home from './Component/Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Addproduct from './Component/Addproduct';
import EditProduct from './Component/EditProduct';
import Productlist from './Component/Productlist';
import Login from './Component/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false); // State to manage login status

  return (
    <>
      <div className="App">
        <Router>
          {!loggedIn && <Navigate to="/login" />} {/* Redirect to login if not logged in */}
          {loggedIn && <Header />} {/* Show header if logged in */}
          <Outlet /> {/* Render child routes */}
          <Routes>
            <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
            <Route path="/" element={<Home />} />
            <Route path="/addproduct" element={<Addproduct />} />
            <Route path="/productlist" element={<Productlist />} />
            <Route path="editproduct/:id/edit" element={<EditProduct />} />
          </Routes>
          {loggedIn && <Footer />} {/* Show footer if logged in */}

        </Router>
      </div>
    </>
  );
}

export default App;
