
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
      <div>
        <h1>Welcome To ABC plants!</h1>
        <div className="divider"></div>
        <p>Where Green Meets Serenity</p>
         
        <button className="get-started-button" onClick={handleGetStartedClick}>
          Get Started
        </button>
      </div>

      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
      </div>
    </div>
  );
}

export default App;



