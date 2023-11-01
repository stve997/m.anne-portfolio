import React from 'react';
import image1 from '../assets/logos/kerry.jpg';
import image2 from '../assets/logos/mary-anne-2.jpg';
import image3 from '../assets/Posters/WCC POSTER1.jpg';

const images = [image1, image2, image3]; // List of imported images

const PhotoGallery = () => {
  return (
    <div className="photo-gallery">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} className="photo" />
      ))}
    </div>
  );
};

export default PhotoGallery;
