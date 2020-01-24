import React from 'react';
import './Sandwich.scss';

const Sandwich = ({ menuIsOpen, closeMenuThroughSandwich, toMobile }) => {
  return (
    <div
      className={`sandwich__nav ${menuIsOpen &&
        toMobile &&
        'sandwich__active'}`}
      onClick={closeMenuThroughSandwich}
    >
      <div className="top" />
      <div className="middle" />
      <div className="bottom" />
    </div>
  );
};
export default Sandwich;
