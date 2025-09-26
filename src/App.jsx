import { useState } from "react";
import "./app.css";
const images = [
  "https://dwpstorage2025.blob.core.windows.net/images/macaw.jpg",
  "https://dwpstorage2025.blob.core.windows.net/images/moon.jpg",
  "https://dwpstorage2025.blob.core.windows.net/images/orchard.jpg",
  "https://dwpstorage2025.blob.core.windows.net/images/shell2.jpg",
  "https://dwpstorage2025.blob.core.windows.net/images/snake.jpg",
  "https://dwpstorage2025.blob.core.windows.net/images/stickinsecy.jpg",
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
    <>
      <div
        style={{
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          backgroundColor: "#f0f0f0",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Images Loaded from Azure Blob Storage Account
        </h1>
        <div className="carousel-container">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`carousel-image ${
                index === currentImageIndex ? "active" : "inactive"
              }`}
            />
          ))}
          <button onClick={handlePrev} className="nav-button left">
            &larr;
          </button>
          <button onClick={handleNext} className="nav-button right">
            &rarr;
          </button>
          <div className="dots-container">
            {images.map((_, index) => (
              <div
                key={index}
                className={`dot ${index === currentImageIndex ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
