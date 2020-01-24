import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import ContactItem from './contactitem/ContactItem';
import ContactText from './contacttext/ContactText';
import ContactTitle from './contacttitle/ContactTitle';

const Contact = () => {
  const {
    data: { contactSection: { contactTitle, contactText, contacts } },
  } = useContext(AppContext);
  const renderContactData = (contacts) => {
    return contacts.map((item, idx) => (
      <ContactItem
        key={idx}
        contact={item}
        classname={`${item.substring(0, 3) === 'der'
          ? 'email'
          : item.substring(0, 10) === '+8 066 724'
            ? 'phone'
            : item.substring(0, 6) === 'skype:'
              ? 'skype'
              : item.substring(0, 7) === 'Украина' ? 'address' : null}`}
      />
    ));
  };
  return (
    <section className="contact__section">
      {<ContactTitle title={contactTitle} />}
      {<ContactText text={contactText} />}
      {renderContactData(contacts)}
    </section>
  );
};

export default Contact;
