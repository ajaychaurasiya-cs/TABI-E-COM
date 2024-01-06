import React from 'react';
import Home from './pages/home/Home';
import Products from './pages/products/Products'
import SingelProduct from './pages/SingleProduct/SingleProduct';
import PageNotFound from './components/PageNotFound/PageNotFound';


import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <Router>
        
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingelProduct />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} />
          
        </Routes>
        <Footer />
        
      </Router>
    </div>
  );
}

export default App;
