
import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';
import './assets/bootstrap/css/bootstrap-responsive.min.cs';
import './assets/bootstrap/css/bootstrap.min.cs';
import AboutUs from './AboutUs';

function App() {
  
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div class="container">
         <div className="container">
         <h1>Welcome To ABC plants!</h1>
          <div className="divider"></div>
          <p>Where Green Meets Serenity</p>
         
          <button className="get-started-button" onClick={handleGetStartedClick}>
            Get Started
          </button>
         </div>
          <div className="container">
          <AboutUs/>
          </div>
          </div>

      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
      </div>
    </div>
  );
}

export default App;



