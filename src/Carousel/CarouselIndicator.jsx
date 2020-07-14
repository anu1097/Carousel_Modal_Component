import React from 'react';

const CarouselIndicator = (props) => {
  const { onClick, isActive } = props;
  return (
    <li>
      <button
        className={
          isActive
            ? "carousel__indicator carousel__indicator--active"
            : "carousel__indicator"
        }
        onClick={onClick}
      />
    </li>
  );
}

export default CarouselIndicator;