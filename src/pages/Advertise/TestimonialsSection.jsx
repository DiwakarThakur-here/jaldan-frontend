// TestimonialsSection.jsx
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './TestimonialsSection.css';
import directorImage from '/src/assets/images/director.png';
import marketingHeadImage from '/src/assets/images/marketing head.png';
import restaurantOwnerImage from '/src/assets/images/restaurant owner.jpeg';


const testimonials = [
  {
    text: "It’s a really powerful tool. When they go to market with big events, like the ones we experienced with Jaldaan, it was a great experience!",
    author: "saksham Sharma",
    role: "Managing Director, Finanzing",
    image: directorImage // Use the imported image here
  },
  {
    text: "Amazing platform to promote our brand, reaching a wide genuine audience with minimal cost. Jaldaan has truly exceeded our expectations!",
    author: "Minakshi Kumari",
    role: "Marketing Head, EcoBrand",
    image: marketingHeadImage // Use the imported image here
  },
  {
    text: "The quality and effectiveness of this platform have driven great results in our Customer increment. Highly recommended!",
    author: "Harshit Pathak",
    role: "General Manager, Greenfood",
    image: restaurantOwnerImage // Use the imported image here
  }
];

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">Discover the success stories of our satisfied clients.</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-slide">
            <div className="testimonial-content">
              <div className="testimonial-text">
                <p>{testimonial.text}</p>
                <h4>{testimonial.author}</h4>
                <p className="testimonial-role">{testimonial.role}</p>
              </div>
              <div className="testimonial-image">
                <img src={testimonial.image} alt={`${testimonial.author} testimonial`} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSection;
