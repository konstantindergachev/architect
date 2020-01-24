import React from 'react';

const RightArrow = ({ nextSlide }) => (
  <div className="next__btn" onClick={nextSlide}>
    &rarr;
  </div>
);

export default RightArrow;
