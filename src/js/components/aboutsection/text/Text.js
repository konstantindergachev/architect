import React from 'react';

const Text = ({ classname, text }) => {
  return <p className={`descr descr-${classname}`}>{text}</p>;
};

export default Text;
