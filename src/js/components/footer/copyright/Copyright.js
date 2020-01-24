import React from 'react';

const Copyright = ({ propsLocation, data }) => {
  const copyrightStyle = () => {
    switch (propsLocation) {
      case '/':
      case '/style':
      case '/humor':
      case '/architect':
      case '/contact':
        return { color: '#c6c6c6' };
      default:
        break;
    }
  };
  return (
    <h4 className={`footer__copyright`} style={copyrightStyle()}>
      {data} &copy; {new Date().toISOString().split('-')[0]}
    </h4>
  );
};

export default Copyright;
