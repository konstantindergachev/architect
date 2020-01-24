import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import Copyright from './copyright/Copyright';
import FooterSocialIconItem from './footersocialicon/FooterSocialIconItem';

const Footer = ({ propsLocation }) => {
  const { data: { footerSection: { copyright, social } } } = useContext(
    AppContext
  );

  const footerStyle = () => {
    switch (propsLocation) {
      case '/style':
      case '/humor':
        return { backgroundColor: 'rgba(0, 0, 0, 0.7)' };
      case '/architect':
        return { backgroundColor: 'rgba(0, 0, 0, 0.98)' };
      case '/contact':
        return { backgroundColor: '#0c0c0c' };
      default:
        break;
    }
  };
  const renderSocials = (social) => {
    return Object.entries(social).map(
      ([ key, value ]) =>
        key !== '#facebook' ? (
          <FooterSocialIconItem key={key} id={key} data={value} />
        ) : key !== '#github' ? (
          <FooterSocialIconItem key={key} id={key} data={value} />
        ) : (
          ''
        )
    );
  };
  return (
    <footer className="footer" style={footerStyle()}>
      {<Copyright data={copyright} propsLocation={propsLocation} />}
      {renderSocials(social)}
    </footer>
  );
};

export default Footer;
