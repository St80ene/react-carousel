import React, { useEffect } from 'react';
import './style.css';
import { imageList } from '../images';

export default function Carousel() {
  const imageGallery = document.querySelector('.image-gallery');
  const imageLabel = document.querySelector('.image-label');

  useEffect(() => {
    const loadImage = () => {
      for (let url of imageList) {
        imageGallery.innerHTML += `<img src="${url}"/>`;
      }
    };

    if (imageGallery) {
      loadImage();
    }
  }, [imageGallery]);

  return (
    <div className='carousel'>
      <div className='image-label'></div>
      <div className='image-gallery'></div>
    </div>
  );
}
