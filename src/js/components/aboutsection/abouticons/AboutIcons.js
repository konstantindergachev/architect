import React from 'react';

const AboutIcons = ({ image }) => {
  const img = require(`../../../../img/${image}.png`);
  return (
    <img
      className={`about__section-icon icon-${image}`}
      src={img.default}
      alt={image}
    />
  );
};

export default AboutIcons;
