
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import './assets/bootstrap/css/bootstrap-responsive.min.css';
import './assets/bootstrap/css/bootstrap.min.css';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="container my-5">
      <div class="jumbotron">
        <div className="background-image"></div>
        
        <h1 className="landing_content">Welcome To ABC plants!</h1>
        
        <p className="col-lg-8 mx-auto fs-5 text-muted">
          Where Green Meets Serenity
        </p>
        
        <div className="d-inline-flex gap-2 mb-5">
          <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      </div>

      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
      </div>
    </div>
  );
}

export default App;



