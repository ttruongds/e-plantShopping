import React, { useEffect } from 'react';
import './AboutUs.css';
import { useDispatch } from 'react-redux';

function AboutUs() {
  return (
    <div className="about-us-container">
      {/* <h1 className="about-us-heading">About Us</h1> */}
      <p className="about-us-description">Welcome to ABC Plants</p>
      <p className="about-us-content">
        At ABC Plants, we are passionate about bringing nature closer to you. 
        Our mission is to provide a wide range of high-quality plants that 
        not only enhance the beauty of your surroundings but also 
        contribute to a healthier and more sustainable lifestyle. 
      </p>
      {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
      <p className="about-us-content">
        Join us in our mission to create a greener, healthier world. 
        Visit ABC plants shop today and experience the 
        beauty of nature right at your doorstep.
      </p>
    </div>
  );
}

export default AboutUs;
