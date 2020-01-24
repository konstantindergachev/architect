import React from 'react';

const SectionTitle = ({ classname, title }) => {
  return <h2 className={`section__title title-${classname}`}>{title}</h2>;
};

export default SectionTitle;
