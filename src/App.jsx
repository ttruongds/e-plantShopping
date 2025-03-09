
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
    <div className="container">
      <div class="hero-unit">
        <h1>Welcome To ABC plants!</h1>
        <p>Where Green Meets Serenity</p>
        <p>
          <button className="btn btn-primary btn-large" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </p>
      </div>

      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
      </div>
    </div>
  );
}

export default App;



