import React, { useCallback } from 'react';
import './style.css';
import { imageList } from '../images';

export default function Carousel() {
  const imageGallery = document.querySelector('.image-gallery');
  const imageLabel = document.querySelector('.image-label');

  const loadImage = useCallback(() => {
    for (let url of imageList) {
      imageGallery.innerHTML += `<img src="${url}"/>`;
    }
  }, [imageGallery]);

  loadImage();

  return (
    <div className='carousel'>
      <div className='image-label'></div>
      <div className='image-gallery'></div>
    </div>
  );
}
