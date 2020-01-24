import React from 'react';
import image from '../../../../img/socials-sprite.svg';

const FooterSocialIconItem = ({ data, id }) => {
  return (
    <a
      href={data}
      className={`footer__icon footer__icon-${id.substring(1)}`}
      target="_blank"
    >
      <svg className="footer__svg">
        <use className="footer__img" xlinkHref={`${image}${id}`} />
      </svg>
    </a>
  );
};

export default FooterSocialIconItem;
