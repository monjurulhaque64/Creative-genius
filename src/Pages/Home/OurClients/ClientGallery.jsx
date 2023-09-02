import React from "react";
import './OurClient.css'

const ClientGallery = ({ images }) => {
  return (
    <div className="hexagon-gallery">
      {images.map((image, index) => (
        <div className="hexagon" key={index}>
          <div className="hexagon-inner">
            <img
              src={image.url}
              alt={`Image ${index + 1}`}
              className="hexagon-image flex justify-center align-center"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClientGallery;
