import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import styled from './ImageGallery.module.css'

export const ImageGallery = ({images}) => {
  if (!Array.isArray(images)) {
    return <div>No images to display.</div>;
  }
  return (
    <>
      <ul className={styled.imageGallery}>
        {images.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
      </ul>
    </>
  )
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};