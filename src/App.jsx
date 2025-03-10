
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
        <div class="row">
          <div class="col-md-6">
            <h1 className="text-center">Welcome To ABC plants!</h1>
            
            <p className="text-center">
              Where Green Meets Serenity
            </p>
            <div className="d-inline-flex gap-2 mb-5">
              <button className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" onClick={handleGetStartedClick}>
                Get Started
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div>
              <p className="text-center">
              At ABC Plants, we are passionate about bringing nature closer to you. 
              Our mission is to provide a wide range of high-quality plants that 
              not only enhance the beauty of your surroundings but also 
              contribute to a healthier and more sustainable lifestyle. 
              </p>
              <p className="text-center">
              Join us in our mission to create a greener, healthier world. 
              Visit ABC plants shop today and experience the 
              beauty of nature right at your doorstep.
            </p>
            </div>
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



