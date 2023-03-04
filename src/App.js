import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Products from "./Products";
import Contact from "./Contact";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/products" element={ <Products></Products> }></Route>
      <Route path="/contact" element={ <Contact></Contact> }></Route>
    </Routes>
  </BrowserRouter>
};

export default App;
