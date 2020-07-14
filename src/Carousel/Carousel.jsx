import React from 'react';
import './Carousel.scss';
import CarouselArrow from './CarouselArrow';
import CarouselIndicator from './CarouselIndicator';
import CarouselImageSlide from './CarouselImageSlide';
import { useStateWithLabel } from "../utils";


// Carousel wrapper component
const Carousel = (props) => {

  let [activeIndex, setActiveIndex] = useStateWithLabel(0, "activeIndex");
  const { imageList, carouselSize } = props;

  const goToSlide = (index) => {
    setActiveIndex(index);
  }

  const changeSlide = (e, change) => {
    e.preventDefault();

    let index = activeIndex;
    index += change;
    index = (index + slides.length) % (slides.length);
    setActiveIndex(index);
  }

  const slides = [];

  imageList.forEach((image, index) => {
    slides.push(
      <CarouselImageSlide
        key={index}
        imageSource={image}
        isActive={index === activeIndex}
        carouselSize={carouselSize}
      />
    )
  })

  return (
    <div className={`carousel carousel_size_${carouselSize}`} >
      <CarouselArrow
        onClick={e => changeSlide(e, -1)}
        arrowDirectionClassName="carousel__arrow--left"
        arrowDirection="left"
      />
      <ul>
        {slides}
      </ul>

      <ul className="carousel__indicators">
        {slides.map((slide, index) =>
          <CarouselIndicator
            key={index}
            isActive={index === activeIndex}
            onClick={e => goToSlide(index)}
          />
        )}
      </ul>

      <CarouselArrow
        onClick={e => changeSlide(e, 1)}
        arrowDirectionClassName="carousel__arrow--right"
        arrowDirection="right"
      />
    </div >
  );

}

export default Carousel;