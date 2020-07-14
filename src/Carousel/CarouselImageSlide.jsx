import React from 'react';
import Modal from "../Modal/Modal";
import { useStateWithLabel } from "../utils";

const CarouselImageSlide = (props) => {

  const [showModal, setShowModal] = useStateWithLabel(false, "showModal");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const { imageSource, imageLabel, isActive, carouselSize } = props;
  return (
    <div className={
      isActive
        ? "carouselImageSlide--active"
        : "carouselImageSlide"
    }>
      <Modal show={showModal} handleClose={closeModal} imageSource={imageSource} />
      <img className={`carousel_image_size_${carouselSize}`} src={imageSource} alt={imageLabel} onClick={openModal} />
      <label className="carouselImageSlide_label">{imageLabel}</label>
    </div>
  )
}

export default CarouselImageSlide;