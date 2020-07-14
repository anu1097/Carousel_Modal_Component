import React from 'react';

const CarouselArrow = (props) => {
  const { onClick, arrowDirectionClassName, arrowDirection } = props;
  return (
    <button
      className={`carousel__arrow ${arrowDirectionClassName}`}
      onClick={onClick}
    >
      <img src={`iconmonstr-arrow-${arrowDirection}.svg`} alt="left" />
    </button>
  );
}

export default CarouselArrow;