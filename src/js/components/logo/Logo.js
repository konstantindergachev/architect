import React from 'react';

const Logo = ({ logo, subLogo }) => {
  return (
    <div className="logo">
      <span className="logo__main">{logo}</span>
      <span className="logo__descr">{subLogo}</span>
    </div>
  );
};

export default Logo;
