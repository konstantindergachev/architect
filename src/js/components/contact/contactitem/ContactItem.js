import React from 'react';

const ContactItem = ({ contact, classname }) => {
  return (
    <a
      href={
        contact === 'dergachevkonstantin@gmail.com' ? (
          `mailto:${contact}`
        ) : contact === '+8 066 724 52 34' ? (
          `tel:${contact}`
        ) : contact === 'skype:KonstantinDergachev?chat' ? (
          `${contact}`
        ) : contact === 'Харьков, Украина' ? (
          `#`
        ) : null
      }
      className={`contact__item contact__item-${classname}`}
    >
      {contact !== 'skype:KonstantinDergachev?chat' ? contact : 'skype'}
    </a>
  );
};

export default ContactItem;
