import React from 'react';

const ArchitectIcon = ({ item }) => {
  const img = require(`../../../../img/${item}.png`);
  return (
    <img
      className={`architect__icons-item item-${item.substring(0, 3)}`}
      src={img.default}
      alt={item}
    />
  );
};

export default ArchitectIcon;
