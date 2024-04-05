import React, { useState, useEffect } from 'react';
import '../Styles/verticalCarousel.css';

const VerticalCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [items]);

  return (
    <div className="vertical-carousel">
      <div className="carousel-content">
        {items.map((item, index) => (
          <div
            key={index}
            className={`bg-dark fw-normal text-white-50 ${index === currentIndex ? 'carousel-item active' : 'carousel-item'}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalCarousel;
