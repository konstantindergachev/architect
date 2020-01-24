import React from 'react';

const Slide = ({ url, captions }) => {
  const alt = url.substring(13, 20);
  return (
    <div className="slider__section-item slide">
      <img className="slide__img" src={`${url}`} alt={alt} />
      <span className="slide__descr">{captions}</span>
    </div>
  );
};

export default Slide;
