import React, { useState, useEffect } from 'react';
import '../Styles/verticalCarousel.css';

const VerticalCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      // Determine the scroll direction
      if (event.deltaY > 0) {
        // Scrolling down, go to the next item
        setCurrentIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
      } else {
        // Scrolling up, go to the previous item
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
      }
    };
    // Add a scroll event listener to the component
    document.addEventListener('wheel', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, [items]); // Empty dependency array to run the effect only once

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
