import './App.css';
import React, {  } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Addproduct from './Component/Addproduct';
import EditProduct from './Component/EditProduct';

import Productlist from './Component/Productlist';

function App() {
  return (
    <>
    <div className="App">
 <Router>
 <Header/>
 <Routes>
  <Route exact path="/" element={<Home/>}/>
 <Route exact path="/addproduct" element={<Addproduct/>}/>
 <Route exact path="/productlist" element={<Productlist/>}/> 
 <Route path="editproduct/:id/edit" element={<EditProduct />} />



 </Routes>

 


 <Footer/>
  </Router> 
     </div>
     </>
  );
}

export default App;
