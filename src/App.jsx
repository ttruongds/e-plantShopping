
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
    <div className="container py-5">
      <div className={`landing-page ${showProductList ? 'd-none' : ''}`}>
        <div className="position-relative text-center bg-light p-5 rounded shadow">
          <h1 className="display-4">Welcome To ABC Plants!</h1>
          <hr className="my-4" />
          <p className="lead">Where Green Meets Serenity</p>
          <button className="btn btn-success btn-lg" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
        <div className="row mt-4">
          <div className="col">
            <AboutUs />
          </div>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'd-block' : 'd-none'}`}>
        <ProductList />
      </div>
    </div>
  );
};

export default App;



