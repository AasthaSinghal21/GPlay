import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../Assests/b1.jpg';
import img2 from '../Assests/b2.jpg';
import img3 from '../Assests/b3.jpg';
import './slider.css';

const Slider = () => {
  return (
    <div className='slider'>
      <Carousel fade data-bs-theme="dark" margin-top="0">
      <Carousel.Item>
        <img
          className="a-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    
  )
}

export default Slider
