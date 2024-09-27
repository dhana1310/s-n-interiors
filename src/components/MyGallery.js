import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React, { useState, useRef } from "react";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const MyGallery = (props) => {

  const imageGalleryRef = useRef(null);

  const onClickHandler = () => {
    imageGalleryRef.current.fullscreen();
  };

    return <ImageGallery items={props.selectedImageList} thumbnailPosition='left' showBullets='true' ref={imageGalleryRef}/>;
}

export default MyGallery;