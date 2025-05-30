import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './Gallery.css';

const images = [
  {
    original: 'https://wallpapers.com/images/hd/maldives-resort-1920-x-1080-wallpaper-7sr3qs3paz4uuk0k.jpg',
    thumbnail: 'https://wallpapers.com/images/hd/maldives-resort-1920-x-1080-wallpaper-7sr3qs3paz4uuk0k.jpg',
    description: 'Luxury Beach Resort'
  },
  {
    original: 'https://wallpapers.com/images/hd/maldives-beach-scene-1920-x-1080-wallpaper-dpb32exf0dutz2lz.jpg',
    thumbnail: 'https://wallpapers.com/images/hd/maldives-beach-scene-1920-x-1080-wallpaper-dpb32exf0dutz2lz.jpg',
    description: 'Scenic Beach View'
  },
  {
    original: 'https://wallpapers.com/images/hd/maldives-overwater-bungalows-1920-x-1080-wallpaper-9ybgeavgqe5tb7ua.jpg',
    thumbnail: 'https://wallpapers.com/images/hd/maldives-overwater-bungalows-1920-x-1080-wallpaper-9ybgeavgqe5tb7ua.jpg',
    description: 'Overwater Bungalows'
  },
  {
    original: 'https://wallpapers.com/images/hd/maldives-beach-scene-1920-x-1080-wallpaper-dpb32exf0dutz2lz.jpg',
    thumbnail: 'https://wallpapers.com/images/hd/maldives-beach-scene-1920-x-1080-wallpaper-dpb32exf0dutz2lz.jpg',
    description: 'Paradise Beach'
  },
  {
    original: 'https://wallpapers.com/images/hd/maldives-resort-1920-x-1080-wallpaper-7sr3qs3paz4uuk0k.jpg',
    thumbnail: 'https://wallpapers.com/images/hd/maldives-resort-1920-x-1080-wallpaper-7sr3qs3paz4uuk0k.jpg',
    description: 'Sunset View'
  }
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our Resort Gallery</h1>
      <div className="gallery-wrapper">
        <ImageGallery 
          items={images}
          showPlayButton={true}
          showFullscreenButton={true}
          showNav={true}
          showBullets={true}
          autoPlay={true}
          slideInterval={3000}
          slideDuration={450}
          showThumbnails={true}
          renderCustomControls={() => (
            <div className="custom-controls">
              <h3>{images[0].description}</h3>
            </div>
          )}
        />
      </div>
      <div className="gallery-info">
        <p>Experience the beauty of our luxury resort through this carefully curated gallery of images. 
           Each photo captures the essence of paradise that awaits you.</p>
      </div>
    </div>
  );
};

export default Gallery;