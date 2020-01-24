import React from 'react';

const LeftArrow = ({ prevSlide }) => (
  <div className="prev__btn" onClick={prevSlide}>
    &larr;
  </div>
);

export default LeftArrow;
