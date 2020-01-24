import React from 'react';
import image from '../../../../img/quote.svg';

const Quote = ({ alt }) => {
  return <img className="about__section-svg" src={image} alt={alt} />;
};

export default Quote;
