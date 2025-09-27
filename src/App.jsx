import { useState } from "react";
import "./App.css";
const images = [
  "https://dwpstorage2025.blob.core.windows.net/images/macaw.jpg",
  "https://dwpstorage2025.blob.core.windows.net/images/frog2.jpg",
  "https://dwpstorage2025.blob.core.windows.net/images/orchard.jpg",
  "https://dwpstorage2025.blob.core.windows.net/images/fireworks1.jpg",
  "https://dwpstorage2025.blob.core.windows.net/images/snake.jpg",
  "https://dwpstorage2025.blob.core.windows.net/images/fish.jpg",
  "https://dwpstorage2025.blob.core.windows.net/images/lake.jpg",
];

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="app">
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Azure Image Gallery
          </h1>
          <p className="hero-subtitle">
            Stunning images loaded from Azure Blob Storage
          </p>
        </div>
      </div>
      <div className="gallery-section">
        <div className="carousel-container">
          <div className="carousel-wrapper">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-slide ${
                  index === currentImageIndex ? "active" : "inactive"
                }`}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="carousel-image"
                />
                <div className="image-overlay">
                  <div className="image-info">
                    <span className="image-counter">{index + 1} / {images.length}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button onClick={handlePrev} className="nav-button left">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button onClick={handleNext} className="nav-button right">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <div className="dots-container">
            {images.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentImageIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
