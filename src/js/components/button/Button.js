import React from 'react';

const Button = ({ searchlight, lightClick, item }) => {
  return (
    <button
      className={`button__main ${searchlight !== false ? 'searchlight' : null}`}
      onClick={lightClick}
    >
      {item}
    </button>
  );
};

export default Button;
